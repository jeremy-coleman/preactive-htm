import Component , {html, h} from "./preactive/component"
import { Value } from "./preactive/reactive"

export let CursorOffsetValue = new Value({xOffset: 30, yOffset:15})

export default class BallChanger extends Component<{}> {

setBelow = () => CursorOffsetValue.set({
      xOffset: 30, 
      yOffset: 15
  })

setExact = () => CursorOffsetValue.set({
      xOffset: 0, 
      yOffset: 0
  })

  

  view() {
    return (
      html`<div>
        <button onClick=${this.setBelow}>${"set ball behind cursor"}</button>
        <button onClick=${this.setExact}>${"set ball on the pointer"}</button>
      </div>`
    )
  }
}