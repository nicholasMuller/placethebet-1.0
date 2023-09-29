import React from "react";
import { useNavigate } from "react-router-dom";

export default function ThirdDownMatchCard({ week, teamData, gameData, seasonData, weekData }) {
  const homeTeam = week["HomeTeam"];
  const awayTeam = week["AwayTeam"];
  let homeTeamIMG;
  let awayTeamIMG;
  let home3rdDownConversion;
  let away3rdDownConversion;
  let home3rdDownRank;
  let away3rdDownRank;

  let seasonTeamHomeData;
  let seasonTeamAwayData;
  let weekTeamData;

  teamData[0].map((team) => {
    if (team.Key === homeTeam) {
      homeTeamIMG = team.WikipediaLogoUrl;
    }
    if (team.Key === awayTeam) {
      awayTeamIMG = team.WikipediaLogoUrl;
    }
  });
  const teamThirdDownRankings = seasonData[0].map((total) => {
    const result = {
        team: total.Team,
        thirdPercentage: total.ThirdDownPercentage
      };

    if (total.Team === homeTeam) {
      home3rdDownConversion = total.ThirdDownPercentage
    }
    if (total.Team === awayTeam) {
      away3rdDownConversion = total.ThirdDownPercentage
    }
    return result;
  });

  teamThirdDownRankings.sort((a, b) => b.thirdPercentage - a.thirdPercentage);
  teamThirdDownRankings.forEach((team, index) => {

    team.thirdPercentage = index + 1;
    if (team.team === homeTeam) {
        home3rdDownRank = team.thirdPercentage
      }
    if (team.team === awayTeam) {
        away3rdDownRank = team.thirdPercentage
      }

  });

 seasonData[0].map((team, thirdPercentage) => ({
    team: team.Team, thirdPercentage: team.ThirdDownPercentage

  }));

  const homeDiff = parseFloat((away3rdDownConversion - home3rdDownConversion)).toFixed(
    2
  );
  const awayDiff = parseFloat((home3rdDownConversion - away3rdDownConversion)).toFixed(
    2
  );

  const navigateTo = useNavigate();

  const handleClick = (homeTeam, awayTeam, seasonData) => {
    const filteredHomeTeam = teamData[0].filter((team) => {
      return team.Key === homeTeam;
    });
    const filteredAwayTeam = teamData[0].filter((team) => {
      return team.Key === awayTeam;
    });

    seasonData[0].map((seasonTeam) => {
      if (seasonTeam.Team === homeTeam) {
        seasonTeamHomeData = seasonTeam;
      }
      if (seasonTeam.Team === awayTeam) {
        seasonTeamAwayData = seasonTeam;
      }
    });

    weekData.map((weekTeam) => {
      if (weekTeam.HomeTeam === homeTeam && weekTeam.AwayTeam) {
        weekTeamData = weekTeam;
      }
    });

    // Navigate to match details
    navigateTo(`/matchdetails`, {
      state: {
        filteredHomeTeam,
        filteredAwayTeam,
        seasonTeamHomeData,
        seasonTeamAwayData,
        weekTeamData
      },
    });
  };

  return (
    <div
      id="match-card"
      onClick={() => handleClick(homeTeam, awayTeam, seasonData)}
      className="card col my-3"
      style={{ width: "18rem", borderWidth: "5px" }}>
      <div className="row">
        <img
          className="float-left col mt-4"
          style={{ width: "75px", height: "75px", objectFit: "contain" }}
          src={homeTeamIMG}
          alt={homeTeam}
        />
        <h5 className="mt-5 col " style={{ textAlign: "center" }}>
          VS
        </h5>
        <img
          className="float-right col mt-4"
          style={{ width: "75px", height: "75px", objectFit: "contain" }}
          src={awayTeamIMG}
          alt={awayTeam}
        />
      </div>
      <div className="row card-body">
        <h6
          className="card-text text-justify-left col"
          style={{ textAlign: "center", color: "white" }}>
          {homeTeam}
        </h6>
        <div className="mx-5 col"></div>
        <h6
          className="card-text text-justify-right col"
          style={{ textAlign: "center", color: "white" }}>
          {awayTeam}
        </h6>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{ textAlign: "center" }}>
          {home3rdDownConversion}%
        </p>
        <div className="col" style={{ textAlign: "center" }}>
          3rd %
        </div>
        <p
          className="card-text text-justify-right col"
          style={{ textAlign: "center" }}>
          {away3rdDownConversion}%
        </p>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{
            textAlign: "center",
            background: awayDiff > homeDiff ? "green" : "#B8262D",

          }}>
          {homeDiff}
        </p>
        <div className="col" style={{ textAlign: "center" }}>
          Diff.
        </div>
        <p
          className="card-text text-justify-right col"
          style={{
            background: homeDiff > awayDiff ? "green" : "#B8262D",

            textAlign: "center",
          }}>
          {awayDiff}
        </p>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{ textAlign: "center" }}>
          {home3rdDownRank}
        </p>

        <div className="col" style={{ textAlign: "center" }}>
          Rank
        </div>
        <p
          className="card-text text-justify-right col"
          style={{ textAlign: "center" }}>
         {away3rdDownRank}
        </p>

      </div>

      {/* <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{
            textAlign: "center",
            background: homePrediction > awayPrediction ? "green" : "#B8262D",
            margin: "0",
          }}>
          {homePrediction}
        </p>
        <div className="col" style={{ textAlign: "center" }}>
          Prediction
        </div>
        <p
          className="card-text text-justify-right col"
          style={{
            textAlign: "center",
            background: awayPrediction > homePrediction ? "green" : "#B8262D",
          }}>
          {awayPrediction}
        </p>
      </div> */}
    </div>
  );
}
