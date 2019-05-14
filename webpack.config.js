const path = require('path');

//Експортируем настройки
module.exports = {
    //Точка входа
    entry: {
        app: './src/index.js'
    },
    output: {
        // [name].js - если несколько точек входа , то сделаем нужную после выхода
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist'),
        //для dev-server
        publicPath: '/dist'
    },
    module: {
        rules: [{
            //Обратимся ко всем js файлам
            test: /\.js$/,
            loader: 'babel-loader',
            //Если нам нужно исключить файлы 
            exclude: '/node_modules/'
        }]
    },
    devServer: {
        //Показ ошибок
        overlay: true,
    }
}