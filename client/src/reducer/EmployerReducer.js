export const initialState = null
export const reducer =(state,action)=>{
    if(action.type=="EMPLOYER"){
        return action.payload
    }
    if(action.type=="CLEAR"){
        return null
    }
    return state
}