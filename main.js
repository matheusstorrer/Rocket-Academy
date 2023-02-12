if (
  window.location.href === 'https://rocketacademyschool.com.br/' ||
  window.location.href.includes('https://rocketacademyschool.com.br/#')
) {
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

// CATEGORIAS
if (
  window.location.href ===
  'https://rocketacademyschool.com.br/categoria/marketing-e-vendas'
) {
  document.getElementsByClassName('page-header__title')[0].innerHTML =
    '<h1>Marketing e Vendas</h1>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura'
) {
  document.getElementsByClassName('page-header__title')[0].innerHTML =
    '<h1>Engenharia e Arquitetura</h1>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/categoria/informatica-para-concursos'
) {
  document.getElementsByClassName('page-header__title')[0].innerHTML =
    '<h1>Informática para Concursos</h1>'
}
// END CATEGORIAS

// VIDEOS INDIVIDUAIS DE CADA CURSO //
// MARKETING E VENDAS
if (window.location.href === 'https://rocketacademyschool.com.br/curso/canva') {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula de Canva</h1><div class="video_curso"><iframe src="https://www.youtube.com/embed/RrHx0nsmpB8" alt="Videoaula sobre Canva" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><p class="license_cgd">Cursos gravados e desenvolvidos pela CGD &copy;</p><h1 class="cont_programatico">Conteúdo Programático</h1><div class="cont_duration"><ul class="lista_cont_programatico"><li>Criando uma conta e conhecendo o Canva</li><li>Criando um design simples</li><li>Layout personalizado</li><li>Inserindo imagens e praticando edições</li><li>Guia de elementos</li>    <li>Adicionando e formatando textos</li>    <li>Incluindo e configurando áudio e vídeo</li>    <li>Princípios básicos do design</li>    <li>Criando um logotipo</li>    <li>Cartão de visitas digital</li>    <li>Website</li>    <li>Posts animados e mídias com animação</li>    <li>Criando uma capa para o Facebook</li>    <li>Artes para o YouTube</li>    <li>Artes para o Instagram: Post, Rells e Stories</li>    <li>Criando uma apresentação completa</li>    <li>Criando gráficos</li>    <li>Gravando e compartilhando a apresentação</li>    <li>Ebooks profissionais</li></ul><div class="spec__section">  <div class="spec__row">      <div class="spec__name">Quantidade de aulas</div>      <div class="spec__value">20 aulas</div>  </div>  <div class="spec__row">      <div class="spec__name">Horas de videoaula</div>      <div class="spec__value">4 horas</div>  </div>  <div class="spec__row">      <div class="spec__name">Horas em projetos</div>      <div class="spec__value">16 horas</div>  </div></div></div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/empreendedorismo'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula de Empreendedorismo</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/vlXOlUokUM4" alt="Videoaula sobre Empreendedorismo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Introdução ao empreendedorismo</li> <li>Principais tipos de empreendedorismo</li> <li>Características do empreendedor</li> <li>Pesquisa de mercado</li> <li>Planejando para o sucesso</li> <li>Plano de negócios</li> <li>Identificando uma oportunidade de negócio</li> <li>Passos para abertura de uma empresa</li> <li>Motivação ao empreendedor</li> <li>Ferramentas úteis para o empreendedor</li> <li>Marketing no empreendedorismo</li> <li>Gestão estratégica</li> <li>Liderança</li> <li>Controle financeiro</li> <li>Negociação</li> <li>Como vender seu produto</li> <li>Empreendedorismo 4.0</li> <li>A internet e o empreendedorismo</li> <li>Assessoria para o negócio</li> <li>Empreendedorismo no Brasil</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">20 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">4 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">4 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/excelencia-no-atendimento-ao-cliente'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/Z3AzCCJuG5k" alt="Videoaula sobre Atendimento ao Cliente" title="Aula demonstrativa do curso de Excelencia no atendimento ao liente - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Mundo em mudança</li> <li>Características do mundo atual e seu impacto nas relações comerciais</li> <li>Atendimento ao cliente: O que faz a diferença?</li> <li>Ideal de servir</li> <li>4 Fases da excelência eo atendimento: Entender e cliente</li> <li>Entender e cliente: Tipos de cliente</li> <li>Por que as empresas perdem clientes?</li> <li>4 Fases da excelência no atendimento: atender o cliente</li> <li>Todo atendimento é uma oportunidade</li> <li>Como os clientes querem ser tratados?</li> <li>O poder da imagem profissional</li> <li>4 Fases da excelência no atendimento: Satisfazer o cliente</li> <li>4 Fases da excelência no atendimento: Encantar o cliente</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">13 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">2 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">5 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/marketing-digital'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula de Marketing Digital</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/b4E3opQNWu4" alt="Videoaula sobre Marketing Digital" title="Aula demonstrativa do curso de Marketing Digital - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Introdução ao marketing</li> <li>Mix de marketing</li> <li>Introdução ao marketing digital</li> <li>Conceitos-chave do marketing digital</li> <li>Vantagens do marketing digital</li> <li>Estratégias do marketing digital</li> <li>Planejamento de marketing digital</li> <li>Ferramentas de marketing digital</li> <li>Inbound marketing</li> <li>Outbound marketing</li> <li>Website</li> <li>Marketing de conteúdo</li> <li>SEO</li> <li>E-mail marketing</li> <li>Marketing nas redes sociais</li> <li>Marketing de busca</li> <li>Publicidade em vídeo</li> <li>Áudio marketing e podcast</li> <li>Web Analytics</li> <li>Métricas do marketing digital</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">27 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">3 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">7 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/marketing-pessoal'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula de Marketing Pessoal</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/ZRPAISFNmIE" alt="Videoaula sobre Marketing Pessoal" title="Aula demonstrativa do curso de Marketing Pessoal - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Introdução</li> <li>O que é Marketing Pessoal?</li> <li>Importância do Marketing Pessoal e as competências fundamentais</li> <li>Como fazer um projeto de vida</li> <li>Como fazer marca pessoal</li> <li>Exercício de autoconhecimento</li> <li>Estratégias de Marketing Pessoal</li> <li>Como fazer comunicação assertiva</li> <li>Apresentação pessoal</li> <li>Estabelecer relações verdadeiras</li> <li>Crie, aprimore e mantenha sua rede de contatos</li> <li>Benchmarking de pessoas</li> <li>Autoimagem positiva e otimista</li> <li>Etiqueta corporativa</li> <li>Etiqueta na internet</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">16 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">2 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">7 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href === 'https://rocketacademyschool.com.br/curso/oratoria'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula de Oratória</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/C1zwui9sPnA" alt="Videoaula sobre Oratoria" title="Aula demonstrativa do curso de Oratória - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Introdução</li> <li>Técnicas de oratória e controle emocional</li> <li>Controle emocional</li> <li>Vícios de linguagem</li> <li>Uso do olhar e a importância do sorriso</li> <li>Postura corporal</li> <li>Silêncio corporal</li> <li>Gerenciamento do tempo</li> <li>Entonação da voz</li> <li>Controle emocional</li> <li>Equipamentos</li> <li>Pesquisa e desenvolvimento de tema</li> <li>Adequação de linguagem ao público-alvo</li> <li>Domínio de conteúdo</li> <li>Modelos de apresentação de slides</li> <li>Criando a própria marca</li> <li>Poder de persuasão</li> <li>Medo de falar em público</li> <li>Oratório virtual e EAD</li> <li>Você é aquilo que crê</li> <li>Dublagem</li> <li>Blindagem emocional</li> <li>Descobrindo seu propósito de vida</li> <li>Como criar e monetizar o canal do Youtube</li> <li>O que são lives?</li> <li>O que é vocabulário?</li> <li>Podcasts</li> <li>Como vender conteúdos em plataformas online</li> <li>Como viver de palestras?</li> <li>Etapas para o sucesso</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">29 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">8 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">14 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/relacoes-humanas-comunicacao-e-feedback'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/vcqFcs95PqA" alt="Videoaula sobre Comunicacao e Feedback" title="Aula demonstrativa do curso de Comunicação e Feedback - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Contexto: mundo em que vivemos e suas mudanças</li> <li>Mundo VUCA</li> <li>Natureza empresarial</li> <li>Natureza humana</li> <li>Motivação e necessidades humanas</li> <li>Tipos de relacionamento</li> <li>Competências básicas para as relações humanas</li> <li>Relações humanas e conflitos</li> <li>Como lidar com os conflitos</li> <li>Inteligência emocional</li> <li>Comunicação</li> <li>Barreiras na comunicação</li> <li>Saber ouvir</li> <li>Pergunte, não suponha</li> <li>Assertividade</li> <li>Comunicação verbal e não verbal</li> <li>Feedback</li> <li>Dificuldade para dar e receber feedback</li> <li>Tipos de feedback</li> <li>Como dar feedback</li> <li>Como receber feedback</li> <li>Conclusões sobre feedback</li> <li>Dez mandamentos das relações humanas</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">24 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">4 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">4 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href === 'https://rocketacademyschool.com.br/curso/vendas'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"><h1 class="titulo_video">Conheça a nossa primeira aula de Vendas</h1> <div class="video_curso"><iframe  src="https://www.youtube.com/embed/TfyewHOqyfY" alt="Videoaula sobre Vendas" title="Aula demonstrativa do curso de Vendas - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul> <li>O que é ser vendedor?</li> <li>Tipos de vendedores</li> <li>Negociação</li> <li>Características de vendedores</li> <li>Inteligência emocional</li> <li>Negociação ganha-ganha</li> <li>Honestidade, simpatia e empatia</li> <li>Principais erros dos vendedores</li> <li>Zona de conforto</li> <li>Planejamento de vendas</li> <li>Desenvolvimento do plano de vendas</li> <li>Campanhas e fidelização dos clientes</li> <li>Importância dos canais de vendas</li> <li>Vendas por telefone e e-mail</li> <li>Vendas com WhatsApp</li> <li>Redes sociais e venda porta a porta</li> <li>Processos de venda</li> <li>Coaching de vendas</li> <li>Perguntas que vendem</li> <li>O quadrante das vendas</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">32 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">4 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">8 horas </div> </div> </div> </div></section>'
}

// ENGENHARIA E ARQUITETURA
if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/autocad-2020-essencial'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Vendas</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/V7Ww27iS6gw" alt="Videoaula sobre Autocad" title="Aula demonstrativa do curso de AutoCAD Essencial - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Conhecendo o AutoCAD</li> <li>Menu de precisão</li> <li>Desenhando linhas com medida</li> <li>Cotando o desenho</li> <li>Comando retângulo e círculo</li> <li>Deslocamento</li> <li>Polilinha</li> <li>Comando arco</li> <li>Comando espelhar</li> <li>Comando matriz e concordância</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">17 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">2 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">24 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/autocad-2020-mecanica'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de AutoCAD 2020 - Mecânica</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/MfSkBA8QnBo" title="Aula demonstrativa do curso de AutoCAD Mecânica - Rocket Academy" alt="Videoaula sobre Autocad Mecanica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Ajustes e manipulação de círculo e retângulo</li> <li>Perspectiva isométrica</li> <li>Projeção ortogonal</li> <li>Casos especiais de cotagem e projeção</li> <li>Cortes</li> <li>Layout e impressão</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">10 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">9 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">31 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/autocad-2020-projeto-civil'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de AutoCAD 2020 - Mecânica</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/ZGwOu3HCWOw" alt="Videoaula sobre Autocad Projeto Civil" title="Aula demonstrativa do curso de AutoCAD Projeto Civil - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Ajustes e manipulação de círculo e retângulo</li> <li>Perspectiva isométrica</li> <li>Projeção ortogonal</li> <li>Casos especiais de cotagem e projeção</li> <li>Cortes</li> <li>Layout e impressão</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">10 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">4 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">24 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/autocad-2020-civil-3d'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de AutoCAD 2020 - Projeto Civil 3D</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/2ntMwIUIav0" alt="Videoaula sobre Autocad Projeto Civil 3D" title="Aula demonstrativa do curso de AutoCAD Projeto Civil 3D - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Iniciando o projeto da casa em 3D</li> <li>Transformando em polilinha</li> <li>Estilos visuais</li> <li>As vistas em 3D</li> <li>O comando união</li> <li>Camadas no desenho 3D</li> <li>O comando subtrair</li> <li>Desenhando com polilinhas</li> <li>Renderizando</li> <li>Ferramentas 3D</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">10 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">4 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">24 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/promob-plus'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Promob Plus</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/_y6uSHK6mTA" alt="Videoaula sobre Promob Plus" title="Aula demonstrativa do curso de PROMOB - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></video> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Apresentação e interface do programa</li> <li>Ajustes de visualização</li> <li>Modificando e criando paredes</li> <li>Construindo aberturas</li> <li>Vista dinâmica</li> <li>Impressão de projeto</li> <li>Construindo um armário</li> <li>Aplicando materiais</li> <li>Gessos e sancas</li> <li>Construção de ilha</li> <li>Construção mesa básica</li> <li>Faixas lineares – Construção de rodapé</li> <li>Renderizando cenários com o RenderUp</li> <li>Iluminação</li> <li>Animação com vistas dinâmicas</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">16 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">2 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">10 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/sketchup-2020'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de SketchUp 2020</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/me9xOzigUBY" alt="Videoaula sobre Sketchup 2020" title="Aula demonstrativa do curso de SketchUp 2020 - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Conhecendo o SketchUP</li> <li>Desenhos básicos</li> <li>Ferramentas</li> <li>Projeto básico</li> <li>Ferramentas de edição</li> <li>Edição básica</li> <li>Materiais e texturas</li> <li>Casa e mobília</li> <li>Organizando o projeto</li> <li>Apresentando um projeto</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">11 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">1 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">10 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/sketchup-2020-avancado'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de SketchUp 2020 - Avançado</h1> <div class="video_curso"><iframe src="https://www.youtube.com/embed/WMvzzC1gMFs" title="Aula demonstrativa do curso de SketchUp 2020 Avançado - Rocket Academy" alt="Videoaula sobre Sketchup Avançado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Modelagem de terreno</li> <li>Animações</li> <li>Photomatching</li> <li>SketchUp Layout e documentação</li> <li>Modelagem de móveis</li> <li>Preparação de render</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">7 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">2 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">6 horas </div> </div> </div> </div></section>'
}

