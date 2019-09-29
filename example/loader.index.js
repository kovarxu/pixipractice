import * as PIXI from 'pixi.js'
import {TextureCache} from './declaration.js'
import {reimu1, reimu2, reimu3, reimu4, jinja1, jinja2} from './imageload.js'

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
    .add('reimu1', reimu1)
    .add('reimu2', reimu2)
    .add('reimu3', reimu3)
    .add('reimu4', reimu4)
    .add('jinja1', jinja1)
    .add('jinja2', jinja2)
    .on('progress', (loader, resources) => {
        console.log(resources.url)
        console.log(loader.progress)
    })
    .load((loader, resources) => {
        let reimu1 = new PIXI.Sprite(resources['reimu1'].texture)
        // reimu1.scale = new PIXI.Point(.3, .3)
        reimu1.scale.set(.3, .3)
        // reimu1.rotation = .4
        reimu1.position.set(100, 100)
        stage.addChild(reimu1)
        loadTileSucc()
        renderer.render(stage)
        // console.log(TextureCache['reimu1'])
    })

function loadTileSucc () {
    let r1 = new PIXI.Texture(TextureCache['reimu1'])
    r1.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
    r1.frame = new PIXI.Rectangle(200, 200, 50, 50)
    let tile = new PIXI.Sprite(r1)
    tile.position.set(322, 122)
    stage.addChild(tile)
}
// Other ways
