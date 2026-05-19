# ZK Trading System Fireside Chat - 2026-05-18

## Metadata

- Event time: 2026-05-18 around 23:00
- Note completed: 2026-05-19
- Source: learner-provided meeting notes
- Type: fireside chat / meeting note
- Topic: zk-based trading system development
- Participants: Vlad Novakovski, Joe Lubin, More, Vitalik Buterin
- Status: summarized, not fully source-verified
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File: `notes/meetings/2026-05-18-zk-trading-system-fireside-chat.md`

## Important Caveat

这是一份外部信息整理笔记，基于学习者听完会议后整理的内容。它包含会议转述、技术观点和行业判断，不等同于逐条核验后的研究报告。

This is a collected external note based on learner-provided meeting notes. It includes reported discussion points, technical views, and industry interpretations. It should not be treated as a fully verified research report.

## 会议主题

本次讨论围绕基于 zk 证明技术的交易系统展开，重点包括发展历程、技术挑战、成本结构、未来规划、用户生态、预言机问题以及数据可用性（DA）设计。

The discussion focused on a zk-proof-based trading system. Key topics included its development history, technical challenges, cost structure, future roadmap, user ecosystem, oracle risks, and data availability design.

## 参会人员

- Vlad Novakovski
- Joe Lubin
- More
- Vitalik Buterin

Participants included Vlad Novakovski, Joe Lubin, More, and Vitalik Buterin.

## 一、zk 证明技术落地历程

### 初期难点

项目启动阶段，zk 自定义电路开发缺乏成熟行业模板与参考案例，团队需要从零搭建技术框架。白皮书创新性提出适配金融场景的 zk 电路数据结构，用于直接实现链上撮合、清算等金融基础功能。

这一路径几乎没有先例可循，开发难度极高。早期电路频繁出现各类微小漏洞，需要高频迭代修复，也难以满足 Stage 1 上线标准。

At the early stage, custom zk circuit development lacked mature industry templates or reference cases. The team had to build the technical framework from scratch. The whitepaper proposed a zk circuit data structure adapted for financial use cases, aiming to directly support core functions such as onchain matching and settlement.

Because there was little precedent, development was highly difficult. Early circuits frequently had small bugs and required rapid iteration, making it hard to meet Stage 1 launch standards.

### 现状突破

经过多轮大规模测试与持续优化，系统稳定性实现质的飞跃。当前运行仅占用底层区块空间不到 1%，资源利用率极高。

性能方面，TPS 稳定维持在 5000 笔 / 秒，峰值可突破 2 万笔 / 秒，覆盖订单挂单、撤单、成交全流程验证。技术层面仍具备充足扩容空间，长期目标可对标纳斯达克交易系统的性能水平。

After multiple rounds of large-scale testing and continuous optimization, the system's stability improved significantly. Current operation uses less than 1% of the underlying blockspace, suggesting high resource efficiency.

Performance is reported to remain stable around 5,000 TPS, with peaks above 20,000 TPS. This covers verification for order placement, cancellation, and execution. The system still has room for further scaling, with a long-term performance target comparable to Nasdaq-level trading infrastructure.

### 核心瓶颈

zk 证明环节已经完成较多性能优化，不再是系统核心瓶颈。当前主要挑战集中在两方面：

- 多系统协同调度
- 电路见证数据的高速传输与实时处理

电路生成的见证数据体量庞大，跨模块流转与并行处理效率仍受限制。因此，后续需要进一步优化数据传输协议和集群调度机制。

The zk proving stage has already been heavily optimized and is no longer the core bottleneck. The main challenges have shifted to multi-system coordination and high-speed real-time processing of witness data.

Circuit-generated witness data can be very large, and efficient movement across modules and parallel processing remains difficult. Future optimization needs to focus on data transfer protocols and cluster scheduling.

## 二、成本结构与用户影响

### 成本拆分

整体运营成本构成比较清晰：

- 证明生成成本约占总运营成本 50%，是最大支出项。
- 数据索引、链下数据存储与分发服务接近另一半成本，集群运维开销较高。
- 日常基础数据存储费用仅数百美元，成本基数可控。

系统扩容后，数据存储与索引成本预计会小幅上升，但整体仍保持行业低位。

