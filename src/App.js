import React from "react";

import "./App.css";
import AddMovie from "./component/Add/Add";
import MovieList from "./component/MovieList/MovieList";
import Search from "./component/Search/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Description from "./component/Description/Description";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Switch>
        <Route exact path='/' component={MovieList}/>
        <Route exact path='/Description/:id' render={ props => <Description {...props}/>}/>
        </Switch>
        <AddMovie />
      </BrowserRouter>
    </div>
  );
}

export default App;
