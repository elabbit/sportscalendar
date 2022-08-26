import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux'
import CalendarContext from '../../context/CalendarContext';
import { addCalendar } from '../../store/calendars';
import "./AddCalendarForm.css"
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import ErrorModal from '../ErrorModal';

const AddCalendarForm = ({ hideModal, calendars }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [background, setBackground] = useState(0);
    const [def, setDef] = useState(false);
    const dispatch = useDispatch();
    const { setCurrentCalendar , setCurrentEvent} = useContext(CalendarContext)
    const [errors, setErrors] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim().length) {
            setErrors([`Please enter a title.`])
            setShowErrorModal(true)
            return
        }
        if (Object.values(calendars).findIndex((cal) => (cal.title.trim() === title.trim())) > -1) {
            setErrors([`Already have a calendar named ${title}!`])
            setShowErrorModal(true)
            return
        }

        const data = await dispatch(addCalendar(title, description, def, background));
        if (data) {
            setCurrentCalendar(data)
            setCurrentEvent('')
            hideModal();
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault();
        hideModal()
    }

    return (
        <div className="add-cal-container">
            <ErrorModal hideModal={() => setShowErrorModal(false)} showModal={showErrorModal} validationErrors={errors} />
            <div className="add-cal-mod-header">New Calendar</div>
            <form className="add-cal-form" onSubmit={handleSubmit}>
            <div className='add-cal-bg'>
                    <span>Select Background: </span>
                    <select name="bg-select" id="bg-select" onChange={(e) => setBackground(e.target.value)} value={background}>
                        <option key="none" value={0}>None</option>
                        <option key="bg1" value={1}>Gradient</option>
                        <option key="bg2" value={2}>Half Dome</option>
                        <option key="bg3" value={3}>Mountains</option>
                        <option key="bg4" value={4}>Beach</option>
                    </select>
                </div>
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
