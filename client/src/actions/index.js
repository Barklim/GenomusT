import axios from 'axios';

export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    
    const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                            if(list){
                                return [...list,...response.data]
                            } else {
                                return response.data
                            }
                        }
                    )

    return {
        type:'GET_BOOKS',
        payload:request
    }

}

export function getBookWithReviewer(id){
    const request = axios.get(`/api/getBook?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let book = data;

            axios.get(`/api/getReviewer?id=${book.ownerId}`)
            .then(({data})=>{
                let response = {
                    book,
                    reviewer:data
                }

                dispatch({
                    type:'GET_BOOK_W_REVIEWER',
                    payload:response
                })
            })
        })
    }
}

export function getUserRoleTest(id) {
    const request = axios.get(`/api/getUser?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let user = data;

            axios.get(`/api/getUser?id=${user.role}`)
            .then(({data})=>{
                let response = {
                    user,
                    reviewer:data
                }

                dispatch({
                    type:'GET_BOOK_W_REVIEWER',
                    payload:response
                })
            })
        })
    }
}

export function clearBookWithReviewer(){
    return {
        type:'CLEAR_BOOK_W_REVIEWER',
        payload:{
            book:{},
            reviewer:{}
        }
    }
}

export function addBook(book){
    const request = axios.post('/api/book',book)
        .then(response => response.data);

    return {
        type:'ADD_BOOK',
        payload:request
    }
}

export function clearNewBook() {
    return {
        type:'CLEAR_NEWBOOK',
        payload:{}
    }
}

export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function getAllUserPosts(id){
    const request = axios.get(`/api/all_user_posts?id=${id}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function getBook(id){
    const request = axios.get(`/api/getBook?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_BOOK',
        payload:request
    }
}


export function updateBook(data){
    const request = axios.post(`/api/book_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_BOOK',
        payload:request
    }

}

export function deleteBook(id){
    const request = axios.delete(`/api/delete_book?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_BOOK',
        payload:request
    }
}

export function clearBook(){
    return{
        type:'CLEAR_BOOK',
        payload:{
            book:null,
            updateBook:false,
            postDeleted:false
        }
    }
}


/*========= USER ===========*/

export function getUser(id){
    const request = axios.get(`/api/getUser?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_USER_ID',
        payload:request
    }
}

// x
export function getUserRole(role){
    const request = axios.get(`/api/getUserRole?user=${role}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
                .then(response => response.data)

    return {
        type:'USER_LOGIN',
        payload:request
    }
}

export function auth(){
    const request = axios.get('/api/auth')
                .then(response => response.data);

    return {
        type:'USER_AUTH',
        payload:request
    }

}

/*export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);
        
    return {
        type:'GET_USER',
        payload:request
    }
}*/
export function getUsers(id){
    const request = axios.get(`/api/users?id=${id}`)
                    .then(response => response.data);
        
    return {
        type:'GET_USER',
        payload:request
    }
}

// Ргеистрация одиночного юзера.
export function userRegisterScreen(user,userList){
    const request = axios.post(`/api/registerScreen`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            //let user = data.success ? [data.user]: null;
            // let user;
            // let response = {
            //     //success:data.success,
            //     isAuth:data.isAuth,
            //     //message:data.message,
            //     registe: data
            // }

            dispatch({
                type:'USER_REGISTER_SCREEN',
                payload:data
            })
        })
    }
}

// Изменение пароля юзера.
export function userChangePassword(user,userList){
    const request = axios.post(`/api/userChangePassword`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            //let user = data.success ? [data.user]: null;
            // let user;
            // let response = {
            //     //success:data.success,
            //     isAuth:data.isAuth,
            //     //message:data.message,
            //     registe: data
            // }

            dispatch({
                type:'USER_CHANGE_PASSWORD',
                payload:data
            })
        })
    }
}

// Админская регистрация user's
export function userRegister(user,userList){
    const request = axios.post(`/api/register`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            let users = data.success ? [...userList,data.user]:userList;
            let response = {
                success:data.success,
                users
            }

            dispatch({
                type:'USER_REGISTER',
                payload:response
            })
        })
    }
}

export function deleteUser(id){
    const request = axios.delete(`/api/delete_user?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_USER',
        payload:request
    }
}

export function clearUser(){
    return{
        type:'CLEAR_USER',
        payload:{
            user:null,
            updateUser:false,
            userDeleted:false
        }
    }
}

/*========= GENOM ===========*/

export function addGen(gen){
    const request = axios.post('/api/gen',gen)
        .then(response => response.data);

    return {
        type:'ADD_GEN',
        payload:request
    }
}

export function getGen(id){
    const request = axios.get(`/api/getGen?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_GEN',
        payload:request
    }
}

export function getTestGens(id){
    const request = axios.get(`/api/test_gens?id=${id}`)
                    .then(response => response.data)

    return {
        type:'GET_TEST_GENS',
        payload:request
    }
}

export function updateGen(data){
    const request = axios.post(`/api/gen_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_GEN',
        payload:request
    }

}

export function deleteGen(id){
    const request = axios.delete(`/api/delete_gen?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_GEN',
        payload:request
    }
}

export function clearGen(){
    return{
        type:'CLEAR_GEN',
        payload:{
            gen:null,
            updateGen:false,
            postDeleted:false
        }
    }
}

export function clearNewGen() {
    return {
        type:'CLEAR_NEWGEN',
        payload:{}
    }
}

export function getUserGens(id){
    const request = axios.get(`/api/user_gens?id=${id}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_GENS',
        payload:request
    }
}

export function getUserGen(genId){
    const request = axios.get(`/api/user_gen?user=${genId}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_GEN',
        payload:request
    }
}

export function getOtherGen(genId){
    const request = axios.get(`/api/user_other_gen?user=${genId}`)
                    .then(response => response.data)

    return {
        type:'GET_OTHER_GEN',
        payload:request
    }
}

export function userCompatGens(user_first, user_sec){
    const request = axios.get(`/api/user_compat_gens?user_first=${user_first}&user_sec=${user_sec}`)
                    .then(response => response.data)

    return {
        type:'GET_COMPAT_USER_GENS',
        payload:request
    }
}

// b00ks

export function getBookCompat(genId){
    const request = axios.get(`/api/getBookCompat?user=${genId}`)
                    .then(response => response.data)

    return {
        type:'GET_BOOK_ALLOW',
        payload:request
    }
}

export function getAllow(genId){
    const request = axios.get(`/api/allow?user=${genId}`)
                    .then(response => response.data)

    return {
        type:'GET_ALLOW',
        payload:request
    }
}

export function getProfileGen(genId){
    const request = axios.get(`/api/user_gen_special?user=${genId}`)
                    .then(response => response.data)

    return {
        type:'GET_PROFILE_GEN',
        payload:request
    }
}

export function updateUser(data){
    const request = axios.post(`/api/user_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_USER',
        payload:request
    }

}

/*========= GENINFO ===========*/

export function getIgen(id){
    const request = axios.get(`/api/getIgen?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_IGEN',
        payload:request
    }
}

export function updateIgen(data){
    const request = axios.post(`/api/igen_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_IGEN',
        payload:request
    }

}