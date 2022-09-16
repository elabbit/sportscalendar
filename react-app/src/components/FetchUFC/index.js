import dayjs from "dayjs";
import "./FetchUFC.css";
import ufcLogo from "../../images/ufcLogo.png";
import { useContext, useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import CalendarContext from "../../context/CalendarContext";


const FetchUFC = ({ eventsList, setEventsList }) => {
    const [loading, setLoading] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const {currentOffset} = useContext(CalendarContext)

    useEffect(()=>{
        setEventsList([]);
    },[setEventsList])

    const handleClick = async () => {
        setLoading(true)
        const response = await fetch(`/api/events/getufc`, {
        })
        if (response.ok) {
            const data = await response.json();
            if (data) {
                setEventsList(...Object.values(data))
            }
            setLoading(false)
            setHasSubmitted(true)
        }
    }

    return (
        <div className="formula-container">
            <div className="formula-header">
                <img className='formula-logo' src={ufcLogo} alt='' />
                <div>Officially scheduled UFC events</div>
                <div className="formula-loading-div">
                    {!loading ?
                        <button onClick={handleClick}>Search</button>
                        :
                        <BarLoader width="60px" />
                    }
                </div>
            </div>
            <div className='formula-body'>
                {eventsList.length ?
                    eventsList.map((race) => (
                        <div key={race.title} className="formula-item">
                            <div className="formula-item-title">{race.title} <span>{race.venue}</span></div>
                            <div>{dayjs(race.startDate).format("dddd MMMM DD, YYYY")} {dayjs(race.startTime).subtract(currentOffset-5, 'hour').format("h:mm a")}</div>

                        </div>
                    ))
                    :
                    <>
                        {(hasSubmitted && !eventsList.length) &&
                            <div className="no-res-msg">No results found.</div>}
                    </>
                }

            </div>



        </div>


    )

}


export default FetchUFC;
