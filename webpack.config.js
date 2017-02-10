let path = require("path");

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
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};

module.exports = configs;