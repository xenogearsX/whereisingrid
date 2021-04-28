import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Zodiacs from "../components/Zodiacs";
import Grats from "./Grats";

const Home = () => {
  const [mode, setMode] = useState(false);
  const [zodiacs, setZodiacs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:80/test/select.php")
      .then((res) => setZodiacs(res.data))
      .catch((e) => {
        console.log(`Erreur lors de la reception : ${e.message}`);
      });
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <div className="home">
          <button onClick={() => setMode(!mode)}>
            {mode ? "Hard Mode" : "Easy Mode"}
          </button>
          <div className="cards">
            <Link to={{ pathname: `/grats`, props: { mode } }} style={{left: 100 * Math.random() + "%",
                  top: 100 * Math.random() + "%",}}>
              <div
                className="test"
                style={{
                  height: mode ? "5px" : "15px",
                  width: mode ? "5px" : "15px",
                }}
              ></div>
            </Link>
            {zodiacs.map((zodiac) => (
              <Zodiacs key={zodiac.id} zodiac={zodiac} />
            ))}
          </div>
        </div>
      </Route>
      <Route path="/grats" component={Grats} />
    </Switch>
  );
};

export default Home;
