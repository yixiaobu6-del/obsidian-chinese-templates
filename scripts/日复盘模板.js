<%*
// 自动创建每日日记 - 每天执行
const title = tp.date.now("YYYY-MM-DD_dddd");
const date = tp.date.now("YYYY-MM-DD");
const weekNum = tp.date.now("WW");
await tp.file.rename(title);

// 获取天气（可选，需要配合 Templater 的 tp.system）
const weather = await tp.system.prompt("今日天气（可选，直接回车跳过）", "");
-%>
---
创建时间: <% date %>
星期: <% tp.date.now("dddd") %>
天气: <% weather ? weather : "未记录" %>
标签: #type/日记 #status/初稿
---

# <% tp.date.now("YYYY年MM月DD日 dddd") %>

## 今日重点

- [ ] **最重要的一件事：**
- [ ] **第二重要的事：**
- [ ] **第三重要的事：**

## 时间线

| 时间 | 事项 | 备注 |
|------|------|------|
| 09:00 | | |
| 10:00 | | |
| 11:00 | | |
| 12:00 | | |
| 14:00 | | |
| 15:00 | | |
| 16:00 | | |
| 17:00 | | |
| 20:00 | | |

## 今日收获

### 工作/学习

*

### 生活/感悟

*

## 感恩三件事

1.
2.
3.

## 今日金句

> *

## 明天计划

- [ ]

## 习惯打卡

- [ ] 早起（8:00前）
- [ ] 阅读 30 分钟
- [ ] 运动 30 分钟
- [ ] 复盘
