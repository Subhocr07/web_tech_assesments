
//set reducer for fetch data
const reducer=(state,action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return{
                // ...state,
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
    
        default:
           return state
    }
}

export default reducer