// INFORMATICA PARA CONCURSOS
if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/google-workspace'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Google Workspace</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/TfyewHOqyfY" alt="Videoaula sobre Google Workspace" title="Aula demonstrativa do curso de Vendas - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Google Drive <ul> <li>Criação de conta e apresentação da ferramenta</li> <li>Realizar uploads</li> <li>Gerenciamento de arquivos em nuvem</li> <li>Compartilhamento entre pessoas</li> <li>Aplicativo para desktop e dispositivos móveis</li> </ul> </li> <li>Documentos Google <ul> <li>Conhecendo a ferramenta</li> <li>Configuração da página</li> <li>Formatando o documento</li> <li>Inserindo itens</li> <li>Avery label merge</li> </ul> </li> <li>Planilhas Google <ul> <li>Conhecendo a ferramenta</li> <li>Autopreenchimento e ajuste de linhas e colunas</li> <li>Formatando uma planilha</li> <li>Aplicação de filtros</li> <li>Operações básicas</li> <li>Funções básicas</li> <li>Inserindo gráficos</li> <li>Insights instantâneos e formulários</li> </ul> </li> <li>Apresentações Google <ul> <li>Conhecendo a ferramenta</li> <li>Criação e manipulação de slides</li> <li>Formatação de slides</li> <li>Inserindo itens</li> <li>Transição de slides e animações de objetos</li> <li>Apresentações no hangouts</li> </ul> </li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">28 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">3 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">10 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/informatica-para-adultos'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Informática Para Adultos</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/TfyewHOqyfY" alt="Videoaula sobre Informática para Adultos" title="Aula demonstrativa do curso de Vendas - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Utilizando a Internet</li> <li>Buscas</li> <li>Notícias e Serviços</li> <li>Google Maps</li> <li>Criando Um Email</li> <li>Anexos</li> <li>Facebook</li> <li>Facebook: Fotos e Publicações</li> <li>Microsoft Word</li> <li>Microsoft Word: Alterando Fonte e Cor do Texto</li> <li>Microsoft Word: Guia Inserir</li> <li>Microsoft Word: Linhas</li> <li>Microsoft Word: Listas e Marcadores</li> <li>Microsoft Word: Efeitos de Fonte</li> <li>Microsoft Word: Tabelas e Bordas da Página</li> <li>Microsoft Word: Final</li> <li>Windows 11</li> <li>Conhecendo o Explorador de Arquivos</li> <li>Windows 11: Final</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">19 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">2 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">28 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href === 'https://rocketacademyschool.com.br/curso/internet'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Internet</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/TfyewHOqyfY" title="Aula demonstrativa do curso de Vendas - Rocket Academy" alt="Videoaula sobre Internet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Conhecendo o navegador</li> <li>Utilizando mecanismos de busca</li> <li>Pesquisar imagens</li> <li>Pesquisar músicas</li> <li>Utilizar o Youtube</li> <li>Utilizar a Wikipedia (Enciclopédia Online)</li> <li>Procurar e localizar CEP</li> <li>Fazer downloads e salvar arquivos</li> <li>Criar um email do google</li> <li>Enviar e receber e-mails</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">24 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">2 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">10 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href === 'https://rocketacademyschool.com.br/curso/express'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula do Pacote Express</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/TfyewHOqyfY" title="Aula demonstrativa do curso de Vendas - Rocket Academy" alt="Videoaula sobre Word, Windows, Excel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Windows 11 - Conhecendo o Windows</li> <li>Windows 11 - Conhecendo o explorador de arquivos</li> <li>Windows 11 – A janela de configurações</li> <li>Windows 11 - Aparência e personalização</li> <li>Windows 11 – Atalho e lixeira</li> <li>Word 365 - Conhecendo o Word</li> <li>Word 365 - Selecionando textos</li> <li>Word 365 - Efeitos de formatação</li> <li>Word 365 – Espaçamentos</li> <li>Word 365 – Correções</li> <li>Word 365 - Usando marcadores</li> <li>Word 365 – Tabulações</li> <li>Word 365 - Cabeçalho e rodapé</li> <li>Word 365 – Tabelas</li> <li>Word 365 - Bordas e sombreamento</li> <li>Word 365 - Configurações da página</li> <li>Word 365 - Localizar e quebras de página</li> <li>Word 365 - Trabalhando com figuras</li> <li>Excel 365 - Conhecendo o Excel</li> <li>Excel 365 - Conhecendo fórmulas</li> <li>Excel 365 - Fórmulas básicas – soma</li> <li>Excel 365 - Porcentagem e funções</li> <li>Excel 365 - Gerenciando várias planilhas</li> <li>Excel 365 - Função cont.se e manipulação de planilhas</li> <li>Excel 365 - Conhecendo gráficos</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">26 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">2 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">22 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href ===
  'https://rocketacademyschool.com.br/curso/powerpoint-365'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Powerpoint 365</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/TfyewHOqyfY" alt="Videoaula sobre Powerpoint 365" title="Aula demonstrativa do curso de Vendas - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Conhecendo o PowerPoint 365</li> <li>Primeiros passos no PowerPoint 365</li> <li>Guias, barras e painéis do PowerPoint</li> <li>Os tipos de slides</li> <li>Criando apresentações através de modelos e temas</li> <li>Trabalhando com texto: a caixa de texto</li> <li>Trabalhando com texto: formatação</li> <li>Trabalhando com texto: marcadores e numeração</li> <li>Trabalhando com texto: fontes tipográficas</li> <li>Trabalhando com texto: WordArts</li> <li>Utilizando temas em sua apresentação</li> <li>Utilizando ícones e formas na sua apresentação</li> <li>Utilizando modelos 3D em sua apresentação</li> <li>Trabalhando com imagens na apresentação: inserindo imagens</li> <li>Trabalhando com imagens na apresentação: imagens online</li> <li>Trabalhando com imagens na apresentação: recorte com formas</li> <li>Trabalhando com imagens na apresentação: remoção de fundo</li> <li>Trabalhando com imagens na apresentação: efeitos artísticos</li> <li>Trabalhando com imagens na apresentação: utilizando imagem como fundo</li> <li>Criando apresentações através da estrutura de tópicos</li> <li>Trabalhando com animações: forma básica</li> <li>Utilizando transições</li> <li>Trabalhando com tabelas</li> <li>Inserindo gráficos</li> <li>Slide mestre, cabeçalho e rodapé</li> <li>Inserindo áudio</li> <li>Inserindo vídeos</li> <li>Trabalhando com animações</li> <li>Exportando sua apresentação</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">29 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">3 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">21 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href === 'https://rocketacademyschool.com.br/curso/windows-10'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Windows 10</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/TfyewHOqyfY" alt="Videoaula sobre Windows 10" title="Aula demonstrativa do curso de Vendas - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Conhecendo o Windows</li> <li>Recursos especiais do Windows</li> <li>Criando e personalizando atalhos</li> <li>Excluindo e restaurando arquivos da lixeira</li> <li>Paint: desenhando e criando formas</li> <li>Paint: copiando, colando e criando textos</li> <li>WordPad: digitando e formatando textos</li> <li>WordPad: opções localizar, substituir e inserir</li> <li>Calculadora padrão e as operações básicas</li> <li>Calculadora científica e os conversores de unidades</li> <li>Navegando com o Microsoft Edge</li> <li>Alarmes, relógio e calendário</li> <li>Sticky notes e bloco de notas</li> <li>Explorador de arquivos: abertura, layout do programa e seleção</li> <li>Explorador de arquivos: abrindo e excluindo arquivos</li> <li>Explorador de arquivos: copiando e colando arquivos</li> <li>Explorador de arquivos: recortando e movendo arquivos</li> <li>Explorador de arquivos: classificação de arquivos</li> <li>Explorador de arquivos: personalizando a barra de classificação</li> <li>Explorador de arquivos: utilizando a barra de pesquisa</li> <li>Conhecendo as pastas pessoais</li> <li>Adicionar, remover e criar bibliotecas</li> <li>Configurações do Windows: sistema</li> <li>Configurações do Windows: personalização</li> <li>Configurações do Windows: aplicativos</li> <li>Configurações do Windows: contas</li> <li>O disco rígido e as unidades locais</li> <li>Manutenção básica do Windows</li> <li>Compactando arquivos com o Windows e com o WinRAR</li> <li>Segurança do Windows e antivírus</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">30 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">3 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">17 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href === 'https://rocketacademyschool.com.br/curso/windows-11'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Windows 11</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/TfyewHOqyfY" alt="Videoaula sobre Windows 11" title="Aula demonstrativa do curso de Vendas - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Conhecendo o Windows</li> <li>Recursos especiais do Windows</li> <li>Criando e personalizando atalhos</li> <li>Excluindo e restaurando arquivos da lixeira</li> <li>Paint: desenhando e criando formas</li> <li>Paint: copiando, colando e criando textos</li> <li>WordPad: digitando e formatando textos</li> <li>WordPad: opções localizar, substituir e inserir</li> <li>Calculadora padrão e as operações básicas</li> <li>Calculadora científica e os conversores de unidades</li> <li>Navegando com o Microsoft Edge</li> <li>Relógio e calendário</li> <li>Sticky notes e bloco de notas</li> <li>Explorador de arquivos: abertura, layout do programa e seleção</li> <li>Explorador de arquivos: abrindo e excluindo arquivos</li> <li>Explorador de arquivos: copiando e colando arquivos</li> <li>Explorador de arquivos: recortando e movendo arquivos</li> <li>Explorador de arquivos: classificação de arquivos</li> <li>Explorador de arquivos: personalizando a barra de classificação</li> <li>Explorador de arquivos: utilizando a barra de pesquisa</li> <li>Conhecendo as pastas pessoais</li> <li>Adicionar, remover e criar bibliotecas</li> <li>Configurações do Windows: sistema</li> <li>Configurações do Windows: personalização</li> <li>Configurações do Windows: aplicativos</li> <li>Configurações do Windows: contas</li> <li>O disco rígido e as unidades locais</li> <li>Manutenção básica do Windows</li> <li>Compactando arquivos com o Windows e com o WinRAR</li> <li>Segurança do Windows e antivírus</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">30 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">4 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">16 horas </div> </div> </div> </div></section>'
}

