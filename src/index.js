import * as PIXI from 'pixi.js'

let renderer = PIXI.autoDetectRenderer(256, 256, {
    antialias: false,
    transparent: false,
    resolution: 1
})
let stage = new PIXI.Container()

renderer.view.style.border = '1px solid #666'
renderer.backgroundColor = 0xFFFFFF
document.body.appendChild(renderer.view)
renderer.render(stage)
