import React, { useState, useEffect } from 'react';
import IndDailyEvent from './IndDailyEvent';

const Day = (props) => {
    let indDailyEventsCntr = [], dailyEvents = [], eventsPresent = false, eventsCountBool = false, eventsCount = 0;
    // let [dailyEvents , setDailyEvents] = useState([]);
    // console.log(props.infoDay)
    const monthNum = (month) => {
        return month === 'Jan' ? '01' : month === 'Feb' ? '02' : month === 'Mar' ? '03' : month === 'Apr' ? '04' : month === 'May' ? '05' : month === 'Jun' ? '06' : month === 'Jul' ? '07' : month === 'Aug' ? '08' : month === 'Sep' ? '09' : month === 'Oct' ? '10' : month === 'Nov' ? '11' : month === 'Dec' ? '12' :  null;
    };

    let date = `${props.infoDay.year}-${parseInt(monthNum(props.infoDay.month))}-${props.infoDay.dayNum}`;
    

    const setEvents = () => {
        let events = props.events.filter(event => event.date === date); 
        if (events.length > 0) {
            dailyEvents.push(events);
            eventsPresent = true;
        }        
    };
    setEvents();
    // console.log(eventsPresent)
   
    if (eventsPresent) {
        if (dailyEvents[0].length > 1) {
            for (let i = 0; i < 2 ; i++) {
                indDailyEventsCntr.push( <IndDailyEvent key={'dailyEvent ' + i} /> );
            }
        }
        else {
            for (let i = 0; i < 1 ; i++) {
                indDailyEventsCntr.push( <IndDailyEvent key={'dailyEvent ' + i} /> );
            }
        }
        
        
        if (dailyEvents[0].length > 2) {
            eventsCount = dailyEvents[0].length - 2;
            eventsCountBool = true; 
        }
    }
    
    console.log(eventsCount)


    return (
        <div className='indDayView'>
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