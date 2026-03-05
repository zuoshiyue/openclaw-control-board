<template>
  <div class="logs">
    <!-- 头部 -->
    <header class="header">
      <div class="header-left">
        <span class="header-icon">📄</span>
        <h1 class="header-title">日志查询</h1>
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
          <span class="log-message">请求处理完成 - session_001 - 耗时 234ms</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:44.890</span>
          <span class="log-level info">INFO</span>
          <span class="log-message">消息发送成功 - om_x100b55bb73a7688</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:43.567</span>
          <span class="log-level warning">WARNING</span>
          <span class="log-message">向量索引更新延迟 - 队列长度：15</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:42.234</span>
          <span class="log-level info">INFO</span>
          <span class="log-message">子 Agent 任务完成 - 基金分析 - Token: 8,230</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:40.100</span>
          <span class="log-level error">ERROR</span>
          <span class="log-message">定时任务执行失败 - task:fund-analysis</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:38.890</span>
          <span class="log-level info">INFO</span>
          <span class="log-message">WebSocket 连接建立 - client_id: ws_001</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:36.567</span>
          <span class="log-level info">INFO</span>
          <span class="log-message">收到用户消息 - ou_81ff6a748bdc9a5b</span>
        </div>

        <div class="log-entry">
          <span class="log-time">11:30:34.234</span>
          <span class="log-level info">INFO</span>
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
// 日志查询页面
</script>

<style scoped>
.logs {
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
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
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

/* 内容区域 */
.content {
  flex: 1;
  padding: 0 1rem;
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
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #E9D5FF;
  padding: 0.625rem 0.875rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #1F2937;
}

.filter-select:focus,
.filter-input:focus {
  outline: none;
  border-color: #7C3AED;
}

.filter-btn {
  background: #7C3AED;
  color: white;
  border: none;
  padding: 0.625rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  flex-shrink: 0;
}

/* 日志列表 */
.log-container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
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
  border-bottom: 1px solid #F3F4F6;
  font-size: 0.75rem;
}

.log-entry:last-child {
  border-bottom: none;
}

.log-time {
  color: #9CA3AF;
  flex-shrink: 0;
  font-size: 0.625rem;
}

.log-level {
  padding: 0.125rem 0.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.625rem;
  flex-shrink: 0;
}

.log-level.info {
  background: #D1FAE5;
  color: #059669;
}

.log-level.warning {
  background: #FEF3C7;
  color: #D97706;
}

.log-level.error {
  background: #FEE2E2;
  color: #DC2626;
}

.log-message {
  color: #4B5563;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