The cost structure is relatively clear. Proof generation accounts for about 50% of total operating cost and is the largest expense. Data indexing, offchain data storage, distribution services, and cluster operations make up most of the remaining cost.

Basic daily storage costs are only a few hundred dollars, so the cost baseline remains manageable. As the system scales, storage and indexing costs may rise slightly, but overall costs are expected to remain low compared with similar products.

### 用户端定价

平台运营成本会合理传导至用户，但整体费率显著低于市场同类去中心化交易产品。

定价采用交易规模阶梯计费模式，无固定手续费。交易金额越大，费率越低，兼顾小额用户与机构用户需求，也降低普通用户参与门槛。

Platform operating costs are passed to users in a controlled way, but fees are significantly lower than comparable decentralized trading products.

Pricing uses a volume-based tiered model with no fixed fee. Larger trades pay lower rates, which serves both retail users and institutional users while lowering the entry barrier for smaller users.

### 规模参考

以单日 20 亿美元交易量为例，平台整体运营总成本约 10 万美元。

其中：

- zk 证明相关费用约 2 万美元。
- 数据索引、存储等其他费用约 2 万美元。
- 剩余收益留存至生态，用于技术迭代、流动性激励与社区建设。

这种成本结构有助于形成技术、流动性和社区建设之间的正向循环。

As an example, at USD 2B daily trading volume, total operating cost is estimated around USD 100K.

In that scenario, zk proving cost is around USD 20K, and data indexing/storage-related cost is also around USD 20K. The remaining value can be retained by the ecosystem for technical iteration, liquidity incentives, and community building, creating a positive feedback loop.

## 三、未来技术规划

### 阶段升级

项目即将正式上线非 EVM 兼容的 Stage 1，属于行业内极少数已经落地的非 EVM 系 zk 交易系统。同类项目多数仍集中在隐私协议赛道。

后续规划推进 Stage 2 升级。不过 Stage 2 会引入 30 天升级延迟机制，这会降低系统快速迭代和应急修复的灵活性。因此，项目需要在去中心化程度和迭代效率之间做好权衡。

The project is preparing to launch a non-EVM-compatible Stage 1 system, making it one of the few non-EVM zk trading systems that have reached practical deployment. Many comparable zk projects remain focused on privacy protocols.

The roadmap includes a Stage 2 upgrade, but Stage 2 introduces a 30-day upgrade delay. This improves decentralization and safety assumptions but reduces flexibility for rapid iteration and emergency fixes. The project needs to balance decentralization with execution speed.

### 新功能布局

项目已经启动 EVM 侧链汇总（rollup）研发，目前处于测试阶段，预计未来数月内完成开发并上线应用，用于兼容主流 EVM 生态资产与工具。

同时，团队也在探索链上期权、结构化金融产品等复杂金融功能，试图拓展平台金融服务边界，完善去中心化金融基础设施。

The team has started developing an EVM-side rollup, currently in testing, with expected deployment in the coming months. This would make the system more compatible with mainstream EVM assets and tools.

The team is also exploring more complex financial products such as onchain options and structured products, aiming to expand the platform's financial service boundaries and improve decentralized financial infrastructure.

### 去中心化探索

当前系统采用单一排序节点架构，所有交易排序由该节点完成，交易安全性通过 zk 证明保障。这与多数 L2 架构逻辑类似。

长期来看，项目计划探索排序节点去中心化，降低单点依赖风险。同时研究时间锁加密、多方计算（MPC）等技术，在去中心化程度、交易延迟、安全性之间寻找平衡，兼顾用户体验与去中心化目标。

The current system uses a single sequencer architecture. All transaction ordering is performed by that sequencer, while transaction validity is protected by zk proofs. This is similar to many L2 architectures.

Long term, the project plans to explore decentralized sequencing to reduce single-point dependency. It is also researching timelock encryption and multi-party computation (MPC) to balance decentralization, latency, and security while preserving user experience.

## 四、用户生态现状

### 用户构成

平台当前用户群体以专业做市商和高频交易机构为主。maker 端约 90% 为专业交易团队。

taker 端散户与机构用户比例约各占 50%。多数散户仍依赖中心化交易所进行交易，去中心化交易场景的散户渗透度仍有待提升。

