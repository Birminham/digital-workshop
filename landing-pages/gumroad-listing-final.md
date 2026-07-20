# Gumroad 上架清单 — 数字工坊 Micro-SaaS 工具

## 上架前准备

### 1. 部署URL（Vercel部署后填入）

| 工具 | 英文名 | Vercel URL | 状态 |
|------|--------|-----------|------|
| 截图美化器 | Screenshot Beautifier | 待部署 | dist就绪, 审查修复完成 |
| 图片压缩器 | Image Crush | 待部署 | dist就绪, 审查修复完成 |
| PDF魔法助手 | PDF Magic | 待部署 | dist就绪, 审查修复完成 |

### 2. 定价策略

**工具**: Pay what you want ($0 minimum) — 目标收集邮箱+GitHub star
**数字商品**: 新定价体系（Gumroad工具页底部链接到数字商品）

| 品类 | 单价 | 套装价 |
|------|------|--------|
| PPT模板 | $1.5-3.5 | $7/9套 |
| 简历模板 | $1.8 | $4/8套 |
| 封面模板 | $1 | $3/11套 |
| 表情贴纸 | $0.5 | $1.5/4套 |
| **全包** | — | **$12.5** (32款) |

> 💡 工具免费 → 邮件收集 → 数字商品变现 → 三级漏斗

---

## Listing 1: Screenshot Beautifier

**Product name:** Screenshot Beautifier
**Tagline:** Turn Raw Screenshots into Stunning Marketing Assets
**Price:** $0 (Pay what you want)
**Categories:** Design / Marketing / Productivity
**Tags:** screenshot mockup, device frame, marketing tool, social media

**Cover image:** ✅ `cover-screenshot-beautifier.png`

**Description:**

✨ Turn any raw screenshot into a polished marketing asset in 30 seconds.

Drag in your screenshot → pick an iPhone, Mac, or Chrome frame → add a gradient background → export at 3× resolution. All in your browser. Nothing uploads anywhere.

**Key features:**
- 🖼️ 5 device frames: iPhone 15 Pro, Mac Safari, Chrome Browser, Shadow Card, No Frame
- 🎨 8 gradient backgrounds + custom colors
- 💧 Watermark support (text, 4 positions, adjustable opacity)
- 🔲 Border radius + shadow intensity controls
- 📱 1× / 2× / 3× export resolution
- 🔒 100% private — no uploads, no signup

**Who is this for:**
- Indie hackers launching on Product Hunt
- Marketers creating testimonial cards
- Developers writing documentation
- Social media managers

---

## Listing 2: Image Crush

**Product name:** Image Crush
**Tagline:** Batch Image Compressor — Zero Uploads, Maximum Privacy
**Price:** $0 (Pay what you want)
**Categories:** Developer Tools / Design / Productivity
**Tags:** image compression, webp converter, batch compress, web performance

**Cover image:** ✅ `cover-image-crush.png`

**Description:**

🗜️ Compress 100 images at once without uploading a single byte.

Pick JPEG/PNG/WebP/AVIF. Slide to adjust quality. Watch file sizes drop in real-time. Drag the comparison slider to verify: compressed vs original, indistinguishable quality, 80%+ smaller.

**Key features:**
- 📦 Batch compression (drag multiple files)
- 🎯 4 output formats: JPEG, PNG, WebP, AVIF
- 📊 Real-time before/after comparison slider
- 📏 Resize options: scale percentage + max width
- 📥 ZIP download all compressed files at once
- 🔒 100% private — browser Canvas API, no server

**Who is this for:**
- Web developers optimizing Core Web Vitals
- Bloggers with heavy featured images
- Designers sharing mockups
- Anyone tired of sketchy "free compressor" sites

---

## Listing 3: PDF Magic

**Product name:** PDF Magic
**Tagline:** Merge, Split, Compress & Convert PDFs — 100% Private
**Price:** $0 (Pay what you want)
**Categories:** Business / Productivity / Developer Tools
**Tags:** pdf merger, pdf compressor, pdf converter, privacy tool

**Cover image:** ✅ `cover-pdf-magic.png`

**Description:**

📄 The PDF toolkit that never sees your files.

Merge contracts. Split scanned documents. Compress bloated PDFs. Convert to images. All powered by pdf.js + pdf-lib running in your browser — your sensitive files never touch a server.

**Key features:**
- ➕ Merge multiple PDFs into one
- ✂️ Split by page ranges (e.g. 1-5, 8, 10-12) or every page
- 🗜️ Compress PDFs (structural optimization, object-stream dedup)
- 🖼️ Convert pages to PNG/JPEG at up to 4× resolution
- 📥 ZIP download for multi-page output
- 🔒 100% private — all processing browser-side

**Who is this for:**
- Professionals handling confidential documents
- Students preparing theses
- Remote workers merging scanned documents
- Anyone who values privacy

---

## 上架操作步骤

### Step 1: 封面图 ✅ 已完成

4张封面图在 `product-hub/landing-pages/`:
- `cover-screenshot-beautifier.png`
- `cover-image-crush.png`
- `cover-pdf-magic.png`
- `cover-product-hub.png`

### Step 2: 登录 Gumroad

1. 访问 https://gumroad.com
2. 登录 → Products → New product

### Step 3: 逐个上架 (按顺序)

**先上 Screenshot Beautifier** (最视觉、最吸睛)

1. 粘贴 Title + Description (上面3个listing)
2. 上传封面图
3. 设置 Price: $0+
4. 添加 Categories + Tags
5. Published URL填入下方表格

### Step 4: 发布后

- 获取每个产品的 Gumroad link → 填入下方

| 工具 | Gumroad URL |
|------|-------------|
| Screenshot Beautifier | |
| Image Crush | |
| PDF Magic | |

- 更新 Product Hub 的 TOOLS url 字段
- 按 producthunt-launch-plan.md 发布

---

## 参考文件

| 文件 | 用途 |
|------|------|
| `cover-*.png` (4张) | Gumroad封面图 |
| `screenshot-beautifier.md` | SB英文落地页 |
| `image-crush.md` | IC英文落地页 |
| `pdf-magic.md` | PM英文落地页（已修正功能列表） |
| `producthunt-launch-plan.md` | PH发布计划 |
| `../DEPLOY-GUIDE.md` | 明天部署+上架完整操作指南 |
