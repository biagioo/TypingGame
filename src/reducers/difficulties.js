const difficulties = (state={
    difficulties:[]
}, action) => {
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

export default difficulties