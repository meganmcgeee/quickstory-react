import React, { Component } from 'react';

import MediaCapturer from 'react-multimedia-capture';

class AudioExample extends React.Component {
	constructor() {
		super();
		this.state = {
			granted: false,
			rejectedReason: '',
			recording: false,
			paused: false
		};

		this.handleGranted = this.handleGranted.bind(this);
		this.handleDenied = this.handleDenied.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.handleResume = this.handleResume.bind(this);
		this.downloadAudio = this.downloadAudio.bind(this);
	}
	handleGranted() {
		this.setState({ granted: true });
		console.log('Permission Granted!');
	}
	handleDenied(err) {
		this.setState({ rejectedReason: err.name });
		console.log('Permission Denied!', err);
	}
	handleStart(stream) {
		this.setState({
			recording: true
		});

		console.log('Recording Started.');
	}
	handleStop(blob) {
		this.setState({
			recording: false
		});

		console.log('Recording Stopped.');
		this.downloadAudio(blob);
	}
	handlePause() {
		this.setState({
			paused: true
		});
	}
	handleResume(stream) {
		this.setState({
			paused: false
		});
	}
	handleError(err) {
		console.log(err);
	}
	downloadAudio(blob) {
		let url = URL.createObjectURL(blob);
		let a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.target = '_blank';
		document.body.appendChild(a);

		a.click();
	}
	render() {
		const granted = this.state.granted;
		const rejectedReason = this.state.rejectedReason;
		const recording = this.state.recording;
		const paused = this.state.paused;

		return (
			<div ref="app">
				<h3>Audio Recorder</h3>
				<MediaCapturer
					constraints={{ audio: true }}
					mimeType="audio/webm"
					timeSlice={10}
					onGranted={this.handleGranted}
					onDenied={this.handleDenied}
					onStart={this.handleStart}
					onStop={this.handleStop}
					onPause={this.handlePause}
					onResume={this.handleResume}
					onError={this.handleError} 
					render={({ start, stop, pause, resume }) => 
					<div>
					
						<button onClick={start}>Start</button>
						<button onClick={stop}>Stop</button>
						<button onClick={pause}>Pause</button>
						<button onClick={resume}>Resume</button>
					</div>
				} />
			</div>
		);
	}
}

export default AudioRecord;