<template>
  <div class="dashboard">
    <!-- 头部区域 -->
    <header class="header">
      <div class="header-left">
        <span class="header-icon">🦞</span>
        <h1 class="header-title">小静の龙虾池</h1>
      </div>
      <div class="header-status">
        <span class="status-badge">在线</span>
      </div>
    </header>

    <main class="content">
      <!-- 系统监控区 -->
      <section class="section">
        <h2 class="section-title">系统监控</h2>
        <div class="monitor-grid">
          <!-- 运行时间 -->
          <div class="card card-runtime">
            <div class="card-title">运行时间</div>
            <div class="card-value">4 天 59 分钟</div>
          </div>

          <!-- CPU -->
          <div class="card card-cpu">
            <div class="card-title">CPU</div>
            <div class="card-value cpu-value">42.9%</div>
            <div class="progress-bar">
              <div class="progress-fill cpu-fill" style="width: 42.9%;"></div>
            </div>
          </div>

          <!-- 内存 -->
          <div class="card card-memory">
            <div class="card-title">内存</div>
            <div class="card-value memory-value">50%</div>
            <div class="progress-bar">
              <div class="progress-fill memory-fill" style="width: 50%;"></div>
            </div>
          </div>

          <!-- 磁盘 -->
          <div class="card card-disk">
            <div class="card-title">磁盘</div>
            <div class="card-value disk-value">12%</div>
            <div class="progress-bar">
              <div class="progress-fill disk-fill" style="width: 12%;"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 服务状态区 -->
      <section class="section">
        <h2 class="section-title">服务状态 📢</h2>
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
              <div class="service-name">Discord</div>
              <div class="service-status">已连接</div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-dot"></div>
            <div class="service-info">
              <div class="service-name">Tailscale</div>
              <div class="service-status">在线</div>
            </div>
          </div>

          <div class="service-card">
            <div class="service-dot"></div>
            <div class="service-info">
              <div class="service-name">看板</div>
              <div class="service-status">运行中</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 快捷操作区 -->
      <section class="section">
        <h2 class="section-title">快捷操作 ⚡</h2>
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
        </div>
      </section>

      <!-- AGENT 管理区 -->
      <section class="section">
        <h2 class="section-title">AGENT 管理 🤖</h2>
        <div class="agent-grid">
          <div class="agent-card">
            <div class="agent-avatar">🦆</div>
            <div class="agent-name">小鸭</div>
            <div class="agent-model">deepseek-chat</div>
            <select class="agent-select">
              <option>DeepSeek ↕</option>
            </select>
          </div>

          <div class="agent-card">
            <div class="agent-avatar">🐹</div>
            <div class="agent-name">小爱</div>
            <div class="agent-model">qwen3.5-plus</div>
            <select class="agent-select">
              <option>Qwen3.5 ↕</option>
            </select>
          </div>

          <div class="agent-card">
            <div class="agent-avatar">🐱</div>
            <div class="agent-name">小 P</div>
            <div class="agent-model">claude-opus</div>
            <select class="agent-select">
              <option>Claude ↕</option>
            </select>
          </div>
        </div>
      </section>

      <!-- 文件浏览器入口 -->
      <section class="section">
        <h2 class="section-title">📁 文件浏览器</h2>
        <div class="file-browser-card">
          <div class="file-browser-placeholder">点击展开文件列表</div>
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
// 仪表盘页面 - 小静の龙虾池
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: linear-gradient(180deg, #F3E8FF 0%, #E9D5FF 100%);
  padding-bottom: 80px;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Noto Sans', sans-serif;
}

/* 头部区域 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  background: transparent;
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

.status-badge {
  background: #34C759;
  color: white;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* 内容区域 */
.content {
  padding: 0 1rem;
}

.section {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #7C3AED;
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
  border-radius: 20px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title {
  font-size: 0.75rem;
  color: #9CA3AF;
  margin-bottom: 0.5rem;
}

.card-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.card-runtime {
  background: linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%);
}

.card-runtime .card-value {
  color: #6D28D9;
}

.card-cpu {
  background: linear-gradient(135deg, #FBCFE8 0%, #F9A8D4 100%);
}

.card-cpu .card-value {
  color: #DB2777;
}

.card-memory {
  background: linear-gradient(135deg, #BFDBFE 0%, #93C5FD 100%);
}

.card-memory .card-value {
  color: #2563EB;
}

.card-disk {
  background: linear-gradient(135deg, #CCFBF1 0%, #A7F3D0 100%);
}

.card-disk .card-value {
  color: #059669;
}

/* 进度条 */
.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  margin-top: 0.75rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
}

.cpu-fill {
  background: linear-gradient(90deg, #F9A8D4 0%, #DB2777 100%);
}

.memory-fill {
  background: linear-gradient(90deg, #93C5FD 0%, #2563EB 100%);
}

.disk-fill {
  background: linear-gradient(90deg, #A7F3D0 0%, #059669 100%);
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
  padding: 0.875rem 1rem;
  border-radius: 16px;
  min-width: 140px;
}

.service-dot {
  width: 10px;
  height: 10px;
  background: #34C759;
  border-radius: 50%;
  flex-shrink: 0;
}

.service-info {
  display: flex;
  flex-direction: column;
}

.service-name {
  font-size: 0.75rem;
  color: #6B7280;
}

.service-status {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1F2937;
}

/* 快捷操作 */
.quick-actions {
  display: flex;
  gap: 0.75rem;
}

.action-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 1rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:active {
  background: rgba(255, 255, 255, 1);
  transform: scale(0.98);
}

.action-icon {
  font-size: 1.5rem;
}

.action-label {
  font-size: 0.75rem;
  color: #4B5563;
  font-weight: 500;
}

/* AGENT 管理 */
.agent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.agent-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.agent-avatar {
  font-size: 2.5rem;
}

.agent-name {
  font-size: 0.875rem;
  font-weight: 700;
  color: #1F2937;
}

.agent-model {
  font-size: 0.625rem;
  color: #9CA3AF;
}

.agent-select {
  width: 100%;
  background: rgba(243, 232, 255, 0.5);
  border: 1px solid #E9D5FF;
  padding: 0.375rem 0.5rem;
  border-radius: 8px;
  font-size: 0.625rem;
  color: #6B21A8;
  cursor: pointer;
}

/* 文件浏览器 */
.file-browser-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
}

.file-browser-placeholder {
  color: #9CA3AF;
  font-size: 0.875rem;
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
