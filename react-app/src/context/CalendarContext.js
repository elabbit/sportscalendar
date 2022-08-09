import React from 'react'

const CalendarContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index)=>{},
    currentCalendar: null,
    setCurrentCalendar: (calendar)=>{},
    currentEvent: null,
    setCurrentEvent:(event)=>{},
    currentOffset: 0,
    setCurrentOffset: (offset)=>{},
    showSide: false,
    setShowSide: (boolean) => {}

})

export default CalendarContext;
