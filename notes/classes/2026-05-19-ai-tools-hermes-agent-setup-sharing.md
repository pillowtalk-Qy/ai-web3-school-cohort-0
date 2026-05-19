# AI Tools and Hermes Agent Setup Sharing - 2026-05-19

## Metadata / 元信息

- Date / 日期: 2026-05-19
- Time / 时间: evening session / 晚间分享会
- Title / 标题: AI 工具科普 + Hermes Agent 安装与配置分享会
- Speaker / 主讲: 说话人 A
- Participants / 参与者: learners, admins, TAs / 学员、管理员、助教等
- Source / 来源: learner-provided meeting summary / 学习者提供的会议总结
- Type / 类型: sharing session / 分享会
- Topics / 主题: AI tools, AI Agent, Hermes Agent, installation, messaging gateways, Q&A / AI 工具、AI Agent、Hermes Agent、安装配置、消息网关、问答
- Status / 状态: summarized from learner-provided notes / 基于学习者提供笔记整理
- Public / 公开状态: needs review before publishing / 公开前需人工审核

## Important Caveat / 重要说明

This is a collected meeting note based on learner-provided notes. It includes speaker explanations, tool classifications, installation flow, and Q&A summaries. It is a learning record, not a fully verified technical manual.

这是一份基于学习者提供内容整理的会议笔记，包含主讲人的工具科普、安装流程、配置说明和 Q&A 摘要。它是学习记录，不等同于逐条核验后的技术手册。

## 中文详细纪要

### 一、开场与分享目标（00:01-01:18）

本次分享面向 AI 小白用户，核心目标是帮助大家先看懂市面上常见的 AI 名词和工具分类，再通过 Hermes Agent 的安装配置演示，理解一个通用个人 AI 助手如何从 0 到 1 跑起来。

主讲人提到，很多新手会被 cloud、code、desk、antigravity、cursor 等工具名弄混。网上常说 AI 无所不能，但真正开始体验时，常见问题反而是“不知道这些工具分别是什么，也不知道应该怎么用”。

PPT 主题是“探索 AI 新世界地图”，整体结构是：

- 先讲 AI 的进化。
- 再讲 AI 工具生态。
- 最后实操 Hermes Agent 的安装、配置和消息平台接入。

### 二、AI 进化与 Agent 核心机制（01:18-04:05）

主讲人回顾了自己对 AI 的感受变化。GPT 刚出现时，它更像智能化搜索引擎：用户在聊天窗口里提问，AI 负责解释问题、优化检索结果、生成知识类回答。

到 2025 年前后，AI 的角色开始从问答式交互变成实际任务执行。它不仅能回答问题，还能解释代码、总结文章、写文案、写代码，并参与开发相关任务。

Agent 的工作流程可以概括为：

- 用户输入任务目标。
- Agent 理解任务。
- Agent 调用外部工具执行任务。
- Agent 观察结果并判断状态。
- 如果出错，自动修复并继续循环。

一句话总结：理解、执行、观察、修复、循环。

聊天机器人和 Agent 的差异在于，聊天机器人主要是被动问答，而 Agent 会理解自然语言目标，主动调用工具并完成任务。

### 三、AI 工具生态与五类工具（04:05-07:42）

主讲人把常见 AI 工具分成五类，方便新手先建立地图感。

#### 1. 聊天型 AI

代表工具包括 ChatGPT、DeepSeek、Gemini、Claude 等。

这类工具以网页聊天为主，适合问答、内容生成、总结、解释和轻量创作。

#### 2. AI 编程助手与 AI IDE

代表工具包括 Cursor、Windsurf、Tierra、Antigravity 等。

这类工具本质上是集成 AI 的开发环境，很多基于 VS Code 二次开发。它们可以直接在项目里写代码、调试、解释代码，并通过内置 Agent 执行开发任务。

#### 3. 终端型 Agent

代表工具包括 Claude Code、Codex、code assistant 类工具等。

这类工具运行在命令行里，更适合开发者使用，特点是轻量、高效、可脚本化。

#### 4. 模型平台

代表平台包括 OpenRouter、魔搭社区等。

它们更像模型聚合和托管平台，用统一接口连接多个大模型，方便开发者调用和切换模型。

#### 5. 通用助手底座

代表方向包括 Hermes Agent 等。

这类系统尝试把大模型、本地工具、记忆、技能和消息平台连接起来，让 AI 不只是单次聊天工具，而是可以长期运行的个人助理。

### 四、Hermes Agent 的定位与核心能力（07:42-15:35）

Hermes Agent 被主讲人放在“通用助手底座”这一层。它的价值不只是调用某一个模型，而是连接模型、本地工具、长期记忆、技能模板和消息平台。

主讲人总结的核心能力包括：

