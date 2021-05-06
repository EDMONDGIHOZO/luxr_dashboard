import React, { Component } from "react";
import axios from "axios";

class Deleter extends Component {
	endPoint = this.props.endPoint;
	id = this.props.id;

	delete = async () => {
		if (window.confirm("Are you sure to delete this")) {
			await axios.delete(`${this.endPoint}/${this.id}`);

			this.props.handleDelete(this.id);
		}
	};

	render() {
		return (
			<button
				className="button bg-red-700 p-3 m-1 rounded font-bold text-white uppercase"
				onClick={() => this.delete()}
			>
				{" "}
				Delete{" "}
			</button>
		);
	}
}

export default Deleter;
