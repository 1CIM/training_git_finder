import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');

  const searchUsers = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    setUsers(response.data);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchUsers(text);
    setText('');
  };

  const onChange = (event) => setText(event.target.value);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name='text'
          type='text'
          data-cy='search-input'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input data-cy='search-btn' type='submit' value='Search' />
      </form>
      <p data-cy="result-output">{users.login}</p>
      <p>{users.id}</p>
      <img  src={users.avatar_url} />
      
    </>
  );
};

export default App;
