import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/reactTable';
import FilterTable from './components/FilterTable';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';

import Tabs from './components/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Table/> */}
        <FilterTable/>

        <div>
          Tabs demo
          <Tabs>
            <div label="Gator">
             <Tab1/>
            </div>
            <div label="Croc">
            <Table/>
            </div>
            <div label="Sarcosuchus">
              <Tab3/>
            </div>
        </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
