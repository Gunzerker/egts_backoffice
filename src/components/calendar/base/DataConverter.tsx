import moment from "moment";
import { TimelineGroup, TimelineItem } from "react-calendar-timeline";
import IJobData from "src/types/job.type";
import IUserData from "src/types/user.type";

export default class DataConvertHelper {
  static convertTechsToTimelineGroups(techs: IUserData[]): TimelineGroup[] {
    return techs.map((tech, index) => ({
      id: tech._id,
      title: tech.firstName + " " + tech.lastName
    }));
  }

  static convertInterToTimelineItems(
    interventions: IJobData[],
   
  ): TimelineItem[] {
    //console.log(interventions);
    var x = interventions.map(inter => ({
      id: inter._id,
      group: inter.assignedTo[0]?._id,
      title: inter.operateur,
      start_time: moment(inter.start_date),
      end_time: moment(inter.end_date)
    }));
    
    return x;
  }

  /*private static _mapTechsIdsToInterIds(techs: IUserData[]) {
    const hash = {};
    techs.forEach((tech, index) => {
        hash[tech._id] = index + 1; 
    });
    return hash;
  }*/

  /*private static _createInterIdNumberFromIdString = (interId: string) => {
    return parseInt(interId.match(/\d+/)[0], 10);
  };*/
}
