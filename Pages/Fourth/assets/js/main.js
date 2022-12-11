$(document).ready(() => {
  let options = {
    strings: ['Hi 👋', "I'm a Web Developer.", "I'm a Student.", 'A Potato 🥔'],
    typeSpeed: 40,
  }

  new Typed('.auto-type', options)

  $('.timeline').timeline()

  $('.icon-link').hover(function () {
    animateCSS($(this), 'tada')
  })
})

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`

    $(element).addClass(`${prefix}animated ${animationName}`)

    $(element).one('animationend', function () {
      $(element).removeClass(`${prefix}animated ${animationName}`)
      resolve('Animation ended')
    })
  })
