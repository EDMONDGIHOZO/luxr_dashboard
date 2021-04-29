import "./App.css";
import Dashboard from "./components/secure/tools/Dashboard";
import Users from "./components/secure/tools/Users";
// public components
import Login from "./components/auth/login";
import Register from "./components/auth/Register";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Route path={"/"} component={Dashboard} exact />
				<Route path={"/users"} component={Users} />
				<Route path={"/login"} component={Login} />
				<Route path={"/register"} component={Register} />
			</BrowserRouter>
		</>
	);
}

export default App;
