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

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
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

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text,.skills__img',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input,.skills__img',{interval: 200}); 

const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show or hide the button based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.classList.add('show'); // Show the button
        } else {
            scrollToTopBtn.classList.remove('show'); // Hide the button
        }
    };

    // Scroll smoothly to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Add a slight artificial delay to enhance the loading experience
    setTimeout(() => {
        preloader.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            preloader.style.display = 'none'; // Remove preloader from DOM
        }, 500); // Ensure this matches the CSS transition duration
    }, 1500); // Delay of 1.5 seconds before starting the fade-out
});

const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Toggle icons
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
});

// Set initial theme based on user preference or default to light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
} else {
    document.body.classList.add('light-mode');
}

const musicToggle = document.getElementById('music-toggle');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

// Create an audio element
const audio = new Audio('music.mp3'); // Replace with the path to your audio file

// Function to play audio
const playAudio = () => {
    audio.play().then(() => {
        playIcon.style.display = 'none'; // Hide play icon since audio is playing
        pauseIcon.style.display = 'block'; // Show pause icon
    }).catch(error => {
        console.log("Audio playback failed or is blocked: ", error);
    });
};

// Auto-play audio on page load
window.addEventListener('load', () => {
    playAudio(); // Attempt to play audio
});

// Toggle play/pause on button click
musicToggle.addEventListener('click', () => {
    if (audio.paused) {
        playAudio(); // Play audio if paused
    } else {
        audio.pause(); // Pause audio
        playIcon.style.display = 'block'; // Show play icon
        pauseIcon.style.display = 'none'; // Hide pause icon
    }
});

// Optional: Mute/unmute functionality on right-click
let isMuted = false;
musicToggle.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent the default context menu
    isMuted = !isMuted; // Toggle mute state
    audio.muted = isMuted; // Mute or unmute the audio
});
