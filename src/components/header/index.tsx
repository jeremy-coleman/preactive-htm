import { h, Component } from 'preact';
import { route } from 'preact-router';
import TopAppBar from 'preact-material-components/TopAppBar';
//import Drawer from 'preact-material-components/Drawer';

import Drawer from 'preact-material-components/Drawer';

import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TopAppBar/style.css';
import { RandomThemeButton } from '../theme-changer';

// import style from './style';

export default class Header extends Component<any, any> {
	drawer: any;
	dialog: any;
	
	closeDrawer() {
		this.drawer.MDComponent.open = false;
		this.state = {
			darkThemeEnabled: false
		};
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	openSettings = () => this.dialog.MDComponent.show();

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	linkTo = path => () => {
		route(path);
		this.closeDrawer();
	};

	goHome = this.linkTo('/');
	goToDemo = this.linkTo('/demo');

	toggleDarkTheme = () => {
		this.setState(
			{
				darkThemeEnabled: !this.state.darkThemeEnabled
			},
			() => {
				if (this.state.darkThemeEnabled) {
					document.body.classList.add('mdc-theme--dark');
				}
				else {
					document.body.classList.remove('mdc-theme--dark');
				}
			}
		);
	}

	render() {
		return (
			<div className="toolbar" style={{display: 'flex', flexDirection: 'row'}}>
				<TopAppBar onNav={() => void 0} style={{display: 'flex', flexDirection: 'row', zIndex: 0, position: 'relative'}}>
				
					<TopAppBar.Row>
						<TopAppBar.Section align-start>
							<TopAppBar.Icon onClick={this.openDrawer}>
								menu
							</TopAppBar.Icon>
							
							<TopAppBar.Title></TopAppBar.Title>
							<RandomThemeButton style={{color: 'white'}}/>
						</TopAppBar.Section>
						<TopAppBar.Section align-end onClick={this.openSettings}>
							<TopAppBar.Icon>settings</TopAppBar.Icon>
						</TopAppBar.Section>
					</TopAppBar.Row>
				</TopAppBar>


				<Dialog ref={this.dialogRef}>
					<Dialog.Header>Settings</Dialog.Header>
					<Dialog.Body>
						<div>
							Enable dark theme <Switch onClick={this.toggleDarkTheme} />
						</div>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton accept>okay</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}
}
