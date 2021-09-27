import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
    static defaultrops = {
        title: 'GitHub Finder',
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>{this.props.title}</h1>
            </nav>
        );
    }
}

export default Navbar;
