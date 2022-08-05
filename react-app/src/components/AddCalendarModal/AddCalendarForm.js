import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux'
import CalendarContext from '../../context/CalendarContext';
import { addCalendar } from '../../store/calendars';

const AddCalendarForm = ({hideModal}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(addCalendar(title, description));
        if(data){
            hideModal();
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Add Calendar</div>
            <div>
                <input
                    type='text'
                    name='title'
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    maxLength="40"
                    required
                ></input>
            </div>
            <div>
                <input
                    type='text'
                    name='description'
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    maxLength="400"
                ></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default AddCalendarForm;
