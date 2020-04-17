import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

import SmurfList from './SmurfList'
import Form from './Form'

import './App.css';

function App() {
  return (
    <div className="App">
      <SmurfList/>
      <Form/>
    </div>
  );
}

export default App

