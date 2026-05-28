# AI x Web3 School Co-learning - Hackathon Project Direction, Agent Reputation, Teaming, and Web3 Career Choices - 2026-05-28

## Metadata / 元信息

- Date / 日期: 2026-05-28
- Title / 标题: 黑客松项目方向、Agent 声誉体系、组队建议与 Web3 求职方向共学讨论
- Source / 来源: learner-provided meeting notes / 学习者提供的会议整理
- Type / 类型: co-learning session / 共学答疑与项目讨论
- Topics / 主题: hackathon project direction, AI wallet, multi-agent risk review, agent reputation, account abstraction, x402, escrow, team formation, Web3 career choices / 黑客松项目方向、AI 钱包、多 Agent 风险审查、Agent 声誉、账户抽象、x402、托管、组队、Web3 求职方向
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-05-28-co-learning-hackathon-project-direction-agent-reputation-career.md`

## Important Caveat / 重要说明

这是一份基于学习者提供材料整理的共学笔记，不是逐字稿，也不是对任何项目方向、协议组合、求职路径或黑客松结果的正式背书。笔记中所有人物均匿名化为 speaker，不记录私人身份、私人聊天内容或无关讨论。

关于几个术语：原始记录中出现 `Swift`、`COBOL`、`ERC-8313` 等写法。结合上下文，`Swift` 可能指金融转账语境下的 `SWIFT`，`COBOL` 可能是需要复核的协议或项目名，`ERC-8313` 也需要回到原始资料或官方文档确认。因此本笔记保留这些词为 `term to verify`，不把它们写成已核实技术结论。

This note summarizes learner-provided co-learning notes. It is not a verbatim transcript, project endorsement, protocol validation, career advice, or investment advice. Terms such as `Swift`, `COBOL`, and `ERC-8313` are preserved as terms to verify.

## Session Overview / 讨论概览

本次 co-learning 主要围绕五类问题展开：

- 已有 AI + 转账原型如何收敛成黑客松项目方向。
- 黑客松项目应先找真实场景，再匹配技术。
- 项目信息渠道、组队结构、前端展示和社区资源。
- AA / A2A / Agent reputation 方向的项目可行性、范围控制和测试网要求。
- Web3 后端语言选择与求职方向判断。

English companion:

The session focused on hackathon project direction, real-world scenario selection, team formation, AI-assisted project planning, agent reputation and account abstraction ideas, mock-versus-testnet scope control, backend language choices, and Web3 career positioning.

## 1. Speaker A: 项目方向与黑客松赛道咨询

### 已有基础

Speaker A 已经在内部学习中完成了一个小项目：

```text
自然语言输入
-> 后端 AI 识别意图
-> 执行简单转账与 Swift / SWIFT-like flow
-> 流程已跑通
```

这说明项目已经有一个可运行的最小链路，但仍缺少更清楚的真实场景、目标用户和黑客松叙事。

### 核心困惑

Speaker A 的主要困惑是方向太多：

- 多 agent 审查。
- 风控。
- Web3 量化交易策略。
- Web3 操作合规性评估。
- 用户审核后执行。
- Agent 自动执行。

AI 给出了很多方向，但这些方向之间差异很大，导致不知道应该适配哪个黑客松赛道，也不知道怎样把已有原型升级成一个可提交项目。

### 初步想法

Speaker A 想参考传统金融里的多 agent 风险评估产品，并迁移到 Web3：

- 使用 1 到 3 个 agent 评估 Web3 操作。
- 评估维度包括风险、合规性和操作合理性。
- 评估后由用户审核，或在明确授权范围内由 agent 自动执行。
- 想确认这个方向是否适合作为 GitHub 提交项目。

### 个人短板

Speaker A 自评 Web3 经验不足，缺少场景化思路。这不是单纯技术短板，而是产品判断短板：不知道真实用户为什么需要这个东西、在哪个场景里用、什么风险最值得被解决。

English companion:

Speaker A already has a working natural-language-to-transfer prototype. The challenge is not only technical expansion, but direction selection. The current ideas include multi-agent review, risk control, compliance evaluation, and automated execution, but the project needs a sharper real-world scenario and a clearer hackathon story.

## 2. Speaker B: 方向指导与关键建议

### 核心思路

Speaker B 给出的核心建议是：

```text
先找真实场景，再匹配技术。
```

不要从“我会什么技术”出发，然后硬找场景。更好的路径是：

1. 找到真实痛点。
2. 确认用户是谁。
3. 说明现有流程为什么不好。
4. 再决定 AI、agent、wallet、signature、reputation、escrow 或 onchain proof 哪些技术真正必要。

### 参考案例

现场提到两个参考方向。

第一个是链上贡献证明 + 公平分配项目。它不是从协议出发，而是从日常协作分配痛点出发，再结合 AI + Web3 去记录贡献、分配收益或辅助治理。

第二个是 AI + Web3 安全钱包。它关注钱包异常转账检测，在发现风险时自动将余额转移到安全钱包。这类方向的价值来自明确的安全场景，而不是“AI 控制钱包”本身。

### 权限提醒

Speaker B 特别提醒，AI 处理转账或 Swift / SWIFT-like flow 时必须做好权限控制。

我的理解是，这里的权限控制至少包括：

- AI 不能持有或输出私钥。
- AI 不能绕过 wallet policy。
- 高风险操作必须人工确认。
- 自动执行必须有额度、对象、时间、网络和用途限制。
- 所有执行动作都要有审计日志和失败处理路径。

### 黑客松赛道

本次黑客松主要围绕 AI + Web3，不需要过早被过细的赛道分类限制。更重要的是让项目逻辑闭环、场景真实、demo 可展示。

English companion:

Speaker B's main advice was to start from a real scenario instead of starting from a technology stack. AI-controlled transfers or SWIFT-like flows must have strict permission boundaries. For the hackathon, the broader AI + Web3 theme matters more than forcing the project into a narrow sub-track too early.

## 3. Speaker C: 黑客松参与、项目信息渠道与组队建议

### 项目信息渠道

关于如何发现出圈项目，Speaker B 提到主要渠道包括：

- 黑客松现场。
- Twitter / X。
- 主办方、赞助方和社区发布的信息。
- 项目展示、获奖名单和后续传播材料。

我的理解是，黑客松现场能看到“什么 demo 能打动人”，Twitter / X 能看到“什么叙事正在传播”。两者结合，比单纯看技术文档更容易理解项目为什么出圈。

### 参赛经验

Speaker B 提到自己只参加过一场大型线下黑客松，是去年上海 IS 线下黑客松，并且当时是 solo 完成。

公开笔记中只记录经验结论，不记录任何私人细节。

### 组队建议

Speaker B 不建议单人 solo，更推荐多元化组队。

一个较稳的核心三人组合是：

| 角色 | 价值 |
|---|---|
| 主讲人 / pitcher | 负责讲清问题、场景、价值和 demo 叙事。 |
| 开发 / developer | 负责把核心流程跑通。 |
| 产品 / product | 负责收敛需求、用户路径、范围和优先级。 |

加分项是加入 UI / 设计师，让展示效果更完整。黑客松作品不只看技术逻辑，也看可理解性、可演示性和第一眼观感。

### 前端工具

现场提到可以用 AI 生成可交互网站，按需求快速生成样例网站，帮助提升 demo 展示效果。

关于 Google Stitch，现场反馈是体验不稳定：

- 去年较难用。
- 今年年初一度好用。
- 近期更新后又变得不好用。

这个结论是现场经验，不代表稳定评测，需要随着工具版本变化重新判断。

### 优质社区

现场提到两个社区：

- 良心道。
- Expenda，本次主办方。

English companion:

Hackathon project discovery happens through the event itself, Twitter / X, sponsor updates, public demos, and winners' lists. Teaming is strongly recommended. A practical team structure is pitcher, developer, and product, with UI/design as a strong bonus for presentation quality.

## 4. Speaker E: AA 协议 + Agent 声誉项目方案咨询

### 项目方案

Speaker E 提出一个围绕 AA / A2A 交易和 Agent 声誉的项目方向，试图整合多个协议或组件：

- ERC-8004。
- COBOL / term to verify。
- ERC-8313 / term to verify。
- x402 / 402-like small payment settlement。
- 托管 / escrow。

目标是实现 AA / A2A 交易，并打造 Agent 全流程声誉体系。

### 核心流程

整理后的流程可以分成三层。

第一层是初始筛选：

```text
读取 Agent 历史履历
-> 协议或规则评估
-> 生成初始声誉
-> 写入 ERC-8004-like profile / registry
```

第二层是任务后评估：

```text
任务完成
-> 评估交付质量
-> 更新声誉
-> 记录可复查 proof
```

第三层是支付与奖惩：

```text
小额任务
-> 402 / x402-like 批量结算

