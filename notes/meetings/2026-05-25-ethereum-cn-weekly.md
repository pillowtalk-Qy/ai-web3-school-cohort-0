# Ethereum Chinese Weekly - 2026-05-25

## Metadata / 元信息

- Date / 日期: 2026-05-25
- Title / 标题: Web3builder.tech x ispanda 以太坊中文周会
- Source / 来源: learner-provided full meeting record / 学习者提供的完整会议记录
- Format / 形式: weekly online meeting / 每周一线上周会
- Organizers / 主办: Web3builder.tech x ispanda
- Participants / 参会角色: host A, teacher B, speaker C/D, teacher E, community members / 主持人 A、安老师 B、强哥 C/D、柯平老师 E、社区成员
- Type / 类型: meeting note / 外部会议纪要
- Topics / 主题: Ethereum ecosystem, security incidents, AI news, EF governance, ERC-7730, AI token economy, AI x Web3 School / 以太坊生态、安全事件、AI 快讯、EF 治理、ERC-7730、AI token 经济、AI x Web3 School
- Status / 状态: summarized from learner-provided notes, not fully source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开

## Important Caveat / 重要说明

这是一份外部会议整理笔记，主要用于 AI x Web3 School 学习记录和行业观察。内容包含快讯转述、分享人观点、社区讨论和部分未经逐条核验的项目 / 协议 / 政策信息。

因此，本笔记不应被当成投资建议、法律意见、完整研究报告或已验证新闻源。涉及攻击事件、融资、监管、协议状态、项目关停、AI 模型发布等内容，后续如要引用到正式研究或产品判断中，需要回到官方公告、协议文档、监管文件或可信新闻源复核。

This is an external meeting note for learning and industry observation. It includes reported news, speaker views, and community discussion. It should not be treated as investment advice, legal advice, a complete research report, or fully verified news. Any security incident, financing, regulation, protocol status, shutdown, or AI-model claim should be checked against primary sources before formal use.

## Executive Summary / 摘要

本次周会分为五个部分：

1. Web3builder.tech 与 ispanda 主办方介绍。
2. 区块链与 AI 快讯，包括安全事件、DeFi 进展、监管、融资并购和 AI 行业动态。
3. 以太坊基金会人事变动与生态发展讨论，重点围绕 EF 是否应退居二线、以太坊是否应坚持去中心化路线、L2 扩容和 L1 性能之间的张力。
4. 技术干货：ERC-7730 如何改善钱包盲签问题，以及 AI token 经济中“模型厂商 -> 聚合平台 -> 开发者 / 企业 / 个人”的中间层市场。
5. 社区环节：以太坊之夏城市负责人招募，以及 AI Web3 School 第二周和线上黑客松预告。

我的核心收获是：今天的内容和我的 AI Wallet Clear Intent Guard 方向高度相关。ERC-7730 指向 clear signing 和钱包签名前可读性；EF 讨论指向去中心化价值和现实用户需求之间的张力；AI token 中间层讨论则提示 AI x Crypto 可能从支付层、聚合层和自动化调用场景切入。

The meeting covered ecosystem news, EF governance debates, ERC-7730 clear signing, AI token aggregation, and AI x Web3 School updates. My strongest takeaway is that ERC-7730 connects directly to my AI Wallet Clear Intent Guard direction: wallets need a deterministic, human-readable transaction-fact layer before AI explanation or human signing.

## 中文详细纪要

### 一、开场与主办方介绍

主持人 A 确认音频正常后宣布周会开始。

主办方介绍：

- Web3builder.tech 是完全开放的 Web3 与前沿技术学习型 DAO 组织。
- ispanda 是由华语建设者组成的以太坊社区，通过教育、公共服务和技术创新连接华语生态与国际以太坊生态，推动以太坊发展与创新。

会议流程：

```text
安老师分享区块链 & AI 快讯
-> 强哥分享以太坊基金会动态与发展讨论
-> 柯平老师分享技术干货
-> 社区环节
```

### 二、区块链与 AI 快讯

#### 1. 安全与攻击事件

本周快讯首先集中在安全与攻击事件。

记录中提到的案例包括：

- Anco Protocol 遭遇约 4600 万美元漏洞攻击。
- 某比特币 DeFi 平台因管理员私钥泄露，出现未授权 BTC 铸造。官方后来夺回控制权，并销毁黑客铸造的 BTC。
- LayerZero x hackDAO 攻击复盘中，事件被归因到朝鲜黑客组织。攻击路径包括社会工程学获取开发者密钥、渗透 RPC 云环境、植入内存补丁等。
- Venus 跨链桥攻击者归还大部分被盗资金，剩余部分作为白帽赏金自留。
- gensuite 被指控利用 Telegram 内部群和非公开信息，在 UST 崩盘前获利。

