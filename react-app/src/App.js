import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from './store/session';
import HomePage from './components/HomePage';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Route path='/'>
        <HomePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
