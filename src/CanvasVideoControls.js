import {
  controlsStyles,
  controlsWrapStyles,
  playStyles,
  pauseStyles
} from './styles/controls/base'

export default {
  render (h) {
    return (
      h(
        'div',
        {
          attrs: { class: 'vue-canvasvideo-controls' },
          style: controlsStyles
        },
        [
          h(
            'div',
            {
              attrs: { class: 'vue-canvasvideo-controls-wrap' },
              style: controlsWrapStyles
            },
            [
              h(
                'svg',
                {
                  attrs: { class: 'vue-canvasvideo-controls-play', viewBox: '0 0 512 512' },
                  on: { click: () => this.$emit('play') },
                  style: playStyles
                },
                [
                  h(
                    'path',
                    { attrs: { d: 'M405.2 232.9L126.8 67.2c-3.4-2-6.9-3.2-10.9-3.2-10.9 0-19.8 9-19.8 20H96v344h.1c0 11 8.9 20 19.8 20 4.1 0 7.5-1.4 11.2-3.4l278.1-165.5c6.6-5.5 10.8-13.8 10.8-23.1s-4.2-17.5-10.8-23.1z' }}
                  )
                ]
              ),
              h(
                'svg',
                {
                  attrs: { class: 'vue-canvasvideo-controls-pause', viewBox: '0 0 1792 1792' },
                  on: { click: () => this.$emit('pause') },
                  style: pauseStyles
                },
                [
                  h(
                    'path',
                    {
                      attrs: {
                        d: 'M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45V192q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V192q0-26 19-45t45-19h512q26 0 45 19t19 45z'
                      }
                    }
                  )
                ]
              ),
              h(
                'div',
                { attrs: { class: 'vue-canvasvideo-controls-scrubber' }},
                [
                  h(
                    'input',
                    {
                      attrs: {
                        class: 'vue-canvasvideo-controls-timeline',
                        type: 'range',
                        min: 0,
                        max: this.durationRounded
                      },
                      domProps: {
                        value: this.elapsedRounded
                      },
                      on: {
                        input: (e) => this.$emit('scrubbing', e),
                        change: (e) => this.$emit('timechange', e)
                      }
                    }
                  )
                ]
              ),
              h(
                'p',
                { attrs: { class: 'vue-canvasvideo-elapsed' }},
                `${this.elapsedFormatted} / ${this.durationFormatted}`
              )
            ]
          )
        ]
      )
    )
  },
  methods: {
    formatSeconds (seconds) {
      if (seconds >= 3600) {
        // over an hour long, switch to hh:mm:ss
        return new Date(seconds * 1000).toISOString().substr(11, 8)
      }
      return new Date(seconds * 1000).toISOString().substr(14, 5)
    }
  },
  computed: {
    elapsedRounded () {
      return Math.round(this.elapsed)
    },
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
    }
  }

}
