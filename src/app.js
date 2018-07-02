import React, { Component } from 'react';

import AudioExample from './AudioExample';
import ReactDOM from 'react-dom';
import VideoExample from './VideoExample';

class App extends Component {
	render() {
		return (
			<div>
				<h1>React Multimedia Capture Test</h1>
				<hr />

				<AudioExample />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('entry')
);