# vue-canvasvideo

[![npm](https://img.shields.io/npm/v/vue-canvasvideo.svg)](https://www.npmjs.com/package/vue-canvasvideo) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js component for playing videos on HTML canvas. Useful for achieving autoplay videos in iOS and Safari.


## Overview

## Installation

```bash
npm install --save vue-canvasvideo
```

## Setup

### Bundler (Webpack, Rollup)

```js
// in your entrypoint
import Vue from 'vue'
import CanvasVideo from 'vue-canvasvideo'
import 'vue-canvasvideo/dist/vuecanvasvideo.min.css'

Vue.use(CanvasVideo)
```

## Usage

### Required Markup

```js

  // load the video and start playing automatically
  <Canvas-video
    :src="https://example.com/some_video.mp4"
    :autoplay="true"
  ></Canvas-video>

```

## Practical Use Cases

vue-canvasvideo is useful for achieving autoplay video on iOS, which is especially useful for video backgrounds. As of iOS 10, autoplay video is [supported](https://webkit.org/blog/6784/new-video-policies-for-ios/) so vue-canvasvideo is intended as a fallback for older iOS/Safari versions.

Although not the intended use case, vue-canvasvideo can also be used as a regular video player and optionally includes controls.

vue-canvasvideo can switch seamlessly between HTML video and canvas as needed and includes an option to "cover" the element it's placed in, similar to background-size: cover in css.

## Props

```js
props: {
  src: { // the video source
    type: String,
    required: true
  },
  fps: { // frames per second, the playback speed
    type: Number,
    default: () => 25
  },
  showVideo: { // switch between playback on video or canvas
    type: Boolean,
    default: () => false
  },
  autoplay: { // automatically play the video
    type: Boolean,
    default: () => false
  },
  loop: { // loop the video infinitely
    type: Boolean,
    default: () => false
  },
  playPauseOnClick: { // toggle play/pause on click of video
    type: Boolean,
    default: () => false
  },
  resetOnLast: { // reset start after complete
    type: Boolean,
    default: () => false
  },
  cover: { // should the video cover within it's container (useful for backgrounds; cannot be used with 'square' prop)
    type: Boolean,
    default: () => false
  },
  square: { // should the video be centered vertically in a square container (cannot be used with 'cover' prop)
    type: Boolean,
    default: () => false
  },
  controls: { // show video playback controls
    type: Boolean,
    default: () => false
  }
}
```

## Development

### Build

Bundle the js to the `dist` folder:

```bash
npm run build
```

## Acknowledgements
Based on [https://stanko.github.io/html-canvas-video-player/](https://stanko.github.io/html-canvas-video-player/)


## License

[MIT](http://opensource.org/licenses/MIT)
