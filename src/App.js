import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './pages/Footer';
import { inject } from '@vercel/analytics';
import { dev } from '$app/environment';

// Call inject outside of the component's return statement
inject({
  mode: dev ? 'development' : 'production',
});

function App() {
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
