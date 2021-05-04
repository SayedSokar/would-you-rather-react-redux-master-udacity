import { combineReducers } from "redux";
import questionsReducer from "./questionsSlice";
import usersReducer from "./usersSlice";
import authuserReducer from './authuserSlice'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

export default combineReducers({
  questions: questionsReducer,
    users: usersReducer,
  authuser: authuserReducer
});

//-----------------------------------------------------------------------------//

