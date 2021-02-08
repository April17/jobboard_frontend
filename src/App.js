import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Pages from './pages'
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/job_list/:job_source"    component={Pages.JobList} />
          <Route exact path="/"     component={Pages.JobBoard} />
        </Switch>
      </div>
    );
  }
}

export default App;
