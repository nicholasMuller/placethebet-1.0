
export default function DKCards({ matchup, teamData}) {
    
        const homeTeam = matchup["home_team"];
        const awayTeam = matchup["away_team"];
        let home = homeTeam === matchup["bookmakers"][2]["markets"][0]["outcomes"][0]["name"] ? 0 : 1;
        let away = awayTeam === matchup["bookmakers"][2]["markets"][0]["outcomes"][0]["name"] ? 0 : 1;
        let homeTeamIMG
        let awayTeamIMG
        let homeAbrev
        let awayAbrev

        let homeMoneyline = matchup["bookmakers"][2]["markets"][0]["outcomes"][home]["price"]
        let homePointSpread = matchup["bookmakers"][2]["markets"][1]["outcomes"][home]["point"]
        let homeSpread = matchup["bookmakers"][2]["markets"][1]["outcomes"][home]["price"]
        let awayMoneyline = matchup["bookmakers"][2]["markets"][0]["outcomes"][away]["price"]
        let awayPointSpread = matchup["bookmakers"][2]["markets"][1]["outcomes"][away]["point"]
        let awaySpread = matchup["bookmakers"][2]["markets"][1]["outcomes"][away]["price"]

    teamData.map((team) => {
        if (team.FullName === homeTeam) {
          homeTeamIMG = team.WikipediaLogoUrl;
          homeAbrev = team.Key
        }
        if (team.FullName === awayTeam) {
          awayTeamIMG = team.WikipediaLogoUrl;
          awayAbrev = team.Key
        }
      });
    
      return(
      <div
      id="match-card"
      onClick={() => handleClick(homeTeam, awayTeam)}
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
          {homeAbrev}
        </h6>
        <div className="mx-5 col"></div>
        <h6
          className="card-text text-justify-right col"
          style={{ textAlign: "center", color: "white" }}>
          {awayAbrev}
        </h6>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{ textAlign: "center" }}>
          {homeMoneyline}
        </p>
        <div className="col" style={{ textAlign: "center" }}>
          Moneyline
        </div>
        <p
          className="card-text text-justify-right col"
          style={{ textAlign: "center" }}>
          {awayMoneyline}
        </p>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{
            textAlign: "center",
            // background: awayDiff > homeDiff ? "green" : "#B8262D",

          }}>
          {homePointSpread}
        </p>
        <div className="col" style={{ textAlign: "center" }}>
          Pt.Spread
        </div>
        <p
          className="card-text text-justify-right col"
          style={{
            // background: homeDiff > awayDiff ? "green" : "#B8262D",

            textAlign: "center",
          }}>
          {awayPointSpread}
        </p>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{ textAlign: "center" }}>
          {homeSpread}
        </p>

        <div className="col" style={{ textAlign: "center" }}>
          At
        </div>
        <p
          className="card-text text-justify-right col"
          style={{ textAlign: "center" }}>
         {awaySpread}
        </p>

      </div>
    </div>
      )
}