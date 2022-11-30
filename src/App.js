import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { initializeAuthO } from './components/actions/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuthO())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="column">
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </main>
  );
}

export default App;
