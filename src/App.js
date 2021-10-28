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
      events: [
        
      ],
      currentEvents: [],
      currentMonthDays: [],
      updatedDays: [],
    }
  }

  daysMonth(month, year) {
    // Creates an object for all of the days of a certain month using only the necessary information 
    const date = new Date(year, month, 1);
    let days = [], updatedDays = [];
    while(date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1)
    };
    
    for (let i = 0; i < days.length; i++) {
      let day = days[i];
      day = day.toString().split(' ');
      let dayObj = {name: day[0], month: day[1], dayNum: day[2], year: day[3]};
      updatedDays.push(dayObj);
    }

    this.setState({ currentMonthDays: updatedDays });
  }

  createMonth(month) {
    return month === 1 ? 'January' : month === 2 ? 'February' : month === 3 ? 'March' : month === 4 ? 'April' : month === 5 ? 'May' : month === 6 ? 'June' : month === 7 ? 'July' : month === 8 ? 'August' : month === 9 ? 'September' : month === 10 ? 'October' : month === 11 ? 'November' : month === 12 ? 'December' : null;
  }
  
  async componentDidMount() {
    // When the app is started a new date is given to the app (current date)
    const date = new Date();
    
    const events = await localStorage.getItem('events')
    // const events = await localStorage.getItem('events')
    this.setState({ events: JSON.parse(events) });
    // sessionStorage.setItem('events', JSON.stringify(this.state.events));
    
    this.setState({ currentEvents: this.state.events });
    this.setState({ eventsPresent: true });
    this.setState({ startingYear: date.getFullYear() });
    this.setState({ startingMonth: this.createMonth(date.getMonth() + 1) });
    
    // Initialize the typeNewEvent with a type of general as the default in case there is no type change
    this.setState({ typeNewEvent: 'General'});
    this.daysMonth(date.getMonth(), date.getFullYear()); 
  }
  
  render () {
    let indEventsContainer = [], indDay = [];
 
    const changeMonthNum = (month) => { return month === '01' ? 0 : month === '02' ? 1 : month === '03' ? 2 : month === '04' ? 3 : month === '05' ? 4 : month === '06' ? 5 : month === '07' ? 6 : month === '08' ? 7 : month === '09' ? 8 : month === '10' ? 9 : month === '11' ? 10 : month === '12' ? 11 : null}
    
    const onChange = (e) => {
      // Basic input gathering within state 
      if (e.target.className === 'nameAddEvent') {
        this.setState({ nameNewEvent: e.target.value });
      }

      if (e.target.className === 'dateAddEvent') {
        this.setState({ dateNewEvent: e.target.value });
      }

      if (e.target.className === 'typeAddEvent') {
        this.setState({ typeNewEvent: e.target.value });
      }
      
      if (e.target.className === 'nameInput') {
        this.setState({ nameEditEvent: e.target.value });
      }

      if (e.target.className === 'dateInput') {
        this.setState({ dateEditEvent: e.target.value });
      }

      if (e.target.className === 'typeInput') {
        this.setState({ typeEditEvent: e.target.value});
      }

      if (e.target.className === 'setDateInput') {
        // Creates all of the days of the month for picked month and displays the information 
        let input = e.target.value;
        input = input.toString().split('-');
        let month = changeMonthNum(input[1]);
        this.setState({ startingYear: parseInt(input[0]) });
        this.daysMonth(month, parseInt(input[0]));
        this.setState({ startingMonth: this.createMonth(month + 1) });
        this.setState({ startingYear: input[0] });
      }
    }
    
    const onClick = async (e) => {
      console.log(e.target)

      if (e.target.className === 'addEventBtn' || e.target.className === 'cnclBtnAdd') {
        // Takes care of showing the addEvent element 
        this.setState({ addEventTriggered: !this.state.addEventTriggered });
      }

      if (e.target.className === 'cnfrmBtnAdd') {
        // Creates an object with the values of the add Event fields and puts the new event within the events state
        const object = {date: this.state.dateNewEvent, type: this.state.typeNewEvent, name: this.state.nameNewEvent, event: `event ${this.state.events.length + 1}`}
        this.setState({ addEventTriggered: false })
        await this.setState(prevState => ({ events: [...prevState.events, object]}));
        this.setState(prevState => ({ currentEvents: this.state.events }));
        this.setState({ nameNewEvent: ''});
        this.setState({ dateNewEvent: ''});
      }

      if (e.target.className === 'cancelBtn') {
        this.setState({ editEventTriggered: !this.state.editEventTriggered });
      }

      if (e.target.className === 'confirmBtn') {
        // Set the value of the edit fielda to the values of the event that has the same event value
        if (this.state.currentEditEvent[0].name !== this.state.nameEditEvent) { this.state.currentEditEvent[0].name = this.state.nameEditEvent};
        if (this.state.currentEditEvent[0].date !== this.state.dateEditEvent) { this.state.currentEditEvent[0].date = this.state.dateEditEvent}
        if (this.state.currentEditEvent[0].type !== this.state.typeEditEvent) { this.state.currentEditEvent[0].type = this.state.typeEditEvent}

        for (let i = 0; i < this.state.events.length; i++) {
          if (this.state.events[i].event === this.state.currentEditEvent[0].event) {
            this.state.events[i].name = this.state.currentEditEvent[0].name;
            this.state.events[i].date = this.state.currentEditEvent[0].date;
            this.state.events[i].type = this.state.currentEditEvent[0].type;
          }
        }

        this.setState({ editEventTriggered: !this.state.editEventTriggered });
      }

      if (e.target.className === 'editBtn') {
        // Brings up the edit view for certain event and sets the values of the current event into the editView fields 
        const currentEditEvent = this.state.events.filter(event => event.name === e.target.getAttribute('name') )

        this.setState({ nameEditEvent: currentEditEvent[0].name });
        this.setState({ dateEditEvent: currentEditEvent[0].date });
        this.setState({ typeEditEvent: currentEditEvent[0].type });

        this.setState({ currentEditEvent: currentEditEvent});
        this.setState({ editEventTriggered: !this.state.editEventTriggered});
      }

      if (e.target.className === 'deleteBtn') {
        // Create compy of event and will return all events that are not equal to the element name 
        let events = this.state.events.map(event => event).filter(event => event.name !== e.target.getAttribute('name'));
        await this.setState({ events: events});
        this.setState({ currentEvents: this.state.events });
      }

      if (e.target.className === 'indDayView') {
        // Brings all of the events that have the same date as the individual Days 
        let events = this.state.events.filter(event => event.date === e.target.getAttribute('date'));

        this.setState({ dailyEventsClicked: true });
        this.setState({ dayDate: e.target.getAttribute('date') })

        if (events.length > 0) {
          this.setState({ currentEvents: events });
          this.setState({ eventsPresent: true });
        }
        else {
          this.setState({ currentEvents: events});
          this.setState({ eventsPresent: false });
        }
      }

      if (e.target.className === 'returnBtn') {
        // Sets the view for events from the current events from clicking on a day into all events
        this.setState({ currentEvents: this.state.events });
        this.setState({ eventsPresent: true });
        this.setState({ dailyEventsClicked: false });
      }

    }
    
    // Creates the indEvents for the events container 
    for (let i = 0; i < this.state.currentEvents.length; i++ ) {    
      indEventsContainer.push( <IndEvent info={this.state.currentEvents[i]} key={'event' + i} onClick={onClick}/>)
    }
   
    // Creates all individual days to be displayed on mainCalendarContainer 
    for (let i = 0; i < this.state.currentMonthDays.length ; i++) {
      indDay.push( <Day key={'day ' + i} infoDay={this.state.currentMonthDays[i]} events={this.state.events} onClick={onClick}/> );
    }
    
    return (
      <div className="container">
        
        <div className='eventsView'>
          <h2 className='eventsViewHeading'>Upcoming Events</h2>
          
          {this.state.dailyEventsClicked ? <p className='dateOfDay'>day: {this.state.dayDate}</p> : null}
          
          

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
          
          {this.state.dailyEventsClicked ? <div className='returnBtn' onClick={onClick}>return</div> : null }
          

          <div className='indEventCntr'>
            {this.state.eventsPresent ? indEventsContainer : <h3 className='noEventsPrsnt'>There are no events present</h3>}
          </div>
        </div>
        <div className='calendarView'>
          <div className='month-yearHeadingCntr'>
            <h2 className='monthHeading'>{this.state.startingMonth}</h2>
            <h2 className='yearHeading'>{this.state.startingYear}</h2>
          </div>
          <input className='setDateInput' type='month' onChange={onChange}/>
          <div className='mainCalendarCntr'>
            {indDay}
          </div>
        </div>

        {this.state.editEventTriggered ? <EditEvent onClick={onClick} onChange={onChange} info={this.state.currentEditEvent[0]}/> : null}
        
       
      </div>
    );
  }
}

export default App;
