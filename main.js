if (window.location.href === 'https://rocketacademyschool.com.br/') {
  document.getElementsByClassName('category-card__image')[2].innerHTML =
    '<a href="categoria/fotografia" class="destaques_icon keychainify-checked"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/cbe686a79d319d75302fb9c0571efe5b28213408/icons/camera.svg" alt="Cursos de Fotografia"></a>'

  document.getElementsByClassName('category-card__image')[1].innerHTML =
    '<a href="categoria/youtuber" class="destaques_icon keychainify-checked"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/ab2bfa213a224bc2ed373200ae102f1ce40b9284/icons/youtube_destaque.svg" alt="Cursos de Youtuber"></a>'

  document.getElementsByClassName('category-card__image')[0].innerHTML =
    '<a href="categoria/especialista-em-excel" class="destaques_icon keychainify-checked"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/2c0cf23781d9feafbf37fabc6f803cd58fd0c85c/icons/excel-app.svg" alt="Cursos de Excel"></a>'

  document.getElementsByClassName('block-features__icon')[0].innerHTML =
    '<img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/a21048a114427e802ac67ea01ed9e8de5c7c246b/icons/employee-growth.svg" style="max-width: 48px; max-height: 48px;">'

  document.getElementsByClassName('block-features__icon')[1].innerHTML =
    '<img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/a21048a114427e802ac67ea01ed9e8de5c7c246b/icons/teaching.svg" style="max-width: 48px; max-height: 48px;">'

  document.getElementsByClassName('block-features__icon')[2].innerHTML =
    '<img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/a21048a114427e802ac67ea01ed9e8de5c7c246b/icons/diploma.svg" style="max-width: 48px; max-height: 48px;">'

  document.getElementsByClassName('block-features__icon')[3].innerHTML =
    '<img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/a21048a114427e802ac67ea01ed9e8de5c7c246b/icons/wallet.svg" style="max-width: 48px; max-height: 48px;">'

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

  document.getElementsByClassName('block-banner__title')[0].remove()
}

if (
  window.innerWidth < 768 &&
  window.location.href === 'https://rocketacademyschool.com.br/'
) {
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

  document.getElementsByClassName('block-banner__image')[1].outerHTML =
    '<div class="block-banner__image block-banner__image--mobile" style="background-image: url(\'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/4ad32c142b68fcd1e6c16574cd44403c5448ac02/banners/Banner_MOBILE_YOUTUBER_Teste_Final.svg\')"></div>'
}

