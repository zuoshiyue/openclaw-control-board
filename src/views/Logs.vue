<template>
  <div class="logs">
    <header class="header glass">
      <h1>📜 日志查询</h1>
      <div class="filters">
        <select class="select">
          <option>全部级别</option>
          <option>INFO</option>
          <option>WARNING</option>
          <option>ERROR</option>
        </select>
        <input type="text" placeholder="搜索日志..." class="input" />
        <button class="btn btn-primary">查询</button>
      </div>
    </header>

    <main class="content">
      <div class="log-container glass">
        <div class="log-entry">
          <span class="log-time">2026-03-05 11:30:45.123</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Gateway</span>
          <span class="log-message">请求处理完成 - session_001 - 耗时 234ms</span>
        </div>

        <div class="log-entry">
          <span class="log-time">2026-03-05 11:30:44.890</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Feishu</span>
          <span class="log-message">消息发送成功 - om_x100b55bb73a7688cb29f2deae4db3d9</span>
        </div>

        <div class="log-entry">
          <span class="log-time">2026-03-05 11:30:43.567</span>
          <span class="log-level warning">WARNING</span>
          <span class="log-source">Memory</span>
          <span class="log-message">向量索引更新延迟 - 当前队列长度：15</span>
        </div>

        <div class="log-entry">
          <span class="log-time">2026-03-05 11:30:42.234</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Agent</span>
          <span class="log-message">子 Agent 任务完成 - 基金分析 - Token: 8,230</span>
        </div>

        <div class="log-entry">
          <span class="log-time">2026-03-05 11:30:40.100</span>
          <span class="log-level error">ERROR</span>
          <span class="log-source">Cron</span>
          <span class="log-message">定时任务执行失败 - task:fund-analysis - 推送失败</span>
        </div>

        <div class="log-entry">
          <span class="log-time">2026-03-05 11:30:38.890</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Gateway</span>
          <span class="log-message">WebSocket 连接建立 - client_id: ws_001</span>
        </div>

        <div class="log-entry">
          <span class="log-time">2026-03-05 11:30:36.567</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Feishu</span>
          <span class="log-message">收到用户消息 - ou_81ff6a748bdc9a5b1d69c253fcbaea90</span>
        </div>

        <div class="log-entry">
          <span class="log-time">2026-03-05 11:30:34.234</span>
          <span class="log-level info">INFO</span>
          <span class="log-source">Session</span>
          <span class="log-message">新会话创建 - session_003 - 模型：glm-4.7</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// 日志查询页面
</script>

<style scoped>
.logs {
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

.filters {
  display: flex;
  gap: 1rem;
}

.select,
.input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.select:focus,
.input:focus {
  outline: none;
  border-color: var(--accent);
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.content {
  flex: 1;
  padding: 2rem;
}

.log-container {
  border-radius: 12px;
  padding: 1rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85rem;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
}

.log-entry {
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  white-space: nowrap;
}

.log-entry:hover {
  background: rgba(255, 255, 255, 0.02);
}

.log-time {
  color: var(--text-secondary);
  flex-shrink: 0;
}

.log-level {
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
  flex-shrink: 0;
}

.log-level.info {
  background: rgba(34, 197, 94, 0.2);
  color: var(--success);
}

.log-level.warning {
  background: rgba(245, 158, 11, 0.2);
  color: var(--warning);
}

.log-level.error {
  background: rgba(239, 68, 68, 0.2);
  color: var(--error);
}

.log-source {
  color: var(--accent);
  flex-shrink: 0;
  width: 100px;
}

.log-message {
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
