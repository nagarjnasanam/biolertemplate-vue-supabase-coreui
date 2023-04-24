import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CChartBar } from '@coreui/vue-chartjs'
import store from './store'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.component('CIcon', CIcon)
app.component('CChartBar', CChartBar)


app.mount('#app')
