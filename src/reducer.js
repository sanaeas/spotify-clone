export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: null,
    // REMOVE after developing
    // token: 'BQCiFaH7SAHLqM1-Vzg0Z94CYjcbSDHPW-oBgJ6eNsdEfabqtU…8K73sLoJwVd2jfaj_N9xOo1AqreY0fol5fX96lNVjbgsRYi9s',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        default:
            return state;
    }
}

export default reducer;