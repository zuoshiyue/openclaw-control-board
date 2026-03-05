<template>
  <div class="terminal">
    <!-- 头部 -->
    <header class="header">
      <div class="header-left">
        <span class="header-icon">💬</span>
        <div class="header-title-group">
          <h1 class="header-title">OpenClaw</h1>
          <span class="header-subtitle">终端聊天</span>
        </div>
      </div>
      <button class="connect-btn">
        <span class="connect-dot"></span>
        连接 Gateway
      </button>
    </header>

    <main class="content">
      <!-- 消息区域 -->
      <div class="chat-container">
        <div class="messages">
          <!-- 系统消息 -->
          <div class="message system">
            <div class="message-content">
              <span class="message-icon">🤖</span>
              <span class="message-text">OpenClaw Gateway 已连接</span>
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
            <div class="message-avatar">🦑</div>
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
          <button class="send-btn">
            <span>发送</span>
            <span class="send-icon">➤</span>
          </button>
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
// OpenClaw 终端聊天页面 - 浅色风格
</script>

<style scoped>
.terminal {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-icon {
  font-size: 2rem;
}

.header-title-group {
  display: flex;
  flex-direction: column;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-subtitle {
  font-size: 0.75rem;
  color: #64748b;
}

.connect-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
}

.connect-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
}

.connect-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

/* 内容区域 */
.content {
  flex: 1;
  padding: 1rem;
}

.chat-container {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 200px);
}

.messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #f8fafc;
}

.message {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.message.system {
  justify-content: center;
}

.message.system .message-content {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  color: #4f46e5;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.message.system .message-icon {
  font-size: 1rem;
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
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-bottom-right-radius: 4px;
}

.user-bubble .message-text {
  color: white;
}

.user-bubble .message-time {
  color: rgba(255, 255, 255, 0.8);
}

.assistant-bubble {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom-left-radius: 4px;
}

.message-text {
  font-size: 0.875rem;
  color: #1e293b;
  line-height: 1.6;
}

.message-list {
  margin: 0.5rem 0;
  padding-left: 1rem;
}

.message-list li {
  font-size: 0.75rem;
  color: #475569;
  margin-bottom: 0.25rem;
}

.message-time {
  font-size: 0.625rem;
  color: #94a3b8;
  text-align: right;
}

/* 输入区域 */
.input-area {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
}

.message-input {
  flex: 1;
  background: #f1f5f9;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #1e293b;
}

.message-input:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.4);
  background: white;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.message-input::placeholder {
  color: #94a3b8;
}

.send-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
}

.send-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
}

.send-icon {
  font-size: 1rem;
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
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  color: #94a3b8;
  transition: color 0.2s;
}

.tab-item.active {
  color: #6366f1;
}

.tab-icon {
  font-size: 1.25rem;
}

.tab-label {
  font-size: 0.625rem;
  font-weight: 500;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
