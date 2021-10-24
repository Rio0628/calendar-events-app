import React from 'react';
import EditIcon from '../images/edit-icon.png'

const IndEvent = (props) => {
    // Include a function that will change the color of the event according to its category

    return (
        // Add a view for the event to see all of the info from the event itself ( Will be tiggered by a changing state boolean )
        <div className='indEventView'>
            <p className='indEventHeading' onClick={props.onClick}>Sample Event 1</p>
            <img className='editBtn' src={EditIcon} alt='Edit Button' onClick={props.onClick}/>
            <p className='deleteBtn' onClick={props.onClick}>X</p>
        </div>
    )
}

export default IndEvent;