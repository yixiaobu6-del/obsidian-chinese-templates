# Obsidian 中文模板库

面向中文用户的 Obsidian 模板集合，包含日记、读书笔记、项目管理、写作、会议记录等常用模板，以及配套的 CSS 样式和 Templater 脚本。

## 目录结构

```
Obsidian中文模板库/
├── README.md
├── templates/            # 笔记模板
│   ├── 日记模板.md
│   ├── 读书笔记模板.md
│   ├── 项目管理模板.md
│   ├── 写作模板.md
│   └── 会议记录模板.md
├── scripts/              # Templater 脚本
│   └── 周复盘模板.js
└── css/                  # 美化 CSS 片段
    ├── 中文美化.css
    └── 卡片视图.css
```

## 模板列表

| 模板 | 说明 | 依赖 |
|------|------|------|
| [日记模板](./templates/日记模板.md) | 每日记录、时间线、任务追踪 | Templater |
| [读书笔记模板](./templates/读书笔记模板.md) | 书籍阅读记录、核心观点、行动清单 | Templater |
| [项目管理模板](./templates/项目管理模板.md) | 项目全生命周期管理 | Templater |
| [写作模板](./templates/写作模板.md) | 文章/文案创作框架 | Templater |
| [会议记录模板](./templates/会议记录模板.md) | 会议纪要、行动项跟踪 | Templater |

## 安装方法

### 1. 模板安装

将 `templates/` 目录复制到 Obsidian 库的模板文件夹：

```bash
cp -r templates/* /path/to/your/vault/_templates/
```

### 2. Templater 脚本安装

将 `scripts/` 目录复制到 Templater 的脚本文件夹：

```bash
cp -r scripts/* /path/to/your/vault/_scripts/
```

然后在 Obsidian 的 Templater 插件设置中：
1. 设置 **Script files folder location** 为 `_scripts`
2. 设置 **Template folder location** 为 `_templates`

### 3. CSS 美化

将 `css/` 目录下的 `.css` 文件复制到 Obsidian 的样式片段目录：

```bash
cp -r css/* /path/to/your/vault/.obsidian/snippets/
```

然后在 Obsidian 设置中：
1. 设置 → 外观 → CSS 片段
2. 点击文件夹图标打开 snippets 目录
3. 刷新列表
4. 启用对应的 CSS 片段

## 使用方法

### 日记模板

使用 Templater 创建每日日记：

```
Alt + N → 选择 "日记模板" → 自动生成当日日记
```

或通过快捷键绑定：

1. 设置 → 快捷键
2. 搜索 `Templater: Insert Template`
3. 绑定快捷键（如 `Cmd+D`）

### 读书笔记模板

```
Alt + N → 选择 "读书笔记模板" → 输入书名和作者
```

### 项目管理模板

```
Alt + N → 选择 "项目管理模板" → 输入项目名称和类型
```

### 写作模板

```
Alt + N → 选择 "写作模板" → 输入文章标题和类型
```

### 会议记录模板

```
Alt + N → 选择 "会议记录模板" → 输入会议主题和参会人员
```

## 模板预览

### 日记模板

```
---
创建时间: 09:00
标签: #type/日记
---

# 2025-01-01 星期二

## 今日重点
- [ ] 最重要的三件事：
  1. 完成项目报告
  2. 阅读《思考快与慢》
  3. 运动30分钟
...
```

### 读书笔记模板

```
---
书名: 思考快与慢
作者: 丹尼尔·卡尼曼
标签: #type/读书笔记
---

# 《思考快与慢》读书笔记
...
```

## 自定义模板

所有模板使用 Templater 语法，可以根据需求修改：

```markdown
<% tp.date.now("YYYY-MM-DD") %>     → 当前日期
<% tp.system.prompt("输入内容") %>   → 交互式输入
<% tp.file.rename("文件名") %>       → 自动重命名文件
```

更多 Templater 语法参考：[Templater 官方文档](https://silentvoid13.github.io/Templater/)

## CSS 片段说明

### 中文美化.css

- 中文字体优化（Noto Sans SC、微软雅黑、苹方）
- 行高和字间距调整
- 标题样式（底部边框、左侧竖线）
- 引用块美化（圆角背景）
- 表格样式（首行着色、斑马纹）
- 标签样式（药丸形状）
- 代码块样式

### 卡片视图.css

- 卡片网格布局
- 卡片悬停动画
- 时间轴样式
- 进度条
- 标签云
- 统计面板

## 依赖插件

| 插件 | 用途 | 安装方法 |
|------|------|----------|
| [Templater](https://github.com/SilentVoid13/Templater) | 高级模板引擎 | Obsidian 社区插件 |
| [Dataview](https://github.com/blacksmithgu/obsidian-dataview) | 数据查询（可选） | Obsidian 社区插件 |

## 许可证

MIT License