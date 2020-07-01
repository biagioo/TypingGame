
export const setScores = scores =>({type:'SET_SCORES', payload:scores})

export const fetchScores = () =>{
    return(dispatch)=>{
        return fetch('http://localhost:3000/scores')
        .then(resp => resp.json())
        .then(data =>{
            dispatch(setScores(data))
        })
    }
}