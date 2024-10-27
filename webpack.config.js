const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '/src/js/index.js',
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
        }),
    ],
};
