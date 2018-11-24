import { ComputedValue } from "./preactive/reactive";
import {Component, html, h} from "./preactive/component"
import mouse from "./mouse";
import size from "./size";

const x = new ComputedValue(() => mouse.get().x / size.get().width)
const y = new ComputedValue(() => mouse.get().y / size.get().height)

export default class Info extends Component<{}> {
  view() {
    return (
      html`
      <ul>
        <li>x: ${x.get()}</li>
        <li>y: ${y.get()}</li>
      </ul>`
    );
  }
}
