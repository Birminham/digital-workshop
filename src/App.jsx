import React from 'react';

const TOOLS = [
  {
    id: 'screenshot-beautifier',
    icon: '✨',
    title: '截图美化器',
    subtitle: 'Screenshot Beautifier',
    desc: '拖拽上传截图，一键加设备框（iPhone/Mac/浏览器）、渐变背景、投影、水印，导出高清PNG。',
    tags: ['免费', '无需注册'],
    url: '#',
  },
  {
    id: 'image-crush',
    icon: '🗜️',
    title: '图片压缩器',
    subtitle: 'Image Crush',
    desc: '批量压缩图片，支持JPEG/PNG/WebP/AVIF，实时前后对比，打包ZIP下载。所有处理在浏览器完成。',
    tags: ['免费', '无限次数'],
    url: '#',
  },
  {
    id: 'pdf-magic',
    icon: '📄',
    title: 'PDF魔法助手',
    subtitle: 'PDF Magic',
    desc: 'PDF合并、拆分、压缩、格式转换，透明化处理，保留文本可搜索。批量处理，一键导出。',
    tags: ['免费', '隐私安全'],
    url: '#',
  },
];

const PRODUCTS = {
  ppt: {
    icon: '📊',
    title: 'PPT模板',
    count: 9,
    desc: '精美商务演示模板，覆盖年终总结、教育培训、商业路演、医疗健康、房地产、餐饮、科技创业、金融财务、法律咨询等9大场景。每套8页，专业设计，全可编辑。',
    items: ['年终工作总结', '新员工培训', '商业计划书', '健康管理报告', '房地产推介', '餐饮品牌介绍', '科技创业路演', '金融财务报告', '法律咨询服务'],
    price: '¥9.9-24.9 · 套装¥49.9',
  },
  resume: {
    icon: '📋',
    title: '简历模板',
    count: 8,
    desc: 'A4印刷级HTML简历，覆盖互联网IT、应届生、外企双语、金融会计、医疗护理、创意设计、销售市场、工程研发等8大岗位方向。',
    items: ['互联网IT', '应届生通用', '外企双语', '金融会计', '医疗护理', '创意设计', '销售市场', '工程研发'],
    price: '¥12.9 · 套装¥29.9',
  },
  cover: {
    icon: '🎨',
    title: '封面模板',
    count: 11,
    desc: '小红书/公众号/B站/抖音多平台封面设计，精准尺寸适配，吸睛风格。涵盖穿搭、美食、知识、职场、美妆、旅行、科技、测评、教程、生活记录等。',
    items: ['小红书×6', '公众号×2', 'B站×2', '抖音×1'],
    price: '¥6.9 · 套装¥19.9',
  },
  sticker: {
    icon: '😎',
    title: '贴纸表情包',
    count: 4,
    desc: '打工人吐槽 × 程序员日常两大系列，含透明背景版，微信表情平台兼容。',
    items: ['打工人吐槽', '透明背景版', '程序员吐槽', '程序员透明版'],
    price: '¥3.9 · 套装¥9.9',
  },
};

const STATS = [
  { n: '32', label: '数字商品' },
  { n: '4', label: '在线工具' },
  { n: '80+', label: '预览截图' },
  { n: '0', label: '边际成本' },
];

export default function App() {
  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">AI-Powered · 2026</div>
          <h1 className="hero-title">
            <span className="gradient-text">数字工坊</span>
          </h1>
          <p className="hero-sub">Digital Workshop</p>
          <p className="hero-desc">
            AI驱动的数字商品创作与免费在线工具集。<br />
            浏览器即用，无需下载，隐私安全。
          </p>
          <div className="hero-stats">
            {STATS.map(s => (
              <div key={s.label} className="stat">
                <span className="stat-n">{s.n}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Tools Section */}
      <section className="section" id="tools">
        <div className="section-header">
          <h2>🛠️ 免费在线工具</h2>
          <p>无需注册 · 浏览器端处理 · 不传输到服务器</p>
        </div>
        <div className="tool-grid">
          {TOOLS.map(t => (
            <a key={t.id} href={t.url} className="tool-card">
              <div className="tool-icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <span className="tool-sub">{t.subtitle}</span>
              <p>{t.desc}</p>
              <div className="tool-tags">
                {t.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Digital Products Section */}
      <section className="section section-alt" id="products">
        <div className="section-header">
          <h2>📦 数字商品</h2>
          <p>A4级印刷 · 全可编辑 · 商用授权 · Etsy/Gumroad/闲鱼 可上架</p>
        </div>
        <div className="product-grid">
          {Object.entries(PRODUCTS).map(([key, p]) => (
            <div key={key} className="product-card">
              <div className="pc-header">
                <span className="pc-icon">{p.icon}</span>
                <div>
                  <h3>{p.title}</h3>
                  <span className="pc-count">{p.count}套 · {p.price}</span>
                </div>
              </div>
              <p className="pc-desc">{p.desc}</p>
              <div className="pc-items">
                {p.items.map(it => (
                  <span key={it} className="pc-item">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <h2>🚀 全部AI生成，边际成本为零</h2>
        <p>所有数字商品用Claude + pptxgenjs + Puppeteer批量生成。<br />三个在线工具纯React前端，Canvas API驱动，零服务器成本。</p>
        <div className="cta-buttons">
          <a href="#tools" className="cta-btn primary">尝试在线工具</a>
          <a href="#products" className="cta-btn secondary">浏览数字商品</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>数字工坊 · AI-Powered Digital Workshop</p>
        <p className="footer-sub">Made with Claude · 2026</p>
      </footer>
    </div>
  );
}
