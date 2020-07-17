
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

export const postScore = newScore =>{
    console.log('b')
    return(dispatch)=>{
        console.log('c')
        return  fetch('http://localhost:3000/scores', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newScore)
        })
        .then(resp => {
            console.log('d')
            return resp.json()
        })
        console.log('e')
    }
    console.log('f')
}