if (
  window.location.href === 'https://rocketacademyschool.com.br/curso/word-365'
) {
  document.getElementsByClassName('product-tabs')[0].innerHTML =
    '<section class="section_video_curso"> <h1 class="titulo_video">Conheça a nossa primeira aula de Word 365</h1> <div class="video_curso"> <iframe src="https://www.youtube.com/embed/TfyewHOqyfY" alt="Videoaula sobre Word" title="Aula demonstrativa do curso de Vendas - Rocket Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h1 class="cont_programatico">Conteúdo Programático</h1> <div class="cont_duration"> <ul class="lista_cont_programatico"> <li>Conhecendo o Word 365</li> <li>Criando documentos e digitando textos</li> <li>Seleção de textos</li> <li>Formatação de textos</li> <li>Parágrafo e alinhamento</li> <li>Espaçamento entre linhas e recuos de parágrafos</li> <li>Estilos de texto</li> <li>Verificação ortográfica e gramatical</li> <li>Tradução e leitura em voz alta</li> <li>Ferramentas de aprendizagem</li> <li>Listas numeradas e com marcadores</li> <li>Definindo e formatando tabulação</li> <li>Folha de rosto e estilos</li> <li>Personalizando cabeçalho e rodapé</li> <li>Tabelas: inserindo e selecionando tabelas</li> <li>Tabelas: inserindo e ajustando novas linhas e colunas</li> <li>Tabelas: classificando dados e formatando a planilha</li> <li>Bordas em parágrafos e textos</li> <li>Bordas nas páginas e sombreamento</li> <li>Configurações de página</li> <li>Mala direta: iniciando a mala direta</li> <li>Mala direta: inserindo campos e concluindo a mala direta</li> <li>Localizar e substituir textos</li> <li>Utilizando imagens</li> <li>Criando WordArts</li> <li>Criando gráficos</li> <li>Criando formas</li> <li>Trabalhando com texto em colunas e letras capitulares</li> <li>Criando SmartArts</li> <li>Utilizando modelos 3D em seus documentos</li> </ul> <div class="spec__section"> <div class="spec__row"> <div class="spec__name">Quantidade de aulas </div> <div class="spec__value">30 aulas </div> </div> <div class="spec__row"> <div class="spec__name">Horas de videoaula </div> <div class="spec__value">3 horas </div> </div> <div class="spec__row"> <div class="spec__name">Horas em projetos </div> <div class="spec__value">21 horas </div> </div> </div> </div></section>'
}
// END DOS VIDEOS INDIVIDUAIS DE CADA CURSO //

