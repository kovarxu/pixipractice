class Signal {
  constructor () {
    this.proxy = {}
  }

  sign (name, obj, callback) {
    if (!this.proxy[name]) {
      this.proxy[name] = []
    }
    this.proxy[name].push({obj, callback})
  }

  emit (name, ...rest) {
    if (this.proxy[name]) {
      this.proxy[name].forEach(listener => {
        listener.callback.apply(listener.obj, rest)
      })
    }
  }
}

export default Signal
