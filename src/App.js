import React from 'react';
import IndEvent from './components/IndEvent';
import EditEvent from './components/EditEvent';
import Day from './components/Day';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editEventTriggered: false,
      addEventTriggered: false,
      testEvents: [
        {date: '2021-10-12', type: 'holiday', name: 'Birthday Party'},
        {date: '2021-10-12', type: 'business', name: 'App Meeting'},
        {date: '2021-10-12', type: 'general', name: 'Fundraiser'},
      ],
    }
  }

  render () {
    let indEventsContainer = [];

    const onChange = (e) => {
      console.log(e.target.value);

      if (e.target.className === 'setDateInput') {
        
      }
    }

    const onClick = (e) => {
      console.log(e.target)

      if (e.target.className === 'addEventBtn' || e.target.className === 'cnclBtnAdd') {
        this.setState({ addEventTriggered: !this.state.addEventTriggered });
      }

      if (e.target.className === 'cnfrmBtnAdd') {
        this.setState({ addEventTriggered: false })
      }

      if (e.target.className === 'editBtn' || e.target.className === 'confirmBtn' || e.target.className === 'cancelBtn') {
        this.setState({ editEventTriggered: !this.state.editEventTriggered });
      }
    }
   
    for (let i = 0; i < this.state.testEvents.length; i++ ) {    
      indEventsContainer.push( <IndEvent info={this.state.testEvents[i]} key={'event' + i} onClick={onClick}/>)
    }

    return (
      <div className="container">
        
        <div className='eventsView'>
          <h2 className='eventsViewHeading'>Upcoming Events</h2>
          
          {this.state.addEventTriggered ?
            <form className='addEventOpen'>
              <p className='addEventOpenHeading'>Add Event</p>
              <input type='text' placeholder='Event Name...' className='nameAddEvent' onChange={onChange}/>
              <div className='date-typeCntrAdd'>
                <input type='date' className='dateAddEvent' onChange={onChange}/>
                <select className='typeAddEvent' onChange={onChange}>
                  <option>General</option>
                  <option>Social</option>
                  <option>Holiday</option>
                  <option>Personal</option>
                  <option>Important</option>
                  <option>Business</option>
                </select>
              </div>
              <ul className='cnclCnfrmBtns'>
                  <li className='cnfrmBtnAdd' onClick={onClick}>Confirm</li>
                  <li className='cnclBtnAdd' onClick={onClick}>Cancel</li>
              </ul>
            </form>
            : 
            <div className='addEventBtn' onClick={onClick}>Add Event</div>
          }
          
          <div className='indEventCntr'>
            {indEventsContainer}
          </div>
        </div>
        <div className='calendarView'>
          <div className='month-yearHeadingCntr'>
            <h2 className='monthHeading'>June</h2>
            <h2 className='yearHeading'>2021</h2>
          </div>
          <input className='setDateInput' type='date' onChange={onChange}/>
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

        {this.state.editEventTriggered ? <EditEvent onClick={onClick}/> : null}
        
       
      </div>
    );
  }
}

export default App;
