# Ethereum Chinese Weekly - 2026-06-01

## Metadata / 元信息

- Date / 日期: 2026-06-01
- Title / 标题: Web3 Beautiful Tech x EISPANDA 以太坊中文周会
- Source / 来源: learner-provided full meeting record / 学习者提供的完整会议记录
- Format / 形式: weekly online meeting / 每周一线上周会
- Organizers / 主办: Web3 Beautiful Tech x EISPANDA
- Participants / 参会角色: host A, teacher B, speaker C, teacher D, community members / 主持人 A、安老师 B、强哥 C、邓伦老师 D、社区成员
- Type / 类型: meeting note / 外部会议纪要
- Topics / 主题: Ethereum ecosystem weekly news, AI updates, DeFi security, EF governance, Base upgrade, MCP, community activities / 以太坊生态周报、AI 快讯、DeFi 安全、EF 治理、Base 升级、MCP、社区活动
- Status / 状态: summarized from learner-provided notes, not fully source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开

## Important Caveat / 重要说明

这是一份外部会议整理笔记，主要用于 AI x Web3 School 学习记录和行业观察。内容包含快讯转述、分享人观点、社区讨论和部分未经逐条核验的项目 / 协议 / 政策信息。

因此，本笔记不应被当成投资建议、法律意见、完整研究报告或已验证新闻源。涉及安全事件、价格涨跌、稳定币合作、监管动作、机构收购、融资、协议升级、模型能力、硬件规格、项目关停或市场排名等内容，后续如要引用到正式研究、产品判断或公开表达中，需要回到官方公告、链上数据、协议文档、监管文件或可信新闻源复核。

关于若干术语和项目名：

- `DDCC`、`Stella`、`Ondor`、`Boss`、`ZAMA`、`KASHY`、`Quorbin`、`Deepend` 等项目或机构名，建议在正式引用前复核拼写和背景。
- `TE` / TEE、`X02`、`MCP`、`Gemini 31B`、`Deepseek V4 Pro` 等相关术语，如果后续要进入研究、产品文档或演示稿，应回到官方资料核验定义和规格。
- 会中涉及的 DeFi 风险警告、监管归因、市场判断、基金会内部矛盾、项目清仓逻辑等，都应视为分享人观点或会议转述，不是最终定论。

This is an external meeting note for learning and industry observation. It includes reported news, speaker views, and community discussion. It should not be treated as investment advice, legal advice, a complete research report, or fully verified news. Any security incident, market move, regulation, upgrade, hardware/model claim, project shutdown, or ecosystem ranking should be checked against primary sources before formal use.

## Executive Summary / 摘要

本次周会主要包括五个部分：

1. 开场介绍与主办方背景说明。
2. 区块链与 AI 快讯，覆盖 DeFi 安全、监管动作、机构并购、AI 模型与融资动态。
3. 以太坊身份危机解析，围绕 EF 人员流失、价值观路线、L2 价值捕获和 ETH 叙事空间展开。
4. Base 链技术升级与 Base MCP 发布，重点讨论安全架构、提款体验、Rust 客户端和 AI Agent 链上交互。
5. 社区活动同步，包括 AI Web3 School 黑客松和以太坊之夏 2026 的城市活动进展。

我的核心收获是：今天的内容再次把“以太坊生态的长期价值”和“现实执行效率与用户采用”之间的张力摆到了台面上。无论是 EF 人事争议、Base 的 TEE + ZK 过渡设计，还是 Base MCP 对 Agent 经济的提前布局，都在说明一件事：

```text
理想中的去中心化、安全和开放价值，
必须持续和真实用户体验、可验证执行、生态经济模型一起被讨论。
```

English companion:

The meeting covered ecosystem news, DeFi security, regulation, EF governance debate, Base upgrades, MCP-based agent interaction, and community events. My strongest takeaway is that Ethereum's long-term values now have to be discussed together with user experience, execution speed, verifiability, and value capture.

## 中文详细纪要

### 一、开场介绍

本次周会由 Web3 Beautiful Tech 与 EISPANDA 联合举办。

主办方定位：

- Web3 Beautiful Tech：开放型 Web3 技术学习 DAO 组织。
- EISPANDA：华语以太坊建设者社区，通过教育、公共服务和技术创新连接华语与国际以太坊生态。

