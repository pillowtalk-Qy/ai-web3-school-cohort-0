# Web3 Operating Principles Sharing - 2026-05-20

## Metadata / 元信息

- Date / 日期: 2026-05-20
- Time / 时间: about 1 hour / 约 1 小时
- Title / 标题: 从第一性原理深度解析 Web3 运行原理
- Program / 项目: AI x Web3 School
- Speaker / 主讲: Bruce
- Host / 主持: vv
- Participants / 参与者: learners / 学员
- Source / 来源: learner-provided meeting summary / 学习者提供的会议总结
- Type / 类型: sharing session / 分享会
- Format / 形式: online livestream, slides, demo, and Q&A / 线上直播、PPT、Demo 与问答
- Topics / 主题: wallet, private key, signature, transaction, gas, RPC, mempool, validator, smart contract, Ethereum upgrade / 钱包、私钥、签名、交易、gas、RPC、mempool、验证者、智能合约、以太坊升级
- Status / 状态: summarized from learner-provided notes / 基于学习者提供笔记整理
- Public / 公开状态: needs review before publishing / 公开前需人工审核

## Important Caveat / 重要说明

This is a collected class note based on learner-provided notes. It includes speaker explanations, demo flow, technical concepts, and Q&A summaries. It is a learning record, not a fully verified technical manual.

这是一份基于学习者提供内容整理的课程笔记，包含主讲人的概念解释、Demo 脉络、技术概念和 Q&A 摘要。它是学习记录，不等同于逐条核验后的技术手册。

## 中文详细纪要

### 一、开场与分享目标（00:00-03:50）

主持人 vv 开场，介绍了主讲人 Bruce 的背景，并说明本次分享的目标是从第一性原理解释 Web3 的运行主线。课程覆盖钱包、私钥、助记词、交易、签名、网络传播、出块、智能合约、协议升级，以及 Web3 的关键特性和边界。

本场内容可以概括为五个模块：

- 钱包、私钥、助记词、地址与个人主权。
- 交易、签名、nonce 与 gas 费。
- 区块链网络：RPC、mempool、打包、出块、确认与共识。
- 智能合约的本质、运行方式与社会学意义。
- 以太坊协议升级、硬分叉与客户端多样性。

一笔交易的简化链路是：

```text
用户钱包签名 -> RPC 广播 -> Mempool 排队 -> Builder 排序打包 -> Validator 验证出块 -> 上链确认
```

如果抽象成更通用的流程，则是：

```text
身份认证 -> 授权签名 -> 网络传播 -> 排序 -> 执行 -> 确认
```

The opening framed Web3 as an end-to-end operating process rather than a single wallet, chain, or asset concept. The important path is not only "user sends a transaction," but the full sequence from identity and authorization to propagation, ordering, execution, and confirmation.

In this framing, wallets, signatures, RPC nodes, mempools, builders, validators, smart contracts, and protocol upgrades are connected parts of the same system. Understanding one transaction from start to finish is a useful way to understand how Web3 actually works.

### 二、钱包、私钥、助记词、地址与个人主权（04:00-10:40）

#### 1. 核心概念

私钥是资产控制权的核心。它可以类比成银行账户密码，但区别在于私钥极长、随机、不可修改、不可找回。谁掌握私钥，谁就能签名交易并控制对应地址上的资产。

助记词是私钥体系的备份入口。因为私钥本身很长、很难记忆，所以钱包通常用 12 或 24 个单词作为备份。一组助记词可以通过派生路径生成多个私钥和多个地址。

公钥由私钥生成，公开可见，但仍然较长。地址则是对公钥做哈希处理后得到的公开收款标识，可以类比银行卡号，用于接收转账和公开展示。

#### 2. 钱包生成流程

Demo 展示的钱包生成链路是：

```text
助记词 -> 派生路径 -> 私钥 -> 公钥 -> 地址
```

关键关系：

- 助记词泄露，通常意味着由它派生出的所有私钥和地址都处于风险中。
- 单个私钥泄露，意味着对应地址资产处于风险中。
- 私钥和地址绑定，但资产并不在钱包软件里，而是在链上状态中。

#### 3. 钱包的本质

