import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom"; //Creates a const called render that references react-dom's render function.
import App from "./components/App";

render(<App />, document.getElementById("root"));
