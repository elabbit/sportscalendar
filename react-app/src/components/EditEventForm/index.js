import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { editEvent } from "../../store/calendars";
import "./EditEventForm.css"
import CalendarContext from "../../context/CalendarContext";
import dayjs from "dayjs";

const EditEventForm = ({ hideForm, event }) => {
    const { currentCalendar, setCurrentCalendar, setCurrentEvent, currentOffset } = useContext(CalendarContext);
    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(event.description);
    const [location, setLocation] = useState(event.location);
    const [category, setCategory] = useState(event.category)
    const [startDate, setStartDate] = useState(dayjs(event.startDate).add(currentOffset, "hour").format("YYYY-MM-DD"));
    const [startTime, setStartTime] = useState(event.startTime);
    const [color, setColor] = useState(event.color);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newStartTime = undefined;
        console.log("START TIMEEEEEEEEEEE", startTime)
        if (startTime !== '') {

            let editStartTime = startTime;
            newStartTime = String(editStartTime).split(":").splice(0,2).join(":")
            console.log(String(editStartTime).split(":").splice(0,2).join(":"))
        }
        const data = await dispatch(editEvent(title, description, location, category, startDate, newStartTime, color, event.id));
        if (data) {
            setCurrentCalendar(data.calendar)
            setCurrentEvent(data.event)
            hideForm();
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        hideForm();
    }

    return (
        <div className="edit-event-container">
            <form className="edit-event-form" onSubmit={handleSubmit}>
                <input
                type='date'
                value={startDate}
                />
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />

                <input
                    type='text'
                    name='title'
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    maxLength="80"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength="400"
                >
                </textarea>
                <input
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
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button type="submit">Edit Event</button>
                <button type="cancel" onClick={handleCancel}>Cancel</button>
            </form>
        </div>

    )
}

export default EditEventForm;
