import React from 'react';
import Header from './Header';
import Context from './Context';
import Footer from './Footer';

import './App.css';

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
