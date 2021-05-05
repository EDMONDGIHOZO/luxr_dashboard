import React, { Component } from "react";
import Wrapper from "../Wrapper";
import { Link, NavLink } from "react-router-dom";
// import Button from "../../../ui/Button";
import axios from "axios";

// import { Link } from "react-router-dom";

class Users extends Component {
	state = {
		users: [],
		isLoggedIn: true,
	};

	page = 1;
	nexter = "";
	prev = "";

	componentDidMount = async () => {
		const response = await axios.get(`users?page=${this.page}`);
		this.setState({ users: response.data.results });
		console.log(response.data);

		this.nexter = response.data.links.next;
		this.previous = response.data.links.previous;
	};

	next = async () => {
		if (this.nexter === null) return;
		this.page++;
		await this.componentDidMount();
	};

	prev = async () => {
		this.page = 1;
		await this.componentDidMount();
	};

	edit = () => {
		alert("edit");
	};

	deleteUser = async (id) => {
		// await axios.delete(`all-users/${id}`);
		this.setState({ users: this.state.users.filter((user) => user.id !== id) });
	};
	view = () => {
		alert("view user");
	};

	render() {
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
								<h2 className="my-4 text-4xl font-semibold dark:text-gray-400">
									User list
								</h2>
								<NavLink to={"create-user"}>
									<button className="button bg-green-500 p-2 text-white m-1 rounded font-bold uppercase">
										{" "}
										ADD NEW{" "}
									</button>
								</NavLink>
								<NavLink to={"roles"}>
									<button className="button bg-blue-500 p-2 text-white m-1 rounded font-bold uppercase">
										{" "}
										User Roles{" "}
									</button>
								</NavLink>
								<div className="w-full">
									<div className="bg-white shadow-md rounded my-6">
										<table className="min-w-max w-full table-auto">
											<thead>
												<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
													<th className="py-3 px-6 text-left">First Name</th>
													<th className="py-3 px-6 text-left">Last Name</th>
													<th className="py-3 px-6 text-center">Email</th>
													<th className="py-3 px-6 text-center">Role</th>
													<th className="py-3 px-6 text-center">Actions</th>
												</tr>
											</thead>
											<tbody className="text-gray-600 text-sm font-light">
												{this.state.users.map((user) => {
													return (
														<tr
															className="border-b border-gray-200 hover:bg-gray-100"
															key={user.id}
														>
															<td className="py-3 px-6 text-center whitespace-nowrap">
																<div className="flex items-center">
																	<span className="font-medium">
																		{user.first_name}
																	</span>
																</div>
															</td>
															<td className="py-3 px-6 text-center whitespace-nowrap">
																<div className="flex items-center">
																	<span className="font-medium">
																		{user.last_name}
																	</span>
																</div>
															</td>
															<td className="py-3 px-6 text-center whitespace-nowrap">
																<div className="flex items-center">
																	<span className="font-medium">
																		{user.email}
																	</span>
																</div>
															</td>
															<td className="py-3 px-6 text-center whitespace-nowrap">
																<div>
																	<b>
																		{user.role !== null ? user.role.name : "-"}
																	</b>
																</div>
															</td>
															<td>
																<button
																	className="button bg-red-100 p-3 m-1 rounded font-bold uppercase"
																	onClick={this.view}
																>
																	{" "}
																	view{" "}
																</button>
																<Link to={`/edit-user/${user.id}`}>
																	<button className="button bg-green-100 p-3 m-1 rounded font-bold uppercase">
																		{" "}
																		Edit{" "}
																	</button>
																</Link>
																<button
																	className="button bg-red-500 p-3 m-1 rounded font-bold uppercase"
																	onClick={() => this.deleteUser(user.id)}
																>
																	{" "}
																	Delete{" "}
																</button>
															</td>
														</tr>
													);
												})}
											</tbody>
										</table>
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
									</div>
								</div>
							</div>
						</main>
					</div>
				</>
			</Wrapper>
		);
	}
}

export default Users;
