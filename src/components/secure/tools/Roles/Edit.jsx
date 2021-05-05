import React, { Component } from "react";
import axios from "axios";
import Wrapper from "../Wrapper";
import { Redirect } from "react-router-dom";

class EditRole extends Component {
	name = "";
	id = 0;

	state = {
		name: "",
		selected: [],
		permissions: [],
		redirect: false,
	};

	selected = [];

	componentDidMount = async () => {
		this.id = this.props.match.params.id;
		const permissionCall = await axios.get(`permissions`);
		const roleCall = await axios.get(`roles/${this.id}`);
		const role = roleCall.data.data;

		this.selected = role.permissions.map((p) => p.id);
		this.setState({
			name: role.name,
			selected: this.selected,
			permissions: permissionCall.data.data,
		});
	};

	checker = (id) => {
		if (this.isChecked(id)) {
			this.selected = this.selected.filter((x) => x !== id);
			return;
		}
		this.selected.push(id);
	};

	isChecked = (id) => {
		return this.state.selected.filter((x) => x === id).length > 0;
	};

	submitRole = async (e) => {
		e.preventDefault();
		await axios.put(`roles/${this.id}`, {
			name: this.name,
			permissions: this.selected,
		});

		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={"/roles"} />;
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
							edit role
						</h2>

						<form className="mt-10" onSubmit={this.submitRole}>
							{/* <!-- first name Input --> */}
							<label
								htmlFor="first_name"
								className="block text-xs font-semibold  text-gray-600 uppercase"
							>
								Name
							</label>
							<input
								defaultValue={(this.name = this.state.name)}
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

							{/* permissions */}
							{this.state.permissions.map((permission) => {
								return (
									<div
										className="flex justify-start items-start my-4"
										key={permission.id}
									>
										<div className="bg-white border-2 rounded  w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500">
											<input
												type="checkbox"
												defaultChecked={this.isChecked(permission.id)}
												className="h-6 w-6"
												value={permission.id}
												onChange={(e) => this.checker(permission.id)}
											/>
										</div>
										<div className="select-none">{permission.name}</div>
									</div>
								);
							})}

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

export default EditRole;
