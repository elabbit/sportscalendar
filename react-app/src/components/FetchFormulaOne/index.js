import dayjs from "dayjs";
import "./FetchFormulaOne.css";
import formulaOneLogo from "../../images/formulaOneLogo.png";
import { useState } from "react";

const FetchFormulaOne = ({ eventsList, setEventsList }) => {
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState('race');

    const handleClick = async () => {
        setLoading(true)
        const response = await fetch(`/api/events/getformulaone/${type}`, {
        })
        if (response.ok) {
            const data = await response.json();
            if (data) {
                setEventsList(...Object.values(data))
            }
            setLoading(false)
        }
    }

    return (
        <div className="formula-container">
            <div className="formula-header">
                <img className='formula-logo' src={formulaOneLogo} alt='' />
                <div>
                    Season: 2022
                </div>
                <select className="formula-type-select" onChange={(e) => setType(e.target.value)} value={type}>
                    <option value={"race"}>Race</option>
                    <option value={"1st Qualifying"}>Qualifying</option>
                </select>
                <div className="formula-loading-div">
                {!loading ?
                    <button onClick={handleClick}>Search</button>
                    :
                    <div>Loading...</div>
                }
                </div>
            </div>
            <div className='formula-body'>
                {eventsList.length ?
                    eventsList.map((race) => (
                        <div key={race.title} className="formula-item">
                            <div className="formula-item-title">{race.title} <span>{race.venue}</span></div>
                            <div>{dayjs(race.startDate).format("dddd MMMM DD, YYYY")} {dayjs(race.startTime).format("h:mm a")}</div>

                        </div>
                    ))
                    :
                    null
                }

            </div>



        </div>


    )

}


export default FetchFormulaOne;
