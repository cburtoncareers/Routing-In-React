import React, { Component } from "react";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Error from "./components/error/Error"
//Import the Route component

import Navigation from "./components/navigation/Navigation";
import { Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Welcome name= "Nita" /> */}
        {/* define our routes */}
        <Navigation />
        <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Nita" />}
        />
        
        
        <Route path="/welcome/:name" render={(props) => <Welcome{...props} name={props.match.params.name} />} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route component ={Error}/>
        </Switch>
      </div>
    );
  }
}
export default App;