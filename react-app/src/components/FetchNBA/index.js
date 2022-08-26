import dayjs from "dayjs";
import nbaLogo from "../../images/nbaLogo.png";
import { useContext, useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import CalendarContext from "../../context/CalendarContext";
import './FetchNBA.css'

const FetchNBA = ({ eventsList, setEventsList }) => {
    const [loading, setLoading] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const {currentOffset} = useContext(CalendarContext)
    const [team, setTeam] = useState("GS")

useEffect(()=>{
    setEventsList([]);
},[setEventsList])


    const handleClick = async () => {
        setLoading(true)
        const response = await fetch(`/api/events/getnba/${team}`, {
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

    const handleChange = (e) => {
        setTeam(e.target.value)
        setEventsList([])
        setHasSubmitted(false)
    }

    return (
        <div className="formula-container">
            <div className="formula-header">
                <img className='formula-logo' src={nbaLogo} alt='' />
                <div className='nba-season'>Season: 22-23</div>
                <select className="nba-team-select" onChange={handleChange} value={team}>
                    <option value={"GS"}>Golden State Warriors</option>
                    <option value={"LAL"}>Los Angeles Lakers</option>
                    <option value={"WAS"}>Washington Wizards</option>
                    <option value={"DAL"}>Dallas Mavericks</option>
                    <option value={"CHA"}>Charlotte Hornets</option>
                    <option value={"MIL"}>Milwaukee Bucks</option>
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
                        <div key={`${race.title}-${race.startDate}`} className="formula-item">
                            <div className="formula-item-title">{race.title} <span>{race.venue}</span></div>
                            <div>{dayjs(race.startDate).format("dddd MMMM DD, YYYY")} {race.startTime && dayjs(race.startTime).subtract(currentOffset-4, 'hour').format("h:mm a")}</div>

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


export default FetchNBA;
