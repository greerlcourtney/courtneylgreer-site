import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="app">
      <Main />
      <Analytics />
    </div>
  );
}

export default App;
