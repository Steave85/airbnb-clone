export const initialState = {
    rooms: [],
    homeCards: [],
    roomCards: [],
    dates: {
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        guests: 1
    }
}

export const actionTypes = {
    SET_ROOMS: "SET_ROOMS",
    SET_HOME_CARDS: 'SET_HOME_CARDS',
    SET_DATES: 'SET_DATES'
}

const Reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_ROOMS: {
            return {
                ...state,
                rooms: action.rooms
            }
        }
        case actionTypes.SET_HOME_CARDS: {
            return {
                ...state,
                homeCards: action.homeCards,
                roomCards: action.roomCards
            }
        }
        case actionTypes.SET_DATES: {
            return {
                ...state,
                dates: {
                    startDate: action.dates.startDate,
                    endDate: action.dates.endDate,
                    guests: action.dates.guests
                },
            }
        }
        default: {
            return state;
        }
    }
}

export default Reducer;