钱包不是资产容器，而是私钥管理和签名工具。它负责生成私钥、签名交易、发起链上调用，并读取链上余额。

资产、账本和余额都在区块链上，可以通过区块链浏览器查询。同一组助记词或私钥可以导入不同钱包，例如 MetaMask 或 Trust Wallet。这和传统银行账号绑定单一机构的体验非常不同。

#### 4. 个人主权

Web3 与传统金融的一个关键差异是个人主权。传统金融开户需要实名、柜台、审批和身份绑定；Web3 钱包可以无许可创建，不需要 KYC 或中心化机构审批。

这意味着用户可以快速拥有一个全球可转账账户，尤其对金融基础设施薄弱地区有现实意义。但它也意味着用户必须自己承担私钥管理责任。

#### 5. 安全提醒

区块链不认人，只认签名。私钥和助记词不可重置、不可找回。

常见泄露途径包括钓鱼网站、木马、截图同步到网盘、聊天发送、手机丢失和社交工程。一旦确认泄露，应尽快把资产转移到新的安全地址。更稳妥的做法是离线保存、物理隔离，不把助记词和私钥放在联网环境中。

A wallet is best understood as a private-key manager, not an asset container. Assets, balances, and account state live onchain; the wallet stores or controls the signing material needed to prove ownership and authorize actions. A seed phrase can derive many private keys and addresses, so leaking the seed phrase can put all derived accounts at risk, while leaking one private key mainly exposes the assets controlled by that specific address.

The self-sovereignty point is double-edged. Web3 makes it possible to create a globally usable account without KYC, bank approval, or institutional permission, which is powerful for open access. But the same design also removes many recovery paths from traditional finance. If the private key or seed phrase is lost or stolen, the network will still only recognize valid signatures, not personal identity or explanations.

### 三、交易、签名、nonce 与 gas 费（10:50-20:40）

#### 1. 交易的本质

交易不只是转账。更准确地说，交易是用户授权网络执行某个动作的一段数据。

常见交易类型包括：

- 转账。
- 调用合约。
- 投票。
- Mint NFT。
- 质押或赎回。
- 授权 token 或协议操作。

#### 2. 交易四大组成

一笔交易至少需要表达四类信息：

- 要做什么：目标地址、金额、合约地址、方法和参数。
- 手续费：为使用链上计算、存储和网络资源付费。
- nonce：交易序号，用于防止重放攻击和保证账户交易顺序。
- 签名：证明交易由私钥持有人授权，且内容未被篡改。

#### 3. 数字签名

用户用私钥对交易信息的哈希生成签名。交易内容只要改变一个字符，签名就会完全不同。

节点验证签名时，会根据交易信息和签名恢复出签名地址，再与发送地址比对。如果能匹配，说明该交易确实由对应私钥授权。

核心结论是：谁掌握私钥，谁掌握资产。

#### 4. 量子计算威胁

主讲人提到，如果未来哈希或签名算法被量子计算突破，攻击者可能伪造签名、冒充地址并盗走资产。因此，抗量子密码学是未来需要继续关注的方向。

#### 5. gas 费

gas 是链上资源使用费，主要有两个作用：

- 防止垃圾交易。如果交易免费，网络会被无效请求刷爆。
- 激励节点和验证者，补偿服务器、带宽、算力和维护成本。

以太坊 EIP-1559 后，gas 费可粗略分为：

- Base Fee：基础费，随网络拥堵自动调整，并被销毁。
- Priority Fee：优先费或小费，支付给出块相关参与者，以提高交易被处理的优先级。

在 2021 年 NFT 热潮中，链上活动拥挤导致 gas 费用非常高。所有交易的 gas 消耗、手续费、状态和确认情况都可以在 Etherscan 等区块链浏览器中查看。

A transaction is signed intent. It can represent a simple transfer, but it can also trigger a contract call, vote, mint, stake, redeem, or approve token access. The transaction data describes what the user wants the network to execute; the signature proves that the holder of the private key authorized that exact content.

