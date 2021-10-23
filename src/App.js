import React from 'react';
import IndEvent from './components/IndEvent';
import EditEvent from './components/EditEvent';
import Day from './components/Day';

function App() {
  return (
    <div className="container">
      <div className='eventsView'>
        <h2 className='eventsViewHeading'>Upcoming Events</h2>
        <div className='indEventCntr'>
          <IndEvent />
          <IndEvent />
          <IndEvent />
          <IndEvent />
          <IndEvent />
        </div>
      </div>
      <div className='calendarView'></div>
      
      {/* 
      <EditEvent />  */}
      {/* <Day /> */}
    </div>
  );
}

export default App;
