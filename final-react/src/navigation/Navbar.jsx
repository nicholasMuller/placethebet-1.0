import { Route, Routes, Link } from "react-router-dom";
import Home from "../views/home/Home";
import Week from "../views/weekly/Week";
import MatchDetails from "../views/MatchDetails";
import GameOddsLineMovement from "../views/OddsMovement";
import OddsCards from "../views/Odds/Odds";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/week" className="nav-link text-white">
                Weekly View
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/odds" className="nav-link text-white">
                Odds
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home title="placethebet.net" />} />
        <Route path="/week" element={<Week />} />
        <Route path="/matchdetails" element={<MatchDetails />} />
        <Route path="/oddsmovement" element={<GameOddsLineMovement />} />
        <Route path = "/odds" element= {<OddsCards/>}/>
      </Routes>
    </div>
  );
}

export default Navbar;