主持人 A 在开场中宣布，本次流程将先由安老师分享上周区块链与 AI 快讯，再进入后续以太坊生态、Base 技术和社区活动部分。

### 二、区块链与 AI 快讯（安老师）

#### 1. 项目与市场动态

快讯部分首先覆盖了多个项目和市场动态：

- `Stella`：记录中提到某计划将在 2027 年把代币化证券接入该网络，受消息刺激代币短期上涨约 30%，接近翻倍。
- `Ondor`：创始人意外去世，新 CEO 已通过推特宣布接任，但未公开说明去世原因。
- 格鲁吉亚：选定 Tether 作为官方稳定币合作方，并计划发行新的稳定币。
- `Reserve` 安全事件：介绍了资产恢复框架，不同时间点的持有人按不同折扣比例处理。
- 新业务线：记录中提到 `Boss` 相关杠杆化美债收益产品进入测试阶段。

这些内容都需要进一步回到官方公告或链上数据核验，但它们反映出两个趋势：

- 稳定币、RWA 和美债收益类产品仍在持续扩张。
- 市场依然会对“机构接入”与“现实世界资产叙事”做出快速价格反馈。

#### 2. DeFi 安全与风险

安全部分的信息量很大，也很尖锐。

记录中转述了一位 DeFi 联创的警告性观点：

```text
所有 DeFi 都不安全
```

并进一步提到：

- AI 编码代理的漏洞发现能力可能已经超过部分人类审计效率。
- Claude 新模型被描述为可以攻破大量协议漏洞，但相关能力尚未向公众开放。

此外，记录中给出了 4 月的 DeFi 风险数据：

- 被盗金额达 6.3 亿美元。
- TVL 下降约 14%。
- 但仍有 80% 以上资产沉淀在 DeFi 中。

跨链桥攻击事件则进一步说明了典型风险：

- `Cosmos / Gravity` 跨链桥被盗约 540 万美元，疑似与合约密钥泄露相关。
- 某以太坊小众跨链桥被盗约 80 万美元，攻击者通过控制高点密钥伪造验证授权，并在短时间内伪造大量 Wrapped 资产。

会中的安全建议非常直接：

- 在年化收益有限而被盗风险偏高的情况下，应该谨慎评估 DeFi 仓位。
- 安全不只是协议本身，还包括密钥管理、桥接结构和验证模型。

我的理解是，这一段对我现在的方向也很重要，因为 `AI Wallet Clear Intent Guard` 本质上也是在回答：

```text
在执行之前，如何让用户看见权限、路径和风险？
```

#### 3. 监管与机构动作

本段覆盖了多个监管和机构事件：

- Circle 依法冻结与某隐私合约相关的 CEUSDC，涉及 1260 万美元。
- 某基金会申请 2027 年运营资金，并计划在 6 月 8 日发起链上投票。
- 英国首次依据俄罗斯制裁规则对部分加密交易所实施制裁。
- `Strategy` 回购大额可转债，并且当周未增持比特币。
- 美国 CFTC 被描述为对预测市场和部分加密衍生品拥有更强管理角色。
- 首个受监管比特币永续合约获批。
- 韩国金融机构继续收购本地加密交易所股权。
- ICE 呼吁推出 7×24 小时链上永续合约，并与去中心化平台直接竞争。

这些内容共同指向一个现实：

- 稳定币、永续合约、预测市场、交易所股权和机构基础设施都在快速与传统监管和金融体系交织。
- 加密已经不再只是“链上原生实验”，而是越来越深地进入法务、资本和合规系统。

#### 4. 融资、数据与 AI 进展

AI 相关部分包括：

- OpenRouter 完成 1.13 亿美元 B 轮融资，估值超 10 亿美元。
- 某二级基金清仓 Uni 与 Compound，亏损金额巨大。
- 记录中提到 `Swift` 当日解锁约 1000 万美元，主网频繁宕机。
- `Eidencloud` 在 6 月 1 日解锁总流通量 6%。
- Deepseek V4 在 OpenRouter 调用量榜首，腾讯混元位列第二，中国模型占据多席。
- Meta 计划推出可穿戴 AI 吊坠等 MCP 设备。

这里最值得后续追踪的不是单条新闻本身，而是：

