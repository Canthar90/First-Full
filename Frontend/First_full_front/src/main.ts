import '@/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faX, faSearch } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

library.add(faX)
library.add(faSearch)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
