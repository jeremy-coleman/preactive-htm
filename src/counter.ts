import {Component, html, h} from "./preactive/component"
import { Value } from "./preactive/reactive"

export default class Counter extends Component<{}> {
  count = new Value(0)

  increment = () => this.count.update(count => count + 1)
  decrement = () => this.count.update(count => count - 1)
  

  view() {
    return (
      html`<div>
        <button onClick=${this.decrement}>${"-"}</button>
        <span>${this.count.get()}</span>
        <button onClick=${this.increment}>${"+"}</button>
      </div>`
    )
  }
}
