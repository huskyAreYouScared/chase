let effectLibrary = [
  {
    name: 'basic',
    effectFun: function (canvasEl, proton, emitter, RAF, Proton) {
      emitter.rate = new Proton.Rate(Proton.getSpan(10, 20))
      emitter.addInitialize(new Proton.Radius(0.5, 2))
      emitter.addInitialize(new Proton.Life(2))
      emitter.addInitialize(
        new Proton.Velocity(new Proton.Span(1, 2), new Proton.Span(0, 360), 'polar')
      )
      emitter.addBehaviour(new Proton.Gravity(1))
      emitter.addBehaviour(new Proton.Color('random'))
      emitter.addBehaviour(new Proton.Scale(3, 0))
      emitter.addBehaviour(new Proton.Alpha(1, 0))
      proton.addEmitter(emitter)
      const renderer = new Proton.CanvasRenderer(canvasEl)
      proton.addRenderer(renderer)
      RAF.add(() => {
        proton.update()
      }, 60)
    }
  }
]

export default effectLibrary
