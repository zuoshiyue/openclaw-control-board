<template>
  <div class="logs">
    <!-- 头部 -->
    <header class="header">
      <div class="header-left">
        <span class="header-icon">📄</span>
        <div class="header-title-group">
          <h1 class="header-title">OpenClaw</h1>
          <span class="header-subtitle">日志查询</span>
        </div>
      </div>
    </header>

    <main class="content">
      <!-- 过滤区域 -->
      <div class="filter-bar">
        <select class="filter-select">
          <option>全部级别</option>
          <option>INFO</option>
          <option>WARNING</option>
          <option>ERROR</option>
        </select>
        <input type="text" placeholder="搜索日志..." class="filter-input" />
        <button class="filter-btn">查询</button>
      </div>

      <!-- 日志列表 -->
      <div class="log-container">
        <div class="log-entry">
          <span class="log-time">11:30:45.123</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Gateway</span>
          <span class="log-message">请求处理完成 - session_001 - 耗时 234ms</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:44.890</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Feishu</span>
          <span class="log-message">消息发送成功 - om_x100b55bb73a7688</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:43.567</span>
          <span class="log-level warning">WARNING</span>
          <span class="log-source">Memory</span>
          <span class="log-message">向量索引更新延迟 - 队列长度：15</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:42.234</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Agent</span>
          <span class="log-message">子 Agent 任务完成 - 基金分析 - Token: 8,230</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:40.100</span>
          <span class="log-level error">ERROR</span>
          <span class="log-source">Cron</span>
          <span class="log-message">定时任务执行失败 - task:fund-analysis</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:38.890</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Gateway</span>
          <span class="log-message">WebSocket 连接建立 - client_id: ws_001</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:36.567</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Feishu</span>
          <span class="log-message">收到用户消息 - ou_81ff6a748bdc9a5b</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:34.234</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Session</span>
          <span class="log-message">新会话创建 - session_003 - 模型：glm-4.7</span>
        </div>
      </div>
    </main>

    <!-- 底部导航栏 -->
    <nav class="tab-bar">
      <router-link to="/" class="tab-item">
        <span class="tab-icon">🏠</span>
        <span class="tab-label">首页</span>
      </router-link>

      <router-link to="/terminal" class="tab-item">
        <span class="tab-icon">💬</span>
        <span class="tab-label">终端</span>
      </router-link>

      <router-link to="/logs" class="tab-item active">
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
// OpenClaw 日志查询页面
</script>

<style scoped>
.logs {
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
  align-items: center;
  gap: 0.75rem;
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

/* 内容区域 */
.content {
  flex: 1;
  padding: 1rem;
}

/* 过滤区域 */
.filter-bar {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.filter-select,
.filter-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.625rem 0.875rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #f1f5f9;
}

.filter-select:focus,
.filter-input:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

.filter-select option {
  background: #1a1a2e;
  color: #f1f5f9;
}

.filter-btn {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 0.625rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
}

.filter-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
}

/* 日志列表 */
.log-container {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.75rem;
  max-height: calc(100vh - 220px);
  overflow-y: auto;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.log-entry {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.75rem;
}

.log-entry:last-child {
  border-bottom: none;
}

.log-entry:hover {
  background: rgba(99, 102, 241, 0.1);
  border-radius: 8px;
}

.log-time {
  color: #64748b;
  flex-shrink: 0;
  font-size: 0.625rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.log-level {
  padding: 0.125rem 0.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.625rem;
  flex-shrink: 0;
  text-transform: uppercase;
}

.log-level.info {
  background: rgba(74, 222, 128, 0.15);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}

.log-level.warning {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.log-level.error {
  background: rgba(248, 113, 113, 0.15);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.3);
}

.log-source {
  color: #a5b4fc;
  flex-shrink: 0;
  width: 80px;
  font-weight: 500;
}

.log-message {
  color: #cbd5e1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
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
</style>
