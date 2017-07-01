import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Root from "./Root";
import * as actions from "./../actions";
import {
	getTerminals,
	getSelectedTerminal
} from "./../reducers";

const mapStateToProps = state => {
	return {
		terminals: getTerminals(state),
		selectedTerminal: getSelectedTerminal(state)
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);