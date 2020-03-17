import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import  Route from 'react-router-dom/Route';
import './App.css';
import Home from './home/home';
import User from './user/user';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/:link" exact component={ User }/>

                    <Route path="/" exact strict component={ Home } />
                </div>
            </Router>
    );
    }
}

export default App;
