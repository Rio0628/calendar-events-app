import React from 'react';
import IndDailyEvent from './IndDailyEvent';

const Day = (props) => {
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