import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux'
import CalendarContext from '../../context/CalendarContext';
import { addCalendar } from '../../store/calendars';
import "./AddCalendarForm.css"
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const AddCalendarForm = ({ hideModal }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [def, setDef] = useState(false);
    const dispatch = useDispatch();
    const { setCurrentCalendar, currentCalendar } = useContext(CalendarContext)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(addCalendar(title, description, def));
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
        <div className="add-cal-container">
            <div className="add-cal-mod-header">New Calendar</div>
            <form className="add-cal-form" onSubmit={handleSubmit}>
                <div className='add-cal-title'>
                    <input
                        type='text'
                        name='title'
                        placeholder="Title (required)"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        maxLength="40"
                        required
                    />
                </div>
                <div className='add-cal-des'>
                    <textarea
                        name='description'
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        maxLength="200"
                    />
                </div>
                <div className='add-cal-tog-bttns'>
                    <div className='add-cal-tog'>
                        <span>Default?</span>
                        <Toggle
                            checked={def}
                            icons={false}
                            onChange={(e) => setDef(e.target.checked)}
                        />
                    </div>
                    <div className='add-cal-bttns'>
                        <button type='submit'><i className="fa-solid fa-check"></i></button>
                        <button type="cancel" onClick={handleCancel}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddCalendarForm;
