import React from 'react';
import GlobalStyles from "./components/styles/globalstyle"
import Homepage from "./components/homepg/homepg"
import Game from "./components/game/game"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    // <>
    // <p>This is it</p>
    // <Homepage />
    // </>
    <Router>
      <>
      <GlobalStyles />
      <Switch>
      <Route exact path="/" component={ Homepage } />
      <Route path="/game" component={ Game } />
      </Switch>
      </>
    </Router>
  );
}

export default App;
