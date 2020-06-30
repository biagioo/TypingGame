
export const setWords = (words) =>({type:'SET_WORDS', payload:words})

export const fetchWords = () =>{
    return(dispatch)=>{
        return fetch('http://localhost:3000/difficulties/1/words')
        .then(resp => resp.json())
        .then(data =>{
            dispatch(setWords(data))
        })
    }
    // this is fetching words from easy difficulty
}