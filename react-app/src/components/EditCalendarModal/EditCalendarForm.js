import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux'
import CalendarContext from '../../context/CalendarContext';
import { editCalendar } from '../../store/calendars';

const EditCalendarForm = ({hideModal, calendar}) => {
    const { setCurrentCalendar } = useContext(CalendarContext)
    const [title, setTitle] = useState(calendar.title);
    const [description, setDescription] = useState(calendar.description);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const calendarId = calendar.id;
        const data = await dispatch(editCalendar(title, description, calendarId));
        if(data){
            setCurrentCalendar(data)
            hideModal();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Edit Calendar</div>
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

export default EditCalendarForm;
