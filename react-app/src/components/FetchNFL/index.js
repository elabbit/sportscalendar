import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import CalendarContext from "../../context/CalendarContext";
import nflLogo from "../../images/nflLogo.png";
import './FetchNFL.css'


const FetchNFL = ({ eventsList, setEventsList }) => {
    const [loading, setLoading] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const { currentOffset } = useContext(CalendarContext)
    const [team, setTeam] = useState("SF")

    useEffect(()=>{
        setEventsList([]);
    },[setEventsList])

    const handleClick = async () => {
        setLoading(true)
        const response = await fetch(`/api/events/getnfl/${team}`, {
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
            <img className='nfl-logo' src={nflLogo} alt='' />
                <div>Season: 22-23</div>
                <select className="nfl-team-select" onChange={(e) => setTeam(e.target.value)} value={team}>
                    <option value={"SF"}>San Francisco 49ers</option>
                    <option value={"WAS"}>Washington Commanders</option>
                    <option value={"CAR"}>Carolina Panthers</option>
                    <option value={"LAR"}>Los Angeles Rams</option>
                </select>
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
                            <div>{dayjs(race.startDate).format("dddd MMMM DD, YYYY")} {dayjs(race.startTime).subtract(currentOffset - 4, 'hour').format("h:mm a")}</div>

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


export default FetchNFL;
