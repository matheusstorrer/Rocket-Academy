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

const endereco = document.getElementsByTagName('li')[12]
endereco.innerHTML = '<i class="footer-contacts__icon fas fa-globe-americas"></i> Rua Guilherme Farel, 650 - Londrina / PR'

const topbar = document.getElementsByClassName('topbar')[0]
topbar.style.backgroundColor = '#ffffff'
topbar.style.color = '#6211c0'
topbar.style.heigth = '25px'
topbar.style.fontSize = '16px'

const spacefooter = document.getElementsByClassName('row')[1]
spacefooter.style.justifyContent = 'space-between'

const removemapasite = document.getElementsByClassName('row')[1]
removemapasite.removeChild(removemapasite.children[1])

const mercadopago = document.getElementsByClassName('mp')[0]
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
