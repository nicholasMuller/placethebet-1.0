async function getSeasonStats(season) {
  try {
    let response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://api.sportsdata.io/api/nfl/odds/json/TeamSeasonStats/'
        .concat(season)
        .concat('REG/'),
      {
        headers: {
          'Ocp-Apim-Subscription-Key': 'efb56e725ab0490c89730b91c0d7bb60',
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export default getSeasonStats;
