<template>
  <div class="terminal">
    <!-- 头部 -->
    <header class="header">
      <div class="header-left">
        <span class="header-icon">💬</span>
        <h1 class="header-title">终端聊天</h1>
      </div>
      <button class="connect-btn">连接 Gateway</button>
    </header>

    <main class="content">
      <!-- 消息区域 -->
      <div class="chat-container">
        <div class="messages">
          <!-- 系统消息 -->
          <div class="message system">
            <div class="message-content">
              <span class="message-text">🤖 OpenClaw Gateway 已连接</span>
              <span class="message-time">11:30:00</span>
            </div>
          </div>

          <!-- 用户消息 -->
          <div class="message user">
            <div class="message-avatar">👤</div>
            <div class="message-bubble user-bubble">
              <span class="message-text">分析我的基金持仓</span>
              <span class="message-time">11:30:15</span>
            </div>
          </div>

          <!-- AI 消息 -->
          <div class="message assistant">
            <div class="message-avatar">🦞</div>
            <div class="message-bubble assistant-bubble">
              <span class="message-text">好的，左先生！我正在识别您的基金持仓截图...</span>
              <span class="message-text">已识别到 9 只基金：</span>
              <ul class="message-list">
                <li>天弘安康颐睿一年持有混合 A - 5,230.53 元</li>
                <li>广发安盈混合 E - 4,996.81 元</li>
                <li>富国中证工业 4.0 指数 C - 1,058.57 元</li>
              </ul>
              <span class="message-time">11:30:45</span>
            </div>
          </div>
        </div>

        <!-- 输入区域 -->
        <div class="input-area">
          <input type="text" placeholder="输入消息..." class="message-input" />
          <button class="send-btn">发送</button>
        </div>
      </div>
    </main>

    <!-- 底部导航栏 -->
    <nav class="tab-bar">
      <router-link to="/" class="tab-item">
        <span class="tab-icon">🏠</span>
        <span class="tab-label">首页</span>
      </router-link>

      <router-link to="/terminal" class="tab-item active">
        <span class="tab-icon">💬</span>
        <span class="tab-label">终端</span>
      </router-link>

      <router-link to="/logs" class="tab-item">
        <span class="tab-icon">📄</span>
        <span class="tab-label">日志</span>
      </router-link>

      <router-link to="/config" class="tab-item">
        <span class="tab-icon">⚙️</span>
        <span class="tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
// 终端聊天页面
</script>

<style scoped>
.terminal {
  min-height: 100vh;
  background: linear-gradient(180deg, #F3E8FF 0%, #E9D5FF 100%);
  padding-bottom: 80px;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Noto Sans', sans-serif;
  display: flex;
  flex-direction: column;
}

/* 头部 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-icon {
  font-size: 1.75rem;
}

.header-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #6B21A8;
  margin: 0;
}

.connect-btn {
  background: #7C3AED;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}

/* 内容区域 */
.content {
  flex: 1;
  padding: 0 1rem;
}

.chat-container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 200px);
}

.messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.message {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.message.system {
  justify-content: center;
}

.message.system .message-content {
  background: rgba(124, 58, 237, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  color: #7C3AED;
}

.message.user {
  flex-direction: row-reverse;
}

.message-avatar {
  font-size: 1.75rem;
  flex-shrink: 0;
}

.message-bubble {
  max-width: 75%;
  padding: 0.875rem 1rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.user-bubble {
  background: linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%);
  border-bottom-right-radius: 4px;
}

.assistant-bubble {
  background: #F3F4F6;
  border-bottom-left-radius: 4px;
}

.message-text {
  font-size: 0.875rem;
  color: #1F2937;
  line-height: 1.5;
}

.message-list {
  margin: 0.5rem 0;
  padding-left: 1rem;
}

.message-list li {
  font-size: 0.75rem;
  color: #4B5563;
  margin-bottom: 0.25rem;
}

.message-time {
  font-size: 0.625rem;
  color: #9CA3AF;
  text-align: right;
}

/* 输入区域 */
.input-area {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border-top: 1px solid #E5E7EB;
  background: white;
}

.message-input {
  flex: 1;
  background: #F3F4F6;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #1F2937;
}

.message-input:focus {
  outline: none;
  background: #E5E7EB;
}

.send-btn {
  background: #7C3AED;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}

/* 底部导航栏 */
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.75rem 0;
  border-top: 1px solid rgba(233, 213, 255, 0.5);
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  color: #9CA3AF;
  transition: color 0.2s;
}

.tab-item.active {
  color: #7C3AED;
}

.tab-icon {
  font-size: 1.25rem;
}

.tab-label {
  font-size: 0.625rem;
  font-weight: 500;
}
</style>
