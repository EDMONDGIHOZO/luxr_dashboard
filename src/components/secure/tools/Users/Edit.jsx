import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from "axios";

class EditUser extends Component {
	state = {
		user: {},
	};
	id = null;

	componentDidMount = async () => {
		// first get the user with that id
		this.id = this.props.match.params.id;
		const response = await axios.get(`/users/${this.id}`);
		const info = response.data.data;

		if (info !== null) {
			this.setState({
				user: info,
			});
		}

		console.log(info);
	};

	render() {
		return (
			<Wrapper>
				<h2>the user {this.user}</h2>
			</Wrapper>
		);
	}
}

export default EditUser;
