import Proton from 'proton-engine'
import rafManager from 'raf-manager'
import effectBasicLibrary from './effectLibrary'
class Schedule {
  proton = new Proton()
  emitter = new Proton.Emitter()
  RAF = rafManager
  effectLibrary = {}
  constructor (canvasEl) {
    this.canvasEl = canvasEl
    this.init()
  }
  addEffect (effectName, callBack) {
    this.effectLibrary[effectName] = callBack
  }

  openEffect (effectName) {
    this.effectLibrary[effectName](this.canvasEl, this.proton, this.emitter, this.RAF, Proton)
  }

  init () {
    effectBasicLibrary.forEach(effect => {
      this.addEffect(effect.name, effect.effectFun)
    })
  }
}

export default Schedule
