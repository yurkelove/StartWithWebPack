const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig  = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    
    devtool: 'cheap-module-eval-source-map',
   
    devServer: {
         //указываем dist - где будет октрываться вебпак - пропишем из глобального config путь
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        //Показ ошибок
        overlay: {
            warnings: false,
            errors: true
        },
    },
    plugins: [
        //Карта сайта
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
          }),
    ]
})


module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})

