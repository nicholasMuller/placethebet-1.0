import React, { useState, useEffect, useReducer } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import getTeamGameStats from "../utils/gameStats";
import getTeamInfo from "../utils/teamInfo";
import getSeasonStats from "../utils/seasonStats";
import PointsDiffMatchCard from "./PointsDiffMatchCard";
import getWeekInfo from "../utils/weekInfo";
import Error from "./Error";

function teamReducer(teamData, action) {
  switch (action.type) {
    case "getTeamData":
      return [...teamData, action.payload.teamData];
    default:
      return teamData;
  }
}

function seasonReducer(seasonData, action) {
  switch (action.type) {
    case "getSeasonData":
      return [...seasonData, action.payload.seasonData];
    default:
      return seasonData;
  }
}

function Week() {

  // Automated date change
  let defaultYear = new Date().getFullYear();
  const current_date = new Date();
  const week2Date = new Date(defaultYear, 7, 1); // (0 = Jan.)
  if (current_date <= week2Date) { //change the date once week2Date is in the past
    defaultYear = defaultYear - 1;
  }

  //season/week dropdown selection
  const [season, setSeason] = useState(defaultYear);
  const [week, setWeek] = useState("1");

  //Card Data
  const [weekData, setWeekData] = useState([]);
  const [teamData, dispatchTeamData] = useReducer(teamReducer, []);
  const [seasonData, dispatchSeasonData] = useReducer(seasonReducer, []);
  const [error, setError] = useState(null);
    // const [gameData, setGameData] = useState([]); 

  //update with the season/week change
  useEffect(() => {

    //gameData (currently unused)
    // getTeamGameStats(season, week)
    //   .then((gameData) => setGameData(gameData))
    //   .catch((error) => {
    //     setError("Something went wrong. Please try again!");
    //   });

    //weekData
    getWeekInfo(season, week)
      .then((seasonInfo) => setWeekData(seasonInfo))
      .catch((error) => {
        setError("Something went wrong. Please try again!");
      });
  }, [season, week]);

  useEffect(() => {

    //teamData
    getTeamInfo()
      .then((teamData) =>
        dispatchTeamData({
          type: "getTeamData",
          payload: { teamData: teamData },
        })
      )
      .catch((error) => {
        setError("Something went wrong. Please try again!");
      });

    //seasonData
    getSeasonStats(season)
      .then((seasonData) =>
        dispatchSeasonData({
          type: "getSeasonData",
          payload: { seasonData: seasonData },
        })
      )
      .catch((error) => {
        setError("Something went wrong. Please try again!");
      });
  }, []);

  //season/week change dropdown menu
  const handleWeekChange = (event) => {
    const buttonName = event.target.textContent;
    setWeek(buttonName.replace(/^\D+/g, ""));
  };
  const handleSeasonChange = (event) => {
    const buttonName = event.target.textContent;
    setSeason(buttonName.replace(/^\D+/g, ""));
  };

  const handleClose = () => {
    setError(null);
  };

  return (
    <main className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>
            {season} : Week {week}
          </h1>
        </div>
        <div className="col" style={{ textAlign: "right" }}>
          <div className="dropdown btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Choose Season
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item" onClick={handleSeasonChange}>
                2022
              </button>

              <button className="dropdown-item" onClick={handleSeasonChange}>
                2023
              </button>
            </div>
          </div>

          <div className="dropdown btn-group" style={{ marginLeft: "1rem" }}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Choose Week
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 1
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 2
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 3
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 4
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 5
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 6
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 7
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 8
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 9
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 10
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 11
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 12
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 13
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 14
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 15
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 16
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 17
              </button>
              <button className="dropdown-item" onClick={handleWeekChange}>
                Week 18
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item custom-border" role="presentation">
    <button className="nav-link active " id="points-diff-tab" data-bs-toggle="tab" data-bs-target="#points-diff"  type="button" role="tab" aria-controls="points-diff" aria-selected="true">Points Diff.</button>
  </li>
  <li class="nav-item custom-border" role="presentation">
    <button className="nav-link " id="third-down-conversion-tab" data-bs-toggle="tab" data-bs-target="#third-down-conversion"  type="button" role="tab" aria-controls="third-down-conversion" aria-selected="false">3rd Down %</button>
  </li>

</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="points-diff" role="tabpanel" aria-labelledby="points-diff-tab">

      
      <div className="row row-cols-6 justify-content-around mt-4">
        {!weekData && (
          <div className="loader-container">
            <ClipLoader color={"white"} size={75} />
          </div>
        )}
        {!error &&
          weekData &&
          teamData[0] &&
          seasonData[0] &&
          weekData.map((game, gameData) => {
            return (
              <PointsDiffMatchCard
                key={game.GameKey.concat(game.HomeTeamID)}
                week={game}
                teamData={teamData}
                seasonData={seasonData}
                weekData={weekData}
              />
            );
          })}
      </div>
      </div>
      <div className="tab-pane fade" id="third-down-conversion" role="tabpanel" aria-labelledby="third-down-conversion-tab">3rd Down Conversion</div>

      </div>

      {error && <Error ifError={error} onClose={handleClose} />}
    </main>
  );
}

export default Week;
