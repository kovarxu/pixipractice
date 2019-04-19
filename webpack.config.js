const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:6].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        limit: 1024,
                        name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, 'src/index.html')
        })
    ],
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        port: 5432,
        host: '127.0.0.1',
        overlay: {
            errors: true
        },
        hot: true,
        open: true
    }
}