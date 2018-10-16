const articles = (state = [], action) => {
    let newState;
    switch(action.type) {
        case "LOAD ARTICLES":
        newState = action.articles;
        return newState;
        case "INCREMENT_LIKES":
        const index = state.findIndex(el
            => el.id === action.id);

            newState = [
                ...state.slice(0, index),
                {
                    ...state[index],
                    likes: (state[index].likes) ?
                    state[index].likes +1 : 1},
                    ...state.slice(index + 1)
            ];
        return newState;
        default:
        return state;
    }
}
export default articles;