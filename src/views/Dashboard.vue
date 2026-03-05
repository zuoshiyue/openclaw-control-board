<template>
  <div class="p-4 md:p-8 pb-24 md:pb-8">
    <header class="mb-6">
      <h1 class="text-2xl md:text-3xl font-bold mb-2">📊 仪表盘</h1>
      <p class="text-gray-400 text-sm">{{ currentTime }}</p>
    </header>

    <!-- 系统监控卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="glass rounded-xl p-4">
        <h3 class="text-gray-400 text-sm mb-2">运行时间</h3>
        <p class="text-xl font-bold">{{ mockData.uptime }}</p>
      </div>
      <div class="glass rounded-xl p-4">
        <h3 class="text-gray-400 text-sm mb-2">CPU 使用</h3>
        <div class="flex items-center">
          <div class="flex-1 bg-gray-700 rounded-full h-2 mr-3">
            <div class="bg-blue-500 h-2 rounded-full" :style="{ width: mockData.cpu + '%' }"></div>
          </div>
          <span class="font-bold">{{ mockData.cpu }}%</span>
        </div>
      </div>
      <div class="glass rounded-xl p-4">
        <h3 class="text-gray-400 text-sm mb-2">内存使用</h3>
        <div class="flex items-center">
          <div class="flex-1 bg-gray-700 rounded-full h-2 mr-3">
            <div class="bg-purple-500 h-2 rounded-full" :style="{ width: mockData.memory + '%' }"></div>
          </div>
          <span class="font-bold">{{ mockData.memory }}%</span>
        </div>
      </div>
      <div class="glass rounded-xl p-4">
        <h3 class="text-gray-400 text-sm mb-2">磁盘使用</h3>
        <div class="flex items-center">
          <div class="flex-1 bg-gray-700 rounded-full h-2 mr-3">
            <div class="bg-green-500 h-2 rounded-full" :style="{ width: mockData.disk + '%' }"></div>
          </div>
          <span class="font-bold">{{ mockData.disk }}%</span>
        </div>
      </div>
    </div>

    <!-- 服务状态 -->
    <div class="glass rounded-xl p-4 mb-6">
      <h2 class="text-lg font-bold mb-4">服务状态</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="service in mockData.services" :key="service.name" class="flex items-center">
          <span class="w-3 h-3 rounded-full mr-2" :class="{
            'bg-green-500': service.status === 'online',
            'bg-red-500': service.status === 'offline',
            'bg-gray-500': service.status === 'unknown'
          }"></span>
          <span class="text-sm">{{ service.name }}</span>
        </div>
      </div>
    </div>

    <!-- Agent 列表 -->
    <div class="glass rounded-xl p-4 mb-6">
      <h2 class="text-lg font-bold mb-4">Agent 管理</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="agent in mockData.agents" :key="agent.name" class="bg-white/5 rounded-lg p-3">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold">{{ agent.name }}</span>
            <span class="text-xs px-2 py-1 rounded" :class="agent.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'">
              {{ agent.status }}
            </span>
          </div>
          <p class="text-xs text-gray-400">{{ agent.model }}</p>
        </div>
      </div>
    </div>

    <!-- 快捷操作 -->
    <div class="glass rounded-xl p-4">
      <h2 class="text-lg font-bold mb-4">快捷操作</h2>
      <div class="flex flex-wrap gap-3">
        <button class="px-4 py-2 bg-accent hover:bg-accent-hover rounded-lg transition-all text-sm">
          🔄 重启 Gateway
        </button>
        <button class="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm">
          📊 刷新数据
        </button>
        <router-link to="/logs" class="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm">
          📜 查看日志
        </router-link>
        <router-link to="/config" class="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm">
          ⚙️ 配置
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const mockData = ref({
  uptime: '15 days, 8 hours',
  cpu: 32,
  memory: 58,
  disk: 45,
  services: [
    { name: 'Gateway', status: 'online' },
    { name: 'Discord', status: 'online' },
    { name: 'Tailscale', status: 'online' },
    { name: '看板服务', status: 'online' }
  ],
  agents: [
    { name: '🦆 小鸭', model: 'qwen3.5-plus', status: 'active' },
    { name: '❤️ 小爱', model: 'glm-4.7', status: 'active' },
    { name: '🐼 小 P', model: 'qwen3-coder-plus', status: 'idle' },
    { name: '🐯 tiger', model: 'qwen3.5-plus', status: 'idle' },
    { name: '🐬 dolphin', model: 'glm-4.7', status: 'idle' },
    { name: '🦊 fox', model: 'qwen3-coder-plus', status: 'idle' }
  ]
})

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

let timer = null
onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
