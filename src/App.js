
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
// import Icons from './components/Icons/Icons';
import Portfolio from './components/Portfolio/Portfolio';
import Store from './components/Store/Store';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar/> */}
        <div id='main'>
          {/* <Icons/> */}
          <Switch>
            <Route path={["/portfolio"]} component={Portfolio} />
            <Route path={["/store"]} component={Store} />
            <Route path={["/"]} component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
