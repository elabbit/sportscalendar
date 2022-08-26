import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux'
import CalendarContext from '../../context/CalendarContext';
import { editCalendar } from '../../store/calendars';
import "./EditCalendarForm.css"
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import ErrorModal from '../ErrorModal';


const EditCalendarForm = ({ setShowEditForm, calendars, calendar }) => {
    const { setCurrentCalendar } = useContext(CalendarContext)
    const [title, setTitle] = useState(calendar.title);
    const [description, setDescription] = useState(calendar.description || '');
    const [background, setBackground] = useState(calendar.background || 0)
    const [def, setDef] = useState(calendar.default)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim().length) {
            setErrors([`Please enter a title.`])
            setShowErrorModal(true)
            return
        }
        if (title !== calendar.title && Object.values(calendars).findIndex((cal) => (cal.title === title)) > -1) {
            setErrors([`Already have a calendar named ${title}!`])
            setShowErrorModal(true)
            return
        }

        const calendarId = calendar.id;
        const data = await dispatch(editCalendar(title, description, def, background, calendarId));
        if (data) {
            setCurrentCalendar(data)
            setShowEditForm(false);
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault();
        setShowEditForm(false)
    }

    return (
        <form className="edit-cal-form" onSubmit={handleSubmit}>
            <ErrorModal hideModal={() => setShowErrorModal(false)} showModal={showErrorModal} validationErrors={errors} />
            <div className="edit-cal-top">

                    <input
                        className="edit-cal-title"
                        type='text'
                        name='title'
                        placeholder="Title (required)"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        maxLength="40"
                        required
                    />
                    <div className="edit-def-toggle">
                    <span>Default?</span>
                        <Toggle
                            checked={def}
                            icons={false}
                            onChange={(e) => setDef(e.target.checked)}
                        />
                </div>

            </div>
            <div className="edit-cal-text-div">
                <textarea
                    name='description'
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    maxLength="200"
                />
            </div>
            <div className="edit-bg-btns">
                <div className='edit-cal-bg'>
                    <select name="edit-bg-select" id="edit-bg-select" onChange={(e) => setBackground(e.target.value)} value={background}>
                        <option key="none" value={0}>None</option>
                        <option key="bg1" value={1}>Gradient</option>
                        <option key="bg2" value={2}>Half Dome</option>
                        <option key="bg3" value={3}>Mountains</option>
                    </select>
                </div>
                <div className="edit-cal-buttons">
                    <button type='submit'><i className="fa-solid fa-check"></i></button>
                    <button type="cancel" onClick={handleCancel}><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        </form>
    );
};

export default EditCalendarForm;
