const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}

//Експортируем настройки
module.exports = {

    //получить доступ к константе path из других конфигов
    externals: {
        paths: PATHS
    },
    //Точка входа
    entry: {
        app: PATHS.src
    },
    output: {
        // [name].js - если несколько точек входа , то сделаем нужную после выхода
        filename: `${PATHS.assets}/js/[name].js`,
        path: PATHS.dist,
        //для dev-server
        publicPath: '/'
    },
    module: {
        rules: [{
            //Обратимся ко всем js файлам
            test: /\.js$/,
            loader: 'babel-loader',
            //Если нам нужно исключить файлы 
            exclude: '/node_modules/'
        }, // CSS
            {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: { sourceMap: true}
                }, {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: { path : 'src/js/postcss.config.js'}}
                }
            ]
        }, // SCSS
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true}
                    }, {
                        loader: "postcss-loader",
                        options: {sourceMap: true, config: { path : 'src/js/postcss.config.js'}}
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true}
                    }
                ]
            },
            //IMG
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
            }
        ]
    },
    //Регестрируем файлы css , в папке dist - получим app.css
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}/css/[name].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            //Откуда - куда будем копировать
            { from : `${PATHS.src}/img` , to: `${PATHS.assets}img` },
            { from : `${PATHS.src}/static` , to: '``' }
        ]),
    ]
};