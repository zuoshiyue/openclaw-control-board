<template>
  <div class="dashboard">
    <header class="header glass">
      <h1>🎭 OpenClaw 控制面板</h1>
      <div class="status">
        <span class="status-dot" style="background: #22c55e;"></span>
        <span>Gateway 运行中</span>
      </div>
    </header>

    <main class="content">
      <!-- 系统状态卡片 -->
      <section class="section">
        <h2>📊 系统状态</h2>
        <div class="cards">
          <div class="card glass">
            <div class="card-icon">🤖</div>
            <div class="card-content">
              <h3>Agent 状态</h3>
              <p class="value success">运行中</p>
              <p class="label">模型：qwen3.5-plus</p>
            </div>
          </div>

          <div class="card glass">
            <div class="card-icon">📬</div>
            <div class="card-content">
              <h3>飞书通道</h3>
              <p class="value success">正常</p>
              <p class="label">6 账号配置</p>
            </div>
          </div>

          <div class="card glass">
            <div class="card-icon">💾</div>
            <div class="card-content">
              <h3>记忆系统</h3>
              <p class="value success">正常</p>
              <p class="label">SQLite + 向量索引</p>
            </div>
          </div>

          <div class="card glass">
            <div class="card-icon">⏰</div>
            <div class="card-content">
              <h3>定时任务</h3>
              <p class="value warning">6 个任务</p>
              <p class="label">下次：08:00</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Token 统计 -->
      <section class="section">
        <h2>💰 Token 消耗 (今日)</h2>
        <div class="cards">
          <div class="card glass">
            <div class="card-content">
              <h3>输入 Token</h3>
              <p class="value">45,230</p>
            </div>
          </div>

          <div class="card glass">
            <div class="card-content">
              <h3>输出 Token</h3>
              <p class="value">12,450</p>
            </div>
          </div>

          <div class="card glass">
            <div class="card-content">
              <h3>总消耗</h3>
              <p class="value warning">¥2.34</p>
            </div>
          </div>

          <div class="card glass">
            <div class="card-content">
              <h3>预算剩余</h3>
              <p class="value success">¥97.66</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 最近会话 -->
      <section class="section">
        <h2>💬 最近会话</h2>
        <div class="table-container glass">
          <table class="table">
            <thead>
              <tr>
                <th>会话 ID</th>
                <th>类型</th>
                <th>模型</th>
                <th>Token</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_001</td>
                <td>基金分析</td>
                <td>qwen3.5-plus</td>
                <td>8,230</td>
                <td><span class="badge success">完成</span></td>
              </tr>
              <tr>
                <td>session_002</td>
                <td>看板开发</td>
                <td>qwen3.5-plus</td>
                <td>12,450</td>
                <td><span class="badge warning">进行中</span></td>
              </tr>
              <tr>
                <td>session_003</td>
                <td>早班推送</td>
                <td>glm-4.7</td>
                <td>3,200</td>
                <td><span class="badge success">完成</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// 仪表盘页面
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: var(--bg-primary);
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

.status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

.content {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.section h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
}

.card-icon {
  font-size: 2.5rem;
}

.card-content h3 {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.card-content .value {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.card-content .value.success {
  color: var(--success);
}

.card-content .value.warning {
  color: var(--warning);
}

.card-content .label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

.table-container {
  border-radius: 12px;
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.table th {
  background: rgba(255, 255, 255, 0.05);
  font-weight: 500;
  color: var(--text-secondary);
}

.table td {
  color: var(--text-primary);
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge.success {
  background: rgba(34, 197, 94, 0.2);
  color: var(--success);
}

.badge.warning {
  background: rgba(245, 158, 11, 0.2);
  color: var(--warning);
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
