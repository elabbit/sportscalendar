const LOAD_EVENTS = 'event/LOAD_EVENTS';


const loadEvents = (events) =>({
    type: LOAD_EVENTS,
    events
})


export const getEvents = (calendarId) => async (dispatch) => {
    const response = await fetch(`/api/events/${calendarId}`)

    if (response.ok) {
      const events = await response.json();
      dispatch(loadEvents(events));
      return events;
    }

}



export default function reducer(state = {}, action) {
    switch (action.type) {
        case LOAD_EVENTS:
            const newState = {};
            action.events.calendarEvents.forEach((event)=>{
                newState[event.id] = event
            })
            return newState;

        default:
            return state;
    }
}
