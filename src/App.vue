<template>
  <div id="app" class="flex h-screen overflow-hidden">
    <!-- PC 端左侧导航 -->
    <nav class="hidden md:flex flex-col w-52 glass border-r border-white/10">
      <div class="p-4 border-b border-white/10">
        <h1 class="text-lg font-bold">OpenClaw 控制台</h1>
        <p class="text-xs text-gray-400 mt-1">统一控制看板</p>
      </div>
      <div class="flex-1 py-4">
        <router-link 
          v-for="route in routes" 
          :key="route.path"
          :to="route.path"
          class="flex items-center px-4 py-3 mx-2 my-1 rounded-lg transition-all hover:bg-white/10"
          :class="[$route.path === route.path ? 'bg-accent/20 text-accent' : 'text-gray-300']"
        >
          <span class="mr-3">{{ route.meta.title.split(' ')[0] }}</span>
          <span>{{ route.meta.title.split(' ').slice(1).join(' ') }}</span>
        </router-link>
      </div>
      <div class="p-4 border-t border-white/10">
        <div class="flex items-center text-xs text-gray-400">
          <span class="w-2 h-2 rounded-full bg-green-500 mr-2 status-dot"></span>
          运行中
        </div>
      </div>
    </nav>

    <!-- 主内容区 -->
    <main class="flex-1 overflow-auto bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
      <router-view />
    </main>

    <!-- 移动端底部导航 -->
    <nav class="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/10 safe-area-bottom">
      <div class="flex justify-around py-2">
        <router-link 
          v-for="route in routes" 
          :key="route.path"
          :to="route.path"
          class="flex flex-col items-center py-2 px-3 rounded-lg transition-all"
          :class="[$route.path === route.path ? 'text-accent' : 'text-gray-400']"
        >
          <span class="text-xl mb-1">{{ route.meta.title.split(' ')[0] }}</span>
          <span class="text-xs">{{ route.meta.title.split(' ')[1] || '' }}</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes().filter(r => r.meta.title)
</script>

<style scoped>
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>
