import { h, Component } from 'preact';
import { route } from 'preact-router';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';


let setPrimaryColor = async (color) => void await document.body.style.setProperty("--primary", color);
let fromSelector = async (elementQuery, color) => void await document.querySelector<any>(`${elementQuery}`).style.setProperty("--primary", color);

let themeFromSelector = async (elementQuery, color) => void await document.querySelector<any>(`${elementQuery}`).style.setProperty("--mdc-theme-primary", color);

let themeFromSelectAll = async (elementQuery, color) => void await document.querySelectorAll<any>(`${elementQuery}`).forEach(el => el.style.setProperty("--mdc-theme-primary", color));


let setPrimaryThemeVariables = async (color) => void await document.body.style.setProperty("--mdc-theme-primary", color);
let pickRandomColor = () => "#"+((1<<24)*Math.random()|0).toString(16)



let rngTheme = () =>  setPrimaryThemeVariables(pickRandomColor())

let rngNestedTheme = () => themeFromSelector('#home', pickRandomColor())
let rngNested2Theme = () => themeFromSelectAll('#brand-theme-barrier >*', pickRandomColor())

export let RandomThemeButton = props => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
    <Button
        {...props}
        onClick={() => rngTheme()}
    >
        {"Change Theme"}
    </Button>
        <Button
        {...props}
        onClick={() => rngNestedTheme()}
    >
        {"Override Vendor Theme"}
    </Button>
    <div>
    <div id="brand-theme-barrier">
    <Button
        {...props}
        style={{background: 'var(--mdc-theme-primary)'}}
        onClick={() => rngNested2Theme()}
    >
        {"Override inside consumer Barrier"}
    </Button>
    </div>
    </div>
    </div>
    )
}



let x = `
p ~ "branded-theme-barrier" {
  background: #ff0000;
}`

export let ThemeBarrier = props => {
    return (
        <div id="branded-theme-barrier" {...props}>{props.children}</div>
    )
}