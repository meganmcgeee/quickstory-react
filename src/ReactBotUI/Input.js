import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		//this.handleAudio = this.handleAudio.bind(this);
		this.handleChange = this.handleChange.bind(this);
		//this.handleListen = this.handleListen.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	

	handleChange(e) {
		const value = e.target.value;
		if (value.length >= 256) {
			alert('You have reached 256 character limit!');
		}
		this.setState({value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.value);
		this.setState({value: ''});
	}

	componentDidMount() {
		this._text.focus();
	}

	render(){
		return(
			<form className="text-form"
						onSubmit={this.handleSubmit}>
				<input className="text-input"
							 type="text"
							 name="inputText"
							 placeholder="Enter your message"
							 value={this.state.value}
							 ref={input => this._text = input}
							 onChange={this.handleChange}
							 autoComplete={'false'}
							 required />
				{/* <button className="btn-voice"
								type="button"
								value="Voice"
								onClick={this.handleListen}>
					<p>mic</p>
				</button> */}
				<button className="btn-send"
								type="submit"
								value="Send">
					<p>Send</p>
				</button>
			</form>
		);
	}
}
export default Input;
