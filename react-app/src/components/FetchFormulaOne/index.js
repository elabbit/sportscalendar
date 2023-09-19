import dayjs from "dayjs";
import "./FetchFormulaOne.css";
import formulaOneLogo from "../../images/formulaOneLogo.png";
import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const FetchFormulaOne = ({ eventsList, setEventsList }) => {
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState('race');
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(()=>{
        setEventsList([]);
    },[setEventsList])

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
            setHasSubmitted(true)
        }
    }

    const handleChange = (e) => {
        setType(e.target.value)
        setEventsList([])
        setHasSubmitted(false)
    }

    return (
        <div className="formula-container">
            <div className="formula-header">
                <img className='formula-logo' src={formulaOneLogo} alt='' />
                <div>
                    Season: 2023
                </div>
                <select className="formula-type-select" onChange={handleChange} value={type}>
                    <option value={"race"}>Race</option>
                    <option value={"1st Qualifying"}>Qualifying</option>
                    <option value={"Sprint"}>Sprint</option>
                    <option value={"1st Practice"}>FP1</option>
                    <option value={"2nd Practice"}>FP2</option>
                    <option value={"3rd Practice"}>FP3</option>
                </select>
                <div className="formula-loading-div">
                {!loading ?
                    <button onClick={handleClick}>Search</button>
                    :
                   <BarLoader width="60px"/>
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
                    <>
                    {(hasSubmitted && !eventsList.length) &&
                    <div className="no-res-msg">No results found.</div> }
                    </>
                }

            </div>



        </div>


    )

}


export default FetchFormulaOne;
