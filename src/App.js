import Home from "./screen/Home";

import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Link to='/'><h1>Où est Ingrid?</h1></Link>
      <Home />
    </div>
  );
};

export default App;
