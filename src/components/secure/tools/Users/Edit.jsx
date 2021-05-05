import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditUser extends Component {
	state = {
		roles: [],
		firstName: "",
		lastName: "",
		email: "",
		roleId: 0,
		redirect: false,
	};
	id = null;

	componentDidMount = async () => {
		// first get the user with that id
		this.id = this.props.match.params.id;

		const response = await axios.get(`/users/${this.id}`);
		const rolesResponse = await axios.get(`roles`);

		const userInfo = response.data.data;
		console.log(userInfo);

		this.setState({
			roles: rolesResponse.data.data,

			firstName: userInfo.first_name,
			lastName: userInfo.last_name,
			email: userInfo.email,
			roleId: userInfo.role_id,
		});
	};

	updateUser = async (e) => {
		e.preventDefault();
		const response = await axios.put(`/users/${this.id}`, {
			first_name: this.firstName,
			last_name: this.lastName,
			email: this.email,
			role_id: 1,
		});
		if (response.status === 200) {
			alert("user updates save succesfully");
			this.setState({
				redirect: true,
			});
		} else {
			alert("someting went wrong");
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={"/users"} />;
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
							Add New User
						</h2>

						<form className="mt-10" onSubmit={this.updateUser}>
							{/* <!-- first name Input --> */}
							<label
								htmlFor="first_name"
								className="block text-xs font-semibold  text-gray-600 uppercase"
							>
								First Name
							</label>
							<input
								defaultValue={this.state.firstName}
								onChange={(e) => (this.firstName = e.target.value)}
								id="first_name"
								type="text"
								name="first_name"
								placeholder="First name"
								autoComplete="first_name"
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
							<input
								defaultValue={this.state.lastName}
								onChange={(e) => (this.lastName = e.target.value)}
								id="last_name"
								type="text"
								name="last_name"
								placeholder="Last name"
								autoComplete="last_name"
								className="block w-full py-3 px-1 mt-2 
					text-gray-800 appearance-none 
					border-b-2 border-gray-100
					focus:text-gray-500 focus:outline-none focus:border-gray-200"
								required
							/>

							{/* <!-- Email Input --> */}
							<label
								htmlFor="email"
								className="block text-xs font-semibold mt-5 text-gray-600 uppercase"
							>
								E-mail
							</label>
							<input
								defaultValue={this.state.email}
								onChange={(e) => (this.email = e.target.value)}
								id="email"
								type="email"
								name="email"
								placeholder="e-mail address"
								autoComplete="email"
								className="block w-full py-3 px-1 mt-2 
					text-gray-800 appearance-none 
					border-b-2 border-gray-100
					focus:text-gray-500 focus:outline-none focus:border-gray-200"
								required
							/>

							{/* <!-- Role Selection --> */}
							<label
								htmlFor="password"
								className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
							>
								Role
							</label>
							<select
								name="role_id"
								className="form-control"
								defaultValue={this.state.role_id}
								onChange={(e) => (this.roleId = parseInt(e.target.value))}
							>
								{this.state.roles.map((role) => {
									return (
										<option key={role.id} value={role.id}>
											{role.name}
										</option>
									);
								})}
							</select>

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

export default EditUser;
