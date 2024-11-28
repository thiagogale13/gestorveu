import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// main.js
import 'font-awesome/css/font-awesome.min.css';  // Asegúrate de que esta línea esté presente

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
