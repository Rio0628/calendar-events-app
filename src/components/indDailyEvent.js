import React from 'react';

const IndDailyEvent = (props) => {
    let indEvent;

    const indBackground = (type) => {
        return type === 'General' ? 'general' : type === 'Social' ? 'social' : type === 'Holiday' ? 'holiday' : type === 'Personal' ? 'personal' : type === 'Important' ? 'important' : type === 'Business' ? 'business' : null;
    };

    if (props.eventsPresent) {
        indEvent = props.info;
    }

    // console.log(indEvent)
   
    return (
        <div className={'dailyEventView ' + indBackground(indEvent.type)}>
            {indEvent.name}
        </div>
    )
}


export default IndDailyEvent;