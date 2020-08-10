const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        './dev/src/index.js',
    ],
    devtool: 'cheap-module-eval-source-map',
    resolve: { extensions: ['*', '.js'] },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {}
            }]}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns:[
                { from: './dev/html/.', to:'.'}
        ]}),
    ],
    output: {
        path: __dirname + "/docs/",
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: '.'
    }
};
