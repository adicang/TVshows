const fetchShow = (showObj) => {
    return {
        type: 'FETCH_SHOW',
        payload: showObj
    }
}

export default fetchShow;
