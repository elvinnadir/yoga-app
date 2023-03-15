const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('toggle-btn'),
    navClose = document.getElementById('close-btn')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Mobile Menu Remover//
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ---ADD BLUR TO HEADE--//
const blurHeader = () => {
    let header = document.getElementById('header')
    // 11 When the scroll is greater than se viewport height,
    //  add the scroll - header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur_header') : header.classList.remove('blur_header')
}
window.addEventListener('scroll', blurHeader)


// SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll_up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll')
        : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)

// SCROLL ACTIVE SECTION
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active_link')
        } else {
            sectionsClass.classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ----DARK/LIGHT THEME---//
const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ----SCROLL REVEAL---//
const scroll = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
scroll.reveal('.home_data, .list_container, .join_content, .footer_container')
scroll.reveal('.home_image', { origin: 'bottom' })
scroll.reveal('.health_img, .routine_image, .follow_img-3', { origin: 'left' })
scroll.reveal('.health_data, .routine_data, .follow_img-4', { origin: 'right' })
scroll.reveal('.follow_data, .follow_content-1 img', { interval: 100 })

