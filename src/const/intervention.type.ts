import { Moment } from 'moment';

export default interface IInterventionData {
  id: number;
  group: number;
  title: string;
  start_time: Moment;
  end_time: Moment;
}
