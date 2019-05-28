import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import Addform from "./components/Addform";
import Editform from "./components/Editform";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Routes = (
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


ReactDOM.render(Routes, document.getElementById('root'));

serviceWorker.unregister();
