"use strict"

const imagens = [
    "./img/captainAmerica.jpg",
    "./img/captainMarvel.jpg",
    "./img/ironMan.jpg",
    "./img/hulk.jpg",
    "./img/ironMan2.jpg",
    "./img/thor.jpg",
    "./img/avengers.jpg",
    "./img/ironMan3.jpg",
    "./img/thor2.jpg",
    "./img/captainAmerica2.jpg",
    "./img/guardiansGalaxy.jpg",
    "./img/guardiansGalaxy2.jpg"
]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`

    container.appendChild(novoLink)
}

// const criarItem = (urlImagem) => {
//     const container = document.querySelector(".galeria-container")
//     container.innerHTML += `
//     <a href="${urlImagem}" class="galeria-items">
//     <img src="${urlImagem}" alt="">
//     </a>
//     `
// }

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()