document.getElementsByClassName('document__content typography')[0].outerHTML =
  '<div class="document__content typography"> <h2>Aprenda com Conteúdo de Qualidade</h2> <p>Aprender é uma jornada eterna e para ajudá-lo nessa jornada, nós criamos uma plataforma interativa, acessada através do "Portal do Aluno". Com a plataforma, você terá acesso a todas as vídeo aulas, apostilas e um passo a passo detalhado de como realizar os exercícios do curso escolhido. Além disso, você poderá fazer anotações direto na plataforma, o que vai auxiliar na sua aprendizagem.</p> <h2>Aprenda de Forma Prática e Interativa</h2> <p>Nossa plataforma foi criada pensando em você, para que o processo de aprendizagem seja o mais simples e eficiente possível. Com as vídeo aulas, você terá acesso a conteúdo de qualidade, ensinado por instrutores especializados e capacitados. Além disso, você poderá tirar todas as suas dúvidas através da nossa plataforma, já que os instrutores estarão sempre disponíveis para ajudá-lo.</p> <br> <div class="video_curso"><iframe src="https://www.youtube.com/embed/8-ipCq88VPM" title="Como funciona a plataforma da Rocket Academy School" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <br> <h2>Passo a Passo para Realizar Exercícios</h2> <p>Não importa se você é iniciante ou já tem conhecimento sobre o assunto, nós fornecemos um passo a passo detalhado para realizar os exercícios do curso. Dessa forma, você poderá praticar o que aprendeu e ter a certeza de que está evoluindo no seu aprendizado.</p> <h2>Anote Tudo o que Você Aprender</h2> <p>Ao longo do processo de aprendizagem, é comum que surjam dúvidas e ideias que você queira anotar para não esquecer. Por isso, na nossa plataforma, você poderá fazer anotações direto na plataforma, o que vai facilitar a sua vida e garantir que você não perca nenhum detalhe importante.</p> <h2>Certificado de Conclusão de Curso</h2> <p>Ao finalizar o curso escolhido em nossa plataforma interativa, o estudante receberá uma certificação válida e reconhecida pelo mercado, comprovando sua capacidade e conhecimento adquirido ao longo do curso. Conclua o seu curso conosco e receba a sua certificação de conclusão de curso.</p></div>'

