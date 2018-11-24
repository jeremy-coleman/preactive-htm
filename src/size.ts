import { Value } from "./preactive/reactive";

const windowSize = new Value({
  height: window.innerHeight,
  width: window.innerWidth,
})

window.onresize = function() {
  windowSize.set({
    height: window.innerHeight,
    width: window.innerWidth
  })
};

export default windowSize;
