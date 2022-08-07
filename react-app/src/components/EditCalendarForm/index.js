import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux'
import CalendarContext from '../../context/CalendarContext';
import { editCalendar } from '../../store/calendars';
import "./EditCalendarForm.css"
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const EditCalendarForm = ({hideForm, calendar}) => {
    const { setCurrentCalendar } = useContext(CalendarContext)
    const [title, setTitle] = useState(calendar.title);
    const [description, setDescription] = useState(calendar.description);
    const [def, setDef] = useState(calendar.default)
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const calendarId = calendar.id;
        const data = await dispatch(editCalendar(title, description, def, calendarId));
        if(data){
            setCurrentCalendar(data)
            hideForm();
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault();
        hideForm()
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <textarea
                    name='description'
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    maxLength="200"
                />
            </div>
            <label>
                <span>Default?</span>
                <Toggle
                    checked={def}
                    icons={false}
                    onChange={(e) => setDef(e.target.checked)}
                />
            </label>
            <button type='submit'><i className="fa-solid fa-check"></i></button>
            <button type="cancel" onClick={handleCancel}><i className="fa-solid fa-xmark"></i></button>

        </form>
    );
};

export default EditCalendarForm;