我的理解是，这些事件共同指向几个重复出现的风险面：

- 私钥和开发者密钥泄露。
- RPC / 云环境被渗透。
- 跨链桥和跨链消息系统复杂度高。
- 内部信息、内部权限和非公开沟通渠道仍然是金融系统风险源。

#### 2. 项目与协议进展

快讯中提到多个项目和协议进展：

- Wintermute 推出面向机构的 DeFi 金库平台，在 Morpho 协议上线 USDC 金库。
- Aave V4 分阶段上线，引入双层市场隔离框架，通过 Hub / Spoke 结构隔离抵押品和共享流动性。
- 某 L2 逃生机制完成验证，排序器故障时用户可无许可从 L2 向以太坊主网提款。
- Vitalik 相关隐私升级计划被提及，包括访问层改进、EIP-8250、私有读取等方向。
- Zero Network 宣布关闭，用户需在截止日期前转出资产。
- Everclear 停止运营，相关代币出现大幅下跌。
- 某基金会宣布解散。

这些内容提醒我，基础设施项目不能只看“技术叙事”，还要看：

- 用户退出机制是否真实可用。
- 项目关停时资产迁移路径是否清晰。
- L2 安全不仅是性能问题，也是排序器、逃生通道、提款和用户可理解性的综合问题。

#### 3. 以太坊基金会人事变动

会议记录提到，以太坊基金会在近几个月内连续流失多名核心成员和资深贡献者，Protocol 团队由新的负责人接管。

这为后续“EF 是否衰落 / 以太坊是否衰落”的讨论埋下背景。

#### 4. 政策与监管动态

本周监管动态包括：

- 日本从 6 月 1 日起承认境外稳定币为合法支付方式。
- SEC 结束对 Zcash 基金会调查，未采取执法行动。
- SEC 可能为代币化股票推出创新豁免新规，记录中提到代号 `Project Crypto`。
- 韩国原计划 2027 年 1 月征收加密税，但因请愿触发国会审查，延期概率上升。

这里值得后续复核的重点是：稳定币、隐私币、代币化股票和加密税收正在同时进入监管讨论。不同司法辖区的节奏差异，会直接影响项目的落地路径和市场选择。

#### 5. 机构与破产动态

会议记录提到：

- 某比特币 ATM 龙头申请破产保护，关停大量 ATM 并停止运营。
- FTX 相关集体诉讼中，律所、审计机构和推广人分别支付和解款项。

这些案例说明，上一轮周期遗留问题仍在通过破产、诉讼和和解逐步清算。Web3 风险并不只发生在链上，审计、法律服务、推广人、托管和运营主体也都可能进入责任链。

#### 6. 融资与收购

会议中提到的融资与并购包括：

- 稳定币基础设施 Tracker 完成融资。
- 德勤并购加密基础设施公司 Block Native，偏人才收购导向。
- Mastercard 收购英国稳定币基础设施公司 BVNK。
- ZeroHash 放弃收购后寻求新融资。
- sorted Wallet 完成种子轮融资，主打非洲轻量钱包，适配低网络和简易手机。
- variational 完成 A 轮融资，聚合交易所与 CeFi 流动性，为链上资产提供深度流动性。
- 韩华投资证券收购相关公司股份。

我的观察是，稳定币、钱包、流动性和机构基础设施仍然是资金关注重点。尤其 sorted Wallet 这类面向低网络环境和简易手机的钱包项目，提醒我钱包体验不能只为高端用户设计。

#### 7. AI 领域动态

AI 快讯部分提到：

- OpenAI 相关人员变动和诉讼动态。
- Google 发布 Gemini 3.5 系列，面向 AI 智能体与编程场景。
- 阿里发布千问 3.7Max 和实时翻译相关能力。
- Anthropic 封存某个最强模型，等待更强安全对齐机制。
- Deepseek 开启大额融资。

这些消息需要后续逐条复核。作为学习笔记，我更关注它们共同指向的趋势：

- 模型能力继续向 agent、编程和实时多模态场景靠近。
- 安全对齐、漏洞扫描和基础设施风险越来越重要。
- AI 模型和 API 价格竞争会推动中间聚合层出现，也会和 Crypto payment / settlement 产生交集。

### 三、以太坊基金会人事变动与生态发展讨论

#### 1. 核心事件

以太坊基金会多名研究员公开宣布离职，基金会未做完整官方解释，引发社区对 EF 组织状态、以太坊路线和生态前景的广泛讨论。

#### 2. 乐观观点

乐观观点认为：

