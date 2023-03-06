import { combineReducers } from "redux";
import ownersReducer from "./modules/owners/reducer";

const rootReducer = combineReducers({
  ownersReducer
});


export default rootReducer;