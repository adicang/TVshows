const fetchApiState = (state = 'fetching', action) => {
    switch (action.type) {
        case 'FETCHING':
            return 'fetching';
        case 'FETCH_FAILED':
            return 'failed'
        case 'FETCH_SUCCESSED':
            return 'successed'
        default:
            return state
    }
}

export default fetchApiState;
