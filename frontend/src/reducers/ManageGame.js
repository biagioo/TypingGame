const manageGame = (state={
    words:[],
    difficulties:[],
    scores:[]
}, action) => {
    // console.log(action.payload)
    switch(action.type){
        case 'SET_DIFFICULTIES' :
            return {
                ...state,
                difficulties: action.payload
            }
        default:
            return state;
    }
}

export default manageGame