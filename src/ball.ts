//import {h} from "preact"
import {Component, html, h} from "./preactive/component"
import mouse from "./mouse";

import {CursorOffsetValue} from './ball-prefs'

const r = 10;

export default class Ball extends Component<{}> {
  getStyle() {
    const {x, y} = mouse.get()
    const {xOffset, yOffset} = CursorOffsetValue.get()
    return {
      position: "absolute",
      top: (y - r) + xOffset,
      left: (x - r) + yOffset,
      width: r * 2,
      height: r * 2,
      borderRadius: r,
      backgroundColor: "green",
      pointerEvents: "none"
    };
  }
  view() {
    return html`<div style=${this.getStyle()} />`
  }
}
