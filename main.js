document.getElementsByClassName('nav-links__item-body')[3].innerText =
  'Todas as Categorias  ↓'

const cadastro = document.getElementsByClassName('topbar__item')[3]
document.getElementsByClassName('topbar__row')[0].removeChild(cadastro)

const topbarPortal = document.getElementsByClassName('topbar-link')[0]
topbarPortal.innerHTML = '<b>Portal do Aluno</b>'
topbarPortal.href = 'https://www.cursoo.com.br/login/1377'
topbarPortal.setAttribute('target', '_blank')
topbarPortal.setAttribute('style', 'margin-right: 16px')

const menumobile = document.getElementsByClassName('mobile-links__item')[0]
menumobile.remove()

document.getElementsByClassName('category-card__image')[0].innerHTML =
  '<a href="categoria/especialista-em-excel" class="destaques_icon keychainify-checked"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/2c0cf23781d9feafbf37fabc6f803cd58fd0c85c/icons/excel-app.svg" alt=""></a>'

const removemapasite = document.getElementsByClassName('footer-links')[0]
removemapasite.remove()

const mercadopago = document.getElementsByClassName('mp')[0]
mercadopago.src =
  'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/main/banners/12xML_Banner.png'

const footer = document.getElementsByClassName('site-footer')[0]
footer.style.borderTop = '0px'

const spacefooter = document.getElementsByClassName('site-footer__widgets')[0]
  .children[0]
spacefooter.style.justifyContent = 'space-between'

document.getElementsByClassName('social-links__list')[0].innerHTML =
  '<li class="social-links__item"><a class="social-links__link social-links__link--type--facebook keychainify-checked" href="https://www.facebook.com/Rocket-Academy-114394604615093" target="_blank"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/de0bbbeed6e9fbd4d07301f27e20b56961a9ab42/icons/facebook.svg" class="midia_icons"></a></li><li class="social-links__item"><a class="social-links__link social-links__link--type--instagram keychainify-checked" href="https://www.instagram.com/rocketacademy.school/" target="_blank"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/600c2088d174726f10b7f4344d69848f1e5e718c/icons/instagram_t.svg" class="midia_icons"></a></li><li class="social-links__item"><a class="social-links__link social-links__link--type--twitter keychainify-checked" href="https://twitter.com/RocketAcademyS" target="_blank"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/de0bbbeed6e9fbd4d07301f27e20b56961a9ab42/icons/twitter.svg" class="midia_icons"></a></li><li class="social-links__item"><a class="social-links__link social-links__link--type--youtube keychainify-checked" href="https://www.youtube.com/channel/UCgwSCfXB5b5t5c4A5zgCXCw" target="_blank"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/de0bbbeed6e9fbd4d07301f27e20b56961a9ab42/icons/youtube.svg" class="midia_icons"></i></a></li>'

if (window.location.href === 'https://rocketacademyschool.com.br') {
  const divider = document.getElementsByClassName('block-header__divider')[0]
  divider.style.background = '#6211c0'

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
}

// ITEM 2
const cursos2 = document.createElement('li')
cursos2.setAttribute('class', 'mobile-links__item')

const div2 = document.createElement('div')
div2.setAttribute('class', 'mobile-links__item-title')

const link2 = document.createElement('A')
link2.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/Youtuber'
)
link2.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link2.innerText = 'Youtuber'

cursos2.appendChild(div2)
div2.appendChild(link2)

document.getElementsByClassName('mobile-links')[1]
const child2 = document.getElementsByClassName('mobile-links')[1]
child2.insertBefore(cursos2, child2.firstChild)

//ITEM 3
const cursos3 = document.createElement('li')
cursos3.setAttribute('class', 'mobile-links__item')

const div3 = document.createElement('div')
div3.setAttribute('class', 'mobile-links__item-title')

const link3 = document.createElement('A')
link3.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/programacao-web'
)
link3.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link3.innerText = 'Programação WEB'

cursos3.appendChild(div3)
div3.appendChild(link3)

document.getElementsByClassName('mobile-links')[1]
const child3 = document.getElementsByClassName('mobile-links')[1]
child3.insertBefore(cursos3, child3.firstChild)

// ITEM 4
const cursos4 = document.createElement('li')
cursos4.setAttribute('class', 'mobile-links__item')

const div4 = document.createElement('div')
div4.setAttribute('class', 'mobile-links__item-title')

const link4 = document.createElement('A')
link4.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/marketing-e-vendas'
)
link4.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link4.innerText = 'Marketing e Vendas'

cursos4.appendChild(div4)
div4.appendChild(link4)

document.getElementsByClassName('mobile-links')[1]
const child4 = document.getElementsByClassName('mobile-links')[1]
child4.insertBefore(cursos4, child4.firstChild)

