import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ' ',
    };

    static propTypes = {
      searchUsers: PropTypes.func.isRequired,
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(
            this.state.text
        ); /* I will props up the digited text to App.js searchUsers function*/
        this.setState({ text: '' }); /*reset searchbar text*/
    };

    onChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search Users'
                        value={this.state.text}
                        onChange={this.onChange}
                    />

                    <input
                        type='submit'
                        value='search'
                        className='btn btn-dark btn-block'
                    />
                </form>
            </div>
        );
    }
}

export default Search;

/*for Static, use setState to change the value in search*/
/* if i had multiple fields, i would do like this to get the key element inside the input

        inside onChange:
        this.setState({ 
          [e.target.name]: e.target.value
          [e.target.name]: e.target.value
         }) */

/* on the onSubmit function, if i hadnt used arrow function, I would have to write 
         e.preventDefault() on the function and, on the onSubmit inside the form, would be:
         onSubmit={this.onSubmit.bind(this)} */
