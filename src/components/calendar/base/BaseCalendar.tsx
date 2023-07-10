// make sure you include the timeline stylesheet or the timeline will not be styled
import InterventionForm from '@/components/forms/intervention/InterventionForm';
import Box from '@mui/material/Box';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Timeline, {
  CustomMarker,
  DateHeader,
  TimelineHeaders,
  TimelineMarkers,
} from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import IJobData from 'src/types/job.type';
import IUserData from 'src/types/user.type';
import DataConvertHelper from './DataConverter';

export interface IBaseCalendar {
  sampleTextProp?: string;
  technicians?: IUserData[];
  interventions?: IJobData[];
}

const BaseCalendar: React.FC<IBaseCalendar> = ({
  technicians, 
  interventions
}) => {
  //const { interventions } = useContext(InterventionsContext);

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    console.log('INTERVENTIONS UPDATED');
   
    
  }, [technicians, interventions]);

  return (
    <Box>
      
      <InterventionForm />
      
       
        <Timeline
          groups={DataConvertHelper.convertTechsToTimelineGroups(technicians)}
          items={DataConvertHelper.convertInterToTimelineItems(interventions)}
          defaultTimeStart={moment().add(-5,'hour')}
          defaultTimeEnd={moment().add(5, 'hour')}
        >
          <TimelineHeaders
            style={{
              backgroundColor: '#1976D2',
              borderRadius: 8,
              border: 'none',
            }}
          >
            <DateHeader unit="primaryHeader" />
            <DateHeader />
          </TimelineHeaders>
          <TimelineMarkers>
            <CustomMarker date={new Date()}>
              {({ styles, date }) => {
                const customStyles = {
                  ...styles,
                  backgroundColor: 'red',
                  width: '3px',
                };
                return (
                  <div
                    style={customStyles}
                    onClick={() => {
                      console.log('Hello world');
                    }}
                  />
                );
              }}
            </CustomMarker>{' '}
          </TimelineMarkers>
        </Timeline>
      
    </Box>
  );
};

export default BaseCalendar;