// ITEM 5

const cursos5 = document.createElement('li')
cursos5.setAttribute('class', 'mobile-links__item')

const div5 = document.createElement('div')
div5.setAttribute('class', 'mobile-links__item-title')

const link5 = document.createElement('A')
link5.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/informatica-para-concursos'
)
link5.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link5.innerText = 'Informática para Concursos'

cursos5.appendChild(div5)
div5.appendChild(link5)

document.getElementsByClassName('mobile-links')[1]
const child5 = document.getElementsByClassName('mobile-links')[1]
child5.insertBefore(cursos5, child5.firstChild)

// ITEM 6

const cursos6 = document.createElement('li')
cursos6.setAttribute('class', 'mobile-links__item')

const div6 = document.createElement('div')
div6.setAttribute('class', 'mobile-links__item-title')

const link6 = document.createElement('A')
link6.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/fotografia'
)
link6.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link6.innerText = 'Fotografia'

cursos6.appendChild(div6)
div6.appendChild(link6)

document.getElementsByClassName('mobile-links')[1]
const child6 = document.getElementsByClassName('mobile-links')[1]
child6.insertBefore(cursos6, child6.firstChild)

// ITEM 7

const cursos7 = document.createElement('li')
cursos7.setAttribute('class', 'mobile-links__item')

const div7 = document.createElement('div')
div7.setAttribute('class', 'mobile-links__item-title')

const link7 = document.createElement('A')
link7.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/especialista-em-excel'
)
link7.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link7.innerText = 'Especialista em Excel'

cursos7.appendChild(div7)
div7.appendChild(link7)

document.getElementsByClassName('mobile-links')[1]
const child7 = document.getElementsByClassName('mobile-links')[1]
child7.insertBefore(cursos7, child7.firstChild)

// ITEM 8

const cursos8 = document.createElement('li')
cursos8.setAttribute('class', 'mobile-links__item')

const div8 = document.createElement('div')
div8.setAttribute('class', 'mobile-links__item-title')

const link8 = document.createElement('A')
link8.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura'
)
link8.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link8.innerText = 'Engenharia e Arquitetura'

cursos8.appendChild(div8)
div8.appendChild(link8)

document.getElementsByClassName('mobile-links')[1]
const child8 = document.getElementsByClassName('mobile-links')[1]
child8.insertBefore(cursos8, child8.firstChild)

// ITEM 9

const cursos9 = document.createElement('li')
cursos9.setAttribute('class', 'mobile-links__item')

const div9 = document.createElement('div')
div9.setAttribute('class', 'mobile-links__item-title')

const link9 = document.createElement('A')
link9.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/designer-grafico'
)
link9.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link9.innerText = 'Designer Gráfico'

cursos9.appendChild(div9)
div9.appendChild(link9)

document.getElementsByClassName('mobile-links')[1]
const child9 = document.getElementsByClassName('mobile-links')[1]
child9.insertBefore(cursos9, child9.firstChild)

// ITEM 10

const cursos10 = document.createElement('li')
cursos10.setAttribute('class', 'mobile-links__item')

const div10 = document.createElement('div')
div10.setAttribute('class', 'mobile-links__item-title')

const link10 = document.createElement('A')
link10.setAttribute(
  'href',
  'https://rocketacademyschool.com.br/categoria/desenvolvimento-profissional'
)
link10.setAttribute('class', 'mobile-links__item-link keychainify-checked')
link10.innerText = 'Desenvolvimento Profissional'

cursos10.appendChild(div10)
div10.appendChild(link10)

document.getElementsByClassName('mobile-links')[1]
const child10 = document.getElementsByClassName('mobile-links')[1]
child10.insertBefore(cursos10, child10.firstChild)

// ------------------------------------------------------------------------------//

const icon = document.createElement('img')
icon.setAttribute(
  'src',
  'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/main/icons/Rocket_LOGO_Mobile.png'
)
const mobilelogo = document.getElementsByClassName('mobile-header__logo')[0]
mobilelogo.insertBefore(icon, mobilelogo.firstChild)

const wpp = document.getElementsByClassName('site-footer')[0]
wpp.innerHTML =
  '<a href="https://wa.me/5543988034180?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+da+Rocket+Academy%21+%F0%9F%9A%80" class="whatsapp-btn" target="_blank"><i class="fa fa-whatsapp"></i></a></div>' +
  wpp.innerHTML

