<template>
  <div class="terminal">
    <header class="header glass">
      <h1>💬 终端聊天</h1>
      <div class="controls">
        <button class="btn btn-primary">连接 Gateway</button>
      </div>
    </header>

    <main class="content">
      <!-- 聊天区域 -->
      <div class="chat-container glass">
        <div class="messages">
          <div class="message system">
            <div class="message-content">
              <p>🤖 OpenClaw Gateway 已连接</p>
              <span class="time">11:30:00</span>
            </div>
          </div>

          <div class="message user">
            <div class="message-avatar">👤</div>
            <div class="message-content">
              <p>分析我的基金持仓</p>
              <span class="time">11:30:15</span>
            </div>
          </div>

          <div class="message assistant">
            <div class="message-avatar">🎭</div>
            <div class="message-content">
              <p>好的，左先生！我正在识别您的基金持仓截图...</p>
              <p>已识别到 9 只基金：</p>
              <ul>
                <li>天弘安康颐睿一年持有混合 A - 5,230.53 元</li>
                <li>广发安盈混合 E - 4,996.81 元</li>
                <li>富国中证工业 4.0 指数 C - 1,058.57 元</li>
              </ul>
              <span class="time">11:30:45</span>
            </div>
          </div>
        </div>

        <!-- 输入区域 -->
        <div class="input-area">
          <input type="text" placeholder="输入消息..." class="input" />
          <button class="btn btn-send">发送</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// 终端聊天页面
</script>

<style scoped>
.terminal {
  min-height: 100vh;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header h1 {
  font-size: 1.5rem;
  font-weight: 600;
}

.controls {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.content {
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.chat-container {
  width: 100%;
  max-width: 900px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.messages {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  max-height: calc(100vh - 250px);
}

.message {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.message.system {
  justify-content: center;
}

.message.system .message-content {
  background: rgba(99, 102, 241, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  color: var(--accent);
}

.message.user {
  flex-direction: row-reverse;
}

.message-avatar {
  font-size: 2rem;
  min-width: 40px;
}

.message-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  max-width: 70%;
}

.message.user .message-content {
  background: var(--accent);
  color: white;
}

.message-content p {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.message-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.message-content li {
  margin-bottom: 0.25rem;
}

.time {
  font-size: 0.75rem;
  color: var(--text-secondary);
  display: block;
  margin-top: 0.5rem;
}

.input-area {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.input {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.input:focus {
  outline: none;
  border-color: var(--accent);
}

.btn-send {
  background: var(--accent);
  color: white;
  padding: 0.75rem 1.5rem;
}

.btn-send:hover {
  background: var(--accent-hover);
}
</style>
