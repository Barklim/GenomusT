export default function(state={},action){
    switch(action.type){
        case 'GET_BOOKS':
            return { ...state,list:action.payload }
        case 'GET_BOOK':
            return {...state,book:action.payload}
        case 'GET_GEN':
            return {...state,gen:action.payload}
        case 'GET_BOOK_W_REVIEWER':
            return {
                ...state,
                book:action.payload.book,
                reviewer:action.payload.reviewer
            }
        case 'CLEAR_BOOK_W_REVIEWER':
            return {
                ...state,
                book:action.payload.book,
                reviewer:action.payload.reviewer
            }
        case 'ADD_GEN':
            return {...state,newgen:action.payload}
        case 'CLEAR_NEWGEN':
            return {...state,newgen:action.payload}
        case 'GET_USER_GENS':
            return {
                ...state,
                userGens:action.payload.userGens
            }
        case 'GET_USER_GEN':
            return {
                ...state,
                userGen:action.payload.userGen
            }

        case 'UPDATE_BOOK':
            return {
                ...state,
                updateBook:action.payload.success,
                book:action.payload.doc
            }
        case 'UPDATE_GEN':
            return {
                ...state,
                updateGen:action.payload.success,
                gen:action.payload.doc
            }
        case 'DELETE_GEN':
            return {
                ...state,
                postDeleted:action.payload
            }
        case 'CLEAR_BOOK':
            return {
                ...state,
                updateBook:action.payload.updateBook,
                book:action.payload.book,
                postDeleted:action.payload.postDeleted
            }
        case 'CLEAR_GEN':
            return {
                ...state,
                updateGen:action.payload.updateGen,
                gen:action.payload.gen,
                postDeleted:action.payload.postDeleted
            }
        default:
            return state;
    }
}