- 多模型接入：支持 OpenAI、Claude、DeepSeek、千问、xAI 等模型。
- 工具调用：可以使用本地命令、文件、浏览器和 API。
- 记忆持久化：通过本地记忆文件保留长期对话记忆和用户偏好。
- Skills：把重复任务沉淀成模板化工作流。
- 消息网关：支持微信、飞书、Telegram 等入口。
- 新手友好：可以通过聊天工具使用，不一定要直接面对终端。

Skills 是本次分享里很重要的概念。主讲人把它解释为模板化工作流，里面可以包含 Agent 角色、行为边界、能力范围、执行步骤和触发条件。它类似工程师的使用手册加任务脚本，适合把重复工作固定下来，减少每次重新写提示词的成本。

### 五、安装实操与初始化配置（17:28-36:00）

演示环境是 Windows + WSL2（Ubuntu）。主讲人认为 WSL2 内存占用较低、兼容性和稳定性较好，适合在 Windows 上部署这类工具。

安装流程大致是：

- 在 GitHub 找到 Hermes Agent 相关仓库。
- 使用仓库提供的一键安装脚本。
- 脚本自动安装 Node.js、Python 和依赖包。
- 安装过程中可能需要 sudo 管理员权限。
- 安装完成后进入 quick setup。

Quick setup 主要配置三项：

- Provider：选择模型服务来源。
- Model：选择具体模型版本。
- 消息网关：选择微信、飞书或 Telegram 等入口。

模型接入方面，Hermes 支持主流模型，也支持自定义中转站。主讲人在演示中没有展开中转站配置，重点放在正规模型接入、连通性测试和消息平台配置上。

常见问题包括：

- 设备配置不需要很高，2-4G 内存也可以运行。
- 大部分正式 API 需要付费。
- 使用国产模型时通常不需要 VPN。
- 如果网络不稳定，服务可能出现连接超时和自动重试。

### 六、消息平台配置与使用场景（36:00-61:13）

Hermes 可以接入微信、飞书、Telegram 等消息平台。这样用户不需要每次打开终端，而是可以通过日常聊天入口和 AI 助手交互。

主讲人举的使用场景包括：

- 定时任务：每日新闻简报、学习提醒、日程管理。
- 学习助手：根据用户时间、水平和目标生成 AI + Web3 学习计划。
- 工作助手：整理文档、生成 PPT、写周报、脑暴。
- 生活助手：天气、提醒、翻译和信息总结。

Telegram bot 的安全设置被特别强调：

- 使用白名单，只允许指定用户使用。
- 设置唤醒词，避免误触。
- 只在被提及或触发唤醒词时响应。
- 关闭不必要的自动表情。
- 区分私聊和群聊权限。

主讲人还提到多角色和分组管理。不同群组可以对应不同角色，例如日常助理、编程脑暴、每日新闻、量化研究等。每个角色可以有独立记忆、独立 skills 和独立上下文，降低信息串用风险。

### 七、学员问答重点（61:13-82:38）

关于 API key，主讲人强调不要直接把密钥粘贴到聊天里，应该按照工具提示通过环境变量或安全配置方式提供。

关于 Claude 会员能否在 Hermes 中使用，主讲人认为可以通过对应模块授权，但需要注意使用地区、账号规则和封号风险。

关于如何把 Hermes 用作学习助手，主讲人建议复制 Learning Agent 启动指令给 Hermes，再补充自己的 AI 水平、Web3 水平和学习目标，让它生成个性化学习计划、每日任务和打卡提醒。

关于 AI 做量化，主讲人的态度比较克制：AI 可以辅助记录、复盘和生成因子，但不应该直接作为交易决策核心。主要风险包括幻觉、策略同质化和开源策略快速失效。

关于知识库对接，主讲人提到可以给 GitHub 链接，也可以在授权后读取本地文件，用来帮助整理和调用已有知识。

## English Summary

### Session Focus

This session introduced the AI tool landscape for beginners and then used Hermes Agent as a practical example of how a general-purpose personal AI assistant can be installed, configured, and connected to messaging platforms.

### Agent Takeaway

The core distinction between a chatbot and an Agent is execution. A chatbot mainly answers questions, while an Agent understands a goal, calls tools, observes results, fixes errors, and keeps looping until the task is completed or blocked.

### Hermes Takeaway

Hermes Agent was presented as a general assistant base rather than a coding IDE. Its value is in connecting models, local tools, memory, skills, and message gateways, so that repeated personal workflows can gradually become reusable assistant workflows.

### Safety Takeaway

The session repeatedly touched on safety boundaries: do not paste API keys into chat, use controlled configuration methods, limit messaging bot permissions, separate roles and contexts, and keep humans in the loop for important actions.

