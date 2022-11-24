const reducer=(state,action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return{
                ...state,
                loading:false,
                post:action.payload,
                error:''
            }
            case 'FETCH_ERROR':
                return{
                    loading:false,
                    post:{},
                    error:'something went wrong'
                }
            
            case 'a':
            return{

            }
    
        default:
           return state
    }
}

export default reducer