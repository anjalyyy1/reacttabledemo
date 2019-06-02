import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/reactTable';
import FilterTable from './components/FilterTable';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Table/> */}
        <FilterTable/>
      </div>
    );
  }
}

export default App;
