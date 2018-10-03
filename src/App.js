import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './react/components/Navigation.jsx';
import Home from './react/routes/Home.jsx';
import Embedded from './react/routes/EmbeddedPage.jsx';
import Canvas from './react/routes/CanvasPage.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mainContainer">

          <Navigation />
          
          <Switch>
            <Route path="/embedded" component={Embedded} />
            <Route path="/canvas" component={Canvas} />
            <Route exact path="/" component={Home} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
