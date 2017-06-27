import { connect } from "react-redux";
import Root from "./Root";

function mapStateToProps (state) {
	return {
		terminals: state.terminals,
		selectedTerminal: state.terminals[0]
	};
}

export default connect(mapStateToProps)(Root);