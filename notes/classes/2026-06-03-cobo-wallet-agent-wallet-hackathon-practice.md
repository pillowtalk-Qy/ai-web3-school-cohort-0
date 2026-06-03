# AI Web Science Club - Cobo Wallet Agent Wallet Hackathon Practice - 2026-06-03

## Metadata / 元信息

- Date / 日期: 2026-06-03
- Title / 标题: Hackathon 赛道实战 - 基于 Cobo Wallet 结合 Agent Wallet 开发分享
- Source / 来源: learner-provided class notes / 学习者提供的课程笔记
- Type / 类型: technical sharing / 技术分享
- Topics / 主题: Cobo Wallet, Agent Wallet, MPC, TSS, Packet approval, Agent mode, Developer mode, CLI, API, SDK, wallet permissions, AI risk control / Cobo Wallet、Agent Wallet、MPC、TSS、Packet 审批、Agent 模式、Developer 模式、CLI、API、SDK、钱包权限、AI 风控
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-06-03-cobo-wallet-agent-wallet-hackathon-practice.md`

## Important Caveat / 重要说明

这是一份基于学习者提供记录整理的 Cobo Wallet / Agent Wallet 技术分享笔记，不是官方开发文档、正式安全审计、资金操作建议或完整接入教程。

涉及开发环境、测试环境、App 安装、Mock 登录、MPC/TSS、CLI、API、SDK、Gas sponsor、Packet 规则、x402 支持和正式环境切换的内容，都应在实际开发前回到 Cobo 官方文档、OpenAPI 文档、SDK 文档、Workshop 回放或官方技术支持渠道核验。

公开笔记中不记录真实 API key、钱包 UID、NodeID、SessionID、配对码、备份文件、私钥分片、钱包地址、交易 payload、付款凭证、Discord 链接、群聊链接或私人联系方式。

This note summarizes learner-provided notes from a Cobo Wallet technical sharing session. It is not official documentation or security guidance. Anything involving wallet creation, signing, API keys, Packet permissions, backup files, or real funds must be verified against official Cobo documentation before action.

## Executive Summary / 摘要

本次分享聚焦 Cobo Wallet Hackathon 赛道实战，核心内容包括：

- Cobo Wallet 的正式环境与开发者环境。
- Agent 模式与 Developer 模式两种接入方式。
- MPC 钱包、TSS Node、CW 二进制程序和 SDK 的基本分工。
- Packet 审批机制如何为 Agent 执行链上任务设置权限边界。
- CLI / API / SDK 的接入流程。
- AI Agent + 链上支付、DeFi 自动化、预测市场等应用方向。
- Q&A 中关于 MPC vs Safe、Gas sponsor、Packet 生命周期、Intent 识别、x402 支持、测试流程和技术支持渠道的说明。

对我自己的 `AI Wallet Clear Intent Guard` 方向来说，最重要的是：

```text
Packet = permission contract / authority package
```

它把 Agent 的自由执行变成一个先申请、再审批、再在限定规则内执行的流程。这和我一直在思考的：

```text
intent
-> deterministic facts
-> wallet policy boundary
-> human approval
-> audit proof
```

高度一致。

English companion:

The session explained how Cobo Wallet can be used by AI agents through Agent mode or Developer mode, how MPC/TSS separates signing responsibilities, and how Packet approval creates a permission boundary before agents execute transactions. For my own project, Packet is the most important concept because it resembles an auditable authority package.

## 1. Opening and Scope / 开场与分享范围

本次分享会聚焦：

```text
Hackathon track practice
-> Cobo Wallet
-> Agent Wallet development
```

分享目标包括：

- 解释 AI Agent 执行链上任务时的钱包权限管控。
- 拆解安全边界与可验证流程。
- 帮助参赛者理解 Cobo 赛道的可落地 MVP 范围。
- 在答疑环节为 Cobo 相关项目提供落地建议。

公开笔记中不记录主持人、主讲人或参会者真实姓名，只保留角色信息。

## 2. Cobo Wallet Product Basics / Cobo Wallet 产品基础

### 2.1 Production and Developer Environments / 正式环境与开发者环境

分享中提到 Cobo Wallet 有两套运行环境：

1. Production environment / 正式环境
2. Developer or test environment / 开发者或测试环境

### Production Environment / 正式环境

正式环境包括：

- 独立官网地址。
- 后端 API 地址。
- 专属 skills 资源。
- 移动端 App，可通过主流应用商店下载。

具体 URL、API endpoint 和 skills 链接不写入公开笔记，应以官方文档为准。

### Developer Environment / 开发者环境

开发者环境更适合黑客松开发和调试。

会议中提到开发者环境的特点：

- 域名、API 接口、skills 链接与正式环境区分。
- 增加测试接口。
- 提供自动生成的 OpenAPI 全量接口文档。
- OpenAPI 文档包含接口参数和调用示例，便于调试。
- iOS 测试版通过 TestFlight 安装。
- Android 开发包由官方后续打包分发。
- HarmonyOS 暂无原生适配版本，可能需要依赖 Android 虚拟机环境。

### Mock Login Safety / Mock 登录安全提醒

会议中提到，开发者环境支持 Mock 登录，便于测试。

重要安全提醒：

- 不要使用过于简单、容易被猜到的 Mock 身份标识。
- 不要在测试钱包中存入大额真实资产。
- 开发和演示应优先使用测试网资产或极小额低风险资产。
- 测试环境账号和资产仍然需要按真实钱包安全标准谨慎处理。

公开笔记不记录任何真实 Mock ID、测试账号或测试钱包地址。

### 2.2 Product Architecture / 产品整体架构

会议中介绍的后端核心模块包括：

- Transaction engine / 交易引擎。
- Risk engine / 风控引擎。
- Packet approval flow / Packet 审批流。

客户端或调用主体包括：

- 各类具备执行能力的 AI Agent。
- 开发者自研程序。
- SaaS 或 Web 应用。
- 自动化脚本。

底层执行组件包括：

- `CW` binary / CW 二进制程序。
- `TSS Node` binary / TSS Node 二进制程序。
- SDK / API 封装工具。

### CW Binary / CW 二进制程序

CW 负责与 Cobo Wallet 后端通信，并封装 API 调用逻辑。

从开发者视角看，CW 更像是：

```text
local command/API bridge
-> Cobo backend
-> wallet operation
```

### TSS Node / TSS Node

TSS Node 依托 MPC / 多方计算签名机制，负责参与分片签名流程。

会议中强调，TSS Node 和手机端、服务端共同参与签名，使完整私钥不会在任意单个设备或内存中完整出现。

### SDK / SDK

SDK 是对后端 API 的封装。

会议中提到：

- Python SDK 更适合 AI 框架集成，可能内置了一些工具类。
- TypeScript SDK 更偏基础 API 封装。

具体 SDK 能力、版本和调用方式应以官方文档为准。

### 2.3 MPC Wallet Core Idea / MPC 钱包核心原理

会议中将 Cobo Wallet 的 MPC 钱包与传统单私钥钱包做了对比。

传统钱包如 MetaMask / Rabby 的常见模式是：

```text
full private key stored locally
-> local signing
```

Cobo 的 MPC 钱包思路是：

```text
user-side key share
service-side key share
TSS signing
no complete private key generated during normal signing
```

会议中强调的安全含义：

- 平台方不能在用户不配合的情况下单方面划转用户资产。
- 用户端单独持有分片私钥也不能单独完成转账。
- 交易需要经过平台风控引擎和签名流程。
- 这种结构可以降低 AI Agent 被提示词注入、幻觉或恶意指令诱导后直接转账的风险。

会议也提到，用户可能有自行合并分片私钥、导出完整私钥的能力。这个操作涉及极高安全风险，应以官方备份/导出说明为准，不在公开笔记中展开教程。

## 3. Two Access Modes / 两种接入模式

会议中介绍了两种主要接入模式：

1. Agent mode / Agent 模式
2. Developer mode / Developer 开发者模式

### 3.1 Agent Mode / Agent 模式

Agent 模式面向具备 Shell / terminal 执行能力的 AI Agent。

适用对象包括：

- Cloud coding agent。
- Hermes 类 agent。
- 其他能执行 shell 命令的本地或云端 agent。

特点：

- 接入较快捷。
- 可以通过 skills 安装脚本拉取本地组件。
- 更适合 Hackathon 快速验证。

### 3.2 Developer Mode / Developer 模式

Developer 模式面向：

- 自研 SaaS。
- Web 应用。
- 独立 App。
- 固定业务流程程序。
- 不依赖强 AI 自由决策的系统。

接入方式包括：

- CLI。
- API。
- SDK。

Developer 模式更适合需要深度定制或集成到具体产品中的项目。

## 4. Agent Mode Workflow / Agent 模式流程

### 4.1 Skills Installation / Skills 安装

会议中提到，Agent 模式可以通过官网复制指定 prompt 指令，粘贴给 AI Agent，让 Agent 自动下载并安装所需 skills 脚本。

Skills 脚本会拉取本地需要的组件，例如：

- CW binary。
- TSS Node binary。

具体 prompt、下载链接和脚本不写入公开笔记，应以官方文档为准。

### 4.2 Standalone Agent Wallet / 纯 Agent 独立钱包

在不配对移动端 App 的情况下：

- Agent 可以根据用户指令创建钱包。
- 自动生成 EVM 通用地址和 Solana 地址。
- Agent 可以在没有手机人工审批的情况下执行链上任务。

会议中提到的可能任务包括：

- DEX 兑换。
- 预测市场操作。
- 定投。
- 套利。

安全理解：

```text
no mobile app pairing
-> less human approval
-> more agent autonomy
-> higher permission risk
```

因此，如果项目涉及真实资金，应优先增加审批、限额、Packet、测试环境和极小金额限制。

### 4.3 Mobile App Pairing / 移动端 App 配对

移动端 App 配对可以增加人工风控和审批边界。

会议中描述的流程：

```text
install test app
-> mock login
-> agent generates pairing code
-> user enters pairing code on phone
-> wallet is paired
```

公开笔记不记录真实配对码或测试账户。

### MPC Signing Latency / MPC 签名耗时

会议中提到，由于配对与交易签名涉及多轮密码学交互，MPC 签名可能是秒级耗时；普通单私钥钱包签名通常更快。

这对 UX 很重要。Hackathon demo 需要预期签名等待时间，并在演示中留出缓冲。

### Backup Reminder / 备份提醒

会议中特别提醒：

- 开发版 iOS 不能依赖 iCloud 备份私钥分片。
- 必须按官方方式做本地备份。
- 备份文件应按私钥级别保护。
- 如果 App 和备份文件都丢失，平台也可能无法协助找回资产。

公开笔记不记录备份文件路径、格式、截图或恢复流程。

### 4.4 Packet Approval Mechanism / Packet 契约审批机制

Packet 是本次分享最关键的概念。

会议中的定义可以理解为：

```text
Packet = transaction permission contract / authority package
```

Agent 在发起交易前，需要生成 Packet，并说明：

- 交易用途。
- 合约范围。
- 权限限制。
- 交易频率。
- 有效期。
- 最大交易次数。
- 交易金额限制。

用户在手机端审批 Packet。

```text
Agent proposes Packet
-> user reviews on phone
-> approve or reject
-> Agent executes only within Packet boundary
```

### Example Packet Rule / 规则示例

会议中举过的规则类型包括：

- 限定网络，例如 Base。
- 限定 DEX 或合约，例如 Uniswap V3。
- 限定兑换方向，例如 ETH -> USDC。
- 限定 24 小时最多交易次数。
- 限定合约白名单。
- 限定有效期。

### Why Packet Matters / 为什么 Packet 重要

Packet 的价值在于：

- Agent 不是无边界执行。
- 用户可以提前审批有限范围。
- 超出范围需要重新申请。
- 到期或达到次数限制后自动失效。
- 即使 API Key 或权限路径泄露，攻击面也可以被限制。

对我的项目来说，Packet 是非常重要的参考，因为它已经提供了一个现实的 wallet policy boundary。

### 4.5 MCP Server as Alternative / MCP Server 作为备选

会议中提到 MCP Server 是备选接入方案。

适用情况可能是：

- Agent 没有终端执行能力。
- 不能直接使用 Skills 方案。

但会议记录中也提到，MCP Server 功能弱于 Skills 方案。具体能力差异需要官方文档核验。

## 5. Developer Mode Workflow / Developer 模式流程

### 5.1 CLI / CLI

会议中提到，Skills 底层也依赖 CLI 指令。

CLI 安装后，本地会生成配置目录，可能包含：

- 默认配置。
- 多份 Profile 文件。
- 钱包 credentials。
- TSS Node 配置。
- secrets 数据库。

重要安全提醒：

- credentials 可能涉及钱包 UID 和 API key。
- secrets 数据库可能涉及私钥分片。
- 本地配置目录应整体备份并按敏感数据保护。
- 公开仓库绝不能提交这些文件。

会议中提到钱包创建是异步流程，大致模式为：

```text
create wallet request
-> receive session ID
-> poll status
-> wallet becomes active
-> generate chain addresses
```

公开笔记不记录真实命令输出、SessionID、UID、API key 或地址。

### 5.2 API / API

API 是更底层的接入方式。

会议中提到的 API 接入前置条件：

- 本地需要启动 TSS Node 签名进程。
- CW 组件可能是可选的。

抽象流程可以理解为：

```text
create API key
-> start TSS Node
-> get NodeID
-> create MPC wallet
-> poll wallet status until active
-> create chain address
```

配套 API 可能包括：

- pairing request / 配对申请。
- Packet submission / Packet 提交。
- transaction creation / 交易发起。
- status query / 状态查询。

具体请求字段、鉴权方式、Header、endpoint 和参数结构应以 OpenAPI 文档为准，不写入公开笔记。

### 5.3 SDK / SDK

SDK 是 API 封装工具。

会议中提到：

- Python SDK 对 AI 框架更友好，可能提供预制工具类。
- TypeScript SDK 主要提供基础 API 封装。

对黑客松来说，如果目标是快速做出 Agent demo，Python SDK 可能更适合；如果目标是 Web 前端 / 后端产品集成，TS SDK 或裸 API 也可能有价值。

## 6. Application Directions / 落地应用方向

会议中提到几个方向。

### AI Agent + Onchain Payment / AI Agent + 链上支付

Agent 集成钱包后，可以执行链上支付，例如：

- 调用付费 API。
- 在线商品采购。
- 支付其他 Agent 或真人完成任务。

这类方向的关键不只是“能支付”，而是：

- 支付对象是否可信。
- 金额和频率是否有限制。
- 是否有用户可读的 intent。
- 是否有审批与撤销机制。
- 是否能留下审计记录。

### DeFi Automation / DeFi 自动化

会议中提到：

- DeFi 自动定投。
- DEX 套利。

公开笔记不把这些写成投资建议。任何真实交易都应该限制额度、测试环境先行，并做好风险提示。

### Prediction Market / 预测市场

会议中也提到预测市场相关应用，例如 AI 分析事件概率后执行下注。

这个方向涉及金融风险、市场风险和模型判断风险，适合作为技术探索，不应在公开笔记中暗示收益或低风险。

## 7. Q&A Notes / 答疑要点

### MPC vs Safe Multisig / MPC 与 Safe 多签区别

会议中解释：

- Safe 多签是链上合约多地址签名。
- MPC 是密码学分片签名。
- MPC 正常签名过程中不出现完整私钥。
- 两者用户体验可能近似，但底层机制不同。

### Which Mode to Use / 选择哪种接入模式

会议中的建议：

- 自研 Agent 类产品：优先看 Agent mode。
- SaaS、独立 App、固定业务系统：优先看 Developer mode。

### Gas Sponsor / Gas 补贴

会议中提到当前 Gas sponsor 支持范围包括：

- ETH mainnet。
- Base testnet。

具体是否可用、额度限制、申请方式和网络支持应以官方文档为准。

### Packet Rule Details / Packet 规则细节

会议中提到 Packet 不只支持单笔交易约束，还可能支持：

- 长期周期性交易。
- 24h / 7d / 30d 累计交易金额限制。
- 最大交易次数。
- 有效期。

合约参数约束方面：

- 简单参数可通过 ABI + params match 做白名单限制。
- 复杂结构体 / 数组 ABI 解析能力仍需核验。

### Intent Recognition and Risk Insight / 意图识别与风险洞察

会议中提到，用户自然语言意图可能由 AI Agent 生成交易意图、权限申请和执行计划。

平台侧也有 AI 风控或手机端 AI 洞察功能，用于识别：

- Packet 申请权限是否和用户意图冲突。
- 是否出现可疑权限申请。
- 是否存在恶意全量转账权限。

这正是 `AI Wallet Clear Intent Guard` 可以学习的产品结构：

```text
user intent
-> agent plan
-> permission request
-> risk insight
-> user approval
```

### Packet Lifecycle / Packet 生命周期

会议中提到：

- Packet 创建后不可修改。
- 旧 Packet 可以在手机端手动作废。
- 新业务需要新建 Packet。

这个设计对审计很有价值，因为不可修改的 Packet 可以作为某段权限授权的固定证据。

### x402 Payment Protocol / x402 支付协议

会议中提到，x402 与当前平台风控引擎融合度可能不足。

记录中的理解是：

- 可能只能通过 EIP-712 签名策略限制参数。
- 前端交易详情展示暂未原生适配。

这对我的 demo 方向很关键：如果要贴近 Cobo 赛道，第一版是否适合直接做 x402，取决于能不能在真正签名或执行前拿到足够清楚的 draft execution facts。

### Learner Question: x402 Pre-sign Preview / 我的 x402 预览问题

我在答疑中追问了一个更具体的接口问题。

问题背景是：开发文档里似乎有这些能力或接口线索：

- `/policies/dry-run` 可以提前预览 policy decision。
- `/wallets/{wallet_uuid}/payment` 支持 x402 payment。
- 可以通过 `request_id` 查询 transaction record。
- 也有 EVM decode / simulate 相关接口。
- 可能还可以通过 SDK、API 或 `caw fetch` 获取执行相关信息。

我的问题可以整理成：

```text
If we want to show a clearer frontend/log preview of what an x402 payment will do,
can CAW provide draft execution facts before signing or execution?
```

我想确认的 draft execution facts 包括：

- chain。
- token。
- amount。
- recipient。
- operation type。
- policy decision。

进一步追问是：如果当前 x402 payment 还没有完整的 pre-sign preview，是否可以理解为推荐路径是：

```text
402 challenge
-> build payment preview locally
-> /policies/dry-run for policy precheck
-> execute payment
-> use request_id / transaction record / webhook for audit
```

这个问题对 `AI Wallet Clear Intent Guard` 很关键，因为它直接决定 x402 payment review 是否能成为第一版 demo surface。

如果官方路径能在签名前给出足够稳定的 draft execution facts，那么 x402 payment review 仍然值得作为 MVP 候选。如果暂时拿不到足够清楚的 pre-sign facts，那么 Packet / authority package review 可能更适合第一版。

### Testing Flow / 测试流程

会议中对 Web3 项目测试的理解：

- 与 Web2 测试逻辑没有本质区别。
- 优先在开发者环境全流程联调。
- 接口、配对、交易链路都跑通后，再考虑切换正式环境。
- 切换正式环境可能主要是替换域名和环境配置。

正式环境测试必须谨慎处理真实资产、权限和备份。

### Technical Support Channel / 技术支持渠道

会议中提到可通过官方 Discord 的相关频道提问，且有技术支持值班。

公开笔记不记录具体邀请链接。技术支持渠道应以官方渠道为准。

## 8. My Understanding / 我的理解

这次分享对 `AI Wallet Clear Intent Guard` 是非常关键的一课。

我之前一直在抽象地讲：

```text
wallet policy boundary
human confirmation
audit proof
```

这次 Cobo Wallet 的 Packet 机制给了一个现实参考：

```text
Packet
-> user approves on phone
-> agent executes within packet boundary
-> packet expires or can be revoked
```

这说明我的 demo 不一定要从“解释一笔交易”开始，也可以从“解释一个权限包 / Packet 申请”开始。

更具体地说，`AI Wallet Clear Intent Guard` 可以变成：

```text
User says intent
Agent proposes Packet
Guard extracts deterministic facts
Guard compares Packet against user intent
Guard flags mismatch or overreach
User approves/rejects on review surface
Audit proof records the decision
```

但我追问的 x402 接口问题也说明，payment review 还不能过早放弃。现在更合理的判断是：

```text
Packet review = more native authority-package path
x402 review = viable if pre-sign execution facts are available
```

第一版 demo 应该根据官方答复选择最能拿到确定性事实、policy decision 和审计闭环的路径。

English companion:

This session gave a concrete product reference for my project. Packet can be treated as an authority package. A strong demo could review a Packet request, compare it with user intent, show deterministic permission facts, flag overreach, and preserve user approval as audit proof.

## 9. Impact on Demo Direction / 对 Demo 方向的影响

之前我一直在三个 review surface 里摇摆：

- `x402 payment request review`
- `ERC-20 approve mismatch`
- `authority package review`

这次分享之后，我更倾向于把 Cobo 赛道第一版 demo 收到两个候选之一：

```text
authority package / Packet review
or
x402 payment review with policy dry-run and execution-facts preview
```

Packet review 的理由：

- Packet 是 Cobo 产品里真实存在的权限结构。
- Packet 天然包含合约范围、金额、次数、周期、有效期等可审查字段。
- 手机端审批天然保留 human confirmation。
- Packet 不可修改和可作废的生命周期适合 audit proof。

x402 payment review 的成立条件：

- 能从 402 challenge 或 CAW 接口中还原 payment preview。
- 能在签名前展示 chain、token、amount、recipient、operation type。
- 能用 `/policies/dry-run` 做 policy precheck。
- 能在执行后通过 `request_id`、transaction record 或 webhook 完成审计闭环。

所以现在不是简单放弃 x402，而是把它改成一个待官方确认的技术假设：

```text
x402 payment review works if draft execution facts are available before signing.
```

## 10. Action Items / 行动项

- [ ] 回看或查阅 Cobo 官方开发者环境文档。
- [ ] 找到 Agent mode skills、Developer mode CLI / API / SDK 的官方入口。
- [ ] 明确开发者环境、正式环境、TestFlight App、Android 包和 HarmonyOS 适配状态。
- [ ] 核验 Packet 可配置字段：网络、合约、金额、次数、周期、有效期、ABI 参数匹配。
- [ ] 核验 x402 payment 是否支持 pre-sign preview 或 draft execution facts。
- [ ] 核验 `/policies/dry-run`、`/wallets/{wallet_uuid}/payment`、`request_id` transaction record、webhook、EVM decode / simulate 的推荐组合路径。
- [ ] 确认 Packet 是否可作为 `AI Wallet Clear Intent Guard` 的第一版 review surface。
- [ ] 确认 x402 payment review 是否也能成为第一版 review surface。
- [ ] 设计一版 Packet review demo flow。
- [ ] 设计一版 x402 payment preview + policy dry-run demo flow。
- [ ] 继续保持测试网 / mock-safe，不使用主钱包或大额真实资产。

## 11. Questions / 待确认问题

- Packet 提交前，Agent 生成的用户 intent 和权限申请是否都有结构化字段可读取？
- 手机端 AI 洞察功能能否输出可供 demo 展示的风险标签或解释？
- Packet 审批记录是否能导出或作为 audit proof 展示？
- 如果 Packet 创建后不可修改，是否可以用撤销 + 新建来表达变更历史？
- Cobo SDK 是否允许开发者构建自定义 review UI，还是只能调用现有手机端审批？
- Base testnet Gas sponsor 是否足够支持黑客松 demo？
- x402 payment 在真正签名或执行前，是否能通过 SDK、API 或 `caw fetch` 拿到 draft execution facts？
- 如果没有完整 pre-sign preview，官方推荐路径是否是：本地生成 payment preview、调用 `/policies/dry-run` 做 precheck、执行后用 `request_id` / transaction record / webhook 完成审计？
- x402 如果只走 EIP-712 策略约束，是否仍值得作为第一版 MVP，还是更适合作为后续扩展？

## English Summary

The Cobo Wallet sharing explained how agent wallets can be connected through Agent mode or Developer mode, how MPC/TSS prevents a full private key from appearing during normal signing, and how Packet approval creates a bounded permission contract before agent execution.

For my hackathon direction, the most important idea is permission-aware review before execution. One possible surface is Packet review: what the agent is asking permission to do, whether it matches user intent, what contracts and limits it touches, how long it lasts, and what should be approved or rejected.

The x402 question is still open. If CAW can expose draft execution facts before signing, x402 payment review could be a strong MVP. If not, the safer first version may be Packet / authority package review, with x402 kept as a later extension.

## Verification Status / 核验状态

- [x] Notes are based on learner-provided sharing notes.
- [ ] Cobo official docs not checked in this note.
- [ ] Cobo OpenAPI docs not checked in this note.
- [ ] SDK docs not checked in this note.
- [ ] Developer environment URLs, API endpoints, skills links, TestFlight links, Android package links, and Discord links are intentionally omitted.
- [ ] Gas sponsor, x402, Packet field limits, ABI matching, and mobile AI insight details are not independently verified.

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, sessions, `.env` content, or backup files.
- [x] No wallet UID, NodeID, SessionID, pairing code, wallet address, transaction payload, or real test account.
- [x] No private Discord invite, group link, TestFlight link, API endpoint, skills link, or app package link.
- [x] Speaker, host, and attendee names are anonymized.
- [x] Real-fund operations are treated as high-risk and not recommended in this public note.
- [x] Technical claims are marked as meeting notes requiring official verification.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、token、cookie、session、`.env` 内容或备份文件。
- [x] 不包含钱包 UID、NodeID、SessionID、配对码、钱包地址、交易 payload 或真实测试账号。
- [x] 不包含私人 Discord 邀请、群链接、TestFlight 链接、API endpoint、skills 链接或 App 安装包链接。
- [x] 主讲人、主持人和参会者姓名已匿名化。
- [x] 真实资金操作被标记为高风险，不在公开笔记中鼓励。
- [x] 技术说法都作为会议记录处理，正式开发前需要官方核验。