- AI 模型正在从“能力竞争”转向“分发与调用平台竞争”。
- 模型聚合平台本身成为高增长基础设施。
- MCP / 可穿戴设备意味着 AI 正在寻找更贴近日常交互和代理执行的入口。

### 三、以太坊身份危机解析（强哥）

#### 1. 社区核心动荡

记录中提到，2026 年以来已有多位以太坊核心成员离开，其中 5 月单月流失 5 人。

会议里总结的争议根源是：

- EF 强调开源、隐私、安全等价值观协议。
- 但社区认为 EF 在市场增长与用户采用问题上优先级下降。
- 价值观导向和经济发展导向之间出现分歧。

一些社区应对思路包括：

- 成立新的机构。
- 管理更大规模资金。
- 专门弥补以太坊经济发展层面的空白。

#### 2. 市场与生态表现

会中把这场争论与以太坊当前市场表现直接关联起来：

- ETH 年内跌幅较大。
- ETH/BTC 交易对下探。
- 网络收入相较于 2021 年高点被多条链超越。

这些数据需要后续逐条核验，但它们体现出讨论焦点已经从“以太坊是不是技术上正确”转向：

```text
它是否还能持续赢得市场、开发者和价值捕获？
```

#### 3. Vitalik 回应与核心观点

记录中总结的 Vitalik 回应方向包括：

- EF 应退居幕后，不再主导生态。
- 更专注于核心价值。
- 认为部分人员流失可能是外部新机构形成的必要条件。

三项被强调的竞争优势包括：

- AI 辅助形式化证明，帮助提升客户端可验证性。
- 在同步或非同步网络下的 BFT 共识能力。
- 逐步去除对中介和中心化机构的依赖。

#### 4. David Hoffman 清仓逻辑

会中总结了 David Hoffman 清仓 ETH 的核心逻辑：

- 不是简单看空 ETH，而是认为其再成为“顶级货币”的空间显著收缩。
- 协调矛盾过多：去中心化 vs 高效执行，L2 独立发展 vs 生态绑定，路线图执行 vs 技术创新不确定性。
- 生态发展未能完成预期中的大规模 PMF。
- 价值捕获不足，ETH 未能从稳定币、DeFi 等上层应用中充分享受额外价值回流。

我的理解是，这一段的核心不是“谁对谁错”，而是它非常诚实地暴露了以太坊当前的结构性张力：

- 坚持去中心化价值，会牺牲部分执行速度和商业配套。
- 追求现实采用与效率，又可能侵蚀原本最重要的理念壁垒。

### 四、Base 链技术升级与 Base MCP 发布（邓伦老师）

#### 1. Base 链硬分叉升级

Base 的升级部分很值得仔细看，因为它呈现出一种非常典型的工程折中。

会中提到：

- 这是脱离 OP Stack 后的首次重大硬分叉。
- 原定 5 月 13 日上线，因同步快照 bug 延到 5 月 29 日。
- 核心团队约 12 人，在 92 天内完成大规模重构。

基础性能优化包括：

- 区块构建稳定性提升到 99%。
- 日空块数量大幅下降。
- 应用层 TPS 测试数据从 500 提升到 5000。
- 发布节奏加快到双周版本。

#### 2. 安全与架构变化

升级最核心的部分是安全架构：

- 引入 multi-proof 多重验证。
- 主路径采用 AWS TEE 执行区块并签名。
- 搭配 ZK 证明做辅助验证。
- 提款时间从 7 天缩短到 1 天。

会议里把这描述成：

```text
TEE + ZK 过渡方案
```

也就是说，ZK 是长期目标，TEE 是现阶段更现实的工程路径。

这让我想到一个很重要的问题：Base 的路线不是“纯理念优先”，而是典型的：

- 先把用户体验和工程可行性提升上去。
- 再逐步向更理想的最终形态靠近。

#### 3. 执行端重构与客户端整合

记录中提到：

- 放弃 OP Geth / OP Node 组合。
- 转向 Rust 单客户端实现。
- 后续计划把执行层与共识层进一步合并，简化部署。

对开发者和用户的影响则相对可控：

- 用户基本无感。
- 节点需要切换到新客户端。
- 开发者兼容性影响不大。

#### 4. Base MCP 发布

Base MCP 是本次会议里和 AI x Web3 最直接相关的一部分。

其核心功能被描述为：

- 为本地 AI Agent 提供 Base 链上操作的标准化接口。
- 支持聊天式交互 Base 生态。

