import { Value } from "./preactive/reactive";

const mousePoint = new Value({x: 0, y: 0})

document.addEventListener("mousemove", function(event) {
  mousePoint.set({x: event.clientX, y: event.clientY })
});

export default mousePoint;
