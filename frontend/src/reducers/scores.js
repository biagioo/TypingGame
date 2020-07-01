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
    easy:[],
    medium:[],
    hard:[]
},action) =>{
    switch(action.type){
        case 'SET_SCORES' :
        const copyState ={...state}    
        action.payload.forEach(score => {
                if (score.difficulty_id === 1){
                    copyState.easy.push(score)
                } else if (score.difficulty_id === 2){
                    copyState.medium.push(score)
                } else{
                    copyState.hard.push(score)
                }
            });
            return copyState
        default:
            return state;
    }
}

export default scores