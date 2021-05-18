import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from "./pages/Gallery";
import Work from "./pages/Work";
import Page404 from "./pages/Page404";

function Portfolio() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Gallery} />
        <Route path="/:id([0-9]+)?:alias([a-zA-Z]+)?" component={Work} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default Portfolio;
