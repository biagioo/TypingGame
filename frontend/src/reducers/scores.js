const scores = (state={
    easy:[],
    medium:[],
    hard:[]
},action) =>{
    switch(action.type){
        case 'SET_SCORES' :
            action.payload.forEach(score => {
                if (score.difficulty_id === 1){
                    state.easy.push(score)
                } else if (score.difficulty_id === 2){
                    state.medium.push(score)
                } else{
                    state.hard.push(score)
                }
            });
            return state
        default:
            return state;
    }
}

export default scores

// const scores = (state={
//     easy:[],
//     medium:[],
//     hard:[]
// },action) =>{
//     switch(action.type){
//         case 'SET_SCORES' :
            
//             return [action.payload]
//         default:
//             return state;
//     }
// }

// export default scores