## My Understanding / 我的理解

- 这场分享让我更清楚地看到，AI 工具不能只按品牌名理解，而应该先判断它属于哪一层：聊天、编码、终端执行、模型平台，还是通用个人助理底座。
- Hermes 更适合做“长期在线的受控助手”，不适合替代专业 IDE 或终端型开发工具。
- Skills 的价值在于把重复任务沉淀成可复用流程，这和学习仓库、知识库、个人工作流的长期维护很相关。
- 消息网关很方便，但也会放大安全风险，所以白名单、唤醒词、权限隔离和人工确认非常重要。
- 对 AI x Web3 学习来说，Hermes 这类工具可以帮助整理学习节奏和信息流，但不能绕过密钥、钱包、API 和发布动作的安全边界。

- This session made the AI tool landscape clearer for me. Tools should not be understood only by brand name; they should first be mapped to their layer: chat, coding, terminal execution, model platform, or general assistant base.
- Hermes is better suited as a long-running controlled assistant, not as a replacement for professional IDEs or terminal-based developer tools.
- The value of Skills is turning repeated tasks into reusable workflows, which connects directly with maintaining a learning repo, knowledge base, and personal workflow.
- Messaging gateways are convenient, but they also increase safety risks, so whitelists, wake words, permission separation, and human confirmation matter.
- For AI x Web3 learning, Hermes-like tools can help organize learning rhythm and information flow, but they should not bypass safety boundaries around secrets, wallets, APIs, or publishing actions.

## Concepts to Review / 待复习概念

- AI Agent execution loop / AI Agent 执行闭环
- Tool calling / 工具调用
- Persistent memory / 持久化记忆
- Skills as reusable workflows / 技能作为可复用工作流
- Messaging gateway / 消息网关
- WSL2 environment isolation / WSL2 环境隔离
- Environment variables / 环境变量
- API key handling / API key 处理方式
- Bot whitelist and wake word / 机器人白名单与唤醒词
- Role and context isolation / 角色与上下文隔离

## Questions / 问题

## Follow-up Actions / 后续行动

- [ ] 继续完善 Qy Knowledge Hub。

  Qy Knowledge Hub 是我正在搭建的个人知识处理中枢，主要用来把来自网页、社交平台、笔记和工作流里的信息，先做整理、分类、风险过滤和人工审核，再沉淀成可信知识、内容素材或行动队列。目前系统已完成约 60%。

  它采用本地优先、安全优先的设计，不会让外部信息直接触发操作。例如，它不会自动打开链接、下载文件、执行命令、授权平台或自动发布内容。外部内容只会被当作数据处理，重要动作都需要人工确认。

  这个系统可以和 Hermes 配合使用。Hermes 在其中更像一个受控的智能协作助手，帮助我维护本地流程、整理知识结构、生成检查结果和 Dashboard，并协助规划后续 Notion、Obsidian 和社交平台集成，但不会让外部平台反过来控制系统。

  简单说，Qy Knowledge Hub 是一个和 Hermes 配合使用的安全型个人知识管道，用来把外部信息更稳妥地转化为可管理、可审核、可沉淀的知识资产。

- [ ] Continue refining Qy Knowledge Hub.

  Qy Knowledge Hub is a personal knowledge-processing hub that I am building. It organizes, classifies, risk-filters, and manually reviews information from web pages, social platforms, notes, and workflows before turning it into trusted knowledge, content material, or action queues. The system is about 60% complete.

  It is local-first and safety-first. It does not let external information directly trigger actions. For example, it does not automatically open links, download files, run commands, authorize platforms, or publish content. External content is treated only as data, and important actions require human confirmation.

  The system can work together with Hermes. In this setup, Hermes acts more like a controlled intelligent collaborator that helps me maintain local workflows, organize knowledge structures, generate review results and dashboards, and plan future Notion, Obsidian, and social-platform integrations. It does not allow external platforms to control the system in return.

  In short, Qy Knowledge Hub is a safety-oriented personal knowledge pipeline used together with Hermes. Its purpose is to turn external information into manageable, reviewable, and durable knowledge assets more safely.

## Verification Status / 核验状态

- [ ] Direct source checked / 已检查直接来源
- [x] Learner-provided meeting notes only / 目前仅基于学习者提供会议总结
- [x] Needs follow-up / 需要后续核验

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, or session data / 不包含私钥、助记词、API key、cookie 或 session 数据
- [x] No wallet addresses, transaction hashes, balances, or private account information / 不包含钱包地址、交易哈希、余额或私人账户信息
- [x] No private chat logs or non-public transcripts / 不包含私人聊天记录或非公开逐字稿
- [x] No automatic publishing, platform authorization, or proof submission described / 不包含自动发布、平台授权或 proof 提交流程
