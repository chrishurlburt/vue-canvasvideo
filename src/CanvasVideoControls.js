import rangeSlider from 'rangeslider-pure'

export default {
  render (h) {
    return (
      h(
        'div',
        {
          attrs: { class: 'vue-canvasvideo-controls' },
          on: { click: e => e.stopPropagation() }
        },
        [
          h(
            'div',
            {
              attrs: { class: 'vue-canvasvideo-controls__wrap' }
            },
            [
              (!this.playing && this.renderPlay(h)),
              (this.playing && this.renderPause(h)),
              h(
                'div',
                { attrs: { class: 'vue-canvasvideo-controls__scrubber' }},
                [
                  h(
                    'input',
                    {
                      attrs: {
                        class: 'vue-canvasvideo-controls__timeline',
                        type: 'range'
                      },
                      ref: 'timeline'
                    }
                  )
                ]
              ),
              h(
                'p',
                { attrs: { class: 'vue-canvasvideo__elapsed' }},
                `${this.elapsedFormatted} / ${this.durationFormatted}`
              )
            ]
          )
        ]
      )
    )
  },
  watch: {
    elapsed (elapsed) {
      this.$refs.timeline.rangeSlider.update({
        min: 0,
        max: this.durationRounded,
        step: 0.5,
        value: elapsed,
        buffer: 0
      })
    }
  },
  methods: {
    formatSeconds (seconds) {
      if (seconds >= 3600) {
        // over an hour long, switch to hh:mm:ss
        return new Date(seconds * 1000).toISOString().substr(11, 8)
      }
      return new Date(seconds * 1000).toISOString().substr(14, 5)
    },
    renderPlay (h) {
      return h(
        'svg',
        {
          attrs: { class: 'vue-canvasvideo-control__button vue-canvasvideo-controls__button--play', viewBox: '0 0 320 389' },
          on: { click: (e) => this.$emit('play', e) }
        },
        [
          h(
            'path',
            { attrs: { d: 'M320 194.5L0 389V0' }}
          )
        ]
      )
    },
    renderPause (h) {
      return h(
        'svg',
        {
          attrs: { class: 'vue-canvasvideo-control__button vue-canvasvideo-controls__button--pause', viewBox: '0 0 320 389' },
          on: { click: (e) => this.$emit('pause', e) }
        },
        [
          h(
            'path',
            {
              attrs: {
                d: 'M0 389h120V0H0v389zM200 0v389h120V0H200z'
              }
            }
          )
        ]
      )
    }
  },
  mounted () {
    rangeSlider.create(this.$refs.timeline, {
      value: 0,
      onSlide: position => this.$emit('scrubbing', position),
      onSlideEnd: position => this.$emit('timechange', position)
    })
  },
  computed: {
    durationRounded () {
      return Math.round(this.duration)
    },
    elapsedFormatted () {
      return this.formatSeconds(this.elapsed)
    },
    durationFormatted () {
      return this.formatSeconds(this.duration)
    }
  },
  props: {
    duration: {
      type: Number,
      required: true
    },
    elapsed: {
      type: Number,
      required: true
    },
    playing: {
      type: Boolean,
      required: true
    }
  }
}
