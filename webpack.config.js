let path = require("path");
var webpack = require('webpack');

const configs = {
    entry: {
        map: './src/map.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'map.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
        ]
    }
};

module.exports = configs;