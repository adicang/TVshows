const initialState = []

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FAVORITES':
            return action.payload
        case 'ADD_TO_FAVORITES':
            return state.concat(action.payload)
        case 'REMOVE_FROM_FAVORITES':
            return state.filter(show => action.payload !== show.showId)
        default:
            return state
    }
}

export default favorites;
