export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING": return {
            ...state,
            loading: true,
        }
        case "SET_HITS": return {
            ...state,
            loading: false,
            hits: action.payload.hits,
            nbPages: action.payload.count / action.payload.to,
        }
        case "HANDLE_SEARCH": return {
            ...state,
            query: action.payload,
        };
        default:
            throw new Error(`No Matching ${action.type} action type`)
    }
}