document.getElementsByClassName('nav-links__item-link')[3].outerHTML =
  '<div class="nav-links__item-link keychainify-checked"><div class="nav-links__item-body">Todas as Categorias  ↓</div></div>'

document.getElementsByClassName('topbar__item')[3].innerHTML =
  '<a class="topbar-link keychainify-checked" href="https://rocketacademyschool.com.br/como-funciona">Como funciona</a>'

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
  '<li class="social-links__item"><a class="social-links__link social-links__link--type--facebook keychainify-checked" href="https://www.facebook.com/Rocket-Academy-114394604615093" target="_blank"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/de0bbbeed6e9fbd4d07301f27e20b56961a9ab42/icons/facebook.svg" class="midia_icons" alt="Facebook da Rocket Academy School"></a></li><li class="social-links__item"><a class="social-links__link social-links__link--type--instagram keychainify-checked" href="https://www.instagram.com/rocketacademy.school/" target="_blank"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/600c2088d174726f10b7f4344d69848f1e5e718c/icons/instagram_t.svg" class="midia_icons" alt="Instagram da Rocket Academy"></a></li><li class="social-links__item"><a class="social-links__link social-links__link--type--twitter keychainify-checked" href="https://twitter.com/RocketAcademyS" target="_blank"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/de0bbbeed6e9fbd4d07301f27e20b56961a9ab42/icons/twitter.svg" class="midia_icons"></a></li><li class="social-links__item"><a class="social-links__link social-links__link--type--youtube keychainify-checked" href="https://www.youtube.com/channel/UCgwSCfXB5b5t5c4A5zgCXCw" target="_blank"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/de0bbbeed6e9fbd4d07301f27e20b56961a9ab42/icons/youtube.svg" class="midia_icons" alt="Youtube da Rocket Academy"></i></a></li>'

