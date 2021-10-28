import React from 'react';
import IndDailyEvent from './IndDailyEvent';

const Day = (props) => {
    let indDailyEventsCntr = [], dailyEvents = {}, eventsPresent = false, eventsCountBool = false, eventsCount = 0;
 
    const monthNum = (month) => {
        return month === 'Jan' ? '01' : month === 'Feb' ? '02' : month === 'Mar' ? '03' : month === 'Apr' ? '04' : month === 'May' ? '05' : month === 'Jun' ? '06' : month === 'Jul' ? '07' : month === 'Aug' ? '08' : month === 'Sep' ? '09' : month === 'Oct' ? '10' : month === 'Nov' ? '11' : month === 'Dec' ? '12' :  null;
    };

    let date = `${props.infoDay.year}-${parseInt(monthNum(props.infoDay.month))}-${props.infoDay.dayNum}`;
    

    const setEvents = () => {
        // Picks the individual events for the certain day using the date values 
        let events = props.events.filter(event => event.date === date); 
      
        if (events.length > 0) {
            dailyEvents = events.map(event => event);
            eventsPresent = true;
        }        
    };
    setEvents();
        
    if (eventsPresent) {
        // Sets dailyEvents according to the length of events 
        if (dailyEvents.length > 1) {
            for (let i = 0; i < 2 ; i++) {
                indDailyEventsCntr.push( <IndDailyEvent key={'dailyEvent ' + i} info={dailyEvents[i]} eventsPresent={eventsPresent} num={i}/> );
            }
        }
        else {
            for (let i = 0; i < 1 ; i++) {
                indDailyEventsCntr.push( <IndDailyEvent key={'dailyEvent ' + i} info={dailyEvents[i]} eventsPresent={eventsPresent} num={i}/> );
            }
        }

        if (dailyEvents.length > 2) {
            // Sets the add on number of the events if length is larger than 2
            eventsCount = dailyEvents.length - 2;
            eventsCountBool = true; 
        }
    }

    return (
        <div className='indDayView' onClick={props.onClick} date={date}>
            <div className='name-numDayCntr'>
                <p className='dayName'>{props.infoDay.name}</p>
                <p className='dayNum'>{props.infoDay.dayNum}</p>
            </div>
            {indDailyEventsCntr}

            {eventsPresent && eventsCountBool ? <p className='extraEvents'>+ {eventsCount}</p>  : null }
            
        </div>
    )
}

export default Day;