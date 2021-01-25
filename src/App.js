
import './App.css';


import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Icons from './components/Icons/Icons';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div id='main'>
        <Icons/>
        <Portfolio/>
      </div>
     
      
      
    </div>
  );
}

export default App;
