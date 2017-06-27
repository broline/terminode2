import { createStore } from "redux";
import reducer from "./reducers";

export default function create (initialState) {
	return createStore(reducer, initialState);
}