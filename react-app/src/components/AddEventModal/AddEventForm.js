import { useContext, useState } from "react";
import CalendarContext from "../../context/CalendarContext";
import "./AddEventForm.css"

const AddEventForm = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const {daySelected} = useContext(CalendarContext)



    return (
        <div className="add-event-container">
            <form>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                >
                </input>
                <div>{daySelected.format("dddd, MMMM DD")}</div>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </input>
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </input>

            </form>
        </div>

    )
}

export default AddEventForm;
