import React from 'react';
import IndEvent from './components/IndEvent';
import IndDailyEvent from './components/IndDailyEvent';
import EditEvent from './components/EditEvent';

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <IndDailyEvent />
      <IndEvent />
      <EditEvent /> 
    </div>
  );
}

export default App;
