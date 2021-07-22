import './App.css';
import Header from "./components/Header";
import Home from "./pages/HomeContainer";
import Container from 'react-bootstrap/Container';
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
        <Container>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Redirect to="/" />
          </div>
        </Container>

      </Router>
    </div>
  );
}

export default App;
