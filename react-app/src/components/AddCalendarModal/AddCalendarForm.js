import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux'
import CalendarContext from '../../context/CalendarContext';
import { addCalendar } from '../../store/calendars';
import "./AddCalendarForm.css"

const AddCalendarForm = ({ hideModal }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const { setCurrentCalendar, currentCalendar } = useContext(CalendarContext)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(addCalendar(title, description));
        if (data) {
            setCurrentCalendar(data)
            hideModal();
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault();
        hideModal()
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
                />
            </div>
            <div>
                <input
                    type='text'
                    name='description'
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    maxLength="400"
                />
            </div>
            <button type='submit'>Submit</button>
            <button type="cancel" onClick={handleCancel}>Cancel</button>
        </form>
    );
};

export default AddCalendarForm;
