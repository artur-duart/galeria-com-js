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
    "./img/guardiansGalaxy2.jpg",
    "./img/avengers2.jpg",
    "./img/antMan.jpg"
]

const limparId = (url) => url.replace("./img/", "").split(".")[0].replace(" ", "-")

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
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

const carregarGaleria = (imagens) => imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)

    const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1
    const iDAnterior = limparId(arr[indiceAnterior])

    const indicePosterior = indice >= arr.length - 1 ? 0 : indice + 1
    const iDPosterior = limparId(arr[indicePosterior])

    novoDiv.innerHTML = `
            <div class="imagem-container">
                <a href="" class="icones fechar">&#128473;</a>
                <a href="#${iDAnterior}" class="icones anterior">&#129168;</a>
                <img src="${urlImagem}" alt="">
                <a href="#${iDPosterior}" class="icones proximo">&#129170;</a>
            </div>`

    container.appendChild(novoDiv)
}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens(imagens)
carregarSlide(imagens)