大额任务
-> escrow / 托管
-> 根据交付与评估结果释放、惩罚或退款
```

### AI + 规则双模校验

Speaker E 的创新点在于使用 AI + 规则双模校验：

- 规则用于硬性约束，例如付款金额、任务是否完成、是否符合字段要求。
- AI 用于处理更模糊的质量评估，例如交付物是否符合意图、是否有明显敷衍或跑题。
- 两者结合可以降低单纯 AI 评估的幻觉风险，也能弥补规则系统过于僵硬的问题。

### 核心疑问

Speaker E 的问题包括：

- 这个方向是否已经有人做过？
- 能否落地？
- 功能是否铺得太开，缺乏创新？
- 是否必须上测试网？
- 时间紧时能否用 mock 完成流程？

### Speaker B 答复

Speaker B 的答复可以概括为：

- 有人做过类似方向，但 AI 双模评估可以是创新点。
- 不必过度担心功能铺开，关键是逻辑闭环和流程跑通。
- 不强制上测试网或主网。
- 允许 mock，流程合理即可。
- 上测试网是加分项，不是必要条件。
- 获奖不只看技术复杂度，创意与叙事更重要。

我的理解是，这类项目最容易的问题不是“技术不够复杂”，而是“范围太大但 demo 没有主线”。如果要做黑客松版本，应把主线压成：

```text
Agent 接单
-> 根据 profile / reputation 初筛
-> escrow 或小额支付授权
-> 任务交付
-> AI + rule 双模评估
-> 更新 reputation
-> 生成 proof
```

English companion:

Speaker E proposed an AA / A2A agent reputation project that combines identity, reputation, task evaluation, small-payment settlement, and escrow. Speaker B's response was pragmatic: similar ideas exist, but AI-plus-rule dual evaluation can be a useful innovation. Testnet deployment is a bonus, not a hard requirement. A mock flow is acceptable if the logic is coherent and the demo is clear.

## 5. AI 协作方法

### Speaker E 的方法

Speaker E 会用 4 到 5 个 AI 循环脑暴，然后自己最终审稿，筛选最优模型或方案。

这个方法的价值在于：

- 多模型输出可以带来不同角度。
- 人类负责最终判断、取舍和一致性。
- 可以避免被单一模型的第一版答案带偏。

风险是，如果没有明确评审标准，多模型脑暴会让方向更多、更散。因此最好提前设定筛选标准：

- 是否能在黑客松时间内 demo。
- 是否有真实用户或场景。
- 是否能解释 AI + Web3 的必要性。
- 是否有安全边界。
- 是否能形成一个 3 分钟 pitch。

### Speaker B 的 Agent Flow

Speaker B 提到自用的 Agent Flow：

```text
CC 生成需求方案
-> Codebase 评估优化
-> 双方达成一致
-> Codebase 执行
-> 高阶模型 Review
```

优势是节省 token。首次解析代码库或需求时消耗较高，但后续可以复用缓存、上下文或已有结构，让执行和 review 更高效。

我的理解是，这个流程本质上是把 AI 从“单次问答”升级成“分工协作”：

- 一个模型负责发散。
- 一个模型负责贴近代码库和实现。
- 人类负责决策。
- 高阶模型负责最后审查。

English companion:

Two AI collaboration patterns were discussed. Speaker E uses multiple AI models for brainstorming and then performs human editorial selection. Speaker B uses a staged flow: requirements generation, codebase evaluation, agreement, implementation, and high-level review. Both methods keep human judgment at the center.

## 6. 技术栈与 Web3 求职建议

### 后端语言选择

现场对后端语言的判断是：

| 方向 | 更常见选择 | 理由 |
|---|---|---|
| 交易所 / 传统 Web3 公司 | Java | 更重视稳定性、成熟工程体系和长期维护。 |
| 创新项目 / 高性能需求 | Go | 高并发、轻量、服务通信友好，适合快速构建服务。 |

现场还提到目前有大量 PHP 转 Go 的开发者。这是行业观察，不是硬性学习路线。

### 求职方向

现场建议优先考虑海外远程机会。

对国内 Web3 公司则相对谨慎，原因包括：

- 数量较少。
- 稳定性不足。
- 项目质量参差不齐。
- 部分项目可能偏资金盘或灰色方向。

我的理解是，求职方向不能只看“Web3”标签，而要看项目是否真实、团队是否稳定、业务是否合规、薪酬是否可靠，以及自己是否能在其中积累长期能力。

English companion:

For backend engineering, Java is common in exchanges and more traditional Web3 companies because of stability and mature engineering systems. Go is common in newer or high-performance projects because it is lightweight and concurrency-friendly. For career direction, overseas remote roles were preferred, while domestic Web3 companies were treated with caution due to instability and project quality variation.

## 7. My Understanding / 我的理解

这次 co-learning 对我最重要的启发是：黑客松方向不能只靠“技术组合”成立，必须回到真实场景。

几个关键理解：

- AI 生成很多方向时，反而要更强地收敛，而不是继续扩展。
- 钱包、转账、SWIFT-like flow、agent 自动执行都必须先定义权限边界。
- 黑客松不要求把所有协议都真实接入，mock 可以成立，但流程必须可信、闭环、可解释。
- Agent reputation 方向的重点不是“记录声誉”本身，而是声誉如何影响任务分配、支付、托管、奖惩和责任边界。
- 组队结构会影响项目能否讲清楚。开发能跑通流程，产品收敛范围，主讲人讲清价值，设计提升展示。
- 创意和叙事不等于空讲故事，而是把问题、用户、技术、demo 和未来可能性串成一条线。

对我自己的方向，AI Wallet Clear Intent Guard 可以继续收敛成：

```text
真实场景：Agent 或用户准备发起支付 / 钱包操作。
核心问题：用户看不清意图、权限、收款方、金额、风险和失败路径。
AI 价值：把自然语言意图和 deterministic payment / wallet facts 对齐。
Web3 价值：wallet policy、signing boundary、audit log、receipt、reputation 或 escrow。
Demo 范围：mock payment request + policy check + AI review + human confirmation。
```

English companion:

The strongest takeaway is that a hackathon project should not be a pile of protocols. It needs a real scenario, a user, a risk, a bounded workflow, and a demoable loop. For my wallet safety direction, the right scope is not "AI controls money," but "AI helps users understand intent, permissions, payee, amount, risk, and failure paths before wallet execution."

## Concepts to Review / 待复习概念

- AI wallet
- Agent wallet
- Multi-agent risk review
- Wallet permission control
- Natural-language-to-payment flow
- SWIFT / Swift term to verify
- Account abstraction
- A2A / agent-to-agent interaction
- ERC-8004
- ERC-8313 term to verify
- x402 / HTTP 402 payment
- Escrow
- Agent reputation
- AI + rule dual evaluation
- Hackathon pitch structure
- Google Stitch
- Go backend in Web3

## Questions / 问题

- AI Wallet Clear Intent Guard 的真实用户应该先选普通钱包用户、DAO 财务成员，还是 autonomous agent operator？
- 如果 demo 只用 mock payment request 和 mock policy，如何让评委相信它未来可以接入真实钱包？
- Agent reputation 是否应该影响付款权限，还是只作为人工审核参考？
- AI + rule 双模评估中，哪些字段必须 deterministic，哪些部分可以交给 AI 判断？
- 黑客松 pitch 里应该强调钱包安全、Agent commerce，还是 permission / safe execution？
- 如果组队，我最适合承担 product / research / proof documentation 还是 demo narrative？

## Follow-up Actions / 后续行动

- 把 AI Wallet Clear Intent Guard 黑客松方向继续收敛到一个 3 分钟可讲清的 demo loop。
- 设计一个 mock payment request + wallet policy + AI review + human confirmation 的最小展示流程。
- 继续复查 Task 015、Task 016、Task 017，把 payment flow、x402 / CAW loop 和 Agent profile 串成一条项目叙事。
- 调研 ERC-8004、x402、agent reputation、escrow 在黑客松 demo 中哪些需要真实接入，哪些可以 mock。
- 复核 `SWIFT / Swift`、`COBOL`、`ERC-8313` 等术语，避免后续公开引用时误写。
- 若进入组队阶段，优先寻找开发、产品、pitch / design 互补的队友。

## English Summary

This co-learning session discussed how to turn early AI + transfer prototypes into hackathon-ready AI + Web3 projects. The most important advice was to start from a real scenario before choosing the technology stack. Multi-agent risk review, AI wallet safety, agent reputation, account abstraction, x402-style payments, escrow, and Web3 compliance can all be useful, but only if they serve a clear user problem.

The session also covered hackathon project discovery, team formation, front-end demo tools, and community resources. A strong hackathon team usually needs someone who can explain the project, someone who can build, and someone who can shape product scope. UI and design can significantly improve demo quality.

For the agent reputation proposal, the key point was that similar ideas exist, but AI-plus-rule dual evaluation may still be a valuable innovation. A testnet deployment is helpful but not mandatory; a coherent mock flow can be enough if the logic and story are clear.

For career direction, the discussion contrasted Java-heavy traditional Web3 companies and exchange roles with Go-heavy innovative or high-performance projects. Overseas remote roles were preferred, while domestic Web3 opportunities were treated with caution because project quality and stability vary widely.

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, or `.env` content.
- [x] No private wallet balances, real-asset transaction details, payment payloads, or private screenshots.
- [x] No private contact information or personally identifying speaker details are included.
- [x] Speaker labels are anonymized.
- [x] Project and career comments are recorded as co-learning discussion notes, not guarantees, endorsements, investment advice, or employment advice.
- [x] Terms that need source verification are explicitly marked as terms to verify.