Nonce, gas, and signature each protect a different part of the system. The nonce gives the account an ordered sequence and helps prevent replay. The signature makes tampering visible because even a tiny change in the message produces a different signature. Gas prices scarce blockspace, discourages spam, and compensates the participants who keep the network running. In this sense, a transaction is both a cryptographic authorization and an economic request for shared resources.

### 四、区块链网络如何运行（20:50-34:20）

#### 1. 交易上链全链路

交易从用户发起到最终确认，经过以下步骤：

```text
钱包签名 -> RPC 节点 -> Mempool -> Builder 打包 -> Validator 验证 -> 出块 -> 上链 -> 确认
```

这条链路把用户侧的钱包操作、网络层的传播机制、区块构建、验证者共识和最终状态更新连接起来。

#### 2. RPC 节点

区块链是去中心化点对点网络，普通前端或钱包通常不会直接和所有节点通信。RPC 节点提供 HTTP 或 WebSocket 接口，是传统 Web 应用与链上节点之间的桥梁。

RPC 节点的作用包括：

- 接收钱包或 dApp 请求。
- 将交易或查询转发到链上网络。
- 返回余额、交易状态、区块和合约调用结果。

但公开 RPC 服务商数量有限，存在一定中心化依赖。如果服务商宕机或封禁，普通用户可能暂时无法顺利发交易或读取链上数据。

#### 3. Mempool

Mempool 是未打包交易的等待区，存在节点内存中。它通常是公开、动态变化的。网络拥堵时，交易排队时间变长，支付更高 gas 的交易更容易被优先处理。

#### 4. Builder 与 Validator

Builder 负责从 mempool 中选择交易、排序并构建区块。排序往往和 gas、MEV 与收益最大化相关。

Validator 是以太坊 PoS 体系中的验证者。验证者需要质押 32 ETH，职责包括验证区块合法性、参与见证、防止作恶并维护网络安全。作恶或离线可能导致质押 ETH 被罚没。

#### 5. 区块确认

刚出块时，交易仍可能因为链重组而回滚。主讲人用以太坊举例：

- 刚出块：未确认，仍有回滚风险。
- 约 12 分钟：进入较安全状态。
- 约 18 分钟：最终确认，交易基本永久生效。

区块通过引用前一区块哈希形成链式结构。区块越深，被攻击和篡改的成本越高。

#### 6. PoW 与 PoS

PoW 以比特币为代表，矿工竞争计算哈希难题。它的优点是抗攻击强、去中心化程度高；缺点是耗电严重，也可能出现算力集中。

PoS 以以太坊为代表，验证者通过质押代币参与共识，并按规则获得出块和见证机会。它更节能、门槛相对更低，但也有质押集中和中心化风险。

The network layer turns signed user intent into shared state. Wallets usually do not talk directly to the whole peer-to-peer network; they rely on RPC providers as the bridge between ordinary Web interfaces and blockchain nodes. This creates a practical access layer, but it also introduces a centralization dependency: if a major RPC provider fails, blocks, or filters access, many users may temporarily lose a convenient way to read or write chain data.

After a transaction reaches the network, it enters the mempool, waits to be selected, and is eventually ordered into a block. Builders care about ordering and economic value, while validators check validity, participate in consensus, and can be rewarded or penalized depending on behavior. Confirmation and finality are not just UI labels; they describe how much confidence the network has that a transaction will remain part of the canonical history.

The comparison between PoW and PoS also shows two different security philosophies. PoW secures the chain through external computational cost and energy use, while PoS secures the chain through bonded capital and slashing risk. Both try to make attacks expensive, but they create different tradeoffs around energy, participation, concentration, and governance.

### 五、智能合约（35:30-38:50）

智能合约是部署在链上、可由交易触发、自动执行的代码。合约编译后以 bytecode 形式存在链上，由 EVM 执行。全网节点按同一规则执行，得到一致结果。

主讲人强调了智能合约的社会学意义。传统世界依靠合同、律师、政府和中介建立信任，成本高、效率低，跨国协作尤其复杂。Web3 把规则写进公开代码，通过不可篡改和自动执行，让信任对象从人或机构转向代码和共识。

这也是 `Code is Law` 的含义之一：规则公开、透明、可验证，并在链上自动执行。