if (window.innerWidth < 768) {
  const icon = document.createElement('img')
  icon.setAttribute(
    'src',
    'https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/main/icons/Rocket_LOGO_Mobile.png'
  )
  const mobilelogo = document.getElementsByClassName('mobile-header__logo')[0]
  mobilelogo.insertBefore(icon, mobilelogo.firstChild)

  document
    .getElementsByClassName('mobile-header')[0]
    .setAttribute('data-sticky-mode', 'alwaysOnTop')
  document.getElementsByClassName('footer-contacts')[0].outerHTML =
    '<div class="site-footer__widget footer-contacts"><h5 class="footer-contacts__title">Fale Conosco</h5><div class="footer-contacts__contacts"><div class="address"><h6 class=".footer-subtitle"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/2cc909d6fc672ddcc5167001afa1e7e712d86bdd/icons/location_1.svg" class="contact_icons">Endereço</h6><p class="endereco">Rua Manoel Guimarães Teixeira, 706</p><p>Ortigueira - Paraná</p></div><div class="email"><h6 class=".footer-subtitle"><a href="mailto:contato@rocketacademyschool.com.br"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/mail.svg" class="contact_icons">Email</h6></a><p>contato@rocketacademyschool.com.br</p></div><div class="phone"><h6 class=".footer-subtitle"><a href="https://wa.me/5543988034180?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+da+Rocket+Academy%21+%F0%9F%9A%80"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/whatsapp.svg" class="contact_icons">Whatsapp</h6></a><p>(43) 98803-4180</p></div></div></div><hr>'

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

if (window.location.href === 'https://rocketacademyschool.com.br/curso/canva') {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula de Canva</h1><div class="video_curso"><video src="https://example.com/video.mp4" controls></video></div><h1 class="cont_programatico">Conteúdo Programático</h1><div class="cont_duration"><ul class="lista_cont_programatico"><li>Criando uma conta e conhecendo o Canva</li><li>Criando um design simples</li><li>Layout personalizado</li><li>Inserindo imagens e praticando edições</li><li>Guia de elementos</li>    <li>Adicionando e formatando textos</li>    <li>Incluindo e configurando áudio e vídeo</li>    <li>Princípios básicos do design</li>    <li>Criando um logotipo</li>    <li>Cartão de visitas digital</li>    <li>Website</li>    <li>Posts animados e mídias com animação</li>    <li>Criando uma capa para o Facebook</li>    <li>Artes para o YouTube</li>    <li>Artes para o Instagram: Post, Rells e Stories</li>    <li>Criando uma apresentação completa</li>    <li>Criando gráficos</li>    <li>Gravando e compartilhando a apresentação</li>    <li>Ebooks profissionais</li></ul><div class="spec__section">  <div class="spec__row">      <div class="spec__name">Quantidade de aulas</div>      <div class="spec__value">20 aulas</div>  </div>  <div class="spec__row">      <div class="spec__name">Horas de videoaula</div>      <div class="spec__value">4 horas</div>  </div>  <div class="spec__row">      <div class="spec__name">Horas em projetos</div>      <div class="spec__value">16 horas</div>  </div></div></div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/empreendedorismo'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula de Empreendedorismo</h1> <div class="video_curso"><video src="https://example.com/video.mp4" controls></video> </div><h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Introdução ao empreendedorismo</li> <li>Principais tipos de empreendedorismo</li> <li>Características do empreendedor</li> <li>Pesquisa de mercado</li> <li>Planejando para o sucesso</li> <li>Plano de negócios</li> <li>Identificando uma oportunidade de negócio</li> <li>Passos para abertura de uma empresa</li> <li>Motivação ao empreendedor</li> <li>Ferramentas úteis para o empreendedor</li> <li>Marketing no empreendedorismo</li> <li>Gestão estratégica</li> <li>Liderança</li> <li>Controle financeiro</li> <li>Negociação</li> <li>Como vender seu produto</li> <li>Empreendedorismo 4.0</li> <li>A internet e o empreendedorismo</li> <li>Assessoria para o negócio</li> <li>Empreendedorismo no Brasil</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">20 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">4 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">4 horas </div> </div> </div> </div></section>'
}

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

document.getElementsByClassName('mobile-links')[1].outerHTML =
  '<ul class="mobile-links mobile-links--level--1"><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/desenvolvimento-profissional" class="mobile-links__item-link keychainify-checked">Desenvolvimento Profissional</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/designer-grafico" class="mobile-links__item-link keychainify-checked">Designer Gráfico</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura" class="mobile-links__item-link keychainify-checked">Engenharia e Arquitetura</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/especialista-em-excel" class="mobile-links__item-link keychainify-checked">Especialista em Excel</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/fotografia" class="mobile-links__item-link keychainify-checked">Fotografia</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/informatica-para-concursos" class="mobile-links__item-link keychainify-checked">Informática para Concursos</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/marketing-e-vendas" class="mobile-links__item-link keychainify-checked">Marketing e Vendas</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/programacao-web" class="mobile-links__item-link keychainify-checked">Programação WEB</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/Youtuber" class="mobile-links__item-link keychainify-checked">Youtuber</a></div></li></ul>'

const wpp = document.getElementsByClassName('site-footer')[0]
wpp.innerHTML =
  '<a href="https://wa.me/5543988034180?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+da+Rocket+Academy%21+%F0%9F%9A%80" class="whatsapp-btn" target="_blank"><i class="fa fa-whatsapp"></i></a></div>' +
  wpp.innerHTML

document.getElementsByClassName('footer-contacts')[0].outerHTML =
  '<div class="site-footer__widget footer-contacts"><h5 class="footer-contacts__title">Fale Conosco</h5><div class="footer-contacts__contacts"><div class="address"><h6 class=".footer-subtitle"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/2cc909d6fc672ddcc5167001afa1e7e712d86bdd/icons/location_1.svg" class="contact_icons">Endereço</h6><p class="endereco">Rua Manoel Guimarães Teixeira, 706</p><p>Ortigueira - Paraná</p></div><div class="email"><h6 class=".footer-subtitle"><a href="mailto:contato@rocketacademyschool.com.br"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/mail.svg" class="contact_icons">Email</h6></a><p>contato@rocketacademyschool.com.br</p></div><div class="phone"><h6 class=".footer-subtitle"><a href="https://wa.me/5543988034180?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+da+Rocket+Academy%21+%F0%9F%9A%80"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/whatsapp.svg" class="contact_icons">Whatsapp</h6></a><p>(43) 98803-4180</p></div></div></div>'

document.getElementsByClassName('menu--layout--classic')[0].innerHTML =
  '<ul class="menu__list"><div class="menu__submenus-container"></div><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura">Engenharia e Arquitetura</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/informatica-para-concursos">Informática para Concursos</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/fotografia">Fotografia</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/programacao-web">Programação WEB</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/youtuber">Youtuber</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/desenvolvimento-profissional">Desenvolvimento Profissional</a></li></ul>'
