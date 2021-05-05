import React, { Component } from "react";

class Paginator extends Component {
	page = 1;

	next = () => {
		if (this.page === this.props.last_page) return;
		this.page++;
		this.props.handleChange(this.page);
	};

	prev = () => {
		if (this.page === 1) return;
		this.page--;
		this.props.handleChange(this.page);
	};

	render() {
		return (
			<ul className="m-3 p-3 flex justify-center">
				<li className="mx-3">
					<button
						onClick={this.prev}
						className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-gray-800 hover:bg-gray-500 border-gray-900 text-white"
					>
						Prev
					</button>
				</li>
				<li className="mx-3">
					<button
						onClick={this.next}
						className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-gray-800 hover:bg-gray-500 border-gray-900 text-white"
					>
						Next
					</button>
				</li>
			</ul>
		);
	}
}

export default Paginator;