早期存在大量恶意刷量账户，代币上线后该现象显著减少。

The current user base is dominated by professional market makers and high-frequency trading institutions. Around 90% of makers are professional trading teams.

On the taker side, retail and institutional users are closer to a 50/50 split. Most retail users still depend on centralized exchanges, so retail adoption of decentralized trading remains limited. Early on, there were many malicious wash-trading or incentive-farming accounts, but this decreased after token launch.

### 用户动机

散户用户参与交易主要以短期投机获利为核心动机，关注低成本交易和资产价格波动收益。

机构用户则更侧重风险对冲、跨市场套利、流动性管理等专业需求，更重视平台交易安全性、数据可验证性与交易执行效率。

Retail users mainly trade for short-term speculative profit, low-cost access, and exposure to price volatility.

Institutional users focus more on hedging, cross-market arbitrage, liquidity management, transaction safety, verifiable data, and execution efficiency.

### 现存问题

去中心化无许可特性让平台容易吸引恶意刷量、薅羊毛等行为，增加系统资源消耗与运营成本。

代币上线后，通过经济激励调整缓解了部分问题，但平台仍需要持续平衡低费率优势与防恶意行为机制，避免风控升级过度抬升普通用户交易成本。

The permissionless nature of decentralized platforms can attract wash trading, incentive farming, and other abusive behavior, increasing resource consumption and operating cost.

After token launch, incentive design helped reduce the issue, but the platform still needs to balance low fees with anti-abuse mechanisms so that risk controls do not raise costs too much for ordinary users.

## 五、预言机（Oracle）核心问题

### 当前方案

主流加密资产交易市场采用多预言机供应商组合方案，通过多源数据交叉验证保障价格准确性。

不同资产采用不同数据来源：

- 原生加密资产依托链上现货数据生成价格。
- 黄金、原油等传统大宗商品资产对接中心化期货市场实时数据。
- 小众长尾资产、预上线项目资产通过 AMM 机制适配价格。

Current designs use multiple oracle providers and cross-validate data sources to improve price accuracy.

Different asset types use different sources. Native crypto assets rely on onchain spot data; traditional commodities such as gold or oil connect to centralized futures market data; long-tail or pre-launch assets may use AMM-based pricing.

### 核心隐患

预言机是系统安全的关键短板，与 zk 证明构建的高安全体系并不完全匹配。

中心化数据源存在价格操控、单点故障、数据延迟等风险。一旦预言机数据出错或被篡改，可能直接导致用户资产损失，成为去中心化交易系统的安全软肋。

Oracles remain a key security weakness and do not fully match the high-security assumptions provided by zk proofs.

Centralized data sources can introduce risks such as price manipulation, single-point failure, and data latency. If oracle data is wrong or manipulated, users can suffer direct asset losses, making oracles a soft spot in decentralized trading systems.

### 行业建议

行业需要提升预言机设计的严谨性，参考 zk 证明体系的安全标准构建预言机安全机制。

优先方向包括：

- 使用链上原生数据。
- 使用多源数据中位数聚合。
- 减少对中心化数据源的依赖。
- 必要时引入数据延迟挑战与争议仲裁机制。
- 允许用户对异常价格提出异议。

目标是提升预言机数据可靠性和抗攻击能力。

The industry needs more rigorous oracle design, with security standards closer to zk-proof systems.

Preferred directions include using onchain-native data, median aggregation across multiple sources, reducing dependence on centralized data, adding delayed challenge windows or dispute arbitration when necessary, and allowing users to challenge abnormal prices. The goal is to improve oracle reliability and attack resistance.

## 六、数据可用性（DA）设计

### 现有模式

系统采用混合数据可用性（DA）模型。

核心资产数据同步上链至以太坊，包括：

- 用户资产余额
- 持仓权益
- 清算记录

这些数据上链后，可确保资产所有权可追溯、可赎回。

高频订单簿数据、临时交易状态等非核心数据不进行全量上链存储，而是通过 zk 证明完成有效性验证。

The system uses a hybrid data availability model.

Core asset data is posted to Ethereum, including user balances, position rights, and liquidation records. This ensures asset ownership can be traced and redeemed.

High-frequency order book data and temporary trading states are not fully posted onchain. Instead, zk proofs verify their validity.

