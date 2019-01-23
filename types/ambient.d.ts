declare var PRERENDER: boolean

declare module "*.css"

declare module "worker-loader!*" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}