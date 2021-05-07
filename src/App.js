import "./App.css";

import Dashboard from "./components/secure/tools/Dashboard";
import Users from "./components/secure/tools/Users";
// public components
import Login from "./components/auth/login";
import Register from "./components/auth/Register";
import CreateUser from "./components/secure/tools/Users/Create";
import EditUser from "./components/secure/tools/Users/Edit";
import CreateRole from "./components/secure/tools/Roles/Create";
import EditRole from "./components/secure/tools/Roles/Edit";
import Roles from "./components/secure/tools/Roles";
import CreateProduct from "./components/secure/tools/Products/Create";
import EditProduct from "./components/secure/tools/Products/Edit";
import Products from "./components/secure/tools/Products";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Route path={"/"} component={Dashboard} exact />
				<Route path={"/users"} component={Users} />
				<Route path={"/roles"} component={Roles} />
				<Route path={"/create-role"} component={CreateRole} />
				<Route path={"/edit-role/:id"} component={EditRole} />
				<Route path={"/login"} component={Login} />
				<Route path={"/register"} component={Register} />
				<Route path={"/create-user"} component={CreateUser} />
				<Route path={"/edit-user/:id"} component={EditUser} />
				<Route path={"/products"} component={Products} />
				<Route path={"/create-product"} component={CreateProduct} />
				<Route path={"/edit-product/:id"} component={EditProduct} />
			</BrowserRouter>
		</>
	);
}

export default App;
