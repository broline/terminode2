var path = require("path");

module.exports = {
	devtool: "source-map",
	entry: {
		app: ["./src/index.jsx"]
	},
		output: {
			path: path.resolve(__dirname, "dist"),
			publicPath: "/assets/",
			filename: "bundle.js"
		},
		devServer:{
			inline: true,
			contentBase: path.join(__dirname, "dist"),
			compress: true,
			port: 9000,
			host: "0.0.0.0"
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