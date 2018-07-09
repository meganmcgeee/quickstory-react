import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
// import ChoosePath from './ChoosePath/ChoosePath';
import Index from './Index/Index';
// import AudioRecord from './AudioRecord/AudioRecord';
// import VideoRecord from './VideoRecord/VideoRecord';
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