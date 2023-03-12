import { createApp } from 'vue'
import AppView from './App.vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import jQuery from 'jquery';



import router from "./router/main";

import axios from "axios";
import {createPinia} from "pinia";
const vueApp = createApp(AppView);

vueApp.use(router)
const pinia = createPinia()
vueApp.use(pinia)


window.jQuery = jQuery
window.$ = jQuery


vueApp.mount('#app')


