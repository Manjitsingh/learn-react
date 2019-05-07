import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router'
import Addform from "./components/Addform";

function App() {
  return (
      <Addform text="Hello World" />
  );
}

export default App;
