const body = document.getElementsByTagName('body')[0]
body.style.fontFamily = "'Montserrat', 'sans-serif'"
body.style.color = '#6211c0'

document.getElementsByClassName('nav-links__item-body')[3].innerText =
  'Todos os Cursos ↓'

const contato = document.getElementsByClassName('topbar__item')[1]
document.getElementsByClassName('topbar__row')[0].removeChild(contato)

const cadastro = document.getElementsByClassName('topbar__item')[1]
document.getElementsByClassName('topbar__row')[0].removeChild(cadastro)

const topbarPortal = document.getElementsByClassName('topbar-link')[0]
topbarPortal.innerText = 'Portal do Aluno'
topbarPortal.href = 'https://www.cursoo.com.br/login'

const topbar = document.getElementsByClassName('topbar')[0]
topbar.style.backgroundColor = '#ffffff'
topbar.style.color = '#6211c0'
topbar.style.heigth = '25px'
topbar.style.fontSize = '16px'

const mercadopago = document.getElementsByTagName('img')[6]
mercadopago.src = 'https://matheusstorrer.github.io/Rocket-Academy/12xML.jpg'

const footer = document.getElementsByClassName('site-footer')[0]
footer.style.borderTop = '0px'

const divider = document.getElementsByClassName('block-header__divider')[0]
divider.style.backgroundColor = '#6211c0'

const icons = document.getElementsByClassName('block-features__item')[0]
icons.style.backgroundColor = '#ffffff'

const icons2 = document.getElementsByClassName('block-features__item')[1]
icons2.style.backgroundColor = '#ffffff'

const icons3 = document.getElementsByClassName('block-features__item')[2]
icons3.style.backgroundColor = '#ffffff'

const icons4 = document.getElementsByClassName('block-features__item')[3]
icons4.style.backgroundColor = '#ffffff'
