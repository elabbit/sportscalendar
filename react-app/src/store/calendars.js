const LOAD_CALENDARS = 'event/LOAD_CALENDARS';
const ADD_CALENDAR = 'event/ADD_CALENDAR';
const DELETE_CALENDAR = 'event/DELETE_CALENDAR';

const loadCals = (calendars) => ({
    type: LOAD_CALENDARS,
    calendars
})

const addCal = (calendar) => ({
    type: ADD_CALENDAR,
    calendar

})

const deleteCal = (calendarId) => ({
    type: DELETE_CALENDAR,
    calendarId

})


export const getCalendars = () => async (dispatch) => {
    const response = await fetch(`/api/calendars/`)

    if (response.ok) {
        const calendars = await response.json();
        dispatch(loadCals(calendars));
        return calendars;
    }

}

export const addCalendar = (title, description) => async (dispatch) => {
    const response = await fetch('/api/calendars/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title, description
        }),
    })

    if (response.ok) {
        const calendar = await response.json();
        dispatch(addCal(calendar));
        return calendar;
    }
}

export const editCalendar = (title, description, calendarId) => async (dispatch) => {
    const response = await fetch(`/api/calendars/edit/${calendarId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title, description
        }),
    })

    if (response.ok) {
        const calendar = await response.json();
        dispatch(addCal(calendar));
        return calendar;
    }
}

export const deleteCalendar = (calendarId) => async (dispatch) => {
    const response = await fetch(`/api/calendars/delete/${calendarId}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      dispatch(deleteCal(calendarId))
    }
  }

//EVENTS
export const addEvent = (
    title, description, location, category,
    startDate, startTime, color, calendarId) => async (dispatch) => {
    const response = await fetch(`/api/events/new/${calendarId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title, description, location, category, startDate, startTime, color
        }),
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(addCal(data.calendar));
        return data;
    }
}




export default function reducer(state = {}, action) {
    switch (action.type) {
        case LOAD_CALENDARS:
            const newState = {};
            action.calendars.calendars.forEach((cal) => {
                newState[cal.id] = cal
            })
            return newState;
        case ADD_CALENDAR:
            const newState2 = {...state}
            newState2[action.calendar.id] = action.calendar
            return newState2;
        case DELETE_CALENDAR:
            const newState3 = {...state}
            delete newState3[action.calendarId]
            return newState3;

        default:
            return state;
    }
}
