import { useState } from "react";


const FetchFormulaOne = () => {

    const [races, setRaces] = useState([]);

    const handleClick = async () => {
        const response = await fetch(`/api/events/getformulaone`, {
        })
        if (response.ok) {
            const data = await response.json();
            if(data){
                setRaces(...Object.values(data))
            }
        }
    }

    return (



        <div className="formula-container">

            <div className="formula-header">
                <button onClick={handleClick}>Get Races</button>

            </div>
            <div className='formula-list'>
                {races.length ?
                    races.map((race) => (
                        <div key={race.name}>{race.name}</div>
                    ))
                    :
                    <div>Loading</div>
                }

            </div>



        </div>


    )

}


export default FetchFormulaOne;