### 设计逻辑

高频订单数据占平台总交易数据的绝大多数。如果全部上链，会直接超出以太坊区块空间承载能力，引发严重扩容瓶颈。

混合 DA 模型优先保障用户资产赎回和安全退出需求，同时通过 zk 证明确保链下数据真实性，在安全、成本、扩容效率之间取得平衡。

High-frequency order data makes up most of the platform's trading data. Posting all of it onchain would exceed Ethereum blockspace capacity and create a severe scaling bottleneck.

The hybrid DA model prioritizes asset redemption and safe exit for users while using zk proofs to verify offchain data validity. This is a tradeoff between security, cost, and scalability.

## 七、行业共识与总结

该 zk 交易系统是 zk 技术领域的标杆项目，在非 EVM 系 zk 应用中实现突破性落地。它的技术迭代与规模化运营成效，为行业同类项目提供了实践参考，也推动 zk 技术从理论探索走向商业化应用。

后续重点难题包括：

- 预言机安全加固
- 排序节点去中心化
- 链上复杂金融产品研发

整个行业也需要共同推动预言机技术标准化建设，建立统一的安全规范与数据验证机制，在去中心化、安全性和交易效率之间取得平衡。

长期来看，DeFi 需要突破单纯投机工具的定位，逐步升级为风险管理、财富管理和普惠金融基础设施，进一步服务实体经济与多元金融需求。

This zk trading system appears to be a benchmark project in zk technology, especially among non-EVM zk applications. Its technical iteration and large-scale operations provide practical references for similar projects and push zk from theory toward commercial use.

Key future challenges include oracle security, decentralized sequencing, and complex onchain financial products.

The broader industry also needs oracle standardization, unified security norms, and data verification mechanisms. Long term, DeFi needs to move beyond speculation and become infrastructure for risk management, wealth management, and more inclusive financial services.

## My Understanding

这场讨论让我看到，zk 交易系统的关键不只是“证明快不快”，而是整个交易系统能否在证明、数据传输、排序、预言机、DA、成本和用户行为之间形成稳定闭环。

对 AI x Web3 学习来说，这也很有启发：当 Agent 未来参与链上交易或金融操作时，它面对的不是单一合约调用，而是一整套由证明、价格源、数据可用性、风控和权限组成的复杂系统。

This discussion made me realize that a zk trading system is not only about proof speed. The real challenge is whether proving, data transfer, sequencing, oracle design, DA, cost structure, and user behavior can form a stable system.

For AI x Web3 learning, this is useful because future Agents interacting with onchain finance will not simply call a contract. They will operate inside a complex system of proofs, price sources, data availability, risk controls, and permissions.

## Concepts to Review

- zk custom circuits / zk 自定义电路
- witness data / 见证数据
- non-EVM zk systems / 非 EVM zk 系统
- sequencer decentralization / 排序节点去中心化
- timelock encryption / 时间锁加密
- MPC
- oracle security / 预言机安全
- hybrid data availability / 混合 DA
- zk trading system cost structure / zk 交易系统成本结构
- onchain options / 链上期权
- structured financial products / 结构化金融产品

## Follow-up Questions

- 如果 zk 证明本身不再是瓶颈，那么见证数据传输和系统调度应如何优化？
- 非 EVM zk 交易系统与 EVM rollup 之间会如何分工？
- 预言机安全能否达到接近 zk 证明系统的安全标准？
- 混合 DA 模型中，哪些数据必须上链，哪些数据可以只做有效性验证？
- Agent 未来参与交易系统时，应如何感知预言机风险、DA 风险和排序风险？

- If zk proving itself is no longer the bottleneck, how should witness-data transfer and system scheduling be optimized?
- How will non-EVM zk trading systems and EVM rollups divide responsibilities?
- Can oracle security reach standards close to zk-proof systems?
- In a hybrid DA model, which data must be posted onchain and which data can rely on validity verification?
- When Agents participate in trading systems, how should they reason about oracle risk, DA risk, and sequencing risk?

## Privacy Check

- [x] No private keys, seed phrases, API keys, cookies, or session data.
- [x] No wallet addresses, balances, transaction hashes, or private account information.
- [x] This note is based on learner-provided meeting notes and marked as not fully source-verified.
