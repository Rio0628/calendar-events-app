import React from 'react';
import IndEvent from './components/IndEvent';
import IndDailyEvent from './components/IndDailyEvent';
import EditEvent from './components/EditEvent';
import Day from './components/Day';

function App() {
  return (
    <div className="container">
      {/* <IndDailyEvent />
      <IndEvent />
      <EditEvent />  */}
      <Day />
    </div>
  );
}

export default App;
