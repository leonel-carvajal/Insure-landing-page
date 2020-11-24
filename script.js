const navbar = document.getElementById('navbar')
const ham = document.getElementById('ham')
ham.addEventListener('click', e => {
  if (navbar.classList.contains('navbar') && !navbar.classList.contains('active')) {
    navbar.classList.add('active')
    ham.src = '/images/icon-close.svg'
  } else {
    navbar.classList.remove('active')
    ham.src = '/images/icon-hamburger.svg'
  }
})
