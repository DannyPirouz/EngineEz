import React from 'react';
import LoginForm from '../Components/LoginForm/LoginForm';
import '../styling/Homepage.css';

function HomePage() {
  return (
    <div>
      {/* <h1> Welcome to Engine-Ez</h1> */}
      <LoginForm />
    </div>
  );
}

// good video for creating login functionality
// https://www.youtube.com/watch?v=STdW1117dbE

// good vid for authentication
// https://www.youtube.com/watch?v=wr3VmbZdVA4
// https://www.youtube.com/watch?v=X3qyxo_UTR4

export default HomePage;