import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Dashboard from './views/Dashboard.vue'
import Chat from './views/Chat.vue'
import Logs from './views/Logs.vue'
import Config from './views/Config.vue'
import './style.css'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard, meta: { title: '📊 仪表盘', icon: 'dashboard' } },
  { path: '/chat', name: 'Chat', component: Chat, meta: { title: '💬 终端聊天', icon: 'chat' } },
  { path: '/logs', name: 'Logs', component: Logs, meta: { title: '📜 日志', icon: 'logs' } },
  { path: '/config', name: 'Config', component: Config, meta: { title: '⚙️ 配置', icon: 'config' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
