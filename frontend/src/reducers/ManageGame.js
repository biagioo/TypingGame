export default function ManageGame(state={
    words:["hey","hello"],
    difficulties:[],
    scores:[]
}, action){
    switch(action.type){
        case "GET WORDS" :
            return state.words
    }
}