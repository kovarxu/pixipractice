const keyDownEvents = []
const keyUpEvents = []

window.addEventListener('keydown', function (e) {
  let keyCode = e.keyCode
  if (keyCode && keyDownEvents[keyCode]) {
    let events = keyDownEvents[keyCode]
    events.forEach(event => {
      event.callback.apply(event.context)
    })
  }
})

function bindKeyDownEvent (key, callback, context) {
  let keyCode = KEYMAP[key]
  if (keyCode) {
    if (!keyDownEvents[keyCode]) {
      keyDownEvents[keyCode] = []
    }
    keyDownEvents[keyCode].push({callback, context})
  }
}

function bindKeyUpEvent (key, callback) {
  let keyCode = KEYMAP[key]
  if (keyCode) {
    keyUpEvents.push({keyCode, callback})
  }
}

function delKeyDownEvent (key, callback) {
}

function delKeyUpEvent (key, callback) {
}

const KEYMAP = {
  'arrow_left': 37,
  'arrow_up': 38,
  'arrow_right': 39,
  'arrow_down': 40
}

export { bindKeyDownEvent }
