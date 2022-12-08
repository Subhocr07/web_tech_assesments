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
            
            case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart,{...action.payload,qty:1}]
            }
            case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart:state.cart.filter((c)=>c.id!==action.payload.id)
            }
    
        default:
           return state
    }
}

export default reducer