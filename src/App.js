import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {
    Navbar,
    Home,
    Gallery,
} from './components'
import './app.css';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
