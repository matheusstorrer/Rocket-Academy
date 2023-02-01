document.getElementsByClassName('nav-links__item-body')[3].innerText =
  'Todos as Categorias  ↓'

// const contato = document.getElementsByClassName('topbar__item')[1]
// document.getElementsByClassName('topbar__row')[0].removeChild(contato)

const cadastro = document.getElementsByClassName('topbar__item')[3]
document.getElementsByClassName('topbar__row')[0].removeChild(cadastro)

const vertodos = document.getElementsByClassName('menu__item-link')[7]
vertodos.innerText = 'Ver Todos'

const topbarPortal = document.getElementsByClassName('topbar-link')[0]
topbarPortal.innerHTML = '<b>Portal do Aluno</b>'
topbarPortal.href = 'https://www.cursoo.com.br/login/1377'
topbarPortal.setAttribute("target","_blank")
topbarPortal.setAttribute("style","margin-right: 50px")

const menumobile = document.getElementsByClassName('mobile-links__item')[0]
menumobile.remove()

// const endereco = document.getElementsByClassName('footer-contacts__contacts')[0].firstElementChild
// endereco.remove()

// const telefone = document.getElementsByClassName('site-footer__widgets')[0].children[0].children[0]
// telefone.remove()

const removemapasite = document.getElementsByClassName('footer-links')[0]
removemapasite.remove()

const mercadopago = document.getElementsByClassName('mp')[0]
mercadopago.src = 'https://matheusstorrer.github.io/Rocket-Academy/12xML.jpg'

const footer = document.getElementsByClassName('site-footer')[0]
footer.style.borderTop = '0px'

const spacefooter = document.getElementsByClassName('site-footer__widgets')[0].children[0]
spacefooter.style.justifyContent = 'space-between'