document.getElementsByClassName('mobile-links')[1].outerHTML =
  '<ul class="mobile-links mobile-links--level--1"><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/profissionalizantes" class="mobile-links__item-link keychainify-checked" alt="Categoria de Cursos Profissionalizantes">Profissionalizantes</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/designer-grafico" class="mobile-links__item-link keychainify-checked" alt="Categoria de Cursos de Designer Gráfico">Designer Gráfico</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura" class="mobile-links__item-link keychainify-checked" alt="Categoria de Cursos de Engenharia e Arquitetura">Engenharia e Arquitetura</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/especialista-em-excel" class="mobile-links__item-link keychainify-checked" alt="Categoria de Cursos de Excel">Especialista em Excel</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/fotografia" class="mobile-links__item-link keychainify-checked" alt="Categoria de Cursos de Fotografia">Fotografia</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/informatica-para-concursos" class="mobile-links__item-link keychainify-checked" alt="Categoria de Cursos de Informática para Concursos">Informática para Concursos</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/marketing-e-vendas" class="mobile-links__item-link keychainify-checked">Marketing e Vendas</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/programacao-web" class="mobile-links__item-link keychainify-checked">Programação WEB</a></div></li><li class="mobile-links__item"><div class="mobile-links__item-title"><a href="https://rocketacademyschool.com.br/categoria/Youtuber" class="mobile-links__item-link keychainify-checked" alt="Categoria de Cursos de Youtuber">Youtuber</a></div></li></ul>'

