import React from 'react';
import IndEvent from './components/IndEvent';
import EditEvent from './components/EditEvent';
import Day from './components/Day';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingYear: '',
      startingMonth: '',
      editEventTriggered: false,
      addEventTriggered: false,
      testEvents: [
        {date: '2021-10-12', type: 'Holiday', name: 'Birthday Party'},
        {date: '2021-10-25', type: 'Business', name: 'App Meeting'},
        {date: '2021-10-22', type: 'General', name: 'Fundraiser'},
      ],
      currentMonthDays: [],
      updatedDays: [],
    }
  }

  daysMonth(month, year) {
    const date = new Date(2021, 0, 1);
    let days = [];
    while(date.getMonth() === 0) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1)
    };
    
    for (let i = 0; i < days.length; i++) {
      let day = days[i];
      day = day.toString();
      this.setState(prevState => ({ currentMonthDays: [...prevState.currentMonthDays, day.split(' ')] }));
      // console.log(day.split(' '))
    }
  }
  
  componentDidMount() {
    // When the app is started a new date is given to the app (current date)
    const date = new Date();
  
    const createMonth = (month) => {
      return month === 1 ? 'January' : month === 2 ? 'February' : month === 3 ? 'March' : month === 4 ? 'April' : month === 5 ? 'May' : month === 6 ? 'June' : month === 7 ? 'July' : month === 8 ? 'August' : month === 9 ? 'September' : month === 10 ? 'October' : month === 11 ? 'November' : month === 12 ? 'December' : null;
    
    }

    this.setState({ startingYear: date.getFullYear() });
    this.setState({ startingMonth: createMonth(date.getMonth() + 1) });
    
    // Initialize the typeNewEvent with a type of general as the default in case there is no type change
    this.setState({ typeNewEvent: 'General'});
    this.daysMonth();

  }
  
  render () {
    let indEventsContainer = [];
    
    console.log(this.state.currentMonthDays)
    
    const onChange = (e) => {
      console.log(e.target.value);
      
      if (e.target.className === 'nameAddEvent') {
        this.setState({ nameNewEvent: e.target.value });
      }

      if (e.target.className === 'dateAddEvent') {
        this.setState({ dateNewEvent: e.target.value });
      }

      if (e.target.className === 'typeAddEvent') {
        this.setState({ typeNewEvent: e.target.value });
      }
    }
    console.log(this.state.startingYear);
    console.log(this.state.startingMonth);

    const onClick = (e) => {
      console.log(e.target)

      if (e.target.className === 'addEventBtn' || e.target.className === 'cnclBtnAdd') {
        this.setState({ addEventTriggered: !this.state.addEventTriggered });
      }

      if (e.target.className === 'cnfrmBtnAdd') {
        const object = {date: this.state.dateNewEvent, type: this.state.typeNewEvent, name: this.state.nameNewEvent}
        this.setState({ addEventTriggered: false })
        this.setState(prevState => ({ testEvents: [...prevState.testEvents, object]}));
        this.setState({ nameNewEvent: ''});
        this.setState({ dateNewEvent: ''});
      }

      if (e.target.className === 'confirmBtn' || e.target.className === 'cancelBtn') {
        this.setState({ editEventTriggered: !this.state.editEventTriggered });
      }

      if (e.target.className === 'editBtn') {
        const currentEditEvent = this.state.testEvents.filter(event => event.name === e.target.getAttribute('name') )

        this.setState({ currentEditEvent: currentEditEvent});
        this.setState({ editEventTriggered: !this.state.editEventTriggered});
      }

      if (e.target.className === 'deleteBtn') {
        // console.log(e.target.getAttribute('name'))
        let events = this.state.testEvents.map(event => event).filter(event => event.name !== e.target.getAttribute('name'));
        this.setState({ testEvents: events });
      }
    }
    
    for (let i = 0; i < this.state.testEvents.length; i++ ) {    
      indEventsContainer.push( <IndEvent info={this.state.testEvents[i]} key={'event' + i} onClick={onClick}/>)
    }
    let indDay = [];
    for (let i = 0; i < 35; i++) {
      indDay.push( <Day key={'day ' + i}/> );
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
            <h2 className='monthHeading'>{this.state.startingMonth}</h2>
            <h2 className='yearHeading'>{this.state.startingYear}</h2>
          </div>
          <input className='setDateInput' type='date' onChange={onChange}/>
          <div className='mainCalendarCntr'>
            {indDay}
          </div>
        </div>

        {this.state.editEventTriggered ? <EditEvent onClick={onClick} info={this.state.currentEditEvent[0]}/> : null}
        
       
      </div>
    );
  }
}

export default App;
