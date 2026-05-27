# AI x Web3 School Co-learning - Markdown Knowledge Agent, Hackathon Support, Layer2, and DAO Operations - 2026-05-27

## Metadata / 元信息

- Date / 日期: 2026-05-27
- Title / 标题: Markdown 知识库 Agent、黑客松技术支持、Layer2、去中心化社区与 DAO 运营共学讨论
- Source / 来源: learner-provided meeting notes / 学习者提供的会议整理
- Type / 类型: co-learning session / 共学答疑与项目讨论
- Topics / 主题: Markdown knowledge base agent, RAG, hackathon API support, Web3 onboarding, Layer2, decentralized community, contribution incentives, DAO operations, account abstraction / Markdown 知识库 Agent、RAG、黑客松 API 支持、Web3 入门、Layer2、去中心化社区、贡献激励、DAO 运营、账户抽象
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-05-27-co-learning-markdown-agent-hackathon-dao.md`

## Important Caveat / 重要说明

这是一份基于学习者提供的会后整理材料形成的共学笔记，不是逐字稿，也不是对项目、协议或技术路线的正式背书。笔记中所有人物均匿名化为 speaker，不记录私人身份、私人聊天内容或无关讨论。

关于 `Near2`：原始记录中使用了这个写法，但对应内容主要是在讲 Layer2 扩容、rollups、data channels 和数据发布成本。因此本笔记暂时按 `Layer2 / Near2 term to verify` 处理，后续如要公开引用或写入正式研究，需要回到课程材料、官方文档或原始发言复核。

This note summarizes learner-provided co-learning notes. It is not a verbatim transcript, investment advice, project endorsement, or verified technical report. The term `Near2` is preserved as a term to verify because the content appears to describe Layer2 scaling concepts.

## Session Overview / 讨论概览

本次 co-learning 主要围绕六类问题展开：

- 如何用现有 Agent 和 RAG 思路搭建 Markdown 知识库问答助手。
- 黑客松期间 API、技术老师、Web3 开发资料和 MVP 准备方式。
- Layer2 / Near2 相关扩容技术、rollups 类型和行业现状。
- 零基础 Web3 学习路径，以及去中心化创客社区项目是否可行。
- 贡献激励协议、Feature Sharing、DAO 治理冷漠和 Agent 自动记录贡献。
- Web2 用户如何通过 AA 钱包、嵌入式钱包和社交登录低门槛进入 Web3。

The session connected practical agent building, hackathon preparation, scaling concepts, DAO operations, contribution incentives, and user onboarding. The most useful thread for my current direction is how AI agents, contribution records, wallet permissions, and low-friction Web3 onboarding fit together.

## 1. Markdown 文档知识库 Agent 方案

### 需求背景

一位 speaker 有大量 Markdown 格式知识库文档，希望构建一个熟悉文档内容、能基于文档精准回答问题的 Agent。

核心需求不是“让模型什么都知道”，而是：

- 知道本地 Markdown 知识库中有什么。
- 能根据问题检索相关内容。
- 回答时尽量只基于知识库，不随意扩展或幻觉。
- 能随文档更新而持续维护索引。

### 核心方案：RAG 检索增强生成

现场给出的核心方案是 RAG：

```text
User question
-> retrieve relevant notes / indexes
-> send retrieved context to the model
-> generate answer grounded in the knowledge base
```

中文理解：

```text
用户提问
-> 先从 Markdown 知识库匹配相关索引和片段
-> 再把检索结果交给大模型
-> 让模型基于检索内容生成回答
```

### 实操步骤

建议步骤：

1. 先让 Agent 整理 Markdown 笔记。
2. 提取标题、主题、关键词、标签、日期和关联文档。
3. 按内容类型分类，例如课程笔记、项目资料、任务 proof、会议纪要、技术调研等。
4. 建立索引或目录。
5. 提问时添加限定提示词，要求 Agent 优先或仅基于知识库回答。

一个可用的限定提示词方向是：

```text
请只基于指定 Markdown 知识库中的内容回答。
如果知识库中没有依据，请明确说明没有找到，不要自行编造。
回答时标出使用到的文件名或章节。
```

### Agent 选型

现场判断是：现阶段不一定需要从零搭完整 RAG 架构。常用 Agent 已经能满足很多 Markdown 知识库问答需求，重点在于：

- 文档结构是否清楚。
- 索引是否整理过。
- 提问时是否限定知识库范围。
- 输出是否要求引用来源文件。

结论：

```text
现有 Agent + Markdown 索引整理 + 限定提示词
```

已经可以先跑起来。之后如果文档规模变大、检索质量不足，再考虑更完整的向量库、chunking、embedding、reranking 和自动化同步。

## 2. Hackathon Preparation / 黑客松筹备问题

### API 与技术支持

关于黑客松期间是否提供 API、SDK 或技术支持，现场答复基于过往经验：

- 赞助方通常会安排技术老师或技术支持进入社群。
- 会提前提供平台 API 文档或开发资料。
- 开发过程中可以在群内 `@` 技术人员对接问题。
- 如果团队开发者缺乏 Web3 经验，可以提前向组织方确认资料包和官方开发入口。

这对黑客松准备很重要：不是等比赛开始才熟悉接口，而是提前确认文档、示例、测试环境和支持渠道。

### Web3 开发资料

有 speaker 提到团队开发人员没有 Web3 经验，希望提前熟悉资料并先行开发 MVP。现场答复是会后继续确认是否有官方开发资料，并通过私下渠道同步。

公开笔记中只记录这个行动项：

- 确认黑客松 API 文档是否已准备。
- 确认 Web3 开发资料是否可提前提供。
- 确认技术支持人员、社群对接方式和问题反馈流程。

### My Hackathon Implication / 对我的黑客松启发

对我自己的 AI Wallet Clear Intent Guard 来说，黑客松前需要提前确认：

- 是否有 sponsor API 或 SDK 可以接入。
- 是否有 wallet、payment、identity、agent commerce 相关的官方示例。
- 是否能用 mock transaction / mock payment request 完成安全 demo。
- 哪些能力必须真实接入，哪些可以先用本地模拟。
- 公开 demo 不能接触真实私钥、真实资产或真实用户交易。

## 3. Layer2 / Near2 Term to Verify / Layer2 技术讨论

### Core Positioning / 核心定位

原始记录中使用了 `Near2`，但内容主要描述的是 Layer2 扩容方案：

- 构建在主链之上。
- 通过 rollups、data channels、状态通道、侧链等方式扩展吞吐。
- 将大量计算或数据异步处理、压缩，再提交到主链。
- 目标是降低成本、提高吞吐率、减轻主链负担。

### Technical Effects / 技术升级效果

现场提到的效果包括：

- 数据发布成本下降。
- rollup 成本可能降低 90% 到 99%。
- 数据可用性、数据发布和数据购物 / data shopping 方向正在演进。

这些比例和术语需要后续源头核验，不能直接当作正式结论引用。

### Main Types / 主流类型

讨论中提到的类型：

- Rollups
- State channels / 状态通道
- Sidechains / 侧链

Rollups 进一步分为：

- Optimistic rollup：应用最广。
- ZK rollup：用零知识证明提升验证效率和安全性。

### Industry Observation / 行业观察

现场观点认为：

- 一些 Layer2 项目出现停滞或关停。
- 仍只有少数几条链保持较活跃运行。
- 生态向 Layer2 靠拢，并不必然为以太坊主网带来直接增益。

我的理解是，这部分提醒我不要只把 Layer2 看成“技术必然进步”。扩容技术还要看生态、开发者、流动性、用户迁移、成本结构和长期维护。

## 4. Web3 入门与去中心化创客社区项目

### Learning Path / 学习路径

有 speaker 是 Web3 零基础，希望借助 AI 做一个去中心化创客社区项目。现场建议是先明确方向：

- 如果偏技术，需要补 Solidity、钱包、智能合约、账户、签名、链上数据、合约交互和基本安全边界。
- 如果偏运营，需要理解社区冷启动、激励设计、治理机制、用户留存和信任建立。
- AI 可以显著提高资料整理、原型开发、代码解释和方案比较效率，但不能替代产品判断。

一句话总结：

```text
先选方向，再补基础；用 AI 提速，但不要用 AI 代替判断。
```

### Project Concept / 项目构想

项目构想是基于创客社群搭建去中心化协作组织：

- 上链记录贡献。
- 用 Agent 或规则系统分配价值。
- 覆盖内容创作、推广裂变、活跃度等非现金价值。
- 给早期贡献者更高权重或生态收益。
- 减少中心化平台的数据垄断、收益分配不透明和随意封号问题。

可能功能包括：

- 个人链上名片。
- 贡献积分或星钻。
- 自动裂变激励。
- 贡献上链存证。
- 基于贡献的治理或收益分配。

### Stage Plan / 阶段规划

第一阶段：

- 做 MVP。
- 聚焦价值分配和链上治理。
- 不追求一开始覆盖所有社区场景。

第二阶段：

- 扩展到本地生活、邻里社区或大众级去中心化应用。
- 让非 Web3 用户也能低门槛参与。

### Feasibility / 可行性评估

技术层面，现场判断是可以实现。

真正难点是：

- 用户运营和冷启动非常难。
- Web3 行业存在周期性信任危机。
- 用户未必有强烈刚需。
- 社区项目需要长期运营，不是合约或积分系统上线就结束。
- 数据是否需要全部上链、哪些数据适合链下存储，需要谨慎设计。

我的理解：去中心化社区项目的核心不是“把贡献上链”，而是找到一个强场景，让用户愿意持续贡献、相信规则，并能低摩擦使用。

## 5. Credit Network Reference / 去中心化信用网络参考

现场提到一个过往参考项目，定位为去中心化信用网络。它试图解决：

- 数据孤岛。
- 隐私泄露。
- 激励缺失。
- 信用数据不可移植。

### Technical Design / 技术设计

记录中提到的设计包括：

- 五维度信用评估：生物特征、能力、财富、健康、行为。
- DID 生成身份。
- 数据加密哈希后上链存证。
- 零知识证明用于隐私保护。
- SBT 动态勋章表示信用或贡献状态。
- 智能合约用于收益分配。

### Application Scenarios / 应用场景

可能应用：

- DeFi。
- 招聘。
- DAO 治理。
- 跨境电商。

### Outcome and Lesson / 结果与教训

该项目 MVP 曾跑通，但后续停滞。关键反思是：

- 数据全部上链是否合理。
- 信用评估维度是否过重。
- 用户是否愿意持续提供数据。
- 隐私保护、激励和实际应用之间是否形成闭环。

这对当前去中心化创客社区项目也有提醒：技术可行不等于产品成立；链上记录必须服务于真实用户价值。

## 6. Feature Sharing and Contribution Incentives / 贡献激励协议

### Product Positioning / 产品定位

现场介绍了一个面向多方协作的收益共享和贡献激励协议，可用于：

- DAO。
- 共创项目。
- 社区协作。
- 多角色任务协作。

核心目标是把贡献记录、审核、激励和收益共享变成可执行的协议流程。

### 1.0 Problem / 1.0 问题

早期版本依赖社区投票验证贡献。

后期问题：

- 治理冷漠。
- 投票积极性低。
- 审核效率低。
- 大量贡献记录无法及时确认。

### 2.0 Optimization / 2.0 优化

优化方向：

- 引入投票委员会，由固定委员负责贡献审核。
- 提升审核效率和公正性。
- 贡献上链审核后，自动 claim 或自动发放 Token 激励。
- 增强投票匿名性。
- 计划采用类似 JK 机制，减少跟风投票和印象票。

### Agent Integration / Agent 结合规划

后续规划包括：

- 搭建 Agent 专用任务接取平台。
- 让 Agent 自动记录贡献。
- 根据任务、交付、审核和规则自动分配激励。

我看到的关键点是：Agent 可以降低记录和分配成本，但治理仍然需要防刷、防串谋、防低质量贡献和申诉机制。

## 7. Web2 用户低门槛接入 Web3

### Core Pain Point / 核心痛点

Web2 用户通常没有钱包，不理解链上操作，也不想一开始就处理助记词、gas、签名、链切换和资产安全。

### Proposed Solution / 解决方案

现场讨论的方案是使用：

- AA wallet / 账户抽象钱包。
- Family wallet 或类似嵌入式钱包服务。
- 邮箱、GitHub 等 Web2 社交账号快捷登录。
- 后台自动创建嵌入式钱包或智能合约钱包。
- gas 代付。
- 批量交易。
- 自定义签名和更友好的恢复机制。

技术上可对应 EIP-4337 的部分能力：

- Smart account。
- Paymaster。
- Bundler。
- UserOperation。
- Session key 或 scoped permission。

### Ownership Boundary / 资产归属边界

现场强调：即使用户低门槛进入，钱包所有权也应该归用户。用户应能在合适时机导出或迁移到自己的钱包，数据和权益需要打通，而不是被平台完全锁住。

这和我的 AI wallet 安全方向有关：低门槛不是“隐藏风险”，而是把复杂度封装起来，同时保留明确的权限、恢复、导出和人工确认边界。

## 8. DAO 组织现状与运营结论

### DAO 状态观察

现场交流了几个 DAO 或社区方向的状态：

- 有些 DAO 正在逐步向 AI + Web3 方向迁移，但不是直接切换路线。
- 有些早期热度很高的社区后续转向线下或乡村建设，线上社群逐渐停滞。
- 有些社区以共同富裕、价值分配或社会实验为目标，继续探索 Web3 社区组织形式。

这些观察不应当作完整项目研究，只能作为共学讨论中的运营样本。

### DAO Operations Takeaway / DAO 运营核心结论

现场最重要的运营结论：

```text
搭建 DAO 门槛低，留住同频种子用户才是关键。
```

更具体地说：

- 早期 100 个核心种子用户决定裂变效率和生态起点。
- 不要试图教育所有用户。
- 应该先筛选同频用户。
- 先做刚需应用，再推广理念。
- 社区治理和贡献激励必须服务于真实需求。

我的理解：DAO 不是 Discord / Telegram 群 + Token。DAO 是一套持续运行的协作、信任、分配和治理机制。

## Excluded Noise / 已排除无关内容

原始记录中包含与会议主题无关的歌曲、体育赛事和训练口号讨论。本笔记不展开记录这些内容，因为它们不影响 AI x Web3 School 学习、黑客松准备或项目判断。

## My Understanding / 我的理解

这次共学对我最有帮助的是，它把几个看似分散的话题连成了一条线：

```text
Agent 整理知识
-> Hackathon API / SDK 支持
-> Web3 基础设施和扩容
-> 去中心化社区贡献记录
-> DAO 贡献激励
-> Web2 用户低门槛进入 Web3
```

对我的 AI Wallet Clear Intent Guard 方向来说，最相关的点有三个：

1. Markdown knowledge agent 的方案可以变成我的项目资料库和 demo 文档助手，用来回答“为什么这个交易风险高”“依据来自哪份规则或笔记”。
2. Web2 用户低门槛进入 Web3 不能只追求无感体验，还要让用户知道权限、签名、资金和撤销边界。
3. Agent 自动记录贡献和分配激励，未来也需要 wallet policy、permission history 和 audit trail，否则会出现自动化执行和责任归属不清的问题。

我的另一个收获是：去中心化社区和 DAO 项目最容易低估运营难度。技术可以把积分、贡献、身份、投票、收益分配做出来，但冷启动、信任、留存、治理参与和真实需求才是长期难题。

## Concepts to Review / 待复习概念

- RAG
- Markdown knowledge base
- Embedding
- Chunking
- Reranking
- Layer2
- Rollups
- Optimistic rollup
- ZK rollup
- State channel
- Data availability
- DID
- SBT
- Zero-knowledge proof
- Contribution incentive protocol
- DAO governance apathy
- Account abstraction
- EIP-4337
- Embedded wallet
- Paymaster
- Session key

## Questions / 问题

- 如果用现有 Agent 做 Markdown 知识库问答，最小索引结构应该是什么：标题、标签、摘要、关键词，还是引用图谱？
- 黑客松项目是否需要真实 sponsor API 接入，还是可以先用 mock data 展示核心 workflow？
- `Near2` 在原始记录中到底指什么？是否应修正为 Layer2 或某个具体项目名？
- 去中心化创客社区的第一版刚需场景是什么：贡献记录、收益分配、身份名片，还是任务协作？
- 贡献激励协议如何避免刷贡献、关系票、投票冷漠和低质量交付？
- Web2 用户通过 AA 钱包进入 Web3 时，什么时候应该展示完整链上风险，什么时候可以隐藏复杂度？
- AI Agent 自动记录贡献时，谁来审核 Agent 的判断，如何处理申诉？

## Follow-up Actions / 后续行动

- 把 `Near2` / Layer2 术语回到原始材料或官方资料中核验。
- 为自己的 Markdown 学习仓库设计一个最小知识库索引：文件、主题、日期、关键词、摘要和可引用段落。
- 黑客松前确认是否有 sponsor API、SDK、技术老师和官方开发资料。
- 继续把 AI Wallet Clear Intent Guard 的 demo 收敛到签名前 review，而不是完整钱包。
- 研究 EIP-4337、embedded wallet、session key 和 paymaster 与低门槛 Web3 onboarding 的关系。
- 观察 Feature Sharing / 贡献激励协议如何处理审核效率、治理冷漠和自动 claim。

## English Summary

This co-learning session covered Markdown knowledge-base agents, hackathon support, Layer2 scaling, decentralized creator communities, contribution incentives, DAO operations, and low-friction Web3 onboarding.

The first practical point was that a Markdown knowledge-base agent can start with a lightweight RAG-like workflow: organize notes, build indexes, retrieve relevant context, and ask the model to answer only from the knowledge base. A full custom RAG stack is not always necessary at the beginning if existing agents can already search and cite local Markdown files.

The hackathon discussion focused on API documents, sponsor technical support, and Web3 developer materials. For a hackathon MVP, the important preparation is to confirm available APIs, SDKs, technical support channels, and which parts can be mocked safely.

The Layer2 discussion covered rollups, state channels, sidechains, data cost reduction, and current ecosystem concerns. The term `Near2` needs verification because the notes appear to describe Layer2 concepts rather than a clearly identified protocol.

The community and DAO discussion emphasized that decentralized contribution systems are technically feasible, but cold start, trust, retention, governance participation, and real user demand are much harder than issuing points or putting records onchain. Contribution incentive protocols need better review processes, anti-gaming design, and possibly Agent-assisted contribution tracking.

The strongest product takeaway for me is that low-friction Web3 onboarding must not hide safety boundaries. Embedded wallets, account abstraction, gas sponsorship, and social login can make onboarding easier, but users still need clear ownership, export, permission, recovery, and signing boundaries.

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, sessions, or `.env` content.
- [x] No private wallet address, private balance, real transaction payload, or private payment data.
- [x] No private contact information, private chat transcript, or unredacted speaker identity.
- [x] Unrelated singing, sports, and training comments are excluded instead of recorded in detail.
- [x] Technical and project claims are marked as learner-provided session notes, not source-verified facts.
- [x] The `Near2` term is marked for verification instead of being treated as a confirmed protocol name.
- [x] Hackathon API and support information is recorded as discussion notes and should be confirmed through official channels.
