import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home/HomeContainer";
import Container from 'react-bootstrap/Container';
import About from './pages/About/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
            </Switch>
            <Redirect to="/" />
      </Router>
    </div>
  );
}

export default App;
