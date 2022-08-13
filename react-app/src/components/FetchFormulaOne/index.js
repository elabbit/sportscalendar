import { useState } from "react";
import "./FetchFormulaOne.css"
import formulaOneLogo from "../../images/formulaOneLogo.png"

const FetchFormulaOne = ({eventsList, setEventsList}) => {

    // const [races, setRaces] = useState([]);

    const handleClick = async () => {
        const response = await fetch(`/api/events/getformulaone`, {
        })
        if (response.ok) {
            const data = await response.json();
            if (data) {
                setEventsList(...Object.values(data))
            }
        }
    }

    return (
        <div className="formula-container">
            <div className="formula-header">
                <img className='formula-logo' src={formulaOneLogo} />
                <button onClick={handleClick}>Get Races</button>
            </div>
            <div className='formula-body'>
                {eventsList.length ?
                    eventsList.map((race) => (
                        <div key={race.name}>{race.name}</div>
                    ))
                    :
                    null
                }

            </div>



        </div>


    )

}


export default FetchFormulaOne;
