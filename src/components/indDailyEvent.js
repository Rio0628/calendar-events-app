import React from 'react';

const IndDailyEvent = (props) => {
    let indEvent;

    if (props.eventsPresent) {
        indEvent = props.info;
    }
   
    return (
        <div className={'dailyEventView ' + indEvent.type.toLowerCase()}>
            {indEvent.name}
        </div>
    )
}


export default IndDailyEvent;