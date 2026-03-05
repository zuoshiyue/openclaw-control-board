<template>
  <div class="p-4 md:p-8 pb-24 md:pb-8">
    <header class="mb-6">
      <h1 class="text-2xl md:text-3xl font-bold mb-2">⚙️ 配置</h1>
      <p class="text-gray-400 text-sm">在线编辑 OpenClaw 配置</p>
    </header>

    <!-- 模式切换 -->
    <div class="flex gap-2 mb-6">
      <button 
        @click="mode = 'form'"
        class="flex-1 py-3 rounded-lg transition-all"
        :class="mode === 'form' ? 'bg-accent text-white' : 'glass text-gray-400 hover:bg-white/10'"
      >
        📝 表单模式
      </button>
      <button 
        @click="mode = 'code'"
        class="flex-1 py-3 rounded-lg transition-all"
        :class="mode === 'code' ? 'bg-accent text-white' : 'glass text-gray-400 hover:bg-white/10'"
      >
        💻 源码模式
      </button>
    </div>

    <!-- 表单模式 -->
    <div v-if="mode === 'form'" class="space-y-6">
      <!-- 通道配置 -->
      <div class="glass rounded-xl p-4">
        <h2 class="text-lg font-bold mb-4">通道配置</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-400 mb-2">飞书 App ID</label>
            <input v-model="config.feishu.appId" type="text" class="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-2">飞书 App Secret</label>
            <input v-model="config.feishu.appSecret" type="password" class="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
        </div>
      </div>

      <!-- 模型配置 -->
      <div class="glass rounded-xl p-4">
        <h2 class="text-lg font-bold mb-4">模型配置</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-400 mb-2">默认模型</label>
            <select v-model="config.model.default" class="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent">
              <option>qwen3.5-plus</option>
              <option>glm-4.7</option>
              <option>qwen3-coder-plus</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-2">API Key</label>
            <input v-model="config.model.apiKey" type="password" class="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
        </div>
      </div>

      <!-- Gateway 配置 -->
      <div class="glass rounded-xl p-4">
        <h2 class="text-lg font-bold mb-4">Gateway 配置</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-400 mb-2">端口</label>
            <input v-model="config.gateway.port" type="number" class="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div class="flex items-center">
            <input v-model="config.gateway.autoStart" type="checkbox" class="w-5 h-5 rounded" />
            <label class="ml-2 text-sm text-gray-400">自动启动</label>
          </div>
        </div>
      </div>
    </div>

    <!-- 源码模式 -->
    <div v-if="mode === 'code'" class="glass rounded-xl overflow-hidden">
      <div class="bg-black/30 p-4 border-b border-white/10 flex justify-between items-center">
        <span class="text-sm text-gray-400">openclaw.json</span>
        <span class="text-xs text-gray-500">JSON5 格式</span>
      </div>
      <textarea 
        v-model="configJson"
        class="w-full h-[60vh] bg-black/20 p-4 font-mono text-sm focus:outline-none resize-none"
        spellcheck="false"
      ></textarea>
    </div>

    <!-- 保存按钮 -->
    <div class="fixed bottom-20 md:bottom-8 right-4 md:right-8 flex gap-3 safe-area-bottom">
      <button @click="resetConfig" class="px-6 py-3 glass hover:bg-white/20 rounded-lg transition-all font-bold">
        重置
      </button>
      <button @click="saveConfig" class="px-6 py-3 bg-accent hover:bg-accent-hover rounded-lg transition-all font-bold">
        💾 保存配置
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const mode = ref('form')

const config = ref({
  feishu: {
    appId: 'cli_a4b5c6d7e8f9',
    appSecret: '••••••••••••••••'
  },
  model: {
    default: 'qwen3.5-plus',
    apiKey: 'sk-••••••••••••••••'
  },
  gateway: {
    port: 18789,
    autoStart: true
  }
})

const configJson = computed({
  get: () => JSON.stringify(config.value, null, 2),
  set: (val) => {
    try {
      config.value = JSON.parse(val)
    } catch (e) {
      // JSON 格式错误时不更新
    }
  }
})

const saveConfig = () => {
  alert('配置已保存！\n\n（演示模式：实际应用中会调用 Gateway API 进行热重载）')
}

const resetConfig = () => {
  if (confirm('确定要重置配置吗？')) {
    config.value = {
      feishu: { appId: '', appSecret: '' },
      model: { default: 'qwen3.5-plus', apiKey: '' },
      gateway: { port: 18789, autoStart: true }
    }
  }
}
</script>

<style scoped>
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>
