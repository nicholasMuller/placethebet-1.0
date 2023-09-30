import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Error from "../Error";
import DKCards from "../Odds/Odds";
import OddsData from "./Data";

function Odds() {
  //season/week dropdown selection
  const [error, setError] = useState(null);
  const [allData, setData] = useState({
    teamData: null,
    odds: null,
  });

  useEffect(() => {
    async function getData() {
      const data = new OddsData();
      await data.getOddsData();
      setData({
        teamData: data.teamData,
        odds: data.odds
      });
    }
    getData();
  }, []);

  const handleClose = () => {
    setError(null);
  };

  return (
    <main className="container">
      {/* create tabnav file to return these from */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item custom-border" role="presentation">
          <button
            className="nav-link "
            id="DK-tab"
            data-bs-toggle="tab"
            data-bs-target="#DK"
            type="button"
            role="tab"
            aria-controls="DK"
            aria-selected="false"
          >
            Draft Kings
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade"
          id="DK"
          role="tabpanel"
          aria-labelledby="DK-tab"
        >
          <div className="row row-cols-6 justify-content-around mt-4">
            {!allData.matchups && (
              <div className="loader-container">
                <ClipLoader color={"white"} size={75} />
              </div>
            )}
            {!error &&
              allData.teamData &&
              allData.odds.map((game, gameData) => {
                return (
                  <DKCards
                    key={game.id}
                    matchup={game}
                    teamData={allData.teamData}
                  />
                );
              })}
          </div>
        </div>
        
      </div>

      {error && <Error ifError={error} onClose={handleClose} />}
    </main>
  );
}

export default Odds;
