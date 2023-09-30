import getWeekInfo from "../../utils/weekInfo"
import getTeamInfo from "../../utils/teamInfo"
import getSeasonStats from "../../utils/seasonStats"

export default class WeekData{

    constructor(){
        this.teamData = null
        this.seasonData = null
        this.matchups = null
    }


    async getWeekData(season, week){
        try{
            this.teamData = await getTeamInfo()
            this.seasonData = await getSeasonStats(season)
            this.matchups = await getWeekInfo(season, week)
        }catch (error) {
            console.error('Error fetching data:', error);
          }
    }
}
