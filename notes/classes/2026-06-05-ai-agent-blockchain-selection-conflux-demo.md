# AI Agent Era Blockchain Selection and Onchain App Development Demo - 2026-06-05

## Metadata / 元信息

- Date / 日期: 2026-06-05
- Title / 标题: AI Agent 时代重新审视区块链技术选型与链上应用开发实战
- Source / 来源: learner-provided class notes / 学习者提供的课程笔记
- Type / 类型: technical and product sharing / 技术与产品分享
- Topics / 主题: AI Agent, blockchain selection, Web3 app development, Conflux, onchain voting, AI-assisted development, essential complexity, accidental complexity / AI Agent、区块链技术选型、Web3 应用开发、Conflux、链上投票、AI 辅助开发、本质复杂性、附属复杂性
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-06-05-ai-agent-blockchain-selection-conflux-demo.md`

## Important Caveat / 重要说明

这是一份基于学习者提供记录整理的课程笔记，不是 Conflux 官方文档、区块链选型报告、安全审计、合约开发教程或对任何链性能 / 合规架构 / 项目工具的独立确认。

笔记中涉及的 Conflux 架构、TPS、费用、合规分区、eSpace、公链 / 联盟链定位、工具名称、Demo 仓库、AI 工具链、Conflux SDK、钱包 SDK、区块浏览器 SDK、合约升级流程和项目数据，都来自会议记录，正式引用或开发落地前应回到官方文档、项目仓库、技术文档和公开公告核验。

公开笔记中不记录主讲人真实姓名、主持人姓名、私人联系方式、群聊原文、项目私信路径、未公开 GitHub 地址、真实钱包地址、私钥、助记词、API key 或任何私密账户信息。

This note summarizes learner-provided class notes. It is not official Conflux documentation, a chain-selection report, a security audit, or a complete development tutorial. Technical claims and tool details should be verified against official sources before use.

## Executive Summary / 摘要

本次分享围绕两个核心问题展开：

```text
1. In the AI Agent era, does the logic of choosing blockchain change?
2. How can AI Agents participate in real onchain application development?
```

中文理解：

```text
1. 进入 AI Agent 时代后，项目是否应该使用区块链的判断逻辑会不会改变？
2. AI Agent 如何深度参与链上应用开发实战？
```

分享中的核心判断是：

```text
AI lowers blockchain adoption costs
AI increases demand for neutral coordination
=> the threshold for choosing blockchain may shift
```

过去，很多项目会被问：

```text
Why blockchain?
```

在 AI Agent 大量参与经济活动和跨主体协作之后，问题可能逐渐变成：

```text
Why not blockchain?
```

对我自己的 `AI Wallet Clear Intent Guard` 来说，这篇笔记最有价值的是帮助回答：

```text
Why Web3?
```

如果 Agent 之间需要跨主体支付、共享状态、可验证权限、审计 proof 和中立执行规则，区块链就不只是叙事，而是协调层。

English companion:

The session argued that AI Agents can lower the cost of blockchain adoption and increase the value of neutral shared state. For my own project, this helps answer why Web3 is needed: agent payments, permissions, and audit proof benefit from a verifiable coordination layer.

## 1. Opening and Session Scope / 开场与主题范围

本次分享包括两部分：

1. 理论部分：从 AI Agent 视角重新审视区块链技术选型。
2. 实战部分：用 AI Agent 辅助开发一个链上质押投票 Demo。

公开笔记中不记录主持人、主讲人或提问者真实姓名，只保留角色信息。

## 2. Re-examining Blockchain Selection in the AI Agent Era / AI Agent 时代重新审视区块链选型

## 2.1 Two Common Views / 两种常见观点

分享开头提到行业里常见的两种看法：

- AI 是未来，大量区块链开发团队和资金正在流向 AI。
- AI + Blockchain / AI + Web3 可能是下一轮产业机会。

主讲人从开发者视角提出更具体的问题：

```text
When choosing technology for a project,
does the decision logic for using blockchain change in the AI Agent era?
```

中文理解：

```text
进入 AI Agent 时代后，项目技术选型时选择区块链的决策逻辑是否发生改变？
```

## 2.2 Technology Selection Has No Absolute Answer / 技术选型没有绝对答案

分享中强调，技术选型不是绝对优劣，而是场景权衡。

中心化方案更适合：

- 单一主体拥有和维护业务。
- 数据库、权限和规则都由一个公司或组织掌控。
- 需要快速落地、低成本实现。
- 不需要多方共同维护可信状态。

区块链方案更适合：

- 多机构、多用户、多服务共享同一业务状态。
- 各方不愿受制于单一中心化主体。
- 需要公开规则、可验证状态和清晰权责边界。
- 需要中立协调层。

典型例子是跨机构对账或跨主体协作。区块链的价值不是“更时髦”，而是解决多方信任和状态一致性。

English companion:

The key distinction is not centralized versus decentralized as ideology. It is whether multiple parties need a neutral, verifiable shared state.

## 3. Historical Costs of Blockchain Adoption / 传统区块链落地成本

过去很多项目放弃上链，是因为收益覆盖不了成本。

会议中总结了四类成本。

### 3.1 Performance and Gas Cost / 性能与手续费成本

区块链网络通常比中心化系统吞吐更低、延迟更高，并且用户需要支付 Gas。

这会让普通应用难以承受链上交互成本。

### 3.2 Privacy Cost / 隐私限制成本

区块链数据公开可验证是优势，但也意味着敏感数据很难直接上链。

隐私业务需要额外密码学方案或链下设计。

### 3.3 User Education Cost / 用户教育成本

普通用户很难理解：

- 私钥。
- 助记词。
- Gas。
- 钱包。
- 链上交易不可逆。

这会让 Web3 应用获客和留存更难。

### 3.4 Development Cost / 开发成本

区块链开发门槛高，涉及：

- 合约开发。
- 链上调试。
- 钱包交互。
- 部署脚本。
- 安全审计。
- 链上异常排查。

资深链上工程师稀缺，开发周期也更难控制。

## 4. Why the Cost-Benefit Balance May Change / 为什么成本收益天平会变化

## 4.1 Infrastructure Improvements / 底层基础设施优化

分享中提到，底层公链基础设施正在改善：

- 以太坊通过 Layer 2 扩容降低费用、提升体验。
- 高性能 L1 在 TPS 和成本上持续优化。
- Conflux 等公链在性能和手续费方面有自己的路线。
- 零知识证明等隐私技术让部分隐私业务有机会用更合适的方式上链。

这些都是会议记录，具体性能数字和项目能力需要官方核验。

## 4.2 AI Agent Lowers User-Side Cost / AI Agent 降低用户侧成本

AI Agent 可以作为普通用户和区块链之间的自然语言中间层。

它能帮助用户：

- 用自然语言表达链上操作需求。
- 自动解释私钥、Gas、链上确认等概念。
- 降低用户教育成本。
- 自动组织交易步骤。

此外，AI Agent 本身也可能成为链上原生用户。

如果 Agent 有预算、任务目标和支付能力，它可以像调用传统 API 一样调用链上合约。

我的理解是：

```text
Human users need simpler interaction.
AI Agents need programmable settlement.
Blockchain may serve both.
```

## 4.3 AI Agent Lowers Developer-Side Cost / AI Agent 降低开发侧成本

AI coding 可以承担大量附属复杂性。

例如：

- 生成合约初稿。
- 解析 API 结构。
- 编写测试用例。
- 编写部署脚本。
- 排查链上异常交易。
- 辅助合约安全审计。

这会降低普通开发团队进入链上开发的门槛。

分享中用 Rust 做类比：AI 辅助编程降低了 Rust 入门难度，也可能同样降低区块链开发难度。

## 4.4 AI Agent Increases Blockchain Benefit / AI Agent 提升区块链收益

AI 生态会产生大量跨主体、跨系统、跨服务协作。

陌生 Agent 之间协作天然需要：

- 信任机制。
- 资产托管。
- 权限边界。
- 业务规则。
- 可验证状态。
- 可审计记录。

区块链可以成为中立协调层。

对 `AI Wallet Clear Intent Guard` 来说，这就是非常重要的 `Why Web3` 论证。

English companion:

AI Agents may lower blockchain costs and increase blockchain benefits at the same time. Lower cost comes from natural-language UX and AI-assisted development. Higher benefit comes from cross-agent coordination and the need for verifiable shared state.

## 5. AI Agent in Onchain Application Development / AI Agent 参与链上应用开发

## 5.1 Essential vs Accidental Complexity / 本质复杂性与附属复杂性

分享中引用了《人月神话》的无银弹思想，把软件开发复杂性分成两类：

```text
Essential complexity = what problem to solve
Accidental complexity = how to implement it
```

中文理解：

```text
本质复杂性 = 要解决什么问题
附属复杂性 = 怎么落地实现
```

AI Agent 更适合承担附属复杂性，例如编码、调试、部署、脚本和测试。

人类仍然需要把握本质复杂性：

- 业务目标。
- 用户需求。
- 边界规则。
- 产品取舍。
- 风险判断。

这点对我非常重要。`AI Wallet Clear Intent Guard` 的关键不是让 AI 决定产品，而是让 AI 帮我把确定的产品边界落地。

## 5.2 Demo Target / Demo 目标

实战 Demo 是一个链上质押投票项目。

记录中的基本设定：

- 用户锁定一定数量的原生 token。
- 用户获得对应投票权或 FT。
- FT 可赎回原 token。
- Demo 基于 Conflux 测试网。

公开笔记不记录真实测试地址或仓库链接。

## 6. Demo Development Flow / Demo 开发流程

## 6.1 Requirement Confirmation / 需求确认

第一步是让 AI Agent 帮助梳理需求。

流程大致是：

```text
developer describes voting idea
-> AI asks boundary questions
-> human decides key product choices
-> AI turns discussion into PRD and issues
```

AI 会追问：

- 投票权重怎么算？
- 同一提案能否重复质押？
- 质押投票还是快照投票？
- 哪些数据上链，哪些数据链下？

这一步解决的是本质复杂性。AI 可以帮忙追问和整理，但核心业务选择仍然由人决定。

## 6.2 Code Implementation / 代码实现

第二步是把附属复杂性交给 AI。

会议中提到的做法包括：

- 用长任务模式或任务拆分模式。
- 每个子任务设置可量化验收标准。
- AI 完成后对照 PRD 校验。
- 要求 AI 做自我代码评审。
- 可让 AI 生成 Implementation Notes，记录设计决策。

记录中提到 AI 可以完成：

- 合约编码。
- 基础前端开发。
- 本地部署方案。
- 依赖库选择。

工具名和模式名来自会议记录，具体名称需要核验。

## 6.3 Debugging / 项目调试

初始问题是：AI 生成的前端可能写死钱包地址，导致不能连接浏览器钱包。

解决方案是给 AI 配套工具能力，例如：

- Computer Use。
- 浏览器或钱包插件控制能力。
- 项目专属 SDK。

这样 AI 可以自己操作前端、修复代码、创建测试用例，并跑全流程测试。

这说明 AI 不是只会写代码，关键是给它足够的工具环境，让它能观察、操作和修复。

## 6.4 Onchain Deployment / 链上部署

部署属于典型附属复杂性。

在配置好链交互 SDK、区块浏览器 SDK 和网络参数后，AI 可以协助：

- 编写部署脚本。
- 配置网络参数。
- 部署合约。
- 部署前端。
- 验证提案创建和质押投票流程。

正式项目仍需要人工复核和安全检查。

## 6.5 Contract Upgrade / 合约升级

合约升级复用同一流程：

```text
requirement confirmation
-> development
-> debugging
-> deployment
```

会议中提到，AI 可以产出升级方案文档，包括：

- 旧合约冻结规则。
- 本地存储兼容性测试项。
- 升级验证范围。

记录中也强调，正式上线项目不能省略安全审计。

## 7. Q&A Notes / 答疑要点

### Conflux Positioning / Conflux 定位

现场问题包括 Conflux 是否属于联盟链。

会议中回答的要点：

- Conflux 被描述为双层业务架构。
- 一侧是国内合规公链分区。
- 一侧是海外 EVM 兼容公链分区。
- 另有政企合作联盟链业务。
- 本次 Demo 使用的是海外侧 eSpace 测试网。

这些内容需要以 Conflux 官方资料核验。

### Domestic Blockchain Ecosystem / 国内区块链生态

会议中提到，国内联盟链厂商较多，合规公链方向 Conflux 有自己的定位。

这类市场和行业定位说法需要谨慎处理，不在公开笔记中作为最终判断。

### Competitor Comparison / 竞品比较

有参会者问到其他链是否为 Conflux 竞品。

主讲人没有做直接竞争判断，表示更适合交流技术细节。

### Contact and Materials / 联系方式与材料

会议中提到课件或项目仓库会后可能发至群内。

公开笔记不记录私人联系方式、群链接或未公开项目链接。

## 8. Impact on My Hackathon Direction / 对我方向的影响

这节课帮我补强了 `AI Wallet Clear Intent Guard` 的 `Why Web3`。

我可以更清楚地表达：

```text
AI Wallet Clear Intent Guard needs Web3 when multiple agents, users, services, and payment rails need shared verifiable state.
```

中文表达：

```text
当多个 Agent、用户、服务和支付路径需要共享可验证状态时，Web3 才真正有必要。
```

这比泛泛说“Web3 更安全”更具体。

对我的 demo 来说，区块链可以承担：

- 资产和支付状态。
- 权限边界。
- 用户确认记录。
- 审计 proof。
- 跨主体协调。

AI 则负责：

- 理解用户 intent。
- 提取 payment / Packet / Mandate facts。
- 比较事实与授权边界。
- 生成可读风险说明。
- 辅助实现、测试和部署。

English companion:

The session strengthened the `Why Web3` argument for my project. Web3 matters when agents, users, services, and payments need a shared verifiable state. AI helps users and developers interact with that state, but it should not replace the boundary itself.

## 9. Development Workflow Lessons / 开发流程收获

这节课对黑客松工程流程也很有启发。

我可以把开发拆成：

```text
human decides essential complexity
AI handles accidental complexity
human reviews critical boundaries
AI iterates implementation
human verifies final proof
```

对 `AI Wallet Clear Intent Guard` 来说，这意味着：

- 人类先决定第一版 review surface。
- AI 帮忙生成 PRD、issues、UI flow 和测试用例。
- AI 可以辅助实现 demo。
- 关键安全边界、钱包权限、真实资产接入必须由人复核。
- 正式提交前保留明确 proof。

## 10. Action Items / 行动项

- [ ] 用这节课的逻辑重写 `Why Web3`：跨 Agent 支付、权限、审计和可验证状态。
- [ ] 把 `AI Wallet Clear Intent Guard` 的本质复杂性和附属复杂性分开。
- [ ] 为第一版 demo 写一页 PRD。
- [ ] 把 demo 拆成 issues：review surface、facts extractor、policy check、risk label、audit proof。
- [ ] 使用 AI 辅助生成测试用例，但关键安全边界人工复核。
- [ ] 继续保持 mock-safe，不使用主钱包、真实私钥或真实大额资产。

## My Understanding / 我的理解

这节课让我对“为什么 AI x Web3 不是硬凑”更有信心。

如果只是一个单主体应用，中心化方案往往更便宜、更快、更简单。

但如果是 Agent economy：

- Agent 可能代表不同用户。
- Agent 可能调用不同服务。
- Agent 可能产生支付和结算。
- Agent 之间可能互不信任。
- 用户需要可验证边界和审计记录。

这时候区块链作为中立协调层就有意义。

对我来说，最关键的一句话是：

```text
AI changes the cost-benefit threshold of choosing blockchain.
```

中文理解：

```text
AI 改变了选择区块链的成本收益临界点。
```

## Questions / 问题

- `AI Wallet Clear Intent Guard` 的 `Why Web3` 能否用一句话说清楚？
- 第一版 demo 是否需要真实链上 proof，还是 mock proof 足够？
- 如果要接入测试网，哪个环节最值得真实上链？
- AI 能帮忙写 demo，但哪些安全边界必须手工确认？
- 在 6 月 13 日提交前，应该优先完成 PRD、UI flow，还是最小代码闭环？

## English Summary

The session argued that AI Agents may change the cost-benefit threshold for choosing blockchain. AI lowers user and developer costs, while agent-to-agent collaboration increases the need for neutral, verifiable shared state.

The practical demo showed how AI Agents can help with onchain application development: requirement clarification, PRD generation, issue planning, coding, debugging, deployment, and contract upgrades. The key lesson is to let humans own essential complexity while AI handles accidental complexity.

For `AI Wallet Clear Intent Guard`, this strengthens the `Why Web3` argument: Web3 is useful when payments, permissions, and audit proof must be shared across users, agents, and services.

## Verification Status / 核验状态

- [x] Notes are based on learner-provided class notes.
- [ ] Conflux architecture and positioning not independently verified.
- [ ] TPS, fee, SDK, wallet SDK, and explorer SDK details not independently verified.
- [ ] Tool names and demo repository not independently verified.
- [ ] Conflux domestic / overseas partition descriptions not independently verified.
- [ ] No private project link or contact path is included.

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, sessions, or `.env` content.
- [x] No private contact information, group transcript, personal identity details, or unpublished GitHub link.
- [x] No real wallet address, transaction payload, deployment key, or private account screenshot.
- [x] Host, speaker, and audience identities are anonymized.
- [x] Chain performance, positioning, architecture, and tool claims are treated as meeting notes requiring official verification.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、token、cookie、session 或 `.env` 内容。
- [x] 不包含私人联系方式、群聊原文、个人身份细节或未公开 GitHub 链接。
- [x] 不包含真实钱包地址、交易 payload、部署密钥或私密账户截图。
- [x] 主持人、主讲人和提问者身份已匿名化。
- [x] 链性能、定位、架构和工具相关说法都作为会议记录处理，正式引用前需要官方核验。
