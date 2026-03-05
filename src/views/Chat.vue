<template>
  <div class="flex flex-col h-screen pb-16 md:pb-0">
    <header class="glass border-b border-white/10 p-4">
      <h1 class="text-xl font-bold">💬 终端聊天</h1>
      <p class="text-xs text-gray-400 mt-1">与 AI Agent 直接对话</p>
    </header>

    <!-- 聊天消息区 -->
    <div class="flex-1 overflow-auto p-4 space-y-4" ref="chatContainer">
      <div v-for="(msg, index) in messages" :key="index" 
        class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
        <div class="max-w-[80%] rounded-xl p-4" :class="msg.role === 'user' ? 'bg-accent text-white' : 'glass'">
          <div class="text-sm" v-html="renderMarkdown(msg.content)"></div>
          <div class="text-xs mt-2 opacity-60">{{ msg.time }}</div>
        </div>
      </div>
      <div v-if="isTyping" class="flex justify-start">
        <div class="glass rounded-xl p-4">
          <div class="flex space-x-2">
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区 -->
    <div class="glass border-t border-white/10 p-4 safe-area-bottom">
      <div class="flex items-end space-x-3">
        <textarea 
          v-model="inputMessage"
          @keydown.enter.exact.prevent="sendMessage"
          placeholder="输入消息..."
          class="flex-1 bg-white/5 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
          rows="1"
          style="max-height: 120px"
        ></textarea>
        <button 
          @click="sendMessage"
          :disabled="!inputMessage.trim() || isTyping"
          class="px-6 py-3 bg-accent hover:bg-accent-hover disabled:bg-gray-600 rounded-lg transition-all font-bold"
        >
          发送
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { marked } from 'marked'

const messages = ref([
  { role: 'assistant', content: '你好！我是 OpenClaw 助手，有什么可以帮你的吗？', time: new Date().toLocaleTimeString() }
])
const inputMessage = ref('')
const isTyping = ref(false)
const chatContainer = ref(null)

const renderMarkdown = (text) => {
  return marked.parse(text)
}

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!inputMessage.value.trim() || isTyping.value) return
  
  const userMsg = {
    role: 'user',
    content: inputMessage.value,
    time: new Date().toLocaleTimeString()
  }
  messages.value.push(userMsg)
  inputMessage.value = ''
  isTyping.value = true
  await scrollToBottom()

  // 模拟 AI 响应（Mock 数据）
  setTimeout(() => {
    const aiMsg = {
      role: 'assistant',
      content: `收到你的消息："${userMsg.content}"\n\n这是一个演示响应。实际应用中会连接到 OpenClaw Gateway 的 WebSocket 接口。`,
      time: new Date().toLocaleTimeString()
    }
    messages.value.push(aiMsg)
    isTyping.value = false
    scrollToBottom()
  }, 1500)
}
</script>

<style scoped>
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>
