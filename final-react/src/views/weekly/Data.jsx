import getWeekInfo from "../../utils/weekInfo"
import getTeamInfo from "../../utils/teamInfo"
import getSeasonStats from "../../utils/seasonStats"
import getDraftKings from "../../utils/DraftKings"

export default class WeekData{

    constructor(){
        this.teamData = null
        this.seasonData = null
        this.matchups = null
        this.odds = null
    }


    async getWeekData(season, week){
        try{
            this.teamData = await getTeamInfo()
            this.seasonData = await getSeasonStats(season)
            this.matchups = await getWeekInfo(season, week)
            this.odds = await getDraftKings()
        }catch (error) {
            console.error('Error fetching data:', error);
          }
    }
}
