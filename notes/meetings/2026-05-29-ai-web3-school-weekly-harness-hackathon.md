# AI x Web3 School Weekly Meeting - Harness Engineering, Note Review, and Hackathon Preview - 2026-05-29

## Metadata / 元信息

- Date / 日期: 2026-05-29
- Title / 标题: Harness engineering 实操分享、优秀笔记点评、黑客松活动预告与答疑
- Source / 来源: learner-provided full meeting record / 学习者提供的完整会议记录
- Format / 形式: weekly online meeting / 每周线上例会
- Duration / 时长: about 39 minutes / 约 39 分钟
- Participants / 参会角色: Speaker A, Speaker B, Speaker C, Speaker D, Speaker E, other students and organizers / 说话人 A、B、C、D、E 等学员与组织者
- Type / 类型: meeting note / 会议纪要
- Topics / 主题: Harness engineering, agent tools, note review, leaderboard, hackathon preview, team formation, Cobo Agentic Wallet, ZAI Web coding / Harness engineering、Agent 工具、优秀笔记点评、排行榜、黑客松预告、组队、Cobo Agentic Wallet、ZAI Web coding
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/meetings/2026-05-29-ai-web3-school-weekly-harness-hackathon.md`

## Important Caveat / 重要说明

这是一份基于学习者提供完整会议记录整理的 AI x Web3 School 例会笔记，不是逐字稿，也不是对任何项目、工具、赛道、奖金、排行榜、个人表现或黑客松结果的正式确认。会议中出现的日期、赛道、奖金、工具名和活动安排以正式公告为准。

本笔记中人物均匿名化为 speaker，优秀笔记示例中的人名也尽量泛化处理；公开笔记不记录私人身份、私人联系方式、群聊原文或无关细节。

This note summarizes learner-provided meeting notes. It is not a verbatim transcript or official announcement. Hackathon tracks, rules, awards, API details, dates, and tooling details should be checked against official announcements before action.

## Executive Summary / 摘要

本次例会主要包括四部分：

1. Speaker A 分享 Harness engineering 实操：从 agent loop、工具扩展到 sandbox / bash / file operation 的调试过程。
2. Speaker B 说明后续两周活动安排，包括黑客松、3 人以内组队分享会、优秀笔记与排行榜观察。
3. 黑客松预告：暂定两个赛道，分别是 Cobo Agentic Wallet / agent economic 和 ZAI Web coding；最终规则计划 6 月 1 日公布。
4. Q&A：围绕赛道要求、非赛道项目是否可展示、API 额度、提交时间和组队方式答疑。

我的核心收获是：这次例会把“学习记录”和“项目实践”连接起来了。优秀笔记不是为了刷榜，而是帮助自己提出真问题、拆解问题地图、收敛 Hackathon idea；Harness engineering 则提醒我，Agent 能力不是一句 prompt，而是工具、环境、权限、错误修复和 sandbox 边界共同组成的工程系统。

English companion:

The weekly meeting covered a Harness engineering demo, note-review feedback, leaderboard observations, hackathon preview, and Q&A. My strongest takeaway is that strong notes help turn vague interests into buildable ideas, while agent engineering depends on tools, execution environment, error recovery, and permission boundaries.

## 1. Speaker A: Harness Engineering Practice Sharing

### Core Concept / 核心概念

Speaker A 分享了 Harness engineering 的实操体验。

原始记录中对 Harness 的定位是：

```text
Harness is a base for agents that can adapt across domains.
Harness engineering helps guide agents into different fields and development directions.
```

中文理解：

```text
Harness 像是让 Agent 进入不同领域的工程支架。
它不是只改 prompt，而是把环境、工具、执行流程和领域任务组织起来。
```

记录中提到的应用方向包括商学、农学、医学等多个领域。我的理解是，Harness 的价值不只是让 Agent 回答问题，而是让 Agent 在一个有工具、有上下文、有约束的环境中完成任务。

### Setup and Environment / 实操环境与准备

Speaker A 基于 macOS 操作，从前一天开始实操，只完成部分步骤。

准备步骤包括：

1. 输入命令安装 Python 依赖包。
2. 配置 API key、model ID 和 base URL。
3. 使用 `Command + S` 或 `Control + S` 保存配置。

公开笔记中不记录任何真实 API key、base URL 私密配置或本地路径细节。

### S01: Agent Loop Stage

S01 阶段主要是进入初始 agent loop，并执行 `create file` 测试任务。

记录中的关键能力：

- Agent 可以调用 bash 指令。
- Agent 可以创建文件。
- Agent 具有自动纠错和错误自动修复能力。
- 当执行失败时，Agent 可以尝试自主修正。

我的理解是，S01 展示的是最小 agent loop：

```text
task
-> plan
-> tool call
-> observe result
-> fix error
-> continue
```

### S02: Adding File Tools

S02 阶段为 AI 新增了 4 类工具：

- `read file`
- `edit file`
- `write file`
- `glob`

这些工具扩展了 Agent 的操作能力，使它不仅能运行 bash，还能更结构化地读写文件、查找文件和修改内容。

### Complex Task Execution Trace / 复杂任务执行过程

记录中有一个复杂任务路径：

```text
read README
-> read requirements
-> requirements not found
-> use Glob to search
-> Glob has bug
-> fallback to bash search
-> use readfile with absolute path
-> blocked by sandbox
-> use relative path
-> still failed
-> use bash cat
-> generate summary
-> task finished
```

这个过程对我很有启发。它说明 Agent workflow 的真实难点不是“模型是否聪明”，而是：

- 工具可能有 bug。
- 路径和权限会出错。
- sandbox 会拦截不合规访问。
- Agent 需要 fallback path。
- 最终结果需要 human review。

English companion:

The Harness demo showed a real agent workflow: file tools, bash fallback, sandbox blocks, and error recovery. The useful lesson is that agent engineering is system design: tools, permissions, environment, observation, and repair loops.

### Collaboration Invitation / 组队邀请

Speaker A 提到实操初期遇到一些配置问题，后来已解决。Speaker A 也已经和相关老师对接，有产品想法，欢迎感兴趣的同学组队，合作 workshop、课程任务或其他项目。

公开笔记只记录组队意向，不记录私人联系方式。

## 2. Speaker B: Activity Plan and Excellent Note Review

### Upcoming Activities / 后续活动安排

Speaker B 说明，后续活动周期大约从本周到下周，共两周左右。

活动类型包括：

1. Hackathon / 黑客松
   - 可自由组队参赛。
2. Sharing sessions / 分享会
   - 3 人以内组队。
   - 可以发起 AMA 或 workshop 专题分享。
   - 平台提供宣发支持。

组队建议：

- 在例会中寻找伙伴。
- 在群内寻找志同道合的人。
- 可以自由组队参与黑客松或分享会。

### Leaderboard and Excellent Notes / 排行榜与优秀笔记

Speaker B 提到：

- 周榜竞争激烈，第 4 名有多位同学并列。
- 总榜前期学员实力强，前 20 名学分差距已经拉开。

公开笔记中不记录具体个人排名，只记录观察结论。

### What Makes a Good Note / 优质笔记的借鉴价值

Speaker B 对优秀笔记的评价重点是：

- 问题拆解清晰。
- 流程明确。
- 能基于 AI + Web3 问题地图定位应用场景。
- 能从真实问题收敛出可落地 idea。
- 能完整呈现 Hackathon idea 的形成路径。

被推荐参考的优秀笔记类型包括：

- 擅长提出具体问题、收敛方向的笔记。
- 每日流程清楚、能精准拆解问题地图的笔记。
- AI 方向理解深入、适合 AI 学习者参考的笔记。

我的理解是，优秀笔记不是“写得长”，而是能让别人看见：

```text
问题从哪里来
-> 如何拆解
-> 为什么选择这个方向
-> 下一步如何变成项目
```

English companion:

The note-review section emphasized that strong learning notes should expose the thinking path: real question, problem breakdown, direction choice, and project formation.

## 3. Hackathon Preview / 黑客松核心信息预告

### Basic Information / 基础信息

Speaker B 预告了黑客松信息：

- 报名链接已开放，后续会发至评论区。
- 总奖金池：`7000 USDT`。
- 暂定两个赛道，最终版本计划 6 月 1 日正式公布。

### Tentative Tracks / 暂定赛道

赛道 1：

```text
Cobo Agentic Wallet
Theme: agent economic
```

赛道 2：

```text
ZAI Web coding
Requirement: call the specified large model
Scenario: open
```

记录中提到 ZAI Web coding 赛道应用场景开放，可以是游戏、工具或其他 Web coding 项目。

### Key Dates / 关键时间节点

```text
2026-06-01: Final tracks, awards, and rules announced
2026-06-02: Hackathon Open Day
2026-06-02 to 2026-06-14: Teaming, topic selection, and development
2026-06-13 12:00: Demo submission deadline
2026-06-14: Judge review and live comments
2026-06-17: Winners and project recap announced
```

Speaker B 建议 6 月 12 日前提交 demo，避免临近截止时间出现故障。

### Eligibility / 参赛资格

记录中提到：

- 无背景限制。
- 未参与课程学习或已退出阶段性学习的同学也可以参赛。
- 可以邀请外部好友共同参赛。

这些规则后续仍以官方正式公告为准。

English companion:

The hackathon preview listed two tentative tracks: Cobo Agentic Wallet / agent economic and ZAI Web coding. Final rules, awards, and requirements are expected in the official announcement.

## 4. Speaker C: Hackathon Rules Q&A

### One Project, One Track / 单项目单赛道

Speaker C 说明：

- 一个项目只能选择一个赛道。
- 奖金不可重复获得。

### Track Requirements / 赛道要求

Cobo 赛道：

- 主题为 `agent economic`。
- 后续会提供建议方向和参考文档。

ZAI Web coding 赛道：

- 无具体场景限制。
- 需要调用指定大模型。
- 游戏、工具等方向均可。

### Awards / 奖金分配

记录中提到：

- 两个赛道奖金独立。
- 每个赛道 `3500 USDT`。
- 具体奖项设置和获奖人数，会根据 demo 提交数量与质量最终确定。

### Track Expansion / 是否新增赛道

记录中提到暂无新增赛道计划。下周二，即 6 月 2 日，会举办 Hackathon Open Day。

## 5. Student Q&A / 学员答疑

### Question: Does Track 1 Require Building Inside Cobo?

有同学问：赛道 1 是否必须在 Cobo 框架内开发？是否会有详细介绍？

答复：

- 6 月 1 日宣发文章和 AI Web3 goal 网站会公布完整赛道要求。
- 后续会提供建议方向和学习文档。
- 当前细节尚未完全敲定。

### Question: Can Non-track Projects Join?

有同学问：不符合两个赛道要求的项目能否参赛？

答复：

- 可以参赛。
- 可以展示。
- 平台可以协助宣传。
- 但没有对应奖金。
- 奖金仅针对两个主赛道。

### Question: API Credits for ZAI / CAAI Track

有同学问：参加相关 Web coding 赛道是否需要自行充值 GLM API？

答复：

- CAAI / ZAI 会提供免费试用额度。
- 额度应足够 Web coding 开发使用。
- 完整 API 调用规则计划 6 月 1 日同步。

这里的 `CAAI / ZAI` 名称来自会议记录，后续需以正式宣发材料为准。

## 6. Closing Summary / 会议总结

Speaker B 最后总结：

- 重点关注 6 月 1 日正式宣发。
- 所有规则、要求和细节会以结构化文档形式发布。
- Demo 建议提前一天提交，确保材料完整。
- 组队方式包括查看群内自我介绍、联系优秀笔记作者、邀请外部好友。
- 鼓励跨领域创新。
- 所有参赛项目都可以在平台开源展示。
- 例会内容会整理为 recap，并发布在群内置顶消息。

## My Understanding / 我的理解

这次例会对我有三个直接启发。

第一，Harness engineering 和我最近做的 agent workflow / permission policy 是同一个方向的不同侧面。Agent 能做事，不只是因为模型会推理，而是因为系统给了它工具、权限、观察结果和修复路径。

第二，优秀笔记点评提醒我：笔记应该记录“问题如何形成”。如果只记录结论，就很难回头复盘自己为什么选择某个方向。

第三，黑客松赛道和我的 `AI Wallet Clear Intent Guard` 已经有明显交集。Cobo Agentic Wallet / agent economic 赛道可能适合继续围绕 agent payment、wallet permission、human confirmation 和 audit proof 展开。

English companion:

The meeting connects directly with my current direction. Harness engineering explains how agents get operational capabilities. The note-review section shows why learning notes should record the formation of a problem. The Cobo Agentic Wallet track may be a natural fit for AI Wallet Clear Intent Guard.

## Relation to My Hackathon Direction / 和我的黑客松方向的关系

这次例会让我更确定，第一版黑客松方向应该继续保持小范围：

```text
AI Wallet Clear Intent Guard
-> review one agent payment or wallet action
-> compare intent, deterministic facts, policy, and risk
-> require human confirmation when unclear or high risk
-> leave audit proof
```

如果选择 Cobo Agentic Wallet 赛道，下一步要重点确认：

- Cobo 赛道是否要求使用特定 SDK、API 或文档。
- `agent economic` 主题是否更偏 agent payment、agent wallet、agent commerce，还是更宽。
- 是否允许 mock flow。
- 哪些材料必须在 6 月 13 日前提交。
- 是否需要展示 live demo、GitHub repo、slides、video 或 task proof。

## Questions / 问题

- Harness engineering 中的工具权限边界如何设计，才能避免 Agent 乱读文件或越权操作？
- `glob`、`read file`、`bash cat` 这些工具失败时，应该怎样设计 fallback path？
- Cobo Agentic Wallet 赛道是否最适合 `AI Wallet Clear Intent Guard`？
- 如果赛道主题是 `agent economic`，我的 demo 应该突出 payment、permission、review，还是 audit proof？
- 优秀笔记中“问题地图 -> 真实场景 -> idea 收敛”的结构，能不能直接用于 Hackathon proposal？
- Demo 提交材料应该提前几天准备，避免最后一天只剩调试？

## Follow-up Actions / 后续行动

- 关注 6 月 1 日正式赛道、规则、奖项和 API 文档发布。
- 参加或查看 6 月 2 日 Hackathon Open Day 信息。
- 把 `AI Wallet Clear Intent Guard` 和 Cobo Agentic Wallet / agent economic 赛道要求做一次对齐检查。
- 为 demo 准备一个更小的 review surface，例如 x402 payment request 或 ERC-20 approve mismatch。
- 继续观察优秀笔记，学习如何把问题拆解和项目形成路径写清楚。
- 若使用 Harness engineering 相关工具，需要单独记录工具权限、sandbox 边界和失败路径。

## Verification Status / 核验状态

- [x] Source is learner-provided full meeting record.
- [x] Speaker identities are anonymized.
- [x] Hackathon tracks, awards, dates, and API rules are recorded as meeting notes, not official final rules.
- [x] Cobo / ZAI / CAAI names and exact requirements should be checked against official announcements.
- [x] No private API key, model ID, base URL, or local configuration is included.
- [x] No private group chat content or contact information is included.

中文核验状态：

- [x] 来源为学习者提供完整会议记录。
- [x] 发言人身份已匿名化。
- [x] 黑客松赛道、奖金、日期和 API 规则按会议记录整理，不作为最终官方规则。
- [x] Cobo / ZAI / CAAI 名称与具体要求需要回到正式公告核验。
- [x] 不包含私人 API key、model ID、base URL 或本地配置。
- [x] 不包含私密群聊原文或联系方式。

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No wallet address, real-asset balance, private transaction payload, or private account screenshot.
- [x] No real API key, model ID, base URL, or local secret configuration.
- [x] Speaker identities are anonymized as speaker labels.
- [x] No private chat transcript, private contact information, or private team information.
- [x] Hackathon rules are marked as meeting-preview information and should be checked against official announcements.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、cookies、tokens、sessions 或 `.env` 内容。
- [x] 不包含钱包地址、真实资产余额、私密交易 payload 或私密账户截图。
- [x] 不包含真实 API key、model ID、base URL 或本地 secret 配置。
- [x] 发言人身份已用 speaker 标签匿名化。
- [x] 不包含私人聊天逐字稿、私人联系方式或私人组队信息。
- [x] 黑客松规则已标注为会议预告信息，后续需要以正式公告为准。
