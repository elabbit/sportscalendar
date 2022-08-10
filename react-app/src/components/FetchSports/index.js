import { useState } from "react"

const FetchSports = () => {

    const [sports, setSports] = useState();


    const onClick = async () => {
        const res = await fetch("https://api.allsportdb.com/v3/calendar?dateTo=2022-08-31&competition=formula%201", {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer 4732f410-c829-4f5d-9764-4b78a1a723b9"
            }
        })

        if (res.ok) {
            const data = await res.json();
            setSports(data)
        }
    }

    return (
        sports ?

            <button onClick={onClick}>{sports}</button>
            :
            null
    )


}


export default FetchSports;
