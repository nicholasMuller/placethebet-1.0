import axios from "axios";

const nflUrl = "/api/nfl/odds/json/TeamSeasonStats/";
const headers = {
  "Ocp-Apim-Subscription-Key": import.meta.env.VITE_API_KEY,
  "Content-Type": "application/json",
};

async function getSeasonStats(season) {
  try {
    const response = await axios.get(nflUrl.concat(season).concat('REG'), { headers });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export default getSeasonStats;
