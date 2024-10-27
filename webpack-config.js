const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader', 
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true,
    },
};