- 离职人员多为长期任职者，可能存在职业倦怠。
- 一些长期研究者可能与一线 builder 脱节。
- 重组有机会减少 EF 官僚主义，提高组织目标感和责任心。
- 现有财务报告偏形式主义，重组可以推动资金使用更结果导向。

#### 3. 担忧观点

担忧观点认为：

- EF 内部工作压力可能过大，组织环境不健康。
- 核心成员集中流失，可能导致代码熟悉度、社区声望和组织连续性断层。
- EF 的研究成果开源，其他公链可以直接复用，导致基金会资金投入的“ETH 价值回流”不足。
- 基金会缩小并不一定是坏事，但如果过程伴随敌意和不尊重，会损害社区氛围。

#### 4. 社区建议与行业声音

讨论中出现几类建议：

- 以太坊可能需要更强力的领导组织，而不是继续依赖当前 EF。
- 需要创建一个和 ETH 经济利益深度绑定的新组织，资金和负责人利益与 ETH 资产挂钩。
- Vitalik 的回应方向是支持 EF “做减法”、退居二线，以太坊不应依赖 EF。
- 行业中有人把以太坊比作 Crypto 里的 Myspace，也有人把它比作微软：未必总是最性感，但长期稳固。

#### 5. 以太坊核心价值与发展困境

这部分讨论的核心是：以太坊应该坚持去中心化路线，还是更主动适配机构和用户对可控性、响应速度和性能的需求。

以太坊的核心优势：

- 去中心化。
- 抗审查。
- 无需许可。
- 长期安全和可信中立。

现实压力：

- L2 扩容有效，但带来安全碎片化、体验割裂和价值回流不足。
- L1 提升 gas limit 的扩容幅度有限，难以和高性能 L1 或 L2 扩容能力相比。
- 机构和用户在实际应用中往往偏好可管控系统，例如多签、时间锁、安全委员会和应急响应机制。

最终问题是：如果以太坊坚持最小化治理和高度去中心化，迭代会更慢；如果过度迎合机构需求，又可能牺牲核心价值。

我的理解是，这不是简单的“EF 好或坏”，而是以太坊作为公共基础设施必须面对的治理张力。

### 四、技术干货分享

#### 1. ERC-7730：改善钱包盲签问题

柯平老师分享的第一个技术重点是 ERC-7730。

核心痛点：

- 用户签名时，钱包常常只显示十六进制 calldata 或难以理解的参数。
- 用户不知道自己到底授权了什么、调用了什么、转给了谁。
- 这会放大钓鱼、恶意授权和盲签风险。

ERC-7730 的思路：

- 将合约调用数据转换为人类可读的结构化信息。
- 例如显示 swap、转账、提款对象、金额、收益等字段。
- 协议方将合约信息写成 JSON 文件，注册到公开 Registry。
- 钱包在调用时自动解析并展示更可读的信息。

记录中提到当前已有多个头部协议完成注册。

局限：

- ERC-7730 只能降低风险，不能完全消除风险。
- 解析质量依赖 Registry 和 descriptor 的可信度。
- 未注册协议、复杂调用或恶意 descriptor 仍可能难以解释。

与 EIP-712 的区别：

- EIP-712 主要用于结构化数据签名，数据由 dApp 提供。
- ERC-7730 试图覆盖任意 calldata 解析，数据来自独立 Registry，覆盖范围更广。

这部分和我的黑客松方向高度相关。AI Wallet Clear Intent Guard 不应该让 AI 直接“猜 calldata”。更合理的结构是：

```text
deterministic clear-signing data
-> AI explanation
-> intent comparison
-> policy check
-> human confirmation
```

#### 2. AI Token 经济与中间层市场

第二个技术分享讨论 AI token 套餐和 AI API 中间层。

市场结构：

```text
模型厂商 -> 中间聚合平台 -> 开发者 / 企业 / 个人
```

中间层价值：

- 对模型厂商：帮助分发、聚合和降低接入成本。
- 对用户：用一个 API key 切换多个模型，按场景选择低成本或高性能模型。
- 对中间商：通过技术优化、行业定制、自动调度和增值服务赚取溢价。

风险：

- 行业门槛相对低。
- 需要垫资，现金流风险高。
- 上游模型厂商定价和合作政策变化会影响中间层利润。

AI + Crypto 的结合点：

- Crypto 可以作为支付层。
- 稳定币、微支付或 x402-like payment flow 可以成为 AI 中间层结算的一部分。
- 如果 AI agent 自动调用多个模型或服务，支付路径、权限边界和费用透明度会变得重要。

这再次连接到 AI wallet 和 agent payment：当 agent 可以自动购买 API、调用模型或访问付费服务时，用户需要知道它用了什么服务、花了多少钱、谁收款、谁验证和结算。

### 五、社区环节与会议收尾

#### 1. 以太坊之夏城市负责人招募

