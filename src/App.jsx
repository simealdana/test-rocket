import React, { Fragment } from "react";
import { Switch, Route , BrowserRouter as Router} from "react-router-dom";
import Home from "./home/pages/index";
import NotFoundPage from './shared/NotFound';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
