import { combineReducers } from "redux";
import priceReducer from "./price";

const allReducers = combineReducers({
    price: priceReducer
})

export default allReducers