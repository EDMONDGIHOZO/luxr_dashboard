import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import UserCard from "./UserCard";
import axios from "axios";

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get("all-users").then((response) => {
			setUsers(response.data.results);
		});
	}, []);

	return (
		<Wrapper>
			<>
				{/* <!-- component --> */}
				<div className="h-screen w-full flex overflow-hidden">
					<main
						className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
	duration-500 ease-in-out overflow-y-auto"
					>
						<div className="mx-10 my-2">
							<nav
								className="flex flex-row justify-between border-b
			dark:border-gray-600 dark:text-gray-400 transition duration-500
			ease-in-out"
							>
								<div className="flex">
									{/* <!-- Top NavBar --> */}

									<a
										href="users-dashboard/"
										className="py-2 block text-green-500 border-green-500
					dark:text-green-200 dark:border-green-200
					focus:outline-none border-b-2 font-medium capitalize
					transition duration-500 ease-in-out"
									>
										users
									</a>
									<button
										className="ml-6 py-2 block border-b-2 border-transparent
					focus:outline-none font-medium capitalize text-center
					focus:text-green-500 focus:border-green-500
					dark-focus:text-green-200 dark-focus:border-green-200
					transition duration-500 ease-in-out"
									>
										role
									</button>
									<button
										className="ml-6 py-2 block border-b-2 border-transparent
					focus:outline-none font-medium capitalize text-center
					focus:text-green-500 focus:border-green-500
					dark-focus:text-green-200 dark-focus:border-green-200
					transition duration-500 ease-in-out"
									>
										access rights
									</button>
								</div>

								<div className="flex items-center select-none">
									<span
										className="hover:text-green-500 dark-hover:text-green-300
					cursor-pointer mr-3 transition duration-500 ease-in-out"
									>
										<svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
											<path
												d="M505 442.7L405.3
							343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
							44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
							208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
							2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
							0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
							0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
							128 57.2 128 128 0 70.7-57.2 128-128 128z"
											></path>
										</svg>
									</span>

									<input
										className="w-12 bg-transparent focus:outline-none"
										placeholder="Search"
									/>
								</div>
							</nav>
							<h2 className="my-4 text-4xl font-semibold dark:text-gray-400">
								User list
							</h2>
							<div
								className="pb-2 flex items-center justify-between text-gray-600
			dark:text-gray-400 border-b dark:border-gray-600"
							>
								{/* <!-- Header --> */}

								<div>
									<span>
										<span className="text-green-500 dark:text-green-200">
											431
										</span>
										<strong> Users </strong>
									</span>
								</div>
							</div>
							<div className="w-full">
								<div className="bg-white shadow-md rounded my-6">
									<table className="min-w-max w-full table-auto">
										<thead>
											<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
												<th className="py-3 px-6 text-left">First Name</th>
												<th className="py-3 px-6 text-left">Last Name</th>
												<th className="py-3 px-6 text-center">Email</th>
												<th className="py-3 px-6 text-center">Status</th>
												<th className="py-3 px-6 text-center">Actions</th>
											</tr>
										</thead>
										<tbody className="text-gray-600 text-sm font-light"></tbody>
									</table>
									<UserCard data={users} />
								</div>
							</div>
						</div>
					</main>
				</div>
			</>
		</Wrapper>
	);
};

export default Users;