Smart contracts are onchain programs that can be triggered by transactions and executed by the network according to deterministic rules. Once deployed, the code becomes part of the chain's public execution environment, usually as bytecode running inside the EVM. This makes contract behavior observable and repeatable, but it also means mistakes can be costly because code may directly control assets.

The social meaning is that part of trust moves from people, institutions, and legal enforcement into transparent execution and shared verification. `Code is Law` does not mean code solves every social problem, but it does explain why smart contracts can reduce reliance on intermediaries in some workflows: the rule is written, visible, and executed by the network rather than negotiated after the fact.

### 六、以太坊协议升级（39:00-43:50）

#### 1. 升级流程

以太坊协议升级不是某个公司单方面发版，而是更接近去中心化治理流程：

- 社区讨论，例如 Ethereum Magicians 论坛和 All Core Devs 会议。
- 形成 EIP，明确改动细节、参数和影响。
- 各客户端团队按 EIP 实现，例如 Geth、Besu、Nethermind、Erigon 等。
- 在指定区块高度或时间点激活新规则。
- 节点、钱包、交易所和 DeFi 协议逐步同步升级。

#### 2. 硬分叉

硬分叉是协议规则变化导致新旧规则不兼容。理论上会出现老规则链和新规则链。成功升级时，大多数生态选择新规则，旧链逐渐无人维护。

以太坊与以太坊经典的分裂是一个重要历史案例。它提醒我，链的运行不只是技术规则，还包含社会共识。

#### 3. 客户端多样性

以太坊执行层有多个主流客户端，由不同团队和语言实现。客户端多样性的意义是避免单点故障：如果某个客户端出现 bug，其他客户端仍可维持网络运行，降低全网同时崩溃的概率。

#### 4. 节点分布

以太坊节点分布在美国、德国、中国、亚洲、欧洲等多个地区。全球分布、客户端多样性和无单一控制者，是抗审查能力的重要来源。

Ethereum upgrades show that a blockchain is not frozen software. Protocol rules evolve through community discussion, EIPs, client implementation, coordinated activation, and social consensus. A successful upgrade requires more than writing code: client teams, node operators, wallets, exchanges, DeFi protocols, and users need to converge on the same rule change.

Hard forks reveal the social layer of blockchains. If the ecosystem agrees on the new rules, the old chain may fade away; if consensus splits, two chains can continue separately. Client diversity is part of Ethereum's safety model because it reduces the risk that one implementation bug can break the entire network. Different clients, teams, and languages make the system harder to coordinate, but also more resilient.

### 七、Web3 的关键特性与边界（44:00-49:40）

#### 1. 核心特性

- 去中心化：钱包无许可创建，节点全球分布；但 RPC 层仍有中心化依赖。
- 无许可：任何人可以读取、写入和参与，主要门槛是 gas 成本。
- 抗审查：节点分散、客户端多样，无单点关停。
- 开源可验证：代码、交易和链上状态可公开验证。
- 匿名性但非完全隐私：地址不天然绑定实名，但余额和交易路径公开。
- 可组合性：智能合约可以像积木一样互相调用和组合。

#### 2. 三大学科交叉

主讲人把 Web3 理解为密码学、经济学和社会学的交叉：

- 密码学：私钥、签名、哈希、ZK、抗量子，负责所有权和验证。
- 经济学：gas、质押、奖励、罚没、通缩和通胀，负责激励协调。
- 社会学：去中心化治理、共识、个人主权、信任重构和全球协作。

#### 3. 真正价值

Web3 的真正价值不是某一个技术点，而是数字世界控制权的重新分配。它用密码学保护所有权，用经济激励协调行为，用社会共识制定规则。

#### 4. 开放性问题

课后留下的开放性思考包括：

- 如何降低私钥管理门槛，并提升普通用户安全性？
- 去中心化网络没有传统税收，公共基础设施的开发和维护由谁付费？
- 无审查环境下，如何治理有害信息、诈骗、洗钱和非法内容？
- 去中心化协作中，如何实现公平、可信、透明的利益分配？

