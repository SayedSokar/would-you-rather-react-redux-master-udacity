import { combineReducers } from "redux";
import entitiesReducer from "./entities";
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//
export default combineReducers({
  entities: entitiesReducer
});
//-----------------------------------------------------------------------------//
