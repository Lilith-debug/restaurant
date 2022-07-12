const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact',
    },
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};