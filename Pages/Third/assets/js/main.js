$(document).ready(() => {
  let options = {
    strings: ["Hi 👋", "I'm a Web Developer.", "I'm a Student.", 'A Potato 🥔'],
    typeSpeed: 40,
  }

  new Typed('.auto-type', options)

  document.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      $('.navbar').addClass('scrolled')
    } else {
      $('.navbar').removeClass('scrolled')
    }
  })
})
