# AI and Web3 Mutual Enablement Sharing - 2026-05-21

## Metadata / 元信息

- Date / 日期: 2026-05-21
- Time / 时间: not specified / 未注明
- Title / 标题: AI 与 Web3 结合方向深度分享
- Program / 项目: AI x Web3 School
- Speaker / 主讲: not specified / 未注明
- Host / 主持: not specified / 未注明
- Participants / 参与者: learners / 学员
- Source / 来源: learner-provided meeting summary / 学习者提供的会议总结
- Type / 类型: sharing session / 分享会
- Format / 形式: online sharing and Q&A / 线上分享与问答
- Topics / 主题: AI x Web3, decentralized AI, AI Agent wallets, onchain data analysis, wallet security, DeFi risk control, learning path / AI x Web3、去中心化 AI、AI Agent 钱包、链上数据分析、钱包安全、DeFi 风控、学习路径
- Status / 状态: summarized from learner-provided notes / 基于学习者提供笔记整理
- Public / 公开状态: needs review before publishing / 公开前需人工审核

## Important Caveat / 重要说明

This is a collected class note based on learner-provided notes. It includes speaker views, project examples, technical directions, product opportunities, and Q&A summaries. It is a learning record, not a fully verified market map or investment recommendation.

这是一份基于学习者提供内容整理的课程笔记，包含主讲观点、项目案例、技术方向、产品机会和 Q&A 摘要。它是学习记录，不等同于逐条核验后的市场地图或投资建议。

## 中文详细纪要

### 一、开场：为什么讨论 AI x Web3

本次分享从一个现实问题切入：AI 正在成为新的技术浪潮，但当前 AI 服务高度中心化，使用体验受平台、政策、地域和公司规则影响很大。

主讲人提到，Claude、OpenAI 等中心化 AI 服务会受到地区访问、账号风控、平台文化和政策约束。即使尝试购买账号、配置静态 IP 或多账号使用，也可能在短时间内被封禁。这说明中心化 AI 服务并不完全稳定，也不完全可控。

分享会同时强调，Web3 不应该被简单理解成发币或炒币平台。它的底层是去中心化账本，金融属性很强，也能提供身份、支付、激励、数据和协作机制。因此，AI 与 Web3 的关系不是单向利用，而是双向促进、互相赋能。

The opening positioned AI x Web3 as a two-way relationship. AI currently depends heavily on centralized companies, account systems, regional access rules, and platform policies. This creates fragility for users who need stable access, especially when services can be blocked, restricted, or shut down by centralized providers.

Web3 is framed here not as speculation alone, but as decentralized ledger infrastructure with strong financial and coordination properties. The core question is how Web3 can make AI less centralized, and how AI can make Web3 easier, safer, and more useful.

### 二、Web3 赋能 AI：去中心化算力与数据

#### 1. 核心思路：解放中心化 AI

当前 AI 的算力、数据和模型主要集中在少数大公司集群中。Web3 赋能 AI 的核心方向，是把算力和数据分布式部署到全球，让 AI 服务不再完全依赖某一个公司或地区。

这个方向希望通过去中心化网络，让更多个人、小团队和节点参与 AI 服务提供。长期愿景是让 AI 更接近全球公共基础设施，而不是只由少数公司维护。

#### 2. 主流落地路径：分布式节点提供 AI 服务

主讲人用 Bensor 作为标杆案例。其核心模式是用算力质押替代以太坊式的金融质押：节点通过服务器或本地集群运行模型，对外提供公开 IP 或 API 接入能力。

整体流程大致是：

```text
用户 API 请求 -> 网关 -> 子网网关 -> 节点处理 -> 返回结果
```

实际计算不直接上链。链上主要记录验证、打分和激励分发。节点处理请求后，由验证者评分，再按分数分发代币奖励。

Bensor 的网络按 agent 能力划分为约 100 个子网，例如生图、代码生成、文本对话等。每个子网内节点部署同类模型，不强制某个具体模型，只要硬件能运行并能提供服务，就可以参与对应子网。

这种设计的价值是把 AI 服务拆成可激励、可竞争、可分布式参与的网络。它类似把区块链节点机制扩展到 AI 推理服务中。

#### 3. 当前瓶颈

主讲人认为，这条方向正确，但当前落地效果仍然比较差。

主要瓶颈包括：

- 性能差：分布式节点硬件水平不一，处理速度远慢于中心化 AI。
- 结果不稳定：节点模型版本、调教方式、硬件能力不同，同一请求可能返回不同质量结果。
- 算力门槛高：顶级模型需要 A100 / H100 等高端显卡，个人和小组织很难承担成本。

因此，去中心化 AI 的方向有长期价值，但距离成熟还有很远。真正突破可能依赖全球闲置算力整合、硬件成本下降、模型效率提升和更成熟的网络调度机制。

