document.getElementsByClassName('nav-links__item-body')[3].innerText =
  'Todos os Cursos ↓'

// const contato = document.getElementsByClassName('topbar__item')[1]
// document.getElementsByClassName('topbar__row')[0].removeChild(contato)

const cadastro = document.getElementsByClassName('topbar__item')[3]
document.getElementsByClassName('topbar__row')[0].removeChild(cadastro)

const vertodos = document.getElementsByClassName('menu__item-link')[7]
vertodos.innerText = 'Ver Todos'

// const topbarPortal = document.getElementsByClassName('topbar-link')[0]
// topbarPortal.innerText = 'Portal do Aluno'
// topbarPortal.href = 'https://www.cursoo.com.br/login/1377'

const endereco = document.getElementsByClassName('footer-contacts__contacts')[0].firstElementChild
endereco.remove()

const telefone = document.getElementsByClassName('site-footer__widgets')[0].children[0].children[0]
telefone.remove()

// const removemapasite = document.getElementsByClassName('site-footer__widgets')[0].children[0].children[1]
// removemapasite.remove()

const mercadopago = document.getElementsByClassName('mp')[0]
mercadopago.src = 'https://matheusstorrer.github.io/Rocket-Academy/12xML.jpg'

const footer = document.getElementsByClassName('site-footer')[0]
footer.style.borderTop = '0px'

const spacefooter = document.getElementsByClassName('site-footer__widgets')[0].children[0]
spacefooter.style.justifyContent = 'space-between'

const divider = document.getElementsByClassName('block-header__divider')[0]
divider.style.backgroundColor = '#6211c0'

const divider2 = document.getElementsByClassName('block-header__divider')[1]
divider2.style.backgroundColor = '#6211c0'

const icons = document.getElementsByClassName('block-features__item')[0]
icons.style.backgroundColor = '#ffffff'

const icons2 = document.getElementsByClassName('block-features__item')[1]
icons2.style.backgroundColor = '#ffffff'

const icons3 = document.getElementsByClassName('block-features__item')[2]
icons3.style.backgroundColor = '#ffffff'

const icons4 = document.getElementsByClassName('block-features__item')[3]
icons4.style.backgroundColor = '#ffffff'
