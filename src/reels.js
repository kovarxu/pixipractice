import * as PIXI from 'pixi.js'
import { REEL_WIDTH, SYMBOL_SIZE, M_ROW, M_COL, slotTextures } from './share'

const reels = []
export const reelsContainer = new PIXI.Container()

for (let i = 0; i < M_ROW; i++) {
  const rc = new PIXI.Container();
  rc.x = i * REEL_WIDTH;
  reelsContainer.addChild(rc);

  const reel = genReelObject(rc)
  reel.blur.blurX = 0;
  reel.blur.blurY = 0;
  
  rc.filters = [ reel.blur ]

  // build the symbols
  for (let j = 0; j < M_COL; j++) {
    // create a sprite
    const symbol = new PIXI.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);

    symbol.y = j * SYMBOL_SIZE;
    symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);

    reel.symbols.push(symbol);
    rc.addChild(symbol);
  }

  reels.push(reel)
}

function genReelObject (rc) {
  return {
    container: rc,
    symbols: [],
    position: 0,
    previousPosition: 0,
    blur: new PIXI.filters.BlurFilter(),
  }
}
