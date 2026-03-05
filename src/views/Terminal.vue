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

          <!-- 带代码的消息 -->
          <div class="message assistant">
            <div class="message-avatar">🦑</div>
            <div class="message-bubble assistant-bubble">
              <span class="message-text">已为您更新文档到正确位置：</span>
              <pre class="code-block"><code>docs/金融投资/基金持仓全景分析.md</code></pre>
              <span class="message-time">11:31:00</span>
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
// OpenClaw 终端聊天页面
</script>

<style scoped>
.terminal {
  min-height: 100vh;
  background: linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%);
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
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  color: #ffffff;
  margin: 0;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-subtitle {
  font-size: 0.75rem;
  color: #94a3b8;
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
}

.connect-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  color: #a5b4fc;
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
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%);
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-bottom-right-radius: 4px;
}

.assistant-bubble {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 4px;
}

.message-text {
  font-size: 0.875rem;
  color: #f1f5f9;
  line-height: 1.6;
}

.message-list {
  margin: 0.5rem 0;
  padding-left: 1rem;
}

.message-list li {
  font-size: 0.75rem;
  color: #cbd5e1;
  margin-bottom: 0.25rem;
}

.message-time {
  font-size: 0.625rem;
  color: #64748b;
  text-align: right;
}

/* 代码块 */
.code-block {
  background: rgba(15, 15, 26, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  overflow-x: auto;
}

.code-block code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  color: #a5b4fc;
}

/* 输入区域 */
.input-area {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 15, 26, 0.5);
}

.message-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #f1f5f9;
}

.message-input:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

.message-input::placeholder {
  color: #64748b;
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
}

.send-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
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
  background: rgba(15, 15, 26, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.75rem 0;
  border-top: 1px solid rgba(99, 102, 241, 0.3);
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  color: #64748b;
  transition: color 0.2s;
}

.tab-item.active {
  color: #818cf8;
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
