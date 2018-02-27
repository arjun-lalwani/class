import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from "reactstrap";

// Import your other components here

class App extends Component {
    render() {
        return (
            <div>
                {<Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                    </div>
                </Router>}
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <Jumbotron>
            </Jumbotron>
        )
    }
}

class About extends Component {
    render() {
        return (
            <Jumbotron>
            </Jumbotron>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <Jumbotron>
            </Jumbotron>
        )
    }
}

export default App;
