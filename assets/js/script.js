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

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

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

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

const confirmedMessageEl = document.getElementById('confirmed-message');
const containerEl = document.getElementById('myForm');
function formSuccess(){
    confirmedMessageEl.classList.add('active');
    containerEl.classList.add('active');
}

function validateForm() {
    const nome = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (nome === '') {
        alert('all fields need to be filled in!');
    }

    if (message === '') {
        alert('oops you forgot your message!')
    }
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const invalidEmailEl = document.getElementById('invalid-email');
const emailInput = document.getElementById('email');
const submit_btn = document.getElementById('submit');
const dismiss = document.getElementById('dismiss-message');
submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if(validateEmail(email)){
        invalidEmailEl.classList.remove('active')
        emailInput.classList.remove('active')
        formSuccess()
    }else{
        invalidEmailEl.classList.add('active')
        emailInput.classList.add('active')
    }
    validateForm()
});

dismiss.addEventListener('click', () => {
    confirmedMessageEl.classList.remove('active');
    containerEl.classList.remove('active');
})