The summary connected Web3 to cryptography, economics, and sociology. Cryptography protects ownership through private keys, signatures, hashes, and future directions such as ZK and anti-quantum cryptography. Economics coordinates behavior through gas, staking, rewards, slashing, fee burning, and inflation or deflation design. Sociology appears in governance, decentralization, public goods, trust reconstruction, and the question of how people coordinate without one central authority.

The boundaries are just as important as the strengths. Permissionless access improves openness, but it also makes phishing, scams, and harmful activity harder to control. Pseudonymity protects identity in some cases, but onchain balances and transaction paths remain public. Decentralization reduces single points of control, but RPC providers, staking concentration, builders, and client distribution can still create new power centers.

The most useful takeaway is that Web3 is not only a technical stack. It is a different way to assign control in the digital world: cryptography defines ownership, incentives coordinate participants, and social consensus decides which rules the ecosystem continues to recognize.

### 八、Q&A 重点整理（51:00-72:30）

#### 1. 以太坊验证者收益机制

验证者质押 32 ETH 后参与以太坊 PoS 共识。每个 slot 会选出 proposer 负责出块，获得出块相关奖励和部分 gas 收入。其他验证者通过见证和验证获得奖励。作恶或长期离线会被罚没。

#### 2. 智能合约不可篡改，为什么还能升级？

合约代码本身不可改，但可以通过 Proxy Pattern 实现升级。用户始终调用代理合约地址，代理再指向具体逻辑合约。升级时部署新的逻辑合约，再修改代理指向。

常见模式包括透明代理、UUPS 和 Beacon。严肃 DeFi 协议通常会用多签、DAO 权限和时间锁降低恶意升级风险。

网络层升级则是另一回事。以太坊协议升级通过硬分叉和客户端升级完成，普通钱包用户一般无需直接操作。

#### 3. 链上数据如何获取？RPC 如何盈利？

普通用户和大多数 dApp 使用公开或付费 RPC。专业机构、交易所、数据公司和套利团队可能自建全节点，以获得更完整、实时、可控的数据。

RPC 服务商通过提供稳定、高速、低延迟服务盈利，常见收费方式是调用量、套餐和高级接口。读请求成本较低，很多服务会提供免费额度；高并发、低延迟和写入类服务通常更贵。

#### 4. 节点如何互相发现？

节点启动时通常内置 boot node 列表，通过引导节点获取初始网络信息。之后节点之间通过握手、广播和地址交换动态发现更多节点，形成点对点网络。

#### 5. 代理合约地址可以随便改吗？

代理合约的逻辑地址可以被更新，但权限应受到严格控制。常见控制方式包括管理员、多签、DAO 和时间锁。修改过程应公开留痕、可审计，避免暗箱升级。

The Q&A clarified two useful distinctions. Contract upgrades and protocol upgrades are different layers. A contract may be upgradeable through a proxy pattern, where users keep calling the same proxy address while the implementation address changes under controlled permissions. This makes user experience smoother, but it introduces governance risk, so multisig control, DAO authorization, timelocks, and public audit trails become important.

Protocol upgrades happen at the network-rule level through hard forks and client coordination. Ordinary wallet users may not notice much, but node operators, client teams, wallets, exchanges, and protocols need to upgrade in sync. The RPC discussion also made the access layer more concrete: ordinary users can rely on public or paid RPC providers, while professional teams may run full nodes for completeness, latency, privacy, and control.

## My Understanding / 我的理解

- 这次分享把 Web3 的“端到端链路”串起来了：钱包不是孤立工具，交易也不是单纯转账，它们和 RPC、mempool、builder、validator、共识和最终确认连成一条完整路径。
- 私钥管理是 Web3 个人主权的代价。无许可开户很强大，但也意味着没有银行客服能帮我找回资产。
- RPC 是一个容易被忽略的中心化依赖。用户以为自己在直接使用去中心化网络，但实际入口常常依赖少数 RPC 服务商。
- gas 不是单纯手续费，而是反垃圾机制、资源定价机制和节点激励机制。
- 智能合约的关键不只是“自动执行代码”，而是把规则、信任和协作方式重新写进公开可验证的系统里。
- 协议升级让我意识到，区块链不是完全静止的代码系统。它仍然依赖社区讨论、客户端实现、生态协调和社会共识。
- Web3 的价值需要同时理解密码学、经济学和社会学，只看其中一个维度都会偏。

