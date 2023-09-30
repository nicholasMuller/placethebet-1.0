import getTeamInfo from "../../utils/teamInfo"
import getOdds from "../../utils/getOdds"

export default class OddsData{

    constructor(){
        this.teamData = null
        this.odds = null
    }


    async getOddsData(){
        try{
            this.teamData = await getTeamInfo()
            this.odds = await getOdds()
        }catch (error) {
            console.error('Error fetching data:', error);
          }
    }
}
