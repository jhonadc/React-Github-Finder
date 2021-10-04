import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Enter something', 'light');
    } else {
      searchUsers(text); /*data will be sent to App.js searchUsers function*/
      setText(''); /*reset searchbar text*/
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />

        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>

      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

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
