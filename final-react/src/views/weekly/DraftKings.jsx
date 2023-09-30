import axios from "axios";

const oddsUrl = import.meta.env.VITE_ODDS_URL;

async function getOdds(season) {
  try {
    const response = await axios.get(oddsUrl);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export default getOdds;