document.getElementsByClassName('footer-contacts')[0].outerHTML =
  '<div class="site-footer__widget footer-contacts"><h5 class="footer-contacts__title">Fale Conosco</h5><div class="footer-contacts__contacts"><div class="address"><h6 class=".footer-subtitle"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/2cc909d6fc672ddcc5167001afa1e7e712d86bdd/icons/location_1.svg" class="contact_icons">Endereço</h6><p class="endereco">Rua Manoel Guimarães Teixeira, 706</p><p>Ortigueira - Paraná</p></div><div class="email"><h6 class=".footer-subtitle"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/mail.svg" class="contact_icons">Email</h6><p>contato@rocketacademyschool.com.br</p></div><div class="phone"><h6 class=".footer-subtitle"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/whatsapp.svg" class="contact_icons">Whatsapp</h6><p>(43) 98803-4180</p></div></div></div>'

document.getElementsByClassName('menu--layout--classic')[0].innerHTML =
  '<ul class="menu__list"><div class="menu__submenus-container"></div><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura">Engenharia e Arquitetura</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/informatica-para-concursos">Informática para Concursos</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/fotografia">Fotografia</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/programacao-web">Programação WEB</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/youtuber">Youtuber</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/desenvolvimento-profissional">Desenvolvimento Profissional</a></li></ul>'

if (window.innerWidth < 768) {
  document.getElementsByClassName('footer-contacts')[0].outerHTML =
    '<div class="site-footer__widget footer-contacts"><h5 class="footer-contacts__title">Fale Conosco</h5><div class="footer-contacts__contacts"><div class="address"><h6 class=".footer-subtitle"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/2cc909d6fc672ddcc5167001afa1e7e712d86bdd/icons/location_1.svg" class="contact_icons">Endereço</h6><p class="endereco">Rua Manoel Guimarães Teixeira, 706</p><p>Ortigueira - Paraná</p></div><div class="email"><h6 class=".footer-subtitle"><a href="mailto:contato@rocketacademyschool.com.br"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/mail.svg" class="contact_icons">Email</h6></a><p>contato@rocketacademyschool.com.br</p></div><div class="phone"><h6 class=".footer-subtitle"><a href="https://wa.me/5543988034180?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+da+Rocket+Academy%21+%F0%9F%9A%80"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/whatsapp.svg" class="contact_icons">Whatsapp</h6></a><p>(43) 98803-4180</p></div></div></div><hr>'

  document.getElementsByClassName('block-banner__image')[1].outerHTML =
    '<div class="block-banner__image block-banner__image--mobile" style="background-image: url(\'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/4ad32c142b68fcd1e6c16574cd44403c5448ac02/banners/Banner_MOBILE_YOUTUBER_Teste_Final.svg\')"></div>'

  document.getElementsByClassName(
    'block-slideshow__slide-image--mobile'
  )[0].outerHTML =
    '<div class="block-slideshow__slide-image block-slideshow__slide-image--mobile" style="background-image: url(\'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/53d0d1293958330834c1f1331ffb1d31e09c9d37/banners/Banner_MOBILE_CAD.svg\')"></div>'
  document.getElementsByClassName(
    'block-slideshow__slide-image--mobile'
  )[1].outerHTML =
    '<div class="block-slideshow__slide-image block-slideshow__slide-image--mobile" style="background-image: url(\'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/53d0d1293958330834c1f1331ffb1d31e09c9d37/banners/Banner_MOBILE_EXCEL.svg\')"></div>'
  document.getElementsByClassName(
    'block-slideshow__slide-image--mobile'
  )[2].outerHTML =
    '<div class="block-slideshow__slide-image block-slideshow__slide-image--mobile" style="background-image: url(\'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/53d0d1293958330834c1f1331ffb1d31e09c9d37/banners/Banner_MOBILE_CANVA.svg\')"></div>'
  document.getElementsByClassName(
    'block-slideshow__slide-image--mobile'
  )[3].outerHTML =
    '<div class="block-slideshow__slide-image block-slideshow__slide-image--mobile" style="background-image: url(\'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/0bb698eb8deb7d0c2cdd2f8116bdf861bcb1659a/banners/Banner%20ROCKET_MOBILE_INSTITUCIONAL_1.svg\')"></div>'

  // ------------------------------------------------------- //

  const portal = document.createElement('li')
  portal.setAttribute('class', 'mobile-links__item')

  const portaldiv = document.createElement('div')
  portaldiv.setAttribute('class', 'mobile-links__item-title')

  const linkportal = document.createElement('A')
  linkportal.setAttribute('href', 'https://www.cursoo.com.br/login/1377')
  linkportal.setAttribute('class', 'mobile-links__item-link')
  linkportal.setAttribute('style', 'font-weight: bold')
  linkportal.innerText = 'Portal do Aluno'

  const portalmobile = document.getElementsByClassName('mobile-links')[0]
  portal.appendChild(portaldiv)
  portaldiv.appendChild(linkportal)
  portalmobile.appendChild(portal)
}

document.getElementsByClassName('block-banner__title')[0].remove()
