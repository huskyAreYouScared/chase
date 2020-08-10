<!-- 回显主页 -->
<template>
  <div class='mouse-decorator'>
    <!-- <i class="iconfont icon-icon_msg launcher point-decoator"></i> -->
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import Proton from 'proton-engine'
import RAF from 'raf-manager'
export default {
  name: 'launch-platform',
  components: {

  },
  data () {
    return {
      dragging: false,
      proton: new Proton(),
      emitter: new Proton.Emitter(),
      canvasEl: null,
      context: null
    }
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      this.canvasEl = this.$refs.canvas
      this.canvasEl.width = 200
      this.canvasEl.height = 200
      if (localStorage.getItem('background')) {
        document.documentElement.style.setProperty('--bg', localStorage.getItem('background'))
      }
      this.context = this.canvasEl.getContext('2d')

      this.emitter.rate = new Proton.Rate(Proton.getSpan(10, 20))

      this.emitter.addInitialize(new Proton.Radius(0.5, 2))
      this.emitter.addInitialize(new Proton.Life(2))
      this.emitter.addInitialize(
        new Proton.Velocity(new Proton.Span(1, 2), new Proton.Span(0, 360), 'polar')
      )

      this.emitter.addBehaviour(new Proton.Gravity(1))
      this.emitter.addBehaviour(new Proton.Color('random'))
      this.emitter.addBehaviour(new Proton.Scale(3, 0))
      this.emitter.addBehaviour(new Proton.Alpha(1, 0))

      this.proton.addEmitter(this.emitter)

      const renderer = new Proton.CanvasRenderer(this.canvasEl)

      this.proton.addRenderer(renderer)

      RAF.add(() => {
        this.proton.update()
      }, 60)
    }
  },
  mounted () {
    ipcRenderer.on('keyboard-change', (event, data) => {
      this.emitter.p.x = 100
      this.emitter.p.y = 100
      this.emitter.emit('once')
    })
    // init style
    this.init()
  },
  beforeDestroy () {}
}
</script>
<style lang='scss' scoped>
.mouse-decorator{
  filter: saturate(200%);
  opacity: var(--opacity);
  width: var(--windowWidth);
  height: var(--windowWidth);
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .point-decoator{
    padding: 5px;
    background: var(--bg);
    border-radius: 50%;
    color: var(--fontColor);
    font-size: var(--fontSize);
  }
}
</style>