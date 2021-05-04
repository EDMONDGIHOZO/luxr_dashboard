import React, { Component } from "react";

class Button extends Component {
	state = {
		name: this.props.name,
	};
	render() {
		return (
			<button
				type="button"
				className="bg-gray-500  text-white p-2 rounded hover:bg-red-500 m-1"
			>
				{this.state.name}
			</button>
		);
	}
}

export default Button;
