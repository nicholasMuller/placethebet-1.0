import axios from "axios";

const nflUrl = "/api/nfl/odds/json/TeamSeasonStats/2023REG";
const headers = {
  "Ocp-Apim-Subscription-Key": import.meta.env.VITE_API_KEY,
  "Content-Type": "application/json",
};

async function getSeasonStats() {
  try {
    const response = await axios.get(nflUrl, { headers });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export default getSeasonStats;