Web3 can help AI by turning computation, data, and model-serving into a distributed network instead of a single-company service. The Bensor-style design uses nodes, subnets, gateways, validators, scoring, and token incentives to coordinate AI service providers. Computation itself stays offchain, while verification and incentives are coordinated through the network.

The current weakness is execution quality. Distributed nodes cannot yet match centralized AI clusters in speed, stability, hardware quality, or model consistency. This makes decentralized AI promising as a direction but still immature as a user-facing replacement for major centralized AI products.

### 三、AI 赋能 Web3：五大核心场景

#### 1. AI Agent 持有钱包、自主链上支付

当前 AI 服务调用多按次收费。长任务需要持续获取数据、调用 API 或访问平台，如果每一步都需要人工充值、维护余额或配置 API key，任务就很容易中断。

AI 赋能 Web3 的一个方向，是让 AI Agent 拥有独立链上钱包和小额支付权限。用户可以给 Agent 分配受限资金，让它在任务执行过程中自主支付 API 费用、获取数据、发起链上操作，形成：

```text
调用 -> 支付 -> 获取结果 -> 继续执行
```

主讲人提到 `callinbitagentkit` 这类项目会把钱包操作和链上交互打包成技能，让 Agent 接入后可以直接管理钱包。

当前真正的自主支付场景还不多，更常见的方向是量化交易、合约监控和链上套利。Agent 的潜力在于用自然语言指令降低 Web3 使用门槛，例如让用户通过语义化指令完成转账、交易或链上查询。

#### 2. AI 链上数据分析：Arkham 案例

普通用户面对区块链浏览器时，经常只能看到匿名地址、交易哈希和复杂数据，很难理解这些行为背后的真实含义。

AI 可以帮助抓取全链数据，进行地址画像、行为分析、关联分析和可视化，降低链上分析门槛。

主讲人用 Arkham 作为案例。Arkham 会抓取多条公链数据和交易所相关数据，分析钱包交易行为和转账关联，尝试识别地址归属，例如个人、机构、交易所、项目方钱包等。

这类能力可以用于：

- 监控中心化 / 去中心化交易所代币流入流出。
- 追踪大额交易、巨鲸地址和项目方钱包。
- 给交易所、机构、量化团队提供风控和商业 API。

#### 3. AI 钱包安全：防恶意合约和交易风险预警

Web3 钱包签名风险高，误签恶意合约可能导致资产不可逆损失。主讲人特别提到，现有很多安全工具还停留在黑名单地址比对，缺少对交易 `calldata` 和合约逻辑的深度分析。

AI 钱包安全助手的理想能力包括：

- 实时扫描待签交易。
- 解析目标地址和 `calldata`。
- 模拟执行交易。
- 检测漏洞、后门、授权窃取和恶意合约逻辑。
- 输出可读风险评分和风险报告。

主讲人认为，这类产品目前稀少且效果一般。如果能做出真正可用的 AI 钱包安全插件，可能具备爆款潜力。

#### 4. 交易所 / DeFi 风控

AI 也可以用于机构侧风控，包括反洗钱、异常交易监控、巨鲸行为预警和合规筛查。

不过这类方向更偏交易所、机构和专业团队，普通独立开发者参与门槛较高。

#### 5. 小结

AI 赋能 Web3 的核心，是让 Web3 更智能、更易用、更安全。相比大规模基础设施，独立开发者更适合从钱包安全、语义化操作、链上数据解释、小型浏览器插件等具体痛点切入。

AI can help Web3 by adding interpretation, automation, and risk detection to systems that are currently difficult for ordinary users. Agent wallets can support long-running tasks that need autonomous micro-payments. Onchain data analysis can turn raw addresses and hashes into behavior patterns, identity guesses, and risk signals. Wallet-security tools can use AI to explain what a user is about to sign.

The most practical opportunity for independent developers is not to build a giant AI or chain infrastructure project from scratch. It is to build focused tools around real user pain: wallet safety, transaction explanation, semantic Web3 actions, monitoring, and small plugins that make complex onchain behavior understandable.

### 四、互动问答（Q&A）

#### 1. AI 合约安全审计有哪些产品？

主讲人提到 `Evanbench`，并把它描述为 OpenAI 推出的合约审计能力评估工具，可用于评估合约、SQL 等审计能力，甚至能发现外部付费审计没有发现的高危漏洞。

内部实践方面，可以自建合约安全知识库，收录历史漏洞和攻击案例，让 AI 按风险等级模拟攻击并生成审计报告。

#### 2. AI 分析能替代传统量化模型吗？

不能替代，只能互补。

传统量化模型稳定、速度快、无幻觉，适合高频交易和参数化策略。AI 更擅长意图理解、非结构化数据分析和趋势判断，但存在不稳定、幻觉和速度较慢的问题。

