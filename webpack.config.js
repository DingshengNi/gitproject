const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports={
    entry:"./src/js/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
           })
    ],
    module:{
		loaders:[{
                test:/\.css$/,
                loader:'style-loader!css-loader'
             }]
	}
}