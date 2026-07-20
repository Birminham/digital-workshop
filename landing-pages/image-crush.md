# Image Crush 🗜️

**Batch compress images in your browser. No upload, no limits, instant preview.**

---

## One-Liner

Drop multiple images, pick a format, slide to compress. See the difference in real-time — all in your browser.

---

## Product Description

Image Crush is the fastest batch image compressor that never sends your files anywhere. Built entirely on the Canvas API, it converts between JPEG, PNG, WebP, and AVIF with real-time before/after comparison. Perfect for web developers, content creators, and anyone who needs smaller images fast.

Why upload to sketchy compression sites when your browser can do it better, safer, and offline?

---

## Key Features

### 📦 Batch Upload
- Drag and drop as many images as you want
- Supports PNG, JPEG, WebP, AVIF, BMP, SVG
- Instant preview thumbnails

### ⚡ 4 Output Formats
- **JPEG** — Universal compatibility, smallest files
- **PNG** — Lossless, preserves transparency
- **WebP** — Next-gen: smaller than JPEG + PNG combined
- **AVIF** — Cutting-edge: best compression ratio available

### 🎚️ Fine Control
- **Quality slider** — 10% to 100%, see file size update live
- **Scale slider** — Resize images by percentage (10%–100%)
- **Max width** — Cap output dimensions in pixels

### 🔍 Before/After Compare
- Side-by-side slider comparison
- Drag to reveal original vs compressed
- See exact size savings per image
- Visual quality difference is nearly invisible

### 📥 Export
- Download individual compressed images
- **ZIP batch download** — all images in one click
- Summary stats: total original size, compressed size, savings %

---

## Real Performance (Tested)

| Image | Original | JPEG 80% | Savings |
|-------|----------|----------|---------|
| WeChat cover · Tech | 555 KB (PNG) | 69 KB | **-88%** |
| WeChat cover · Career | 495 KB (PNG) | 67 KB | **-86%** |
| Bilibili thumbnail | 421 KB (PNG) | 96 KB | **-77%** |

3 images: 1.44 MB → 232 KB. **84% smaller with zero visible quality loss.**

---

## Who Is This For?

- **Web developers** — Crush assets before deploying, hit Core Web Vitals
- **Bloggers** — Compress featured images without opening Photoshop
- **E-commerce sellers** — Shrink product photos for faster page loads
- **Designers** — Batch-export previews in different formats
- **Anyone emailing photos** — Trim attachments before sending

---

## How It Works

```
1. Drop your images (or click to browse)
2. Pick output format (JPEG/PNG/WebP/AVIF)
3. Adjust quality and scale
4. Click "Compress"
5. Review before/after with the comparison slider
6. Download individually or as ZIP
```

4 images processed in parallel. Hundreds of images? Queue handles it.

---

## Privacy & Security

| Feature | Detail |
|---------|--------|
| Server uploads | **Zero.** Nothing leaves your browser |
| Processing | Canvas API (Web API, no dependencies) |
| Analytics | None. No tracking, no cookies |
| Works offline | Yes. Static site, no network needed after load |
| Open source | View source in browser dev tools |

---

## Tech Specs

| Spec | Detail |
|------|--------|
| Engine | Browser Canvas API (toBlob) |
| Parallelism | 4 concurrent workers |
| Formats | JPEG, PNG, WebP, AVIF |
| ZIP library | JSZip (included, no CDN) |
| Source | React + Vite SPA |
| Size | ~81 KB (gzipped) |

---

## Pricing

**Free. Forever.** No limits on images or compressions. No watermark. No "pro" upsell.

---

## FAQ

**Q: Where do my images go?**
A: Nowhere. They stay in your browser. This is not a "free tool that sells your data" — it's genuinely local.

**Q: Why does AVIF show as unsupported in my browser?**
A: AVIF encoding requires Chrome 85+ or Firefox 93+. If unsupported, the button shows "Not Supported."

**Q: Can I compress 100 images at once?**
A: Yes. They queue automatically and process 4 at a time.

**Q: What about transparency?**
A: PNG preserves alpha channel. JPEG and WebP (with quality < 100) do not. Choose PNG for transparent images.

---

## Launch Info

- **ProductHunt**: Coming soon
- **Gumroad**: Pay-what-you-want ($0+)
- **Live demo**: (deploy URL here)

---

## Tags

`#image-compressor` `#web-dev` `#batch-compress` `#webp` `#avif` `#indie-hacker` `#free-tool` `#no-upload` `#privacy-first`

---

*Made with Claude. 100% free. No ads. No tracking. No server.*
