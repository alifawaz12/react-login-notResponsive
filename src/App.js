import './App.css';
import Hed from "./nav";
import Login from "./login";
import Foot from './footer';
import Last from './basefoot';


function App() {
  return (
    <div className="App">
      <Hed />
      <Login/>
      <Foot />
      <Last />
    </div>
  );
}

export default App;
