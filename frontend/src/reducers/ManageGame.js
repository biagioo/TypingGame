const manageGame = (state={
    words:[],
    difficulties:[],
    scores:[]
}, action) => {
    switch(action.type){
        case 'SET_WORDS' :
            return {
                ...state,
                words: action.payload
            }
        default:
            return state;
    }
}

export default manageGame