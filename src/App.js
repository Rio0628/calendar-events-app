import React from 'react';
import IndEvent from './components/IndEvent';
import EditEvent from './components/EditEvent';
import Day from './components/Day';

function App() {
  return (
    <div className="container">
      <div className='eventsView'>
        <h2 className='eventsViewHeading'>Upcoming Events</h2>
        <div className='addEventBtn'>Add Event</div>
        <div className='indEventCntr'>
          <IndEvent />
          <IndEvent />
          <IndEvent />
          <IndEvent />
          <IndEvent />
        </div>
      </div>
      <div className='calendarView'>
        <div className='month-yearHeadingCntr'>
          <h2 className='monthHeading'>June</h2>
          <h2 className='yearHeading'>2021</h2>
        </div>
        <input className='setDateInput' type='date'/>
        <div className='mainCalendarCntr'>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </div>
      </div>
      
     
    </div>
  );
}

export default App;
{/* 
      <EditEvent />  */}