# 英语四六级管理系统

一个基于React和TypeScript的现代化考务管理系统，专为英语四六级考试设计。

## 🎯 项目特性

- ✅ **用户友好的界面** - 现代化设计，响应式布局
- ✅ **完整的考试流程** - 从信息核对到证书领取
- ✅ **图片上传功能** - 支持自定义照片上传和预览
- ✅ **数据持久化** - 本地存储用户信息
- ✅ **流程导航** - 清晰的步骤指示器
- ✅ **移动端适配** - 完美支持手机和平板设备

## 🛠️ 技术栈

- **前端框架**: React 19.2.3 + TypeScript
- **构建工具**: Vite 6.2.0
- **UI框架**: TailwindCSS
- **图标库**: FontAwesome 6.4.0
- **字体**: Google Fonts (Noto Sans SC)

## 📱 功能模块

### 1. 用户登录
- 安全登录界面
- 身份验证

### 2. 个人信息核对
- 核心学籍信息展示
- 自定义照片上传
- 信息确认/纠错流程

### 3. 考点选择
- 考点浏览
- 在线注册

### 4. 在线缴费
- 费用展示
- 支付流程

### 5. 准考证打印
- 准考证生成
- 考试信息展示

### 6. 成绩查询
- 成绩展示
- 证书打印

## 🚀 快速开始

### 开发环境

```bash
# 克隆项目
git clone <repository-url>
cd 0617

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📦 项目结构

```
0617/
├── src/
│   ├── components/         # 可复用组件
│   │   └── ImageUpload.tsx # 图片上传组件
│   ├── views/             # 页面组件
│   │   ├── Login.tsx
│   │   ├── PersonalInfo.tsx
│   │   ├── Registration.tsx
│   │   ├── Payment.tsx
│   │   ├── Ticket.tsx
│   │   ├── ExamPlaceholder.tsx
│   │   ├── ScoreView.tsx
│   │   ├── Certificate.tsx
│   │   └── InfoReview.tsx
│   ├── App.tsx           # 主应用组件
│   ├── index.tsx         # 应用入口
│   └── types.ts          # TypeScript类型定义
├── public/               # 静态资源
├── dist/                 # 构建输出
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Pages部署配置
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🌐 部署说明

### GitHub Pages (推荐)
项目已配置自动部署到GitHub Pages，每次推送到main/master分支会自动触发构建和部署。

### Vercel
1. 连接GitHub仓库
2. 自动检测Vite配置
3. 部署完成

### Netlify
1. 拖拽dist文件夹到Netlify，或
2. 连接GitHub仓库进行自动部署

## 🔧 开发说明

### 图片上传功能
- 支持拖拽上传
- 支持点击选择
- 支持多种图片格式
- 实时预览效果

### 数据存储
- 使用localStorage进行本地数据持久化
- 支持页面刷新后数据恢复
- 自动保存用户操作状态

### 响应式设计
- 移动端优先设计理念
- 完美适配各种屏幕尺寸
- 流畅的动画过渡效果

## 📋 浏览器兼容性

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移动端浏览器

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目仅供学习和演示使用。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 提交 Issue
- 发起 Pull Request

---

⭐ 如果这个项目对你有帮助，请给个Star支持一下！