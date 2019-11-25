const removeFromFavorites = (showId) => {
    return {
        type: 'REMOVE_FROM_FAVORITES',
        payload: showId
    }
}

export default removeFromFavorites;
