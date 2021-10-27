import React from 'react';

const EditEvent = (props) => {

    return (
        <form className='editEventContainer'>
            <h3 className='editEventHeading'>Edit Event</h3>
            <input type='text' placeholder='Event Name...' defaultValue={props.info.name} className='nameInput' />
            <div className='date-typeContainer'>
            <input type='date' defaultValue={props.info.date} className='dateInput'/>
                <select className='typeInput' defaultValue={props.info.type}>
                    <option>General</option>
                    <option>Social</option>
                    <option>Holiday</option>
                    <option>Personal</option>
                    <option>Important</option>
                    <option>Business</option>
                </select>
            </div>
            <ul className='cancelConfirmBtns'>
                <li className='confirmBtn' onClick={props.onClick}>Confirm</li>
                <li className='cancelBtn' onClick={props.onClick}>Cancel</li>
            </ul>
        </form>
    )
}

export default EditEvent