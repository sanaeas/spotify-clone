export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after developing
    token: 'BQCiFaH7SAHLqM1-Vzg0Z94CYjcbSDHPW-oBgJ6eNsdEfabqtU…8K73sLoJwVd2jfaj_N9xOo1AqreY0fol5fX96lNVjbgsRYi9s',
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
        default:
            return state;
    }
}

export default reducer;