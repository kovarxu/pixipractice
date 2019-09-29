import * as PIXI from 'pixi.js'
import { getState, setState } from './share'
import initReelsContainer from './reels'

const app = new PIXI.Application({ backgroundColor: 0x1099bb })
document.body.appendChild(app.view)

app.loader
  .add('img/doc/eggHead.png', 'img/doc/eggHead.png')
  .add('img/doc/flowerTop.png', 'img/doc/flowerTop.png')
  .add('img/doc/helmlok.png', 'img/doc/helmlok.png')
  .add('img/doc/skully.png', 'img/doc/skully.png')
  .load(onAssetsLoaded)

function onAssetsLoaded(...rest) {
  const slotTextures = [
    PIXI.Texture.from('img/doc/eggHead.png'),
    PIXI.Texture.from('img/doc/flowerTop.png'),
    PIXI.Texture.from('img/doc/helmlok.png'),
    PIXI.Texture.from('img/doc/skully.png'),
  ];
  setState('slotTextures', slotTextures)

  const reelsContainer = initReelsContainer()

  app.stage.addChild(reelsContainer)
}

app.ticker.add((delta) => {
  
})

