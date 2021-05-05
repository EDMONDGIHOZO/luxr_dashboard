import React, { Component } from "react";
import axios from "axios";
import { Redirect, NavLink as Link } from "react-router-dom";

import Icon from "@material-ui/core/Icon";

class Nav extends Component {
	state = {
		redirect: false,
		active:
			"border-green-500 text-green-500 bg-gradient-to-r from-white to-green-100 border-r-4",
	};

	logout = async (e) => {
		await axios.post("logout", {});
		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={"/login"} />;
		}
		return (
			<nav className="mt-6">
				<div>
					<Link
						className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start dark:from-gray-700 dark:to-gray-800"
						to={"/"}
						activeClassName={this.state.active}
						exact
					>
						<span className="text-left">
							<Icon>dashboard</Icon>
						</span>
						<span className="mx-4 text-sm font-normal">Dashboard</span>
					</Link>
					<Link
						className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-500"
						to={"/users"}
						activeClassName={this.state.active}
					>
						<span className="text-left">
							<Icon>manage_accounts</Icon>
						</span>
						<span className="mx-4 text-sm font-normal">Users</span>
					</Link>
					<Link
						className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-500"
						to={"/products"}
						activeClassName={this.state.active}
					>
						<span className="text-left">
							<Icon>store_mall_directory</Icon>
						</span>
						<span className="mx-4 text-sm font-normal">Products</span>
					</Link>
					<a
						className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-500"
						href="/"
					>
						<span className="text-left">
							<Icon>receipt_long</Icon>
						</span>
						<span className="mx-4 text-sm font-normal">Orders</span>
					</a>
					<a
						className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-500"
						href="/"
					>
						<span className="text-left">
							<Icon>store</Icon>
						</span>
						<span className="mx-4 text-sm font-normal">store</span>
					</a>
					<a
						className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-gray-500"
						href="/"
					>
						<span className="text-left">
							<Icon>analytics</Icon>
						</span>
						<span className="mx-4 text-sm font-normal">Reports</span>
					</a>

					<button
						type="button"
						onClick={this.logout}
						className="bg-gray-500  text-white px-4 py-2 w-full transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
					>
						LOGOUT
					</button>
				</div>
			</nav>
		);
	}
}

export default Nav;
