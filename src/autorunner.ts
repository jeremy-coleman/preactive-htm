
import { Value } from "./preactive/reactive"
import {Component, html, h} from "./preactive/component"

interface CounterProps {
	name: string
	count: Value<number>
}

class Counter extends Component<CounterProps> {
	increment = () => this.props.count.update(count => count + 1)
	decrement = () => this.props.count.update(count => count - 1)
	

	view() {
		return (
			html`<div>
				<button onClick=${this.decrement}>${"-"}</button>
				<span>${this.props.name} ${this.props.count.get()}</span>
				<button onClick=${this.increment}>${"+"}</button>
			</div>`
		)
	}
}

// This component will display the on or off value based on the main switch.
// The point of this component is to demonstrate that every time we run a
// reactive function, we rederive the dependencies.

export default class Autorunner extends Component<{}> {
	activeValue = new Value(true)
	value1 = new Value(1)
	value2 = new Value(2)

	toggle = () => this.activeValue.update(value => !value)
	

	view() {
		console.log("render")
		return (
			html`<div>
				<${Counter} name="Value 1 =" count=${this.value1} />
				<${Counter} name="Value 2 =" count=${this.value2} />
				<button onClick=${this.toggle}>
					${this.activeValue.get() ? "Show Value 1" : "Show Value 2"}
				</button>
				<strong>
					value: ${this.activeValue.get() ? this.value1.get() : this.value2.get()}
				</strong>
			</div>`
		)
	}
}
