import { Sprite } from "pixi.js";

function loadTextureFromTiles (resources, tileName, txName) {
  if (resources && typeof resources === 'object') {
    if (resources[tileName] && resources[tileName]['textures']) {
      let texture = resources[tileName]['textures'][txName]
      if (texture) return texture
      else console.warn(`texture ${txName} doesn't exist.`)
    } else {
      console.warn(`resource ${tileName} or textures doesn't exist.`)
    }
  }
}

function createSpriteFromTiles (resources, tileName, txName) {
  let texture = loadTextureFromTiles(resources, tileName, txName)
  if (texture) {
    return new Sprite(texture)
  } else {
    console.warn(`create sprite error.`)
    return undefined
  }
}

function initSprite ({stage, sprite, x, y, sx, sy, rot}) {
  sprite.position.set(x, y)
  sprite.scale.set(sx, sy)
  sprite.rotation = rot
  stage.addChild(sprite)
}

export { loadTextureFromTiles, createSpriteFromTiles, initSprite }