export default function(state={},action){
    switch(action.type){
        case 'USER_LOGIN':
            return {...state,login:action.payload}
        case 'USER_AUTH':
            return {...state,login:action.payload}
        case 'GET_USER_POSTS':
            return {...state,userPosts:action.payload}
        case 'GET_USER_GENS':
            return {...state,userGens:action.payload}
        case 'GET_COMPAT_USER_GENS':
            return {...state,userCompatGens:action.payload}
        case 'GET_USER':
            return {...state,users:action.payload}
        case 'GET_USER_ID':
            return {...state,user:action.payload}
        case 'USER_REGISTER':
            return {
                ...state,
                register:action.payload.success,
                users:action.payload.users
            }
        case 'USER_REGISTER_SCREEN':
            return {
                ...state,
                register:action.payload, // success
                // register:action.payload.isAuth,
                // user:action.payload.isAuth
            }
        case 'USER_CHANGE_PASSWORD':
            return {
                ...state,
                register:action.payload, // success
                // register:action.payload.isAuth,
                // user:action.payload.isAuth
            }
        case 'UPDATE_USER':
            return {
                ...state,
                updateUser:action.payload.success,
                user:action.payload.doc
            }
        case 'DELETE_USER':
            return {
                ...state,
                userDeleted:action.payload
            }
        case 'CLEAR_USER':
            return {
                ...state,
                updateUser:action.payload.updateUser,
                user:action.payload.user,
                userDeleted:action.payload.userDeleted
            }
        case 'GET_USER_GEN':
            return {...state,userGen:action.payload}
        case 'GET_OTHER_GEN':
            return {...state,otherGen:action.payload}
        case 'GET_PROFILE_GEN':
            return {...state,profileGen:action.payload}
        case 'GET_ALLOW':
            return {...state,allow:action.payload}
        case 'GET_BOOK_ALLOW':
            return {...state,book_allow:action.payload}
        default:
            return state;
    }
}