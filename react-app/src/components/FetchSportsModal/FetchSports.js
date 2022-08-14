import { useContext, useEffect, useState } from "react"
import "./FetchSports.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CategoryMotorsports from "../CategoryMotorsports";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../store/calendars";
import CalendarContext from "../../context/CalendarContext";
import dayjs from 'dayjs';
import ConfirmationModal from "../ConfirmationModal";
import BarLoader from "react-spinners/BarLoader";
import CategoryMMA from "../CategoryMMA";
import CategoryFootball from "../CategoryFootball";
import CategoryBasketball from "../CategoryBasketball";

const FetchSports = ({ hideModal }) => {
    const calendars = useSelector(state => state.calendars)
    const { currentOffset, currentCalendar, setCurrentCalendar } = useContext(CalendarContext)
    const dispatch = useDispatch();
    const [eventsList, setEventsList] = useState([]);
    const [color, setColor] = useState('#adc9cd');
    const [loading, setLoading] = useState(false);
    const [showConfimMod, setShowConfirmMod] = useState(false);

    useEffect(() => {
        if (currentCalendar) {
            const currCal = Object.values(calendars).find((cal) => cal.id === currentCalendar.id)
            setCurrentCalendar(currCal)
        }
    }, [calendars, currentCalendar, setCurrentCalendar])

    const checkStartTime =  (startTime) => {
        if(startTime === null){
            return undefined
        }
        return  dayjs(startTime).subtract(currentOffset - 4, 'hour').format("HH:mm")
    }


    const handleAdd = () => {
        setLoading(true)

        if (eventsList[0].category === "UFC" || eventsList[0].category === 'NASCAR' ||
        eventsList[0].category === "NFL" || eventsList[0].category === "NBA") {
            Promise.all(eventsList.map(async (event) => {
                await dispatch(addEvent(event.title, event.description, event.location, event.category,
                    dayjs(event.startDate).format("YYYY-MM-DD"),checkStartTime(event.startTime), color, false, event.venue, event.image, currentCalendar.id))
            }
            )).then(() => {
                setLoading(false)
                setShowConfirmMod(true)
            })
        } else
            Promise.all(eventsList.map(async (event) => {
                await dispatch(addEvent(event.title, event.description, event.location, event.category,
                    dayjs(event.startDate).format("YYYY-MM-DD"), dayjs(event.startTime).format("HH:mm"), color, false, event.venue, event.image, currentCalendar.id))
            }
            )).then(() => {
                setLoading(false)
                setShowConfirmMod(true)
            })
    }

    const handleClose = () => {
        hideModal()
    }

    async function updateCurrent(value) {
        const currCal = Object.values(calendars).find((cal) => cal.id === +value)
        setCurrentCalendar(currCal)
    }

    return (
        <>
            <ConfirmationModal hideModal={() => setShowConfirmMod(false)} showModal={showConfimMod} eventsNumber={eventsList.length} selectedTitle={currentCalendar?.title} />
            <div className="sports-container">
                <div className="sports-header">
                    <h2>Find Sports Events</h2>
                </div>
                <div className="sports-content">
                    <Tabs>
                        <TabList>
                            <Tab>Basketball</Tab>
                            <Tab>Football</Tab>
                            <Tab>MMA</Tab>
                            <Tab>Motorsports</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="category-container">
                                <CategoryBasketball eventsList={eventsList} setEventsList={setEventsList} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="category-container">
                                <CategoryFootball eventsList={eventsList} setEventsList={setEventsList} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="category-container">
                                <CategoryMMA eventsList={eventsList} setEventsList={setEventsList} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="category-container">
                                <CategoryMotorsports eventsList={eventsList} setEventsList={setEventsList} />
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="sports-footer">
                    <select name="cal-title-select" id="cal-title-select" onChange={(e) => updateCurrent(e.target.value)} value={currentCalendar.id}>
                        {Object.values(calendars).map((cal) => (
                            <option key={cal.id} value={cal.id}>{cal.title}</option>
                        ))
                        }
                    </select>
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
                    <div className="add-eve-load">
                        {!loading ?
                            <button className={eventsList.length ? 'active' : 'disabled'} onClick={handleAdd} disabled={eventsList.length ? false : true}> Add events</button>
                            :
                            <BarLoader width='70px' />
                        }
                    </div>
                    <button type="cancel" onClick={handleClose}>Back</button>
                </div>
            </div>
        </>
    )
}


export default FetchSports;
