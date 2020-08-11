<!-- 回显主页 -->
<template>
  <div class='mouse-decorator'>
    <!-- <i class="iconfont icon-icon_msg launcher point-decoator"></i> -->
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
// import Proton from 'proton-engine'
// import RAF from 'raf-manager'
import Schedule from '@/plugins/schedule'
export default {
  name: 'launch-platform',
  components: {

  },
  data () {
    return {
      dragging: false,
      canvasEl: null,
      context: null,
      schedule: null
    }
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      this.canvasEl = this.$refs.canvas
      this.canvasEl.width = window.innerWidth
      this.canvasEl.height = window.innerHeight
      if (localStorage.getItem('background')) {
        document.documentElement.style.setProperty('--bg', localStorage.getItem('background'))
      }
      this.context = this.canvasEl.getContext('2d')

      let schedule = new Schedule(this.canvasEl)
      this.schedule = schedule
      schedule.openEffect('basic')
    }
  },
  mounted () {
    ipcRenderer.on('keyboard-change', (...args) => {
      let data = args[1]
      if (data.type === 'mousedown') {
        this.schedule.emitter.p.x = data.x
        this.schedule.emitter.p.y = data.y
        this.schedule.emitter.emit('once')
      }
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
  width: var(--commonWidth);
  height: var(--commonHeight);
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