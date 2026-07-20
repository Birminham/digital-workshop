# 🚀 明天部署+上架操作指南

> 一次性读完，照做即可。预计耗时：30-40分钟。

---

## Step 1: Vercel 登录 (2分钟)

打开终端，任选一行：
```bash
npx vercel login
```

浏览器会弹出 OAuth 页面 → 用 GitHub/Email 登录 Vercel。

---

## Step 2: 部署 4 个项目 (10分钟)

**注意顺序**：先部署3个工具，最后部署Product Hub（因为Hub链接需要前3个的URL）。

```bash
# 工具1: 截图美化器
cd D:\ClaudeCode\screenshot-beautifier
npx vercel --prod
# → 记下 URL，如 https://screenshot-beautifier-xxx.vercel.app

# 工具2: 图片压缩器
cd D:\ClaudeCode\image-crush
npx vercel --prod
# → 记下 URL

# 工具3: PDF Magic
cd D:\ClaudeCode\pdf-magic
npx vercel --prod
# → 记下 URL

# 入口: Product Hub
cd D:\ClaudeCode\product-hub
npx vercel --prod
# → 记下 URL
```

每次 `vercel --prod` 会问几个问题：
- `Set up and deploy?` → Y
- `Which scope?` → 选你的账户
- `Link to existing project?` → N (首次)
- `Project name?` → 直接回车用默认
- `In which directory?` → 直接回车 (已在项目目录)
- `Override settings?` → N

---

## Step 3: 更新 Product Hub 链接 (5分钟)

部署完拿到4个URL后，编辑 `D:\ClaudeCode\product-hub\src\App.jsx`：

```js
// 第11行左右，找到 TOOLS 数组，替换3个 url: '#' 为真实URL：
{ id: 'screenshot-beautifier', ..., url: 'https://截图美化器真实URL' },
{ id: 'image-crush', ..., url: 'https://图片压缩器真实URL' },
{ id: 'pdf-magic', ..., url: 'https://PDF-Magic真实URL' },
```

然后重新构建+部署：
```bash
cd D:\ClaudeCode\product-hub
npm run build
npx vercel --prod
```

---

## Step 4: Gumroad 上架 (15分钟)

1. 登录 [gumroad.com](https://gumroad.com)
2. Products → New product
3. 对每个工具，参考 `D:\ClaudeCode\product-hub\landing-pages\gumroad-listing-final.md`
4. 粘贴标题/描述/标签，上传封面图 (`cover-*.png`)
5. 价格设 $0 (Pay what you want)
6. 发布

**上架顺序建议**: Screenshot Beautifier → Image Crush → PDF Magic

---

## 参考文件速查

| 需要什么 | 文件路径 |
|----------|---------|
| Gumroad完整文案 | `product-hub/landing-pages/gumroad-listing-final.md` |
| 封面图 | `product-hub/landing-pages/cover-*.png` (4张) |
| ProductHunt发布计划 | `product-hub/landing-pages/producthunt-launch-plan.md` |
| 各工具英文落地页 | `product-hub/landing-pages/screenshot-beautifier.md` 等 |
| 数字商品库存 | `D:\ClaudeCode\ai-digital-shop\products\` |

---

## 当前状态速查

| 项目 | dist | vercel.json | OG标签 | .gitignore |
|------|------|-------------|--------|------------|
| screenshot-beautifier | ✅ | ✅ | ✅ | ✅ |
| image-crush | ✅ | ✅ | ✅ | ✅ |
| pdf-magic | ✅ | ✅ | ✅ | ✅ |
| product-hub | ✅ | ✅ | ✅ | ✅ |

**所有审查发现的问题已修复，4项目重新构建验证通过，0错误。**
