import axios from "axios";
import React, { Component } from "react";
import Wrapper from "../Wrapper";

class EditProduct extends Component {
	id = 0;

	state = {
		name: "",
		price: "",
		description: "",
		image: "",
	};

	componentDidMount = async () => {
		this.id = this.props.match.params.id;
		const response = await axios.get(`products/${this.id}`);
		console.log(response.data);
	};

	render() {
		return (
			<Wrapper>
				<div className="grid place-items-center mx-2 my-20 sm:my-auto">
					{/* <!-- Auth Card --> */}
					<div
						className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
			px-6 py-10 sm:px-10 sm:py-6 
			bg-white rounded-lg shadow-md lg:shadow-lg"
					>
						<h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
							Edit product
						</h2>

						<form className="mt-10" onSubmit={this.updateProduct}>
							{/* <!-- first name Input --> */}
							<label
								htmlFor="first_name"
								className="block text-xs font-semibold  text-gray-600 uppercase"
							>
								First Name
							</label>
							<input
								defaultValue={this.state.name}
								onChange={(e) => (this.name = e.target.value)}
								id="name"
								type="text"
								name="name"
								placeholder="name"
								autoComplete="name"
								className="block w-full py-3 px-1 mt-2 
					text-gray-800 appearance-none 
					border-b-2 border-gray-100
					focus:text-gray-500 focus:outline-none focus:border-gray-200"
								required
							/>
							{/* <!-- last name Input --> */}
							<label
								htmlFor="last_name"
								className="block text-xs font-semibold mt-5  text-gray-600 uppercase"
							>
								Last Name
							</label>

							<button
								type="submit"
								className="w-full py-3 mt-10 bg-gray-800 rounded-sm
					font-medium text-white uppercase
					focus:outline-none hover:bg-gray-700 hover:shadow-none"
							>
								Register
							</button>
						</form>
					</div>
				</div>
			</Wrapper>
		);
	}
}

export default EditProduct;
