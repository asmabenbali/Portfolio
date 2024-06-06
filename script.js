/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const textArray1 = ["B", "E", "N", "-", "B", "A", "L", "I"];
    const textArray2 = ["A", "S", "S", "M", "A"];
    

    function typeText1() {
        let index = 0;
        text1.innerHTML = ''; // Clear existing text
        function type() {
            if (index < textArray1.length) {
                text1.innerHTML += textArray1[index];
                index++;
                setTimeout(type, 150); // Adjust typing speed here (in milliseconds)
            }
        }
        type();
    }

    function typeText2() {
        let index = 0;
        text2.innerHTML = ''; // Clear existing text
        function type() {
            if (index < textArray2.length) {
                text2.innerHTML += textArray2[index];
                index++;
                setTimeout(type, 150); // Adjust typing speed here (in milliseconds)
            }
        }
        type();
    }

    function startAnimation() {
        typeText1(); // Start typing animation for text1
        setTimeout(typeText2, 1000); // Delay before starting typing animation for text2
        setTimeout(startAnimation, 4000); // Repeat the animation after 4 seconds (adjust as needed)
    }

    startAnimation(); // Start the animation initially
});

showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 