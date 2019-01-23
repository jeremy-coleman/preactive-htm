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
        {"Change Root/Global Theme"}
    </Button>
        <Button
        {...props}
        onClick={() => rngNestedTheme()}
    >
        {"Override Vendor Theme(Look at the card)"}
    </Button>
    <div>
    <Button
        {...props}
        onClick={() => rngNested2Theme()}
    >
        {"Override inside consumer Barrier"}
    </Button>
    <ThemeBarrier><Button>Who needs jss</Button></ThemeBarrier>
    </div>
    </div>
    )
}


// u could also wrap stuff with this to act like a jss ThemeProvider 
export let ThemeBarrier = props => {
    return (
        <div id="brand-theme-barrier" {...props}>{props.children}</div>
    )
}