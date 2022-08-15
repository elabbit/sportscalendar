import { useContext, useEffect, useState } from "react";
import CalendarContext from "../../context/CalendarContext";
import "./ListCategory.css"
import dayjs from 'dayjs'
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)

const ListCategory = () => {

    const { currentCalendar, currCat, setCurrCat, setCurrentEvent, currentEvent, currentOffset } = useContext(CalendarContext)
    const [catList, setCatList] = useState();
    const [eveList, setEveList] = useState([]);

    useEffect(() => {
        if (currentCalendar) {
            const eveArr = [...currentCalendar.events];
            const sorted = eveArr.sort((a, b) => {
                if (dayjs(a.startDate).format("YYYY-MM-DD") === dayjs(b.startDate).format("YYYY-MM-DD")) {
                    if (a.startTime === "None") return -1
                    else {
                        return convertMin(a.startTime) - convertMin(b.startTime)
                    }
                } else {
                    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
                }
            })
            const startInd = sorted.findIndex((eve) => {
                const eveDate = dayjs(eve.startDate).add(currentOffset, 'hour').format("YYYY-MM-DD")
                const toDate = dayjs(new Date()).format("YYYY-MM-DD")
                return dayjs(eveDate).isSameOrAfter(toDate, 'day')
            })

            const catObj = {};
            sorted.slice(startInd).forEach((event) => {
                if (!event.category) {
                    catObj["(uncategorized)"] = (catObj["(uncategorized)"] || 0) + 1
                } else {
                    catObj[event.category] = (catObj[event.category] || 0) + 1
                }
            })
            setCatList(Object.keys(catObj).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
                .sort((a, b) => {
                    if (b[0] === '(') return -1
                    else return 0
                })
            )

            if (currCat === "all") {
                setEveList(sorted.slice(startInd).splice(0, 10))
            } else if (currCat === "(uncategorized)") {
                const filterArr = sorted.slice(startInd)
                const filtered = filterArr.filter((eve) => (eve.category === ''))
                setEveList(filtered.splice(0, 10))
            } else {
                const filterArr = sorted.slice(startInd)
                const filtered = filterArr.filter((eve) => (eve.category === currCat))
                setEveList(filtered.splice(0, 10))
            }
            if(startInd < 0) setEveList([])
         }

    }, [currentCalendar, currentEvent, currCat, currentOffset])

    function convertTime(time) {
        if (time === "None") return null;
        const timeArr = time.split(":").splice(0, 2)
        if (timeArr[0] === "00") {
            return `12:${timeArr[1]} AM`
        } else if (+timeArr[0] < 10) {
            return `${+timeArr[0]}:${timeArr[1]} AM`
        } else if (+timeArr[0] < 12) {
            return timeArr.join(':') + " AM"
        } else if (+timeArr[0] === 12) {
            return `12:${timeArr[1]} PM`
        } else
            return `${+timeArr[0] - 12}:${timeArr[1]} PM`
    }

    const handleClick = (event) => {
        setCurrentEvent(event)
    }

    function convertMin(time) {
        const timeArr = time.split(":").splice(0, 2)
        let hourMin = +timeArr[0] * 60;
        return hourMin + +timeArr[1];

    }

    return (
        <div className="cat-container">
            <div className="cat-list-header">Upcoming Events</div>
            <select onChange={(e) => setCurrCat(e.target.value)} value={currCat}>
                <option value="all">All Categories</option>
                {catList ?
                    catList.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))
                    :
                    null
                }
            </select>
            <div className="cat-list-events">
                {eveList.map((event) => (
                    <div key={event.id} className="cat-item" onClick={() => handleClick(event)}>
                        <div className="cat-item-inner">
                            <div className="cat-item-title">{event.title}</div>
                            <div>{dayjs(event.startDate).add(currentOffset, 'hour').format("dddd MMMM DD, YYYY")} </div>
                            <div>{convertTime(event.startTime)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ListCategory;
