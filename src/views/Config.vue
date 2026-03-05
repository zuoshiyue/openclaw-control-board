<template>
  <div class="config">
    <header class="header glass">
      <h1>⚙️ 配置编辑</h1>
      <div class="controls">
        <button class="btn btn-secondary">重置</button>
        <button class="btn btn-primary">保存</button>
      </div>
    </header>

    <main class="content">
      <div class="config-grid">
        <!-- Gateway 配置 -->
        <section class="config-section glass">
          <h2>🤖 Gateway 配置</h2>
          <div class="form-group">
            <label>Gateway 端口</label>
            <input type="number" value="8080" class="input" />
          </div>
          <div class="form-group">
            <label>WebSocket 端口</label>
            <input type="number" value="8081" class="input" />
          </div>
          <div class="form-group">
            <label>日志级别</label>
            <select class="select">
              <option>debug</option>
              <option selected>info</option>
              <option>warning</option>
              <option>error</option>
            </select>
          </div>
        </section>

        <!-- 飞书配置 -->
        <section class="config-section glass">
          <h2>📬 飞书配置</h2>
          <div class="form-group">
            <label>App ID</label>
            <input type="text" value="cli_a3b4c5d6e7f8g9h0" class="input" />
          </div>
          <div class="form-group">
            <label>App Secret</label>
            <input type="password" value="****************" class="input" />
          </div>
          <div class="form-group">
            <label>Verification Token</label>
            <input type="text" value="v1234567890abcdef" class="input" />
          </div>
        </section>

        <!-- 模型配置 -->
        <section class="config-section glass">
          <h2>🧠 模型配置</h2>
          <div class="form-group">
            <label>默认模型</label>
            <select class="select">
              <option selected>qwen3.5-plus</option>
              <option>qwen3-max</option>
              <option>glm-4.7</option>
              <option>gpt-4o</option>
            </select>
          </div>
          <div class="form-group">
            <label>上下文窗口</label>
            <input type="text" value="200000" class="input" />
          </div>
          <div class="form-group">
            <label>Token 预算 (每日)</label>
            <input type="text" value="100" class="input" />
          </div>
        </section>

        <!-- 记忆配置 -->
        <section class="config-section glass">
          <h2>💾 记忆配置</h2>
          <div class="form-group">
            <label>记忆数据库</label>
            <input type="text" value="~/.openclaw/memory/main.sqlite" class="input" disabled />
          </div>
          <div class="form-group">
            <label>向量搜索权重</label>
            <input type="range" min="0" max="100" value="70" class="range" />
            <span class="range-value">70%</span>
          </div>
          <div class="form-group">
            <label>BM25 搜索权重</label>
            <input type="range" min="0" max="100" value="30" class="range" />
            <span class="range-value">30%</span>
          </div>
        </section>

        <!-- 定时任务配置 -->
        <section class="config-section glass">
          <h2>⏰ 定时任务</h2>
          <div class="task-list">
            <div class="task-item">
              <span class="task-name">早班推送</span>
              <input type="time" value="08:00" class="time-input" />
              <span class="task-status success">启用</span>
            </div>
            <div class="task-item">
              <span class="task-name">基金分析</span>
              <input type="time" value="09:10" class="time-input" />
              <span class="task-status success">启用</span>
            </div>
            <div class="task-item">
              <span class="task-name">成本检查</span>
              <input type="time" value="09:20" class="time-input" />
              <span class="task-status success">启用</span>
            </div>
            <div class="task-item">
              <span class="task-name">配置备份</span>
              <input type="time" value="03:00" class="time-input" />
              <span class="task-status success">启用</span>
            </div>
            <div class="task-item">
              <span class="task-name">每日进化报告</span>
              <input type="time" value="23:00" class="time-input" />
              <span class="task-status success">启用</span>
            </div>
          </div>
        </section>

        <!-- 高级配置 -->
        <section class="config-section glass">
          <h2>🔧 高级配置</h2>
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" checked />
              <span>启用向量索引</span>
            </label>
          </div>
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" checked />
              <span>启用子 Agent 模式</span>
            </label>
          </div>
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" />
              <span>调试模式</span>
            </label>
          </div>
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" checked />
              <span>自动备份配置</span>
            </label>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
// 配置编辑页面
</script>

<style scoped>
.config {
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

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

.content {
  flex: 1;
  padding: 2rem;
}

.config-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.config-section {
  padding: 1.5rem;
  border-radius: 12px;
}

.config-section h2 {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.input,
.select {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.input:focus,
.select:focus {
  outline: none;
  border-color: var(--accent);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.range {
  width: 100%;
  margin-top: 0.5rem;
}

.range-value {
  display: block;
  text-align: right;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
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
  cursor: pointer;
}

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
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.task-name {
  flex: 1;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.time-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.5rem;
  color: var(--text-primary);
  font-size: 0.85rem;
}

.task-status {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

.task-status.success {
  background: rgba(34, 197, 94, 0.2);
  color: var(--success);
}
</style>
