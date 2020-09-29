const initialState = {
    data: null,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECEIVE_PRODUCTS':
            return {
                ...state,
                data: action.products,
                error: false
            }
         case 'FETCH_FAIL':
             return {
                 ...state,
                 error: true

             }  
         default: 
         return state   
    }
} 

export default reducer