if (window.location.href === "https://rocketacademyschool.com.br") {

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

// ITENS DO MENU MOBILE //
const cursos1 = document.createElement("li")
cursos1.setAttribute("class","mobile-links__item")

const div1 = document.createElement("div")
div1.setAttribute("class","mobile-links__item-title")

const link1 = document.createElement("A")
link1.setAttribute("href","https://rocketacademyschool.com.br/categoria/microsoft-office")
link1.setAttribute("class","mobile-links__item-link keychainify-checked")
link1.innerText = "Microsoft Office 365"

cursos1.appendChild(div1)
div1.appendChild(link1)

const child1 = document.getElementsByClassName("mobile-links")[1]
child1.insertBefore(cursos1, child1.firstChild)

// ITEM 2 
const cursos2 = document.createElement("li")
cursos2.setAttribute("class","mobile-links__item")

const div2 = document.createElement("div")
div2.setAttribute("class","mobile-links__item-title")

const link2 = document.createElement("A")
link2.setAttribute("href","https://rocketacademyschool.com.br/categoria/desenvolvimento-profissional")
link2.setAttribute("class","mobile-links__item-link keychainify-checked")
link2.innerText = "Desenvolvimento Profissional"

cursos2.appendChild(div2)
div2.appendChild(link2)

document.getElementsByClassName("mobile-links")[1]
const child2 = document.getElementsByClassName("mobile-links")[1]
child2.insertBefore(cursos2, child2.firstChild)

//ITEM 3
const cursos3 = document.createElement("li")
cursos3.setAttribute("class","mobile-links__item")

const div3 = document.createElement("div")
div3.setAttribute("class","mobile-links__item-title")

const link3 = document.createElement("A")
link3.setAttribute("href","https://rocketacademyschool.com.br/categoria/adobe")
link3.setAttribute("class","mobile-links__item-link keychainify-checked")
link3.innerText = "Programas Adobe"

cursos3.appendChild(div3)
div3.appendChild(link3)

document.getElementsByClassName("mobile-links")[1]
const child3 = document.getElementsByClassName("mobile-links")[1]
child3.insertBefore(cursos3, child3.firstChild)

// ITEM 4
const cursos4 = document.createElement("li")
cursos4.setAttribute("class","mobile-links__item")

const div4 = document.createElement("div")
div4.setAttribute("class","mobile-links__item-title")

const link4 = document.createElement("A")
link4.setAttribute("href","https://rocketacademyschool.com.br/categoria/autocad")
link4.setAttribute("class","mobile-links__item-link keychainify-checked")
link4.innerText = "AutoCAD"

cursos4.appendChild(div4)
div4.appendChild(link4)

document.getElementsByClassName("mobile-links")[1]
const child4 = document.getElementsByClassName("mobile-links")[1]
child4.insertBefore(cursos4, child4.firstChild)

// ITEM 5

const cursos5 = document.createElement("li")
cursos5.setAttribute("class","mobile-links__item")

const div5 = document.createElement("div")
div5.setAttribute("class","mobile-links__item-title")

const link5 = document.createElement("A")
link5.setAttribute("href","https://rocketacademyschool.com.br/categoria/autocad")
link5.setAttribute("class","mobile-links__item-link keychainify-checked")
link5.innerText = "AutoCAD"

cursos5.appendChild(div5)
div5.appendChild(link5)

document.getElementsByClassName("mobile-links")[1]
const child5 = document.getElementsByClassName("mobile-links")[1]
child5.insertBefore(cursos5, child5.firstChild)

// ITEM 6

const cursos6 = document.createElement("li")
cursos4.setAttribute("class","mobile-links__item")

const div6 = document.createElement("div")
div6.setAttribute("class","mobile-links__item-title")

const link6 = document.createElement("A")
link6.setAttribute("href","https://rocketacademyschool.com.br/categoria/fotografia")
link6.setAttribute("class","mobile-links__item-link keychainify-checked")
link6.innerText = "Fotografia"

cursos6.appendChild(div6)
div6.appendChild(link6)

document.getElementsByClassName("mobile-links")[1]
const child6 = document.getElementsByClassName("mobile-links")[1]
child6.insertBefore(cursos6, child6.firstChild)

// ITEM 7

const cursos7 = document.createElement("li")
cursos4.setAttribute("class","mobile-links__item")

const div7 = document.createElement("div")
div4.setAttribute("class","mobile-links__item-title")

const link7 = document.createElement("A")
link7.setAttribute("href","https://rocketacademyschool.com.br/categoria/especialista-em-excel")
link7.setAttribute("class","mobile-links__item-link keychainify-checked")
link7.innerText = "Especialista em Excel"

cursos7.appendChild(div7)
div7.appendChild(link7)

document.getElementsByClassName("mobile-links")[1]
const child7 = document.getElementsByClassName("mobile-links")[1]
child7.insertBefore(cursos7, child7.firstChild)

// ITEM 8

const cursos8 = document.createElement("li")
cursos8.setAttribute("class","mobile-links__item")

const div8 = document.createElement("div")
div8.setAttribute("class","mobile-links__item-title")

const link8 = document.createElement("A")
link8.setAttribute("href","https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura")
link8.setAttribute("class","mobile-links__item-link keychainify-checked")
link8.innerText = "Engenharia e Arquitetura"

cursos8.appendChild(div8)
div8.appendChild(link8)

document.getElementsByClassName("mobile-links")[1]
const child8 = document.getElementsByClassName("mobile-links")[1]
child8.insertBefore(cursos8, child8.firstChild)

// ITEM 9

const cursos9 = document.createElement("li")
cursos9.setAttribute("class","mobile-links__item")

const div9 = document.createElement("div")
div9.setAttribute("class","mobile-links__item-title")

const link9 = document.createElement("A")
link9.setAttribute("href","https://rocketacademyschool.com.br/categoria/designer-grafico")
link9.setAttribute("class","mobile-links__item-link keychainify-checked")
link9.innerText = "Designer Gráfico"

cursos9.appendChild(div9)
div9.appendChild(link9)

document.getElementsByClassName("mobile-links")[1]
const child9 = document.getElementsByClassName("mobile-links")[1]
child9.insertBefore(cursos9, child9.firstChild)

// ITEM 10

const cursos10 = document.createElement("li")
cursos10.setAttribute("class","mobile-links__item")

const div10 = document.createElement("div")
div10.setAttribute("class","mobile-links__item-title")

const link10 = document.createElement("A")
link10.setAttribute("href","https://rocketacademyschool.com.br/categoria/desenvolvimento-pessoal")
link10.setAttribute("class","mobile-links__item-link keychainify-checked")
link10.innerText = "Desenvolvimento Pessoal"

cursos10.appendChild(div10)
div10.appendChild(link10)

document.getElementsByClassName("mobile-links")[1]
const child10 = document.getElementsByClassName("mobile-links")[1]
child10.insertBefore(cursos10, child10.firstChild)

// ------------------------------------------------------------------------------//

const icon = document.createElement("img")
icon.setAttribute("src","https://raw.githubusercontent.com/matheusstorrer/Rocket-Academy/main/Rocket_LOGO_Mobile.png")
icon.setAttribute("style","margin-right: 10px")

const mobilelogo = document.getElementsByClassName('mobile-header__logo')[0]

mobilelogo.insertBefore(icon, mobilelogo.firstChild)


// ------------------------------------------------------- //
const vertodos1 = document.getElementsByClassName('menu__item-link')[2]
vertodos1.innerText = 'Engenharia e Arquitetura'
vertodos1.setAttribute("href","https://rocketacademyschool.com.br/categoria/engenharia-e-arquitetura")

const vertodos2 = document.getElementsByClassName('menu__item-link')[3]
vertodos2.innerText = 'Informática para Concursos'
vertodos2.setAttribute("href","https://rocketacademyschool.com.br/categoria/informatica-para-concursos")

const vertodos3 = document.getElementsByClassName('menu__item-link')[4]
vertodos3.innerText = 'Fotografia'
vertodos3.setAttribute("href","https://rocketacademyschool.com.br/categoria/fotografia")

const vertodos4 = document.getElementsByClassName('menu__item-link')[5]
vertodos4.innerText = 'Programação WEB'
vertodos4.setAttribute("href","https://rocketacademyschool.com.br/categoria/programacao-web")

const vertodos5 = document.getElementsByClassName('menu__item-link')[6]
vertodos5.innerText = 'Youtuber'
vertodos5.setAttribute("href","https://rocketacademyschool.com.br/categoria/youtuber")

const vertodos6 = document.getElementsByClassName('menu__item-link')[7]
vertodos6.innerText = 'Desenvolvimento Profissional'
vertodos6.setAttribute("href","https://rocketacademyschool.com.br/categoria/desenvolvimento-profissional")

