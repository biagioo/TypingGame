
export const setDifficulties = difficulties =>({type:'SET_DIFFICULTIES', payload:difficulties})

export const fetchDifficulties= () =>{
    return(dispatch)=>{
        return fetch('http://localhost:3000/difficulties')
        .then(resp => resp.json())
        .then(data =>{
            dispatch(setDifficulties(data))
        })
    }
    // this is fetching words from easy difficulty
}