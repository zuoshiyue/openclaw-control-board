<template>
  <div class="dashboard">
    <!-- 头部区域 - OpenClaw 品牌 -->
    <header class="header">
      <div class="header-left">
        <span class="header-icon">🦑</span>
        <div class="header-title-group">
          <h1 class="header-title">OpenClaw</h1>
          <span class="header-subtitle">控制面板</span>
        </div>
      </div>
      <div class="header-status">
        <span class="status-dot"></span>
        <span class="status-text">运行中</span>
      </div>
    </header>

    <main class="content">
      <!-- 系统监控区 -->
      <section class="section">
        <h2 class="section-title">📊 系统监控</h2>
        <div class="monitor-grid">
          <!-- 运行时间 -->
          <div class="card card-uptime">
            <div class="card-icon">⏱️</div>
            <div class="card-title">运行时间</div>
            <div class="card-value">4 天 59 分钟</div>
          </div>

          <!-- CPU -->
          <div class="card card-cpu">
            <div class="card-icon">🔥</div>
            <div class="card-title">CPU</div>
            <div class="card-value cpu-value">42.9%</div>
            <div class="progress-bar">
              <div class="progress-fill cpu-fill" style="width: 42.9%;"></div>
            </div>
          </div>

          <!-- 内存 -->
          <div class="card card-memory">
            <div class="card-icon">💾</div>
            <div class="card-title">内存</div>
            <div class="card-value memory-value">50%</div>
            <div class="progress-bar">
              <div class="progress-fill memory-fill" style="width: 50%;"></div>
            </div>
          </div>

          <!-- 磁盘 -->
          <div class="card card-disk">
            <div class="card-icon">💿</div>
            <div class="card-title">磁盘</div>
            <div class="card-value disk-value">12%</div>
            <div class="progress-bar">
              <div class="progress-fill disk-fill" style="width: 12%;"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Token 统计 -->
      <section class="section">
        <h2 class="section-title">💰 Token 统计 (今日)</h2>
        <div class="token-grid">
          <div class="stat-card stat-input">
            <div class="stat-label">输入 Token</div>
            <div class="stat-value">45,230</div>
          </div>
          <div class="stat-card stat-output">
            <div class="stat-label">输出 Token</div>
            <div class="stat-value">12,450</div>
          </div>
          <div class="stat-card stat-cost">
            <div class="stat-label">总消耗</div>
            <div class="stat-value warning">¥2.34</div>
          </div>
          <div class="stat-card stat-budget">
            <div class="stat-label">预算剩余</div>
            <div class="stat-value success">¥97.66</div>
          </div>
        </div>
      </section>

      <!-- 服务状态区 -->
      <section class="section">
        <h2 class="section-title">🔌 服务状态</h2>
        <div class="service-list">
          <div class="service-card">
            <div class="service-dot"></div>
            <div class="service-info">
              <div class="service-name">Gateway</div>
              <div class="service-status">运行中</div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-dot"></div>
            <div class="service-info">
              <div class="service-name">Feishu</div>
              <div class="service-status">已连接</div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-dot"></div>
            <div class="service-info">
              <div class="service-name">Memory</div>
              <div class="service-status">正常</div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-dot"></div>
            <div class="service-info">
              <div class="service-name">Cron</div>
              <div class="service-status">6 个任务</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 快捷操作区 -->
      <section class="section">
        <h2 class="section-title">⚡ 快捷操作</h2>
        <div class="quick-actions">
          <button class="action-btn">
            <span class="action-icon">🔄</span>
            <span class="action-label">重启 Gateway</span>
          </button>

          <button class="action-btn">
            <span class="action-icon">🔃</span>
            <span class="action-label">刷新数据</span>
          </button>

          <button class="action-btn">
            <span class="action-icon">📜</span>
            <span class="action-label">查看日志</span>
          </button>

          <button class="action-btn">
            <span class="action-icon">🧹</span>
            <span class="action-label">清理缓存</span>
          </button>
        </div>
      </section>

      <!-- AGENT 管理区 -->
      <section class="section">
        <h2 class="section-title">🤖 AGENT 管理</h2>
        <div class="agent-grid">
          <div class="agent-card">
            <div class="agent-avatar">🎭</div>
            <div class="agent-name">muse</div>
            <div class="agent-role">主调度者</div>
            <div class="agent-model">qwen3.5-plus</div>
            <select class="agent-select">
              <option>Qwen3.5 ↕</option>
            </select>
          </div>

          <div class="agent-card">
            <div class="agent-avatar">🐦</div>
            <div class="agent-name">assistant</div>
            <div class="agent-role">早班推送</div>
            <div class="agent-model">glm-4.7</div>
            <select class="agent-select">
              <option>GLM-4 ↕</option>
            </select>
          </div>

          <div class="agent-card">
            <div class="agent-avatar">🦉</div>
            <div class="agent-name">finance</div>
            <div class="agent-role">基金分析</div>
            <div class="agent-model">qwen3-max</div>
            <select class="agent-select">
              <option>Qwen3-Max ↕</option>
            </select>
          </div>

          <div class="agent-card">
            <div class="agent-avatar">🐛</div>
            <div class="agent-name">isolated</div>
            <div class="agent-role">系统任务</div>
            <div class="agent-model">glm-4.7</div>
            <select class="agent-select">
              <option>GLM-4 ↕</option>
            </select>
          </div>
        </div>
      </section>

      <!-- 最近会话 -->
      <section class="section">
        <h2 class="section-title">💬 最近会话</h2>
        <div class="session-list">
          <div class="session-card">
            <div class="session-icon">📊</div>
            <div class="session-info">
              <div class="session-name">基金持仓分析</div>
              <div class="session-meta">9 只基金 · 13,505 元</div>
            </div>
            <div class="session-status success">完成</div>
          </div>

          <div class="session-card">
            <div class="session-icon">🎨</div>
            <div class="session-info">
              <div class="session-name">控制面板开发</div>
              <div class="session-meta">Vue3 + TailwindCSS</div>
            </div>
            <div class="session-status warning">进行中</div>
          </div>

          <div class="session-card">
            <div class="session-icon">📰</div>
            <div class="session-info">
              <div class="session-name">早班新闻推送</div>
              <div class="session-meta">08:00 定时任务</div>
            </div>
            <div class="session-status success">完成</div>
          </div>
        </div>
      </section>
    </main>

    <!-- 底部导航栏 -->
    <nav class="tab-bar">
      <router-link to="/" class="tab-item active">
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

      <router-link to="/config" class="tab-item">
        <span class="tab-icon">⚙️</span>
        <span class="tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
