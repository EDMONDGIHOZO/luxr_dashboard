import React, { Component } from "react";
import Nav from "../layouts/Nav";
import TopBar from "../layouts/TopBar";
import logo from "../../../images/logo.svg";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Wrapper extends Component {
	state = {
		redirect: false,
	};
	componentDidMount = async () => {
		try {
			const response = await axios.get("me");
			console.log(response);
		} catch (error) {
			this.setState({
				redirect: true,
			});
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={"/login"} />;
		}

		return (
			<>
				<main className="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
					<div className="flex items-start justify-between">
						<div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
							<div className="bg-white h-full rounded-2xl dark:bg-gray-700">
								<div className="flex items-center justify-center pt-6">
									<img src={logo} alt="logo" className="w-28 h-28" />
								</div>
								<Nav />
							</div>
						</div>
						<div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
							<TopBar />
							{this.props.children}
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default Wrapper;
