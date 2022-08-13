import { useEffect, useState } from "react"
import { Modal } from '../../context/Modal';
import "./FetchSports.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CategoryMotorsports from "../CategoryMotorsports";
import { useSelector } from "react-redux";


const FetchSports = () => {
    const [showModal, setShowModal] = useState(false);
    const [eventsList, setEventsList] = useState([]);
    const [selectedCal, setSelectedCal] = useState();
    const calendars = useSelector(state => state.calendars)

const handleClose = () => {
    setShowModal(false)
    setEventsList([])
}

    return (
        <>
            <button onClick={() => setShowModal(true)}>Add Sports Events</button>
            {showModal && (
                <Modal>
                    <div className="sports-container">
                        <div className="sports-header">
                            <h2>Find Sports Events</h2>
                        </div>
                        <div className="sports-content">
                            <Tabs>
                                <TabList>
                                    <Tab>Motorsports</Tab>
                                    <Tab>MMA</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="category-container">
                                    <CategoryMotorsports eventsList={eventsList} setEventsList={setEventsList} />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel>
                            </Tabs>


                        </div>

                        <div>
                        <select name="cal-title-select" id="cal-title-select" onChange={(e) => setSelectedCal(e.target.value)}>
                                    {Object.values(calendars).map((cal) => (
                                        <option key={cal.id} value={cal.id}>{cal.title}</option>
                                    ))
                                    }
                                </select>
                            <button> Add events</button>
                            <button type="cancel" onClick={handleClose}>Back</button>
                        </div>
                    </div>






                </Modal>
            )}
        </>
    )

}


export default FetchSports;
