export const REEL_WIDTH = 160;
export const SYMBOL_SIZE = 150;
export const M_ROW = 5;
export const M_COL = 4;

const _S = {
  slotTextures: []
} 

export function setState (key, value) {
  if (_S.hasOwnProperty(key)) {
    _S[key] = value
  } else {
    console.warn('key doesn\'t exist in store: ' + key)
  }
}

export function getState (key) {
  if (_S.hasOwnProperty(key)) {
    return _S[key]
  } else {
    return null
  }
}