更合理的方式是 AI 辅助调参和分析，传统量化系统负责执行。

#### 3. AI + 钱包，自主支付的意图是什么？

核心意图是解决长任务和持续数据获取中的支付自动化问题。

AI 在做长期数据分析、链上监控、信息爬取时，需要持续调用 API 或平台服务。如果所有费用都要人工充值和维护，任务很容易中断。随着信息平台对 AI 访问收费化，AI Agent 具备受限自主支付能力会变得更重要。

#### 4. AI 如何提升稳定币 adoption？

主讲人认为，AI 无法提升稳定币的内在价值，因为稳定币的价值取决于金融属性、抵押资产和锚定机制。

AI 能提升的是使用便捷性，例如语义化交易，让用户用自然语言表达转账或支付意图，再由系统生成交易。但当前相关尝试效果一般，仍处探索期。

#### 5. 分布式节点效果差，瓶颈是机制还是硬件？

主讲人认为核心瓶颈是硬件能力，而不是机制本身。

顶级模型推理需要 A100 / H100 级别显卡，个人和小组织节点很难承担。节点算力弱会直接导致响应慢、结果差。突破点在于全球分布式算力池化和闲置算力整合。

#### 6. 独立开发者应该选择 AI、Web3，还是 AI x Web3？

主讲人更推荐 AI x Web3 小工具，尤其是 AI 钱包安全助手。

理由包括：

- 门槛相对低，可以调用商业 AI API。
- 钱包安全是所有 Web3 用户痛点。
- 市场空白较大。
- 浏览器插件形式容易落地。
- 自用和公开分享都有价值。

#### 7. AI 会替代传统浏览器吗？

主讲人认为，浏览器使用频次会下降，AI Agent 会成为新入口。

用户会减少搜索引擎和传统浏览器使用，直接用联网 AI Agent 查资料、写代码和分析数据。独立 AI 浏览器不是必要条件，Agent + 网页交互 + 联网能力已经足够覆盖很多场景。

#### 8. Web2 转 Web3 难吗？学习路径是什么？

主讲人认为不难。Web2 可以理解为中心化数据库增删改查，Web3 可以理解为去中心化账本增删改查，核心逻辑相通，只是交互方式不同。

建议路径：

- 以太坊入门。
- 学习 Solidity、部署合约、理解 EVM。
- 阅读 Uniswap、Aave 等知名 dApp 合约。
- 参加黑客松，做小项目，组队协作。
- 拓展 Solana、Aptos 等 Rust 链知识。

主讲人不推荐优先选择国内区块链 AI 相关硕士，认为课程偏理论、更新慢，实习和实战成长更快。

#### 9. 非技术岗如何入行 Web3？

可以从运营、市场、社群、产品助理等岗位入门。

核心要求不是写代码，而是理解 Web3 基础逻辑、用户需求和基础链上操作。长期来看，从运营转产品会有价值，因为产品岗位需要同时理解业务、用户和技术逻辑。

#### 10. 如何判断个人开发的 AI x Web3 工具优劣？

核心标准是：

- 是否解决真实痛点。
- 功能是否稳定。
- 体验是否流畅。
- 用户是否愿意持续使用。

安全工具可以看漏洞识别准确率、恶意合约拦截率和误报率。交易工具可以看语义理解准确率、交易成功率和响应速度。

The Q&A repeatedly came back to one practical theme: AI x Web3 tools should be judged by whether they solve real problems, not by whether they sound futuristic. Contract auditing, quant analysis, autonomous payments, stablecoin usability, decentralized AI nodes, and wallet security all have different constraints.

For independent developers, the most actionable path is a small tool with a clear pain point. The speaker especially emphasized AI wallet security because it has a strong user need, a relatively concrete interface, and can be built by combining existing AI APIs with browser-extension or wallet-plugin workflows.

### 五、会议总结

本次分享的核心结论是：AI 与 Web3 双向赋能，空间巨大，但整体仍处早期。

Web3 可以为 AI 提供去中心化算力、数据、激励和支付基础设施，让 AI 服务不再完全受中心化平台控制。AI 可以为 Web3 提供智能分析、自动化执行、风险识别和更自然的用户交互，让 Web3 更易用、更安全。

对于独立开发者，优先方向不是追逐大而全基础设施，而是开发刚需小工具，尤其是围绕安全、钱包、交易解释和简化操作的产品。

学习路径上，主讲人强调实战优先：多读合约、多做项目、多参加黑客松、多找实习和团队协作机会。AI x Web3 还处在早期，真正能落地解决问题的产品仍然有机会。

The session's conclusion is that AI and Web3 can strengthen each other, but the field is still early. Web3 may provide decentralized compute, incentives, data coordination, and payment rails for AI. AI may provide interpretation, automation, security analysis, and better interfaces for Web3.

