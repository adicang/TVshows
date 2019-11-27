

## TV Shows Search Engine -  React Project

## App architecture seperated by components
The following tree shows the structure of the components in the whole app.

- App
  - Router
    - MyNav
	- Switch
    - MainScreen (Route)
      - SingleShowItem
    - SingleShowScreen (Route)
      - AddToFavorites
		  - Cast
        - CastItem
      - Episodes
        - SeasonItem
          - EpisodeItem
	  - Favorites (Route)
	      - FavoriteItem


## Tech stack
1. React
2. Redux (react-redux)
3. Semantic-UI for react
4. React - Bootstrap 4

##### Semantic-UI for react
I used it for the whole Grid system of the app and other UI elements.

##### React - Bootstrap 4
Used for creating Responsive navbar and UI layout.

##### Redux
The state manager has been used for managing globaly the whole state of the app.
The state contains:
1. **currShow** object containing all of the relevant information about the show currently displaying on the main page.
2. **favorites** array containing all the favorites shows added by the users. 
3. **fetchApiState** is going to show the state of the fetch calls to the tvMaze API. 
Posible values are: *FETCHING* | *SUCCESS* | *FAILED*.

## Redux reducers and actions
### Actions:
- **fetchShow.js**: This action will send a new object of the current show that was fetched.
- **addToFavorites.js**: This action will send a show object given as parameter.
- **removeFromFavorites.js**: This action will remove a favorite show which equals the show id passed as parameter.
- **fetchSuccessed.js/fetchFailed**: Both actions will determine the state of the api on the app.

### Reducers:
- **currentShowReducer.js**: This reducer will handle the *FETCH_SHOW*, *ADD_FAVORITE* and *REMOVE_FAVORITE* actions.
- **favoritesReducer.js**: This reducer will handle the *FETCH_FAVORITES*, *ADD_FAVORITE* and *REMOVE_FAVORITE* actions.
- **fetchApiReducer.js**: This reduce will handle the *FETCH_FAILED*  and *FETCH_SUCCESSED*  actions.

## External Api's
- tvMaze API
- Semantic UI
- Bootstrap
- react-loader-spinner: For making a spinner when loading updated list.
- react-redux
- redux
- react-reveal
- sweetalert

## Device adaptation
The app is adapted for large screen size as well as for mobile screen size.

## Things to improve in the app
- The project do not include local storage part.
- In mobile, the navbar is not clossing when we click on any item. 

## Web URL
https://adicang.github.io/TVshows/


