import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    async componentDidMount() {
        const res = await axios.get('https://api.github.com/users');
        console.log(res.data);
    }

    render() {
        return (
            <div className='App'>
                <Navbar title='Github Finder'></Navbar>
                <div className='container'>
                    <Users />
                </div>
            </div>
        );
    }
}

export default App;
