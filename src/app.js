import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Index from './Index/Index';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return (
		<BrowserRouter>
			<Index />
    </BrowserRouter>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('entry')
);