社区正在招募以太坊之夏城市负责人。

招募对象：

- 对以太坊和 Web3 感兴趣。
- 愿意承担基础协调工作。
- 不要求必须是大型社区主理人。

主办方会提供资源支持，也欢迎项目方、生态组织、媒体、场地方和赞助方合作。

#### 2. AI Web3 School

AI Web3 School 已正式开营，当前进入第二周。每日分享会预告会同步发布。

课程后续将承接纯线上黑客松，不限是否参与 Open Camp，欢迎 AI + Web3 创意开发者报名。

这和我的学习仓库直接相关：当前的 task proof、daily note、class note、meeting note 和 Hackathon idea 都在为后续黑客松做准备。

## English Summary

This Ethereum Chinese weekly meeting covered five main areas:

- Weekly blockchain and AI news, including security incidents, project updates, regulatory movement, financing, acquisitions, and AI industry updates.
- A discussion about Ethereum Foundation personnel changes and what they may mean for Ethereum's governance, research culture, and ecosystem direction.
- A broader debate around Ethereum's core values: decentralization, censorship resistance, permissionlessness, scalability, institutional needs, and L2 fragmentation.
- A technical section on ERC-7730 and how it can improve wallet clear signing by mapping raw calldata into human-readable structured transaction information.
- A discussion of the AI token economy and aggregation middle layer, where model providers, aggregators, developers, enterprises, and individual users form a wholesale-to-retail API market.

My strongest takeaway is that ERC-7730 is directly relevant to the AI Wallet Clear Intent Guard direction. AI should not be the only source of truth for transaction explanation. A safer architecture is deterministic clear-signing data first, AI explanation second, policy checks third, and human confirmation before signing.

The AI token economy discussion also connects to agent payments. If AI agents can automatically buy API calls, model access, or digital services, users will need payment-route transparency: service, price, token, network, recipient, facilitator, and fallback.

## My Understanding / 我的理解

这次周会把我最近几天的几个学习线索接在了一起。

第一，安全事件继续说明：Web3 风险很多时候不是密码学本身失败，而是密钥、云环境、RPC、跨链桥、内部权限和社会工程学失败。AI wallet 如果要变得有用，必须把这些人和系统层面的风险考虑进去。

第二，EF 人事变动讨论说明，以太坊的路线选择不是单纯技术问题。去中心化、抗审查、可持续治理、资金效率、开发者体验和机构需求之间存在真实张力。

第三，ERC-7730 与我的黑客松方向直接相连。AI Wallet Clear Intent Guard 最重要的事实层应该来自 clear signing / descriptor / registry，而不是来自模型自由发挥。AI 更适合做解释、对比和提醒，而不是做唯一裁判。

第四，AI token 中间层讨论让我看到 AI + Crypto 的支付切入点：当 agent 调用模型、API 或数字服务时，支付和权限会成为核心问题。这个方向可以和 x402、agent wallet、policy check 连接起来。

## Concepts to Review / 待复习概念

- ERC-7730
- EIP-712
- clear signing
- calldata decoder
- transaction descriptor
- registry trust model
- L2 escape hatch
- EIP-8250
- EF governance
- L2 value capture
- AI token aggregation
- x402-like payment flow
- agent payment permission

## Questions / 问题

- ERC-7730 的 registry 如何保证 descriptor 的正确性和更新安全？
- 如果 descriptor 出错，钱包应该如何提示用户？
- AI Wallet Clear Intent Guard 是否应该把 descriptor coverage 作为一个单独风险等级？
- 未注册协议、复杂 router、多层调用和聚合器交易应该如何显示？
- L2 逃生机制是否应该成为用户选择 L2 的重要指标？
- 以太坊如果坚持去中心化路线，如何同时改善钱包 UX 和机构接入体验？
- AI token 中间层如果接入稳定币或 x402，谁负责验证支付、结算和失败处理？

## Follow-up Actions / 后续行动

- 阅读 ERC-7730 相关资料，确认它和 EIP-712、wallet clear signing、transaction descriptor 的关系。
- 将 ERC-7730 / clear signing 加入 AI Wallet Clear Intent Guard 的核心参考清单。
- 在黑客松 proposal 中加入一个 descriptor coverage / digest-only / unknown calldata 的风险展示。
- 继续研究 x402 facilitator 和 AI payment route transparency。
- 复查以太坊基金会人事变动、EIP-8250、隐私升级和相关项目名称，避免把会议快讯中的未核验信息当成事实。

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, or private transaction pattern.
- [x] No private screenshots, private chat transcripts, or private contact details.
- [x] Participants are referred to by anonymized roles.
- [x] News items are marked as meeting-note summaries, not fully verified research claims.