支持操作包括：

- 转账。
- 换币。
- 查账。
- 抵押。
- 协议交互。
- 与 `X02 / X02 term to verify` 支付服务兼容。

使用流程是：

```text
本地安装 AI Agent
-> 安装 Base MCP
-> 通过 OAuth 授权访问 Base 账户
-> 发起交易
-> 用户手动确认签名
```

安全保障的关键点是：

- 所有链上操作仍然需要用户批准。
- Agent 和服务端拿不到私钥。
- 交易在本地构建，减少钓鱼和中间劫持风险。

对我来说，这一段非常重要，因为它几乎就是我当前方向的一个现实参考：

```text
AI 不直接持有权力
-> AI 组织意图与流程
-> 用户保留签名与最终确认
-> 本地构建和可验证边界降低风险
```

### 五、社区活动同步

#### 1. AI Web3 School

主持人同步：

- 两周共学营已经结束。
- 学习资料和分享回放全部开源。
- 黑客松正式启动，总奖金池约 7000U。
- 已经给出赛道划分、报名链接和时间节点。

#### 2. 以太坊之夏 2026

同步信息包括：

- 深圳站正在筹备。
- 北京站已上线。
- 更多城市正在招募协办负责人。

我的理解是，这一段对学习者很重要，因为它提醒我：

- AI x Web3 School 不只是课程任务，还有后续黑客松与线下活动承接。
- 以太坊社区也仍然在持续通过本地活动保持连接和组织能力。

## My Understanding / 我的理解

这次周会给我的一个很强烈的感觉是：

```text
以太坊生态现在同时处于价值观压力、市场压力和工程压力之下。
```

一方面，EF、ETH 叙事、L2 价值捕获和生态收入都在面对挑战；另一方面，Base 这样的项目又在用非常工程化、现实主义的方式推进：

- 先解决体验和效率。
- 再逐步补上更理想的安全模型。
- 同时提前布局 Agent 经济入口。

这对我自己的方向也很有启发。`AI Wallet Clear Intent Guard` 如果想真实有用，也不能只停留在“解释风险”这层口号，而要像 Base MCP 那样，把：

- 本地构建。
- 用户确认。
- 策略边界。
- 可验证事实。

这些东西真正串成一条执行路径。

English companion:

My strongest takeaway is that Ethereum now faces value pressure, market pressure, and engineering pressure at the same time. The Base section is especially useful because it shows a realistic pattern: improve user experience first, keep hard boundaries around signing, and move gradually toward stronger verification. That maps closely to the design logic I want for `AI Wallet Clear Intent Guard`.

## Verification Status / 核验状态

- [x] Source is learner-provided full meeting record.
- [x] Speaker identities are anonymized.
- [x] News, security incidents, market moves, regulatory actions, Base upgrade claims, and ecosystem rankings are recorded as meeting discussion, not verified final facts.
- [x] Project names, token names, unlock events, institutional actions, and hardware/model-like specifications mentioned in the notes should be checked against public primary sources before formal citation.
- [x] No private group chat content, private contact information, private wallet information, or unpublished resource link is included.

中文核验状态：

- [x] 来源为学习者提供完整会议记录。
- [x] 发言人身份已匿名化。
- [x] 快讯、安全事件、价格变动、监管动作、Base 升级说法和生态排名均按会议讨论记录，不作为已核验最终事实。
- [x] 笔记中提到的项目名、代币名、解锁事件、机构动作与术语，在正式引用前需要回到公开一手资料核验。
- [x] 不包含私密群聊内容、私人联系方式、私人钱包信息或未公开资源链接。

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, private transaction payload, or private transaction history.
- [x] No private chat transcript, private contact information, or unredacted speaker identity.
- [x] No private wallet recovery data, private internal document, or unpublished community resource link.
- [x] Community activity details are kept at public-event level without exposing private participant information.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、cookie、token、session 或 `.env` 内容。
- [x] 不包含真实钱包地址、真实资产余额、私密交易 payload 或私密交易历史。
- [x] 不包含私人聊天逐字稿、私人联系方式或未匿名化 speaker 身份。
- [x] 不包含私人钱包恢复信息、内部私有文档或未公开社区资源链接。
- [x] 社区活动信息只保留公开活动层级，不暴露私人参与者细节。
