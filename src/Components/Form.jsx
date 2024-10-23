import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('Muchai');
  const [password, setPassword] = useState('22235599');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulated credentials for validation
    const validUsername = 'Muchai';
    const validPassword = '22334455';

    if (validUsername === username && validPassword === password) {
      setError('');
      // Handle successful login (e.g., redirect to another page)
      console.log('Login successful!');
      setError('Login successful')
    } else {
      setError('Incorrect username or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;