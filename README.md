# 武业博学术主页

基于 [PRISM](https://github.com/xyjoey/PRISM) 定制的中英双语学术主页，使用 Next.js 15、TypeScript、Tailwind CSS 和 BibTeX。

## 已包含内容

- 中文 / English 双语切换
- 深色、浅色与跟随系统主题
- 个人简介、研究兴趣与 Google Scholar
- 教育背景、访问经历与研究实习
- 代表性论文、近期工作及合作论文
- 论文搜索、年份和类型筛选、论文链接与 BibTeX
- 荣誉奖励与学术服务
- 原始 PDF 简历下载
- 响应式桌面和移动端布局

## 本地运行

需要 Node.js 22 或更高版本。

```bash
pnpm install
pnpm dev
```

访问 `http://localhost:3000`。

## 构建与部署

```bash
pnpm build
```

构建完成后，`out/` 是可直接托管的静态站点，可部署到 GitHub Pages、Cloudflare Pages、Netlify 或任意静态服务器。

## 更新内容

- 基本资料与导航：`content/config.toml`、`content_zh/config.toml`
- 首页简介：`content/bio.md`、`content_zh/bio.md`
- 论文：`content/publications.bib`
- 经历：`content/experience.toml`、`content_zh/experience.toml`
- 荣誉与学术服务：`content/awards.toml`、`content/services.toml` 及对应中文文件
- 新闻：`content/news.toml`、`content_zh/news.toml`

## 替换头像

当前使用 `public/avatar.svg` 姓名缩写占位图。获得正式个人照片后：

1. 将照片放到 `public/profile.jpg`。
2. 把 `content/config.toml` 中的 `avatar = "/avatar.svg"` 改为 `avatar = "/profile.jpg"`。

## 来源

网站代码源自 PRISM 1.3.3，遵循仓库中的 MIT License。
