<template>
  <div class="config">
    <!-- 头部 -->
    <header class="header">
      <div class="header-left">
        <span class="header-icon">⚙️</span>
        <h1 class="header-title">设置</h1>
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
            <span class="task-name">早班推送</span>
            <input type="time" value="08:00" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
          <div class="task-item">
            <span class="task-name">基金分析</span>
            <input type="time" value="09:10" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
          <div class="task-item">
            <span class="task-name">成本检查</span>
            <input type="time" value="09:20" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
          <div class="task-item">
            <span class="task-name">配置备份</span>
            <input type="time" value="03:00" class="task-time" />
            <span class="task-status success">启用</span>
          </div>
          <div class="task-item">
            <span class="task-name">每日进化报告</span>
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
            <span>启用向量索引</span>
          </label>
        </div>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" checked />
            <span>启用子 Agent 模式</span>
          </label>
        </div>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" />
            <span>调试模式</span>
          </label>
        </div>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" checked />
            <span>自动备份配置</span>
          </label>
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
// 配置编辑页面
</script>

<style scoped>
.config {
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
}

.btn-reset {
  background: rgba(255, 255, 255, 0.8);
  color: #6B7280;
}

.btn-save {
  background: #7C3AED;
  color: white;
}

/* 内容区域 */
.content {
  flex: 1;
  padding: 0 1rem;
}

.config-section {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #6B21A8;
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
  color: #6B7280;
  margin-bottom: 0.5rem;
}

.form-input,
.form-select {
  width: 100%;
  background: #F3F4F6;
  border: 1px solid #E5E7EB;
  padding: 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #1F2937;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #7C3AED;
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
  gap: 1rem;
  padding: 0.75rem;
  background: #F9FAFB;
  border-radius: 12px;
}

.task-name {
  flex: 1;
  font-size: 0.875rem;
  color: #1F2937;
}

.task-time {
  background: white;
  border: 1px solid #E5E7EB;
  padding: 0.375rem 0.5rem;
  border-radius: 8px;
  font-size: 0.75rem;
  color: #1F2937;
}

.task-status {
  font-size: 0.625rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
}

.task-status.success {
  background: #D1FAE5;
  color: #059669;
}

/* 复选框 */
.checkbox-group {
  margin-bottom: 0.75rem;
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
  accent-color: #7C3AED;
}

.checkbox-label span {
  font-size: 0.875rem;
  color: #1F2937;
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