// OpenClaw 专属仪表盘 - 浅色风格
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  padding-bottom: 80px;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Noto Sans', sans-serif;
}

/* 头部区域 - OpenClaw 品牌风格 */
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

.header-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(34, 197, 94, 0.1);
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

.status-text {
  font-size: 0.75rem;
  color: #16a34a;
  font-weight: 500;
}

/* 内容区域 */
.content {
  padding: 1rem;
}

.section {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 1rem;
}

/* 系统监控网格 */
.monitor-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.card {
  padding: 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.25rem;
}

.card-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
}

.card-uptime {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
  border-color: rgba(99, 102, 241, 0.15);
}

.card-uptime .card-value {
  color: #4f46e5;
}

.card-cpu {
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
  border-color: rgba(244, 63, 94, 0.15);
}

.card-cpu .card-value {
  color: #db2777;
}

.card-memory {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.08) 100%);
  border-color: rgba(59, 130, 246, 0.15);
}

.card-memory .card-value {
  color: #2563eb;
}

.card-disk {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(134, 239, 172, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.15);
}

.card-disk .card-value {
  color: #16a34a;
}

/* 进度条 */
.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 9999px;
  margin-top: 0.5rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
}

.cpu-fill {
  background: linear-gradient(90deg, #f43f5e 0%, #ec4899 100%);
}

.memory-fill {
  background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
}

.disk-fill {
  background: linear-gradient(90deg, #22c55e 0%, #4ade80 100%);
}

/* Token 统计 */
.token-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.stat-card {
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.stat-label {
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
}

.stat-value.success {
  color: #16a34a;
}

.stat-value.warning {
  color: #d97706;
}

.stat-input {
  border-color: rgba(99, 102, 241, 0.2);
}

.stat-output {
  border-color: rgba(168, 85, 247, 0.2);
}

.stat-cost {
  border-color: rgba(251, 191, 36, 0.2);
}

.stat-budget {
  border-color: rgba(74, 222, 128, 0.2);
}

/* 服务状态 */
.service-list {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.service-card {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 0.875rem 1rem;
  border-radius: 12px;
  min-width: 130px;
}

.service-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  flex-shrink: 0;
}

.service-info {
  display: flex;
  flex-direction: column;
}

.service-name {
  font-size: 0.75rem;
  color: #64748b;
}

.service-status {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
}

/* 快捷操作 */
.quick-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 1rem 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:active {
  background: rgba(255, 255, 255, 1);
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.action-icon {
  font-size: 1.5rem;
}

.action-label {
  font-size: 0.625rem;
  color: #64748b;
  font-weight: 500;
  text-align: center;
}

/* AGENT 管理 */
.agent-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.agent-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.agent-avatar {
  font-size: 2rem;
}

.agent-name {
  font-size: 0.875rem;
  font-weight: 700;
  color: #1e293b;
}

.agent-role {
  font-size: 0.625rem;
  color: #64748b;
}

.agent-model {
  font-size: 0.625rem;
  color: #94a3b8;
}

.agent-select {
  width: 100%;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 0.375rem 0.5rem;
  border-radius: 8px;
  font-size: 0.625rem;
  color: #4f46e5;
  cursor: pointer;
}

/* 会话列表 */
.session-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.session-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 0.875rem 1rem;
  border-radius: 12px;
}

.session-icon {
  font-size: 1.5rem;
}

.session-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.session-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
}

.session-meta {
  font-size: 0.625rem;
  color: #64748b;
}

.session-status {
  font-size: 0.625rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
}

.session-status.success {
  background: rgba(74, 222, 128, 0.15);
  color: #16a34a;
  border: 1px solid rgba(74, 222, 128, 0.25);
}

.session-status.warning {
  background: rgba(251, 191, 36, 0.15);
  color: #d97706;
  border: 1px solid rgba(251, 191, 36, 0.25);
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
