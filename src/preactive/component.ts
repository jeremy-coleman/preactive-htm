import * as Preact from 'preact'
import {VNode} from 'preact'
import { ComputedValue } from "./reactive"
import { h, render as preactRender } from 'preact';
import htm from './htm';

const html: (strings: TemplateStringsArray, ...values: any[]) => VNode = htm.bind(h)


function render(tree: VNode, parent: HTMLElement): void {
	preactRender(tree, parent, parent.firstElementChild);
}
export { h, html, render };


export class Component<P = {}> extends Preact.Component<P> {
	_view: ComputedValue<VNode>

	constructor(props) {
		super(props)
		this._view = new ComputedValue(() => this.view(this.props))
		this._view.dependency.add(this._update)
	}

	willMount(props) {}
	componentWillMount() {
		this.willMount(this.props)
	}

	didMount(props) {}
	componentDidMount() {
		this.didMount(this.props)
	}

	willUpdate(props) {}
	componentWillUpdate(nextProps) {
		this._view.stale = true
		this.willUpdate(nextProps)
	}

	didUpdate(props) {}
	componentDidUpdate() {
		this.didUpdate(this.props)
	}

	willUnmount(props) {}
	componentWillUnmount() {
		this.willUnmount(this.props)
		this._view.stop()
		this._view.dependency.delete(this._update)
	}

	_updating = false
	
	_update = () => {
		if (!this._updating) {
			this._updating = true
			

			//idk what's better?

			// requestAnimationFrame(() => {
			// 	this.forceUpdate()
			// 	this._updating = false
			// })

			// setTimeout(() => {
			// 	this.forceUpdate()
			// 	this._updating = false
			// })

			setTimeout(() => {
				this.forceUpdate()
				this._updating = false
			})


		}
	}

	view(props): Preact.VNode {
		return null
	}

	render(): Preact.VNode {
		return this._view.get()
	}
}

export default Component