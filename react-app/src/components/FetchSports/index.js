import { useState } from "react"

const FetchSports = () => {

    const [sports, setSports] = useState();


    const handleClick = async () => {
        const response = await fetch(`/api/events/getsports`, {

        })

        if (response.ok) {
            // const data = await response.json();
            console.log('hello')
            // setSports(data)
        }
    }


    return (
        <div>
            <button onClick={handleClick}>click</button>
            {/* {sports && { sports }} */}
        </div>
    )

}


export default FetchSports;
