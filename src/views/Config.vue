<template>
  <div class="config">
    <!-- 头部 -->
    <header class="header">
      <div class="header-left">
        <span class="header-icon">⚙️</span>
        <div class="header-title-group">
          <h1 class="header-title">OpenClaw</h1>
          <span class="header-subtitle">设置</span>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn btn-reset">重置</button>
        <button class="btn btn-save">保存</button>
      </div>
    </header>

    <main class="content">
      <!-- Gateway 配置 -->
      <section class="config-section">
        <h2 class="section-title">🤖 Gateway 配置</h2>
        <div class="form-group">
          <label class="form-label">Gateway 端口</label>
          <input type="number" value="8080" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label">WebSocket 端口</label>
          <input type="number" value="8081" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label">日志级别</label>
          <select class="form-select">
            <option>debug</option>
            <option selected>info</option>
            <option>warning</option>
            <option>error</option>
          </select>
        </div>
      </section>

      <!-- 飞书配置 -->
      <section class="config-section">
        <h2 class="section-title">📬 飞书配置</h2>
        <div class="form-group">
          <label class="form-label">App ID</label>
          <input type="text" value="cli_a3b4c5d6e7f8g9h0" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label">App Secret</label>
          <input type="password" value="****************" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label">Verification Token</label>
          <input type="text" value="v1234567890abcdef" class="form-input" />
        </div>
      </section>

      <!-- 模型配置 -->
      <section class="config-section">
        <h2 class="section-title">🧠 模型配置</h2>
        <div class="form-group">
          <label class="form-label">默认模型</label>
          <select class="form-select">
            <option selected>qwen3.5-plus</option>
            <option>qwen3-max</option>
            <option>glm-4.7</option>
            <option>gpt-4o</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">上下文窗口</label>
          <input type="text" value="200000" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label">Token 预算 (每日)</label>
          <input type="text" value="100" class="form-input" />
        </div>
      </section>

      <!-- 定时任务配置 -->
      <section class="config-section">
        <h2 class="section-title">⏰ 定时任务</h2>
        <div class="task-list">
          <div class="task-item">
            <span class="task-icon">📰</span>
            <div class="task-info">
              <span class="task-name">早班推送</span>
              <span class="task-desc">08:00 执行</span>
            </div>
            <input type="time" value="08:00" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
          <div class="task-item">
            <span class="task-icon">🦉</span>
            <div class="task-info">
              <span class="task-name">基金分析</span>
              <span class="task-desc">09:10/21:00</span>
            </div>
            <input type="time" value="09:10" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
          <div class="task-item">
            <span class="task-icon">💰</span>
            <div class="task-info">
              <span class="task-name">成本检查</span>
              <span class="task-desc">09:20 执行</span>
            </div>
            <input type="time" value="09:20" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
          <div class="task-item">
            <span class="task-icon">💾</span>
            <div class="task-info">
              <span class="task-name">配置备份</span>
              <span class="task-desc">03:00 执行</span>
            </div>
            <input type="time" value="03:00" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
          <div class="task-item">
            <span class="task-icon">📊</span>
            <div class="task-info">
              <span class="task-name">每日进化报告</span>
              <span class="task-desc">23:00 执行</span>
            </div>
            <input type="time" value="23:00" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
        </div>
      </section>

      <!-- 高级配置 -->
      <section class="config-section">
        <h2 class="section-title">🔧 高级配置</h2>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" checked />
            <span class="checkbox-text">启用向量索引</span>
          </label>
        </div>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" checked />
            <span class="checkbox-text">启用子 Agent 模式</span>
          </label>
        </div>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" />
            <span class="checkbox-text">调试模式</span>
          </label>
        </div>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" checked />
            <span class="checkbox-text">自动备份配置</span>
          </label>
        </div>
      </section>

      <!-- Tailscale 配置 -->
      <section class="config-section">
        <h2 class="section-title">🌐 Tailscale 配置</h2>
        <div class="form-group">
          <label class="form-label">Tailscale 状态</label>
          <div class="status-row">
            <span class="status-dot"></span>
            <span class="status-text">已连接</span>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">设备名称</label>
          <input type="text" value="zuoshiyue-macmini" class="form-input" disabled />
        </div>
        <div class="form-group">
          <label class="form-label">Tailscale IP</label>
          <input type="text" value="100.96.154.80" class="form-input" disabled />
        </div>
        <div class="form-group">
          <label class="form-label">看板访问地址</label>
          <div class="access-url">
            <code>http://100.96.154.80:5174</code>
            <button class="copy-btn">复制</button>
          </div>
        </div>
      </section>
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

      <router-link to="/logs" class="tab-item">
        <span class="tab-icon">📄</span>
        <span class="tab-label">日志</span>
      </router-link>

      <router-link to="/config" class="tab-item active">
        <span class="tab-icon">⚙️</span>
        <span class="tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
// OpenClaw 配置编辑页面 - 浅色风格
</script>

<style scoped>
.config {
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

.header-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-reset {
  background: rgba(0, 0, 0, 0.05);
  color: #64748b;
}

.btn-reset:hover {
  background: rgba(0, 0, 0, 0.1);
}

.btn-save {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
}

.btn-save:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
}

/* 内容区域 */
.content {
  flex: 1;
  padding: 1rem;
}

.config-section {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 1rem;
}

/* 表单样式 */
.form-group {
  margin-bottom: 1rem;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-label {
  display: block;
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.5rem;
}

.form-input,
.form-select {
  width: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #1e293b;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #f1f5f9;
}

.form-select option {
  background: #f8fafc;
  color: #1e293b;
}

/* 任务列表 */
.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem;
  background: #f8fafc;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
}

.task-icon {
  font-size: 1.25rem;
}

.task-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.task-name {
  font-size: 0.875rem;
  color: #1e293b;
  font-weight: 500;
}

.task-desc {
  font-size: 0.625rem;
  color: #94a3b8;
}

.task-time {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.375rem 0.5rem;
  border-radius: 8px;
  font-size: 0.75rem;
  color: #1e293b;
}

.task-status {
  font-size: 0.625rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
}

.task-status.success {
  background: rgba(74, 222, 128, 0.15);
  color: #16a34a;
  border: 1px solid rgba(74, 222, 128, 0.25);
}

/* 复选框 */
.checkbox-group {
  margin-bottom: 0.75rem;
}

.checkbox-group:last-child {
  margin-bottom: 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #6366f1;
}

.checkbox-text {
  font-size: 0.875rem;
  color: #1e293b;
}

/* Tailscale 配置 */
.status-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

.status-text {
  font-size: 0.875rem;
  color: #16a34a;
  font-weight: 500;
}

.access-url {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.access-url code {
  flex: 1;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 0.75rem;
  border-radius: 8px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  color: #4f46e5;
}

.copy-btn {
  background: rgba(0, 0, 0, 0.05);
  color: #64748b;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #1e293b;
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
