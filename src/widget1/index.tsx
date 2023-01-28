import { render } from 'react-dom';
import ClayAlert from '@clayui/alert';
import React from 'react';
import './app.scss';

const ELEMENT_ID = 'ce-workspace';

class WebComponent extends HTMLElement {
	connectedCallback() {
		render(
			<h1>
				<ClayAlert
					displayType='info'
					title='Info'>
					This app 1.
				</ClayAlert>
			</h1>,
			this
		);
	}
}

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, WebComponent);
}
