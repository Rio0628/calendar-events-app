import React from 'react';
import EditIcon from '../images/edit-icon.png'

const IndEvent = (props) => {
    return (
        <div className={ 'indEventView ' + props.info.type.toLowerCase()}>
            <p className='indEventHeading' onClick={props.onClick} date={props.info.date}>{props.info.name}</p>
            <img className='editBtn' src={EditIcon} alt='Edit Button' name={props.info.name} onClick={props.onClick}/>
            <p className='deleteBtn' onClick={props.onClick} name={props.info.name}>X</p>
        </div>
    )
}

export default IndEvent;