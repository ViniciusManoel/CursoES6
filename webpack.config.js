module.exports = {
    entry: ['@babel/polyfill','./src/pratica.js'],
    //entry: ['@babel/polyfill','./src/es6.js'], 
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
            
        ]
    }
}