const wpp = document.getElementsByClassName('site-footer')[0]
wpp.innerHTML =
  '<a href="https://wa.me/5543988034180?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+da+Rocket+Academy%21+%F0%9F%9A%80" class="whatsapp-btn" target="_blank" alt="Whatsapp da Rocket Academy School"><i class="fa fa-whatsapp"></i></a></div>' +
  wpp.innerHTML

document.getElementsByClassName('footer-contacts')[0].outerHTML =
  '<div class="site-footer__widget footer-contacts"><h5 class="footer-contacts__title">Fale Conosco</h5><div class="footer-contacts__contacts"><div class="address"><h6 class=".footer-subtitle"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/2cc909d6fc672ddcc5167001afa1e7e712d86bdd/icons/location_1.svg" class="contact_icons">Endereço</h6><p class="endereco">Rua Manoel Guimarães Teixeira, 706</p><p>Ortigueira - Paraná</p></div><div class="email"><h6 class=".footer-subtitle"><a href="mailto:contato@rocketacademyschool.com.br"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/mail.svg" class="contact_icons">Email</h6></a><p>contato@rocketacademyschool.com.br</p></div><div class="phone"><h6 class=".footer-subtitle"><a href="https://wa.me/5543988034180?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+da+Rocket+Academy%21+%F0%9F%9A%80"><img src="https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/fabf6cdcb158774709642141fd8448b52558be08/icons/whatsapp.svg" class="contact_icons" alt="Whatsapp da Rocket Academy School">Whatsapp</h6></a><p>(43) 98803-4180</p></div></div></div>'

document.getElementsByClassName('menu--layout--classic')[0].innerHTML =
  '<ul class="menu__list"><div class="menu__submenus-container"></div><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura">Engenharia e Arquitetura</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/informatica-para-concursos">Informática para Concursos</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/fotografia">Fotografia</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/programacao-web">Programação WEB</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/youtuber">Youtuber</a></li><li class="menu__item"><div class="menu__item-submenu-offset"></div><a class="menu__item-link keychainify-checked" href="https://rocketacademyschool.com.br/categoria/profissionalizantes">Profissionalizantes</a></li></ul>'
