const CopyPlugin = require('copy-webpack-plugin');

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
        new CopyPlugin({
            patterns:[
                { from: './dev/html/.', to:'.'}
        ]}),
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: '.'
    }
};
