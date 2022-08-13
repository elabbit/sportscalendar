import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../store/calendars";
import "./AddEventForm.css"
import CalendarContext from "../../context/CalendarContext";
import ErrorModal from '../ErrorModal';

const AddEventForm = ({ hideModal, day }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('')
    const [startDate, setStartDate] = useState(day.format("YYYY-MM-DD"));
    const [startTime, setStartTime] = useState('');
    const [color, setColor] = useState("#adc9cd");
    const { currentCalendar, setCurrentCalendar, setCurrentEvent } = useContext(CalendarContext);
    const [errors, setErrors] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false)

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim().length) {
            setErrors([`Please enter a title.`])
            setShowErrorModal(true)
            return
        }
        let newStartTime = undefined;
        if (startTime !== '') {
            newStartTime = startTime;
        }
        const data = await dispatch(addEvent(title, description, location, category, startDate, newStartTime, color, true, null, null, currentCalendar.id));
        if (data) {
            setCurrentCalendar(data.calendar)
            setCurrentEvent(data.event)
            hideModal();
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault();
        hideModal()
    }

    return (
        <div className="add-event-container">
            <ErrorModal hideModal={() => setShowErrorModal(false)} showModal={showErrorModal} validationErrors={errors} />
            <div className="add-event-mod-header">Add Event</div>
            <form className="add-event-form" onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder="Title (required)"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    maxLength="80"
                    required
                />
                <div className="add-start-div">
                    <input
                        type='date'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        list="presetColors"
                    />
                    <datalist id="presetColors">
                        <option>#EC8993</option>
                        <option>#ffb480</option>
                        <option>#f8f38d</option>
                        <option>#c4f581</option>
                        <option>#87f33f</option>
                        <option>#32EEBD</option>
                        <option>#08cad1</option>
                        <option>#adc9cd</option>
                        <option>#00C7FC</option>
                        <option>#9d94ff</option>
                    </datalist>
                </div>
                <div className="add-eve-loc-cat">
                    <input
                        className="add-eve-loc"
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        maxLength="80"
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        maxLength="20"
                    />
                </div>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength="400"
                >
                </textarea>
                <div className='add-eve-bttns'>
                    <button type='submit'><i className="fa-solid fa-check"></i></button>
                    <button type="cancel" onClick={handleCancel}><i className="fa-solid fa-xmark"></i></button>
                </div>
            </form>
        </div>

    )
}

export default AddEventForm;
