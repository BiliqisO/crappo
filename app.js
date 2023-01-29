const coin = document.querySelectorAll('.coin')
const mining = document.querySelectorAll('.mining')
const show = document.querySelectorAll('.show')
const coins = document.querySelector('.coins')

for (let i = 0; i < coin.length; i++) {
  function dark() {
    coin[i].classList.add('dark-theme')
    show[i].style.display = 'none'
    mining[i].style.display = 'block'
  }

  function darkon() {
    coin[i].classList.remove('dark-theme')
    show[i].style.display = 'block'
    mining[i].style.display = 'none'
  }

  coin[i].addEventListener('mouseenter', dark)
  coin[i].addEventListener('mouseleave', darkon)
}
