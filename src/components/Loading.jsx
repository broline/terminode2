import React from "react";
import Fa from "react-fontawesome";

const Loading = ({
	children,
	text,
	empty
}) => {
	const content = empty ? "" : children || text || "Loading...";
	return <span><Fa name="circle-o-notch" className="fa-fw" spin />{content}</span>;
};

export default Loading;