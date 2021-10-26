import React from 'react';
import IndDailyEvent from './IndDailyEvent';

const Day = (props) => {
    // console.log(props.infoDay)
    const monthNum = (month) => {
        return month === 'Jan' ? '01' : month === 'Feb' ? '02' : month === 'Mar' ? '03' : month === 'Apr' ? '04' : month === 'May' ? '05' : month === 'Jun' ? '06' : month === 'Jul' ? '07' : month === 'Aug' ? '08' : month === 'Sep' ? '09' : month === 'Oct' ? '10' : month === 'Nov' ? '11' : month === 'Dec' ? '12' :  null;
    };

    
    let date = `${props.infoDay.year}-${parseInt(monthNum(props.infoDay.month))}-${props.infoDay.dayNum}`;
    // console.log(date)
    return (
        <div className='indDayView'>
            <div className='name-numDayCntr'>
                <p className='dayName'>{props.infoDay.name}</p>
                <p className='dayNum'>{props.infoDay.dayNum}</p>
            </div>
            <IndDailyEvent />
            <IndDailyEvent />
            <p className='extraEvents'>+ 3</p>
        </div>
    )
}

export default Day;