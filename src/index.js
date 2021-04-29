import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

const url = process.env.LOCAL_API_URL;
console.log(url);

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;
axios.defaults.responseType = "json";
axios.defaults.headers = {
	"X-Requested-With": "XMLHttpRequest",
	"Content-Type": "application/json",
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
