import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home/HomeContainer";
import ProductDetails from './pages/ProductDetails/ProductDetailsContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/productDetails/:id" component={ProductDetails}/>
            </Switch>
            {/* <Redirect to="/" /> */}
      </Router>
    </div>
  );
}

export default App;
