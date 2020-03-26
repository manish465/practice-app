import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Layout from "./components/layout/Layout";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Jumbotron />
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </Layout>
        </React.Fragment>
    );
}

export default App;
