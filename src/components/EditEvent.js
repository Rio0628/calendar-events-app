import React from 'react';


const EditEvent = () => {
    return (
        <form className='editEventContainer'>
            <h3 className='editEventHeading'>Edit Event</h3>
            <input type='text' placeholder='Event Name...' className='nameInput' />
            <div className='date-typeContainer'>
            <input type='date' className='dateInput'/>
                <select className='typeInput'>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                </select>
            </div>
            <ul className='cancelConfirmBtns'>
                <li className='confirmBtn'>Confirm</li>
                <li className='cancelBtn'>Cancel</li>
            </ul>
        </form>
    )
}

export default EditEvent