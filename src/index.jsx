import reactDom from "react-dom";
import React from "react";

const Root = () => <div>Hello World</div>;

reactDom.render(<Root />, document.getElementById("app"));