let projectName = ['Game For Life Simulation', 'Image to Ascii Art', 'Pokedex', 'Youtube Downloader', 'Color Gusser', 'Dictionary', 'Luhn algorithm']
let projectDesc = ['using Raylib in C++', 'in C', 'A Simple Pokedex using HTML CSS and JS', 'using Pytube in Python', 'A Simple Game in JS', 'using HTML, CSS and JS', 'C and C++ implementation of Luhn Algo']
let projectRepo = ['GameForLife-RayLib-CPP', 'Image-to-ASCII', 'Pokedex', 'Youtube-Downloader', 'Color-Guesser', 'Dictionary-Js', 'Luhn-algorithm']

const base = 'https://www.github.com/fluex4/'
const template = `<div class="holder2 getIn">
                <a href="">
                    <div class="name">
                        <h2>1. Pokedex</h2>
                        <div class="desc">A Simple Pokedex using HTML,CSS and JS </div>
                    </div>
                </a>
            </div>`

let proj = document.getElementById('proj')
for (let i = 0; i < projectName.length; i++) {
    proj.innerHTML += `
    <div class="holder2 getIn">
                <a href="${base + projectRepo[i]}">
                    <div class="name">
                        <h2>${i + 1}. ${projectName[i]}</h2>
                        <div class="desc">${projectDesc[i]} </div>
                    </div>
                </a>
            </div>
    `
}