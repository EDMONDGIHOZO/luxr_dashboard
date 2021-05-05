import React, { Component } from "react";

class Deletor extends Component {
	itemId = 0;

	render() {
		return (
			<button
				className="button bg-red-500 p-3 m-1 rounded font-bold text-white uppercase"
				onClick={() => this.deleteProduct(this.itemId)}
			>
				{" "}
				Delete{" "}
			</button>
		);
	}
}

export default Deletor;
