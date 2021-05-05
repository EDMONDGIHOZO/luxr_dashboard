import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Roles extends Component {
	state = {
		roles: [],
	};

	componentDidMount = async () => {
		const response = await axios.get(`roles`);
		if (response.status === 200) {
			this.setState({ roles: response.data.data });
		} else {
			alert("roles not found");
		}
	};

	deleteRole = async (role_id) => {
		if (window.confirm("Are you sure for this undoable action?")) {
			const res = await axios.delete(`roles/${role_id}`);
			if (res.status === 204) {
				alert("succesfully deleted the role");
				this.setState({
					roles: this.state.roles.filter((r) => r.id !== role_id),
				});
			} else {
				alert("some error occured");
			}
		}
	};

	render() {
		return (
			<Wrapper>
				<div className="overflow-x-auto w-full">
					<NavLink to={"create-role"}>
						<button className="button bg-green-500 p-2 text-white m-5 rounded font-bold uppercase">
							{" "}
							NEW ROLE{" "}
						</button>
					</NavLink>
					<table className="mx-auto max-w-4xl w-full white-space-nowrap rounded-sm bg-white divide-y divide-gray-300 overflow-hidden">
						<thead className="bg-gray-500">
							<tr className="text-gray-300 text-left">
								<th className="text-semibold text-sm uppercase px-6 py-4">#</th>
								<th className="text-semibold text-sm uppercase px-6 py-4">
									NAME
								</th>
								<th className="text-semibold text-sm uppercase px-6 py-4">
									PERMISSIONS
								</th>
								<th className="text-semibold text-sm uppercase px-6 py-4">
									Actions
								</th>
							</tr>
						</thead>

						<tbody className="divide-y divide-gray-200">
							{this.state.roles.map((role) => {
								return (
									<tr key={role.id}>
										<td className="px-6 py-4">
											<p>{role.id}</p>
										</td>
										<td className="px-6 py-4">
											<p>{role.name}</p>
										</td>
										<td className="px-6 py-4 text-blue-700 text-bold uppercase text-xs">
											{role.permissions.map((permission) => {
												return <p>{permission.name.replace("_", " ")}</p>;
											})}
										</td>
										<td className="px-6 py-4">
											<NavLink to={`edit-role/${role.id}`}>
												<button className="p-2 text-white rounded-md mx-4 bg-blue-500">
													Edit
												</button>
											</NavLink>
											<button
												className="p-2 text-white rounded-md mx-4 bg-red-500"
												onClick={() => this.deleteRole(role.id)}
											>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</Wrapper>
		);
	}
}

export default Roles;
