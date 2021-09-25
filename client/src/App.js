import First from "./components/first/First";
import About from "./components/about/About";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from "./components/contact/Contact";


function App() {
  return (
    <Router >
      <Nav />
      <Switch>
        <Route exact path="/" component={First} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
