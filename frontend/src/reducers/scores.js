// const scores = (state=[],action) =>{
//     switch(action.type){
//         case 'SET_SCORES' :
//             // console.log(action.payload)
//             return [action.payload]
//         default:
//             return state;
//     }
// }

// export default scores


const scores = (state={
    Easy:[],
    Medium:[],
    Hard:[]
},action) =>{
    switch(action.type){
        case 'SET_SCORES' :
        const copyState ={...state}    
        action.payload.forEach(score => {
                if (score.difficulty_id === 1){
                    copyState.Easy.push(score)
                } else if (score.difficulty_id === 2){
                    copyState.Medium.push(score)
                } else{
                    copyState.Hard.push(score)
                }
            });
            return copyState
        default:
            return state;
    }
}

export default scores