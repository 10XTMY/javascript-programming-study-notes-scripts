const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'), // __dirname resolves root project
        filename: 'bundle.js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        devMiddleware: {
            publicPath: '/assets/'
        },
        port: 3000,
        hot: "only"
    },
    module: {
        rules: [{
            test: /\.js$/,  // RegEx for any file that ends in .js (. means * so \. makes it literal)
            exclude: /node_modules/, // do not include third party packages
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
