const rAF = requestAnimationFrame

class GameLoop {
  constructor ({load, update, render}) {
    this.stop = false
    this.load = load
    this.update = update
    this.render = render
  }

  load () {this.load()}

  resume () {
    let that = this
    rAF(loop)
    function loop () {
      if (that.stop) return false;
      if (that.load.ready) {
        that.update()
        that.render()
      }
      rAF(loop)
    }
  }

  halt () {
    this.stop = true
  }

  start () {
    this.stop = false
    this.load()
    this.resume()
  }
}

export default GameLoop
