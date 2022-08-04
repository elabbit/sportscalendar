import React from 'react'

const CalendarContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index)=>{},
    daySelected: null,
    setDaySelected:(day)=>{},

})

export default CalendarContext;
