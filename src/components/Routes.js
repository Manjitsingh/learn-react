import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from "../App";
import Addform from "./Addform";
import Editform from "./Editform";
const Routers = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-form">Add Form</Link>
                </li>
                <li>
                    <Link to="/edit-form">Edit Form</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/add-form" component={Addform} />
            <Route path="/edit-form" component={Editform} />
        </div>
    </Router>
);

export default Routers;
