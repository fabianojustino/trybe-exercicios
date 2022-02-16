import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React from 'react';
import Context from './Context';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Context />
        <Footer/>
      </div>
      )
  }
}

export default App;
