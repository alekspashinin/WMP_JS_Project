import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