My main takeaway is that Web3 becomes clearer when I follow the full path from private key to finality. Wallets, transactions, gas, RPC, mempools, builders, validators, contracts, upgrades, and governance are not separate topics; they form one system for digital ownership and coordination.

This also makes the risk model clearer. The same system that gives users direct control also asks them to manage keys, understand signatures, trust access providers carefully, wait for finality, and evaluate upgrade permissions. The learning goal is not only to memorize terms, but to understand where control, trust, and responsibility move at each step.

## Concepts to Review / 待复习概念

- HD wallet and derivation path / HD 钱包与派生路径
- Private key, public key, address / 私钥、公钥、地址
- Message signing and transaction signing / 消息签名与交易签名
- EC recover / 签名地址恢复
- Nonce and replay protection / nonce 与重放保护
- EIP-1559 gas model / EIP-1559 gas 模型
- RPC provider centralization / RPC 服务商中心化依赖
- Mempool / 内存池
- Builder and MEV / Builder 与 MEV
- Validator and proposer / 验证者与出块者
- PoW and PoS / 工作量证明与权益证明
- Safe and finalized blocks / 安全区块与最终确认
- EVM bytecode / EVM 字节码
- Proxy Pattern, UUPS, Beacon / 代理合约、UUPS、Beacon
- Ethereum Magicians and All Core Devs / 以太坊社区讨论与核心开发者会议
- EIP process / EIP 流程
- Client diversity / 客户端多样性
- Boot node and peer discovery / 引导节点与节点发现
- Anti-quantum cryptography / 抗量子密码学

## Questions / 问题

- 普通用户最安全、最低摩擦的私钥管理方式会是什么？硬件钱包、AA 钱包、MPC、社交恢复分别适合哪些场景？
- RPC 中心化依赖应该由钱包、多 RPC fallback、自建节点，还是去中心化 RPC 网络来缓解？
- Builder 排序和 MEV 对普通用户有什么实际影响？哪些钱包或 dApp 已经在提供保护？
- `Safe` 和 `Finalized` 在以太坊实际客户端和区块浏览器里如何显示？不同 L2 的最终确认又如何计算？
- 代理合约升级的治理权限应该如何公开展示，才能让普通用户判断风险？
- 如果 Web3 公共基础设施需要长期维护，链上公共物品资金应该如何设计得透明又不被滥用？

These questions point to the same deeper issue: how can Web3 preserve permissionless control while reducing the burden placed on ordinary users around keys, RPC access, MEV exposure, contract-upgrade risk, finality, and public infrastructure funding?

A second layer of questions is about visibility. It is not enough for the system to be technically transparent if ordinary users cannot understand what they are signing, which RPC endpoint they depend on, whether a contract is upgradeable, or when a transaction is truly final. Better tooling, clearer wallet interfaces, and safer defaults may be as important as deeper protocol design.

## Follow-up Actions / 后续行动

- [ ] 画一张从钱包签名到最终确认的交易全链路图。
- [ ] 用测试网和 burner wallet 做一次转账或合约调用，并在区块浏览器中记录 gas、nonce、状态和确认数。
- [ ] 对比至少两个 RPC 服务商，记录免费额度、稳定性、隐私和中心化风险。
- [ ] 复习 EIP-1559、mempool、builder、validator 和 MEV 的关系。
- [ ] 整理一篇 topic note：Web3 transaction lifecycle from first principles。
- [ ] 研究代理合约升级模式，重点比较 transparent proxy、UUPS 和 Beacon。
- [ ] 找一个真实合约，在区块浏览器中观察代理地址、逻辑合约地址、管理员和升级记录。

For follow-up, I should turn the transaction lifecycle into a visible diagram and then verify the concepts through small testnet experiments: one transaction, one block explorer review, one RPC comparison, and one proxy-contract inspection.

The practical goal is to connect vocabulary with observable evidence. Instead of only saying "nonce," "gas," "mempool," "finality," or "proxy," I should use a testnet transaction and real block explorer pages to see where those concepts appear in actual tooling. This can later become a reusable topic note for the learning repository.

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
