import CanvasVideo from './CanvasVideo'

function plugin (Vue, options = {}) {
  Vue.component('CanvasVideo', CanvasVideo)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  CanvasVideo,
  version
}
