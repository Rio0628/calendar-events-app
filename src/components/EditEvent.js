import React from 'react';



const EditEvent = (props) => {
    
    const changeType = (type) => {
        if (type === 'general') {
            return 'General';
        }
        else if (type === 'social') {
            return 'Social';
        }
        else if (type === 'holiday') {
            return 'Holiday';
        }
        else if (type === 'personal') {
            return 'Personal';
        }
        else if (type === 'important') {
            return 'Important'
        }
        else if (type === 'business') {
            return 'Business'
        }
    }
    

    return (
        <form className='editEventContainer'>
            <h3 className='editEventHeading'>Edit Event</h3>
            <input type='text' placeholder='Event Name...' defaultValue={props.info.name} className='nameInput' />
            <div className='date-typeContainer'>
            <input type='date' defaultValue={props.info.date} className='dateInput'/>
                <select className='typeInput' defaultValue={changeType(props.info.type)}>
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