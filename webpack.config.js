const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "./public"),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./public/index.html"), // template file
            filename: "index.html", // output file
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            // Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            // Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
            // CSS and Sass
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};
