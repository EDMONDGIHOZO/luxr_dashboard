import React, { Component } from "react";
import logo from "../../images/logo.svg";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Register extends Component {
	// user information variables
	first_name = "";
	last_name = "";
	email = "";
	password = "";
	confirm_password = "";

	// app
	state = {
		redirect: false,
	};

	// filling the form
	register = async (e) => {
		e.preventDefault();

		await axios.post("/register", {
			email: this.email,
			password: this.password,
			confirm_password: this.confirm_password,
			first_name: this.first_name,
			last_name: this.last_name,
		});

		this.setState({
			redirect: true,
		});
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={"/login"} />;
		}
		return (
			<>
				<div className="h-full py-5 bg-gray-500">
					<div className="grid place-items-center mx-2 my-20 sm:my-auto">
						<img src={logo} alt="logo" className="w-28 h-28 my-5" />
						{/* <!-- Auth Card --> */}
						<div
							className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
						>
							<h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
								Create Account
							</h2>

							<form className="mt-10" onSubmit={this.register}>
								{/* <!-- first name Input --> */}
								<label
									htmlFor="first_name"
									className="block text-xs font-semibold  text-gray-600 uppercase"
								>
									First Name
								</label>
								<input
									onChange={(e) => (this.first_name = e.target.value)}
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
									onChange={(e) => (this.last_name = e.target.value)}
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

								{/* <!-- Password Input --> */}
								<label
									htmlFor="password"
									className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
								>
									Password
								</label>
								<input
									onChange={(e) => (this.password = e.target.value)}
									id="password"
									type="password"
									name="password"
									placeholder="password"
									autoComplete="current-password"
									className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
									required
								/>
								{/* <!-- Password confirm Input --> */}
								<label
									htmlFor="passwordConfirm"
									className="block mt-2 text-xs my-5 font-semibold text-gray-600 uppercase"
								>
									Password
								</label>
								<input
									onChange={(e) => (this.confirm_password = e.target.value)}
									id="passwordConfirm"
									type="password"
									name="passwordConfirm"
									placeholder="password"
									autoComplete="confirm-password"
									className="block w-full py-3 px-1 mt-2 mb-4
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
									Register
								</button>

								<div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
									<a href="forgot-password" className="flex-2 underline">
										Forgot password?
									</a>

									<p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
										or
									</p>

									<a href="login" className="flex-2 underline">
										Login
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>{" "}
			</>
		);
	}
}

export default Register;