For learning and building, the practical advice is to stay close to real use cases. Small tools that improve wallet safety, transaction understanding, and user interaction may be more realistic than large infrastructure projects for independent developers. The best learning path is practical: read contracts, build small products, join hackathons, seek internships, and learn through collaboration.

## My Understanding / 我的理解

- 这场分享让我把 AI x Web3 看成双向关系，而不是单纯把 AI 加到链上，或把 Web3 当成 AI 的支付工具。
- Web3 赋能 AI 的方向很有想象力，但当前最大的现实问题是性能、硬件成本和结果稳定性。
- AI 赋能 Web3 更接近短期可落地机会，尤其是钱包安全、链上数据解释和语义化交易。
- AI Agent 自主支付的价值不只是“让 AI 花钱”，而是让长任务可以持续获取数据和服务，不被人工充值流程打断。
- 钱包安全助手是很适合独立开发者切入的方向，因为痛点明确、产品边界清晰、可以先从浏览器插件做起。
- Web2 转 Web3 的关键不是完全换一套思维，而是理解从中心化数据库到去中心化账本后的交互、信任和安全变化。

My main takeaway is that AI x Web3 should be evaluated through actual workflows. Decentralized AI infrastructure is an important long-term direction, but it still faces large execution gaps. AI-powered Web3 tools, especially around wallets, security, data analysis, and semantic interactions, seem more immediately buildable.

The most useful builder mindset is to start from pain points rather than narratives. If a tool can make signing safer, transactions easier to understand, or onchain data more readable, it may create real value even without owning a large model or blockchain infrastructure.

## Concepts to Review / 待复习概念

- Decentralized AI / 去中心化 AI
- Distributed inference / 分布式推理
- Compute staking / 算力质押
- AI subnet / AI 子网
- Validator scoring / 验证者打分
- AI Agent wallet / AI Agent 钱包
- Autonomous payment / 自主支付
- Onchain data analysis / 链上数据分析
- Address clustering / 地址聚类
- Wallet security plugin / 钱包安全插件
- `calldata` analysis / `calldata` 分析
- Transaction simulation / 交易模拟
- AI-assisted smart contract audit / AI 辅助合约审计
- MEV and quant strategy boundaries / MEV 与量化策略边界
- Semantic transaction / 语义化交易
- Web2 to Web3 transition / Web2 转 Web3

## Questions / 问题

- AI 钱包安全助手最小可用版本应该先检测哪些风险？
- 交易 `calldata` 如何解析成普通用户能理解的风险提示？
- AI 自主支付应该如何设置预算、权限、白名单和人工确认边界？
- 去中心化 AI 网络如何在模型质量不一致时保证用户体验？
- AI 链上数据分析如何在“打破匿名性”和“保护隐私”之间设边界？
- 独立开发者做 AI x Web3 小工具时，最适合从浏览器插件、Telegram bot 还是网页 dashboard 开始？

These questions focus on product boundaries. The technical direction is exciting, but the practical challenge is designing safe permissions, clear risk explanations, stable outputs, and user trust around tools that combine AI autonomy with financial infrastructure.

## Follow-up Actions / 后续行动

- [ ] 设计一个 AI 钱包安全助手的最小功能清单。
- [ ] 研究交易 `calldata` 解析和风险提示如何在钱包插件中展示。
- [ ] 找 2-3 个 AI x Web3 项目，分别归类为基础设施、数据分析、钱包安全或交易自动化。
- [ ] 把 AI Agent 自主支付的权限边界整理成 topic note。
- [ ] 复习 Arkham 这类链上数据分析产品的核心能力与隐私争议。
- [ ] 继续寻找适合独立开发者的 AI x Web3 小工具方向。

For follow-up, I should turn the wallet-security direction into a concrete product checklist. The most useful next step is not another broad market map, but a small design: what data the plugin reads, what risks it detects, how it explains `calldata`, and when it must ask for human confirmation.

## Related Links / 相关链接

- AI x Web3 School Handbook: https://aiweb3.school/zh/handbook/
- Web3 Career Build AI x Web3 School: https://web3career.build/zh/programs/AI-Web3-School

## Verification Status / 核验状态

- [ ] Direct source checked / 已检查直接来源
- [x] Learner-provided class notes only / 目前仅基于学习者提供课堂笔记
- [x] Needs follow-up / 需要后续核验

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, or session data / 不包含私钥、助记词、API key、cookie 或 session 数据
- [x] No real wallet address, balance, or private transaction pattern / 不包含真实钱包地址、余额或私密交易模式
- [x] No private chat transcript or unredacted personal information / 不包含私人聊天记录或未脱敏个人信息
- [x] Needs human review before public publishing / 公开发布前需要人工审核
