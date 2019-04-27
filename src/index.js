import * as PIXI from 'pixi.js'
import { TextureCache, Sprite } from './declaration.js'
import { reimu1, buildingJson } from './imageload'
import { createSpriteFromTiles, initSprite } from './utils'

console.log('PIXI', PIXI)

let renderer = PIXI.autoDetectRenderer(600, 400, {
    antialias: false,
    transparent: false,
    resolution: 1
})
let stage = new PIXI.Container()

renderer.view.style.border = '1px solid #666'
renderer.backgroundColor = 0xFFFFFF
document.body.appendChild(renderer.view)
renderer.render(stage)

PIXI.loader
    .add('building', buildingJson, {crossorigin: 'anonymous'})
    .add(reimu1)
    .on('progress', (loader, resources) => {
        console.log(resources.url)
        console.log(loader.progress)
    })
    .load(setup)

function setup (loader, resources) {
    console.log('textures', resources.building.textures)
    const bd1 = createSpriteFromTiles(resources, 'building', 'building_1.png')
    const bd2 = createSpriteFromTiles(resources, 'building', 'building_2.png')
    console.log('bd1', bd1)
    initSprite({stage, sprite: bd1, x: 100, y: 50, sx: .3, sy: .3, rot: 0})
    initSprite({stage, sprite: bd2, x: 300, y: 100, sx: .4, sy: .4, rot: 1})
    console.log('container size: ', stage.width, stage.height)
    console.log('renderer size', renderer.width, renderer.height)
    renderer.render(stage)
}
// Other ways
