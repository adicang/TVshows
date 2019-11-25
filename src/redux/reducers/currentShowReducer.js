const initialState = {
    showId: 0,
    showName: "",
    showImg: "",
    showRating: 0,
    isFavorite: false
}

const currShow = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SHOW':
            return action.payload
        case 'ADD_TO_FAVORITES':
            return Object.assign({}, state, {
                isFavorite: true
            });
        case 'REMOVE_FROM_FAVORITES':
            if (state.showId === action.payload) {
                return Object.assign({}, state, {
                    isFavorite: false
                });
            } else {
                return state
            }
        default:
            return state
    }
}

export default currShow;
