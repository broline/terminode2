var path = require("path");

module.exports = {
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".jsx"]
	},
	entry: {
		app: ["./src/index.jsx"]
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/assets/",
		filename: "bundle.js"
	},
	devServer:{
		inline: true,
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9001
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: "babel-loader"
			}
		]
	}
};