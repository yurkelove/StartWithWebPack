import './js/common.js'
import './css/main.css'
import './scss/main.scss'

//4 способа импорта 
// 1) import 'vue' - пока не найдет будет искать по иерархии
// 2) import Vue from 'vue' - для взаимодействия Vue.use(тут что то делаем)
// 3) window.Vue = require('vue')
// 4) import 'bootstrap/dist/css/bootstrap.min.css'

window.Vue = require('vue/dist/vue.js');
import store from './store'

Vue.component('example-component', require('./components/Example.vue').default)


const app = new Vue({
    data () {
        return {
            component: false
        }
    },
    store: store, 
    el: '#app'
})