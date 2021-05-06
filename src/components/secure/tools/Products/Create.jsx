import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateProduct extends Component {
	title = "";
	description = "";
	price = 0;
	image = "";

	state = {
		redirect: false,
	};

	upload = async (files) => {
		if (files === null) {
			return;
		} else {
			const data = new FormData();
			data.append("image", files[0]);

			const response = await axios.post("upload", data);
			console.log(response);
		}
	};

	saveProduct = async (e) => {
		e.preventDefault();

		await axios.post(`products/create`, {
			price: this.price,
			description: this.description,
			image: this.image,
			name: this.title,
		});

		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={"/products"} />;
		}

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
							ADD PRODUCT
						</h2>

						<form className="mt-10" onSubmit={this.saveProduct}>
							{/* <!-- first name Input --> */}
							<label
								htmlFor="title"
								className="block text-xs font-semibold  text-gray-600 uppercase"
							>
								Title
							</label>
							<input
								onChange={(e) => (this.title = e.target.value)}
								id="title"
								type="text"
								name="title"
								placeholder="title"
								autoComplete="title"
								className="block w-full py-3 px-1 mt-2 
					text-gray-800 appearance-none 
					border-b-2 border-gray-100
					focus:text-gray-500 focus:outline-none focus:border-gray-200"
								required
							/>
							<label
								htmlFor="description"
								className="block text-xs font-semibold  text-gray-600  mt-3 uppercase"
							>
								Description
							</label>
							<textarea
								onChange={(e) => (this.description = e.target.value)}
								id="description"
								type="text"
								name="description"
								placeholder="description"
								autoComplete="description"
								className="block w-full py-3 px-1 mt-1 
					text-gray-800 appearance-none 
					border-b-2 border-gray-100
					focus:text-gray-500 focus:outline-none focus:border-gray-200"
								required
							/>
							<label
								htmlFor="image"
								className="block text-xs font-semibold  text-gray-600  mt-3 uppercase"
							>
								Image File
							</label>
							<input
								onChange={(e) => this.upload(e.target.files)}
								id="image"
								type="file"
								name="image"
								hidden
								className="block w-full py-3 px-1 mt-1 
					text-gray-800 appearance-none 
					border-b-2 border-gray-100
					focus:text-gray-500 focus:outline-none focus:border-gray-200"
								required
							/>
							<label
								htmlFor="price"
								className="block text-xs font-semibold  text-gray-600  mt-3 uppercase"
							>
								Price
							</label>
							<input
								onChange={(e) => (this.price = parseFloat(e.target.value))}
								id="price"
								type="number"
								name="price"
								className="block w-full py-3 px-1 mt-1 
					text-gray-800 appearance-none 
					border-b-2 border-gray-100
					focus:text-gray-500 focus:outline-none focus:border-gray-200"
								required
							/>

							<button
								type="submit"
								className="w-full py-3 mt-10 bg-gray-800 rounded-sm
					font-medium text-white uppercase
					focus:outline-none hover:bg-gray-700 hover:shadow-none"
							>
								SAVE
							</button>
						</form>
					</div>
				</div>
			</Wrapper>
		);
	}
}

export default CreateProduct;
