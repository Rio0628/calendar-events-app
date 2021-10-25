import React from 'react';



const EditEvent = (props) => {
    return (
        <form className='editEventContainer'>
            <h3 className='editEventHeading'>Edit Event</h3>
            <input type='text' placeholder='Event Name...' className='nameInput' />
            <div className='date-typeContainer'>
            <input type='date' className='dateInput'/>
                <select className='typeInput'>
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