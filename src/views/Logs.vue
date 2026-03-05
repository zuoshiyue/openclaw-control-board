<template>
  <div class="flex flex-col h-screen pb-16 md:pb-0">
    <header class="glass border-b border-white/10 p-4">
      <h1 class="text-xl font-bold">📜 日志</h1>
      <p class="text-xs text-gray-400 mt-1">实时日志流</p>
    </header>

    <!-- 过滤工具栏 -->
    <div class="glass border-b border-white/10 p-4">
      <div class="flex flex-wrap gap-2 mb-3">
        <button 
          v-for="level in levels" 
          :key="level"
          @click="selectedLevel = level"
          class="px-3 py-1 rounded text-xs transition-all"
          :class="selectedLevel === level ? 'bg-accent text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'"
        >
          {{ level }}
        </button>
      </div>
      <div class="flex gap-2">
        <input 
          v-model="searchKeyword"
          type="text" 
          placeholder="搜索关键词..."
          class="flex-1 bg-white/5 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button @click="toggleAutoScroll" class="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-xs transition-all">
          {{ autoScroll ? '⏸️ 暂停' : '▶️ 自动滚动' }}
        </button>
      </div>
    </div>

    <!-- 日志内容区 -->
    <div class="flex-1 overflow-auto p-4 font-mono text-xs bg-black/20" ref="logContainer">
      <div v-for="(log, index) in filteredLogs" :key="index" class="mb-1 hover:bg-white/5 p-1 rounded">
        <span class="text-gray-500 mr-2">{{ log.time }}</span>
        <span class="mr-2" :class="{
          'text-green-400': log.level === 'INFO',
          'text-yellow-400': log.level === 'WARN',
          'text-red-400': log.level === 'ERROR'
        }">[{{ log.level }}]</span>
        <span class="text-gray-300" v-html="highlightKeyword(log.message)"></span>
      </div>
      <div v-if="filteredLogs.length === 0" class="text-gray-500 text-center py-8">
        暂无日志
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onUnmounted } from 'vue'

const levels = ['全部', 'INFO', 'WARN', 'ERROR']
const selectedLevel = ref('全部')
const searchKeyword = ref('')
const autoScroll = ref(true)
const logContainer = ref(null)

// Mock 日志数据
const logs = ref([])
const generateMockLog = () => {
  const level = ['INFO', 'INFO', 'INFO', 'WARN', 'ERROR'][Math.floor(Math.random() * 5)]
  const messages = {
    INFO: ['Gateway 心跳正常', '会话创建成功', '配置已加载', '定时任务执行完成', 'WebSocket 连接建立'],
    WARN: ['API 响应延迟较高', '内存使用率超过 80%', '会话空闲时间过长'],
    ERROR: ['连接超时', '认证失败', '文件读取错误']
  }
  return {
    time: new Date().toLocaleTimeString(),
    level,
    message: messages[level][Math.floor(Math.random() * messages[level].length)]
  }
}

// 初始化一些日志
for (let i = 0; i < 50; i++) {
  logs.value.push(generateMockLog())
}

// 模拟实时日志
let logTimer = setInterval(() => {
  logs.value.push(generateMockLog())
  if (logs.value.length > 500) logs.value.shift()
  if (autoScroll.value) scrollToBottom()
}, 2000)

const filteredLogs = computed(() => {
  return logs.value.filter(log => {
    const levelMatch = selectedLevel.value === '全部' || log.level === selectedLevel.value
    const keywordMatch = !searchKeyword.value || log.message.includes(searchKeyword.value)
    return levelMatch && keywordMatch
  })
})

const scrollToBottom = async () => {
  await nextTick()
  if (logContainer.value) {
    logContainer.value.scrollTop = logContainer.value.scrollHeight
  }
}

const toggleAutoScroll = () => {
  autoScroll.value = !autoScroll.value
  if (autoScroll.value) scrollToBottom()
}

const highlightKeyword = (text) => {
  if (!searchKeyword.value) return text
  const regex = new RegExp(`(${searchKeyword.value})`, 'gi')
  return text.replace(regex, '<span class="bg-yellow-500/30 text-yellow-200">$1</span>')
}

onUnmounted(() => {
  if (logTimer) clearInterval(logTimer)
})
</script>
