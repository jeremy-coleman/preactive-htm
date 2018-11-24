import * as Preact from "preact"
import {html, h} from "./preactive/component"
import Counter from "./counter"
import Ball from "./ball"
import Info from "./info"
import Autorunner from "./autorunner"
import BallChanger from './ball-prefs'

function app() {
	return (
		html`<div>
			<${Counter} />
			<${Counter} />
			<${Counter} />
			<${Counter} />
			<${Ball} />
			<${Info} />
			<${Autorunner} />
			<${BallChanger} />
		</div>`
	)
}

const root = document.createElement("div")
document.body.appendChild(root)

Preact.render(app(), root)
