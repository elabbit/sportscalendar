import { useState } from "react"

const FetchSports = () => {

    const [sports, setSports] = useState();


    const handleClick = async () => {
        // const res = await fetch("https://api.allsportdb.com/v3/calendar?dateTo=2022-08-31&competition=formula%201", {
        //     headers: {
        //         Accept: "application/json",
        //         Authorization: "Bearer {token}",
        //         mode: "no-cors"
        //     }


        // })

        // if (res.ok) {
        //     const data = await res.json();
        //     setSports(data)
        // }
    }


    return (
        <div>
            <button onClick={handleClick}>click</button>
            {sports && { sports }}
        </div>
    )

}


export default FetchSports;
