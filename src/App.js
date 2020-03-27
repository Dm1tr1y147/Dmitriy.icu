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
    Footer,
} from './components'
import './app.scss';

const App = () => {

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
            <Footer />
        </Router>
    );
}
export default App;