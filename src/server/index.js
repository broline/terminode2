// server/index.js
"use strict";

const app = require("./app");

app.listen(app.port, () => {
	console.log(`App listening on port ${app.port}!`);
});