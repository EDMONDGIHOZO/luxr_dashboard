import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";
import Paginator from "../../layouts/Paginator";
import Deleter from "../../layouts/Deleter";

class Products extends Component {
	state = {
		products: [],
		redirect: false,
	};

	last_page = 0;
	page = 1;

	componentDidMount = async () => {
		const response = await axios.get(`products?page=${this.page}`);
		this.setState({
			products: response.data.results,
		});
	};

	deleteProduct = async (id) => {
		this.setState({
			products: this.state.products.filter((pr) => pr.id !== id),
		});
	};

	paginate = async (page) => {
		this.page = page;

		await this.componentDidMount();
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={"/"} />;
		}
		return (
			<Wrapper>
				<NavLink to={"create-product"}>
					<button className="button bg-green-500 p-2 text-white m-1 mx-2 rounded font-bold uppercase">
						{" "}
						ADD NEW{" "}
					</button>
				</NavLink>
				<div className="overflow-auto pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0 flex flex-center justify-center">
					<div className="flex flex-col flex-wrap sm:flex-row">
						<div className="bg-white shadow-md rounded my-6">
							<table className="min-w-max w-full table-auto">
								<thead>
									<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
										<th className="py-3 px-6 text-left">image</th>
										<th className="py-3 px-6 text-left">Name</th>
										<th className="py-3 px-6 text-left">Price</th>
										<th className="py-3 px-6 text-center">Description</th>

										<th className="py-3 px-6 text-center">Actions</th>
									</tr>
								</thead>
								<tbody className="text-gray-600 text-sm font-light">
									{this.state.products.map((product) => {
										return (
											<tr
												className="border-b border-gray-200 hover:bg-gray-100"
												key={product.id}
											>
												<td className="py-3 px-6 text-center whitespace-nowrap">
													<div className="flex items-center">
														<img
															src={product.image}
															alt={product.name}
															className="w-5"
														/>
													</div>
												</td>
												<td className="py-3 px-6 text-center whitespace-nowrap">
													<div className="flex items-center">
														<span className="font-medium">{product.name}</span>
													</div>
												</td>
												<td className="py-3 px-6 text-center whitespace-nowrap">
													<div className="flex items-center">
														<span className="font-medium">{product.price}</span>
													</div>
												</td>
												<td className="py-3 px-6 text-center whitespace-nowrap">
													<div className="flex items-center">
														<span className="font-medium">
															{product.description}
														</span>
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
													<NavLink to={`/edit-user/${product.id}`}>
														<button className="button bg-green-100 p-3 m-1 rounded font-bold uppercase">
															{" "}
															Edit{" "}
														</button>
													</NavLink>
													<Deleter
														endPoint={"products/delete"}
														id={product.id}
														handleDelete={this.deleteProduct}
													/>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
							<Paginator
								last_page={this.last_page}
								handleChange={this.paginate}
							/>
						</div>
					</div>
				</div>
			</Wrapper>
		);
	}
}

export default Products;
