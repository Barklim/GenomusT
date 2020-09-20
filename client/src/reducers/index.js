import { combineReducers } from 'redux';
import books from './books_reducer';
import user from './user_reducer';
import gens from './gen_reducer';
import igen from './igen_reducer';

const rootReducer = combineReducers({
    books,
    user,
    gens,
    igen
});

export default rootReducer;