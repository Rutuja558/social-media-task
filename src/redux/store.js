import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { followReducer } from './reducers/followReducer';
import { newAccountReducer } from './reducers/newAccountReducer';
import { userReducer } from './reducers/usersReducers';

const rootReducer = combineReducers({
    newUser: newAccountReducer,
    users: userReducer,
    follow: followReducer
})
const initialValues = {
    users: {
        allUsers: []
    },
    follow: {
        singleUser: {}
    }
}
const store = createStore(rootReducer, initialValues, composeWithDevTools(applyMiddleware(thunk)))
export default store