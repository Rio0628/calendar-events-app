import React from 'react';
import EditIcon from '../images/edit-icon.png'

const IndEvent = (props) => {
    // Include a function that will change the color of the event according to its category
    
    // The different categories - Social, business, important, general, personal, holiday
    // The colors of categories - Corn,   Orange,   Red,     Gainsboro, green, Blue  
    
    // ALL of the colors themselves - Red
    /* 
                < <option>General</option>
                  <option>Social</option>
                  <option>Holiday</option>
                  <option>Personal</option>
                  <option>Important</option>
                  <option>Business</option>
    */

    const indBackground = (type) => {
        return type === 'General' ? 'general' : type === 'Social' ? 'social' : type === 'Holiday' ? 'holiday' : type === 'Personal' ? 'personal' : type === 'Important' ? 'important' : type === 'Business' ? 'business' : null;
    };
    
    return (
        // Add a view for the event to see all of the info from the event itself ( Will be tiggered by a changing state boolean )
        <div className={ 'indEventView ' + indBackground(props.info.type)}>
            <p className='indEventHeading' onClick={props.onClick}>{props.info.name}</p>
            <img className='editBtn' src={EditIcon} alt='Edit Button' name={props.info.name} onClick={props.onClick}/>
            <p className='deleteBtn' onClick={props.onClick} name={props.info.name}>X</p>
        </div>
    )
}

export default IndEvent;