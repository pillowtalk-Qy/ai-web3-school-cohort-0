# Week 1 Live Class - AI Era Web3 Architecture Capabilities

## Metadata / 元信息

- Date / 日期: 2026-05-18
- Time / 时间: 20:00, delayed start / 20:00，延迟开场
- Title / 标题: AI 全栈课程首场分享会：AI 时代 Web3 开发者必备基础与架构能力
- Program / 项目: AI x Web3 School Week 1
- Speaker / 主讲: TC 老师
- Host / 主持: 说话人 A
- Type / 类型: live class / 线上分享
- Format / 形式: online sharing + live Q&A / 线上分享 + 实时问答
- Topics / 主题: Web3 architecture, wallet, transaction lifecycle, security, AI-assisted development / Web3 架构、钱包、交易生命周期、安全、AI 辅助开发
- Status / 状态: summarized from learner-provided notes / 基于学习者提供笔记整理
- Public / 公开状态: needs review before publishing / 公开前需人工审核

## Important Caveat / 重要说明

This is a collected class note based on learner-provided notes. It includes speaker views, technical explanations, and Q&A summaries. It is a learning record, not a fully verified technical specification.

这是一份基于学习者提供内容整理的课程笔记，包含主讲观点、技术解释和 Q&A 摘要。它是学习记录，不等同于逐条核验后的技术规范。

## 中文详细纪要

### 一、开场与流程说明（00:00-04:35）

#### 签到与调试（00:00-01:13）

- 主持人确认 TC 老师入会，测试音视频。
- 因会议略晚开始，主持人致歉后正式启动。

#### 分享会背景与双语说明（01:14-02:39）

- 本场为 AI 全栈课程第一场分享会。
- 嘉宾和参与者包含中英双语背景，后台正在制作双语字幕。
- 国内同学可用豆包实时转译。
- 录播会配英文字幕。

#### 嘉宾介绍（02:40-03:50）

- TC 老师：安全背景，早期做二进制病毒分析，现为香港 Web3 公司技术专家，负责技术预研与安全。
- 分享重点：
  - 粉丝高频问题：AI 时代还要学基础吗？Web2/Web3 是否割裂？
  - 用简易 Web3 支付系统讲基础与安全设计。
  - AI 时代开发者核心技能，不只局限于 Web3。
  - 结尾 Q&A，开放开麦提问。

#### TC 老师正式开讲（03:51-04:35）

本次分享分四大模块：

- 高频问题
- 系统设计
- 变与不变
- AI 时代架构师能力模型

### 二、高频问题：AI、Web2/Web3、安全（04:36-10:34）

#### 1. 有 AI，还需要学基础知识吗？（04:48-07:04）

核心结论：必须学。AI 不会降低复杂度，只会放大能力。

如果基础和架构能力不足，开发者无法判断 AI 输出是糟糕代码还是高质量方案。

人和 AI 的分工：

- 人：设计方案、评估合理性、验收代码、分析问题。
- AI：协助细化方案、梳理数据流和请求流、高质量批量编码、自我验证。

AI 编码质量的关键是自我验证：写代码、自动验证、持续迭代直到正确。

一句话总结：AI 是工具，不是替代。基础不牢，就驾驭不了 AI。

#### 2. Web3 和 Web2 是完全不同体系吗？（07:05-08:36）

核心结论：不是割裂。Web3 大量复用 Web2 能力，只是侧重点不同。

Web3 项目里 Web2 占比很高：

- 中心化交易所（CEX）：Web2 占比超过 50%。
- 衍生品交易所：链上清算、链下撮合，依赖 Web2。
- DEX（如 Uniswap / DYDX）：依赖 Web2 前端、状态管理和 UX 优化。

没有 Web2，Web3 项目跑不起来，也很难被用户使用。

#### 3. Web3 安全：源于设计、贯穿全周期（08:37-10:34）

- Web2 常见模式是先上线、后补安全。
- Web3 中，安全必须源于设计。
- 如果设计有漏洞，上线即可能资产归零。
- 审计不等于安全。审计是锦上添花，安全无法证伪，常常只有 0 和 1。
- 安全前提是基础扎实、架构扎实，否则安全是空谈。

阶段总结：

- AI 不降低复杂度，对人的要求更高。
- Web2/Web3 是融合关系，不是对立关系。
- Web3 安全要设计先行、贯穿全程。

### 三、案例拆解：从 Web2 支付到 Web3 支付（10:35-20:18）

#### 1. Web2 支付模型（10:35-13:19）

场景：电商购物、下单、支付服务、银行、用户支付、回调、发货。

参与方：

- 电商平台
- 支付服务
- 银行机构

请求流：

- 下单
- 创建支付单
- 银行返回信息
- 用户支付
- 银行回调
- 支付服务通知电商

资金流：

- 用户银行卡
- 支付服务账户
- 电商账户，通常定时清结算

安全要点：

- 服务间：API Key / Secret 验证身份。
- 用户侧：支付密码、风控、MFA。
- 核心：信任银行、信任支付服务。

#### 2. Web3 支付模型：把银行换成区块链（13:20-17:45）

本质：区块链可以理解为去中心化银行，不同链类似不同银行。

流程：

- 电商生成专属地址。
- 用户往地址转账。
- 链上记录交易。
- 链上监听服务检测到交易。
- 监听服务回调支付服务。
- 电商发货。

关键区别：

- Web2：支付服务主动查银行，需要 API。
- Web3：地址算法与链一致，可离线生成，无需请求链。
- Web3：链无法主动外呼，链上监听服务需要轮询或长连接拉取。

资金流：

- 用户钱包
- 合约或地址
- 支付服务钱包
- 商户钱包

#### 3. Web3 如何解决信任？（16:38-17:45）

- 数据不可篡改：共识机制（PoW / PoS 等）保证。
- 逻辑公开透明：合约代码开源，确定性执行。同输入产生同结果。
- 无需信任第三方：用数学和共识替代权威。

#### 4. 钱包：Web3 身份与资产的核心（17:46-20:18）

钱包本质是私钥管理工具，承担身份和资产双重认证。

核心输入 / 输出：

- 输入：私钥，一个固定不变的大随机数。
- 输出：签名（Signature）。

签名两类：

- 交易签名：证明转账意图。
- 消息签名：证明身份，不暴露私钥。

关键问答：

- Q：私钥不变，签名会变吗？
- A：消息不同，签名一定不同。

- Q：私钥泄露会怎样？
- A：资产全部丢失、无法找回，链只认私钥不认人。

### 四、钱包分类、安全风险与交易生命周期（20:19-45:25）

#### 1. 钱包分类（25:00-30:30）

按账户类型（EVM 体系）：

- EOA 钱包：私钥钱包，用户掌控私钥，风险高。丢私钥等于丢资产。
- 合约钱包：链上程序实现钱包功能，天然支持多签，如 Safe。
- AA 钱包：账户抽象，融合 EOA / 合约钱包，是以太坊未来主推方向，但当前仍不成熟、应用较少。

按签名方式：

- MPC 钱包：多方签名，私钥分片、多人持有、协同签名。相关算法包括 GG18 / GG20。
- 合约多签：链上逻辑控制，常见 2/3、3/5 多签，公司和 DAO 常用。

按托管方式：

- 自托管：私钥在本地，例如浏览器插件钱包。安全性高，但操作复杂。
- 全托管：交易所托管私钥，例如币安 / OKX。方便，但存在交易所风险。
- 混合托管：私钥分片，用户和服务商各持一片，双方无法单独签名，例如 Zengo。

其他类型：

- 硬件钱包：如 Ledger，离线存储，难被攻破。
- 隐私钱包：使用 ZKP / 默克尔树等机制实现交易匿名。
- 分层钱包：BTC 常用，用于管理大量找零地址、简化私钥记忆。

#### 2. 钱包安全风险（31:00-33:16）

主要风险：

- 私钥泄露：不可逆，资产归零。
- 签名欺骗：钓鱼页面诱导签名，看似转 10U，实际转 100U。

防护方案：

- EIP-712 签名可视化：降低钓鱼风险，但技术门槛高。
- 禁用危险方法：如 `eth_sendTransaction` 等危险调用，防止误签交易。

结论：不懂钱包原理就容易埋雷，细节模糊可能导致资损。

#### 3. 交易生命周期（33:17-34:35）

- 构造交易：`to`、`value`、`data`。
- 使用私钥签名。
- 广播到链。
- 节点共识、交易上链。
- 状态更新，例如余额变更。

#### 4. 交易关键参数（34:36-37:44）

- Gas：费用，决定打包速度。传统模型包括 `gasLimit` 和 `gasPrice`，EIP-1559 引入 `baseFee` 和 `tip`。
- Nonce：防重放、保证幂等。EVM 中 nonce 递增，Solana / BTC 有天然防重放机制。
- CallData：链上交互的关键。如果没有 calldata，链上行为基本只剩转账，也就没有丰富生态。

#### 5. 交易监听与确认（38:47-41:16）

监听方式：

- 轮询（Pull）
- WebSocket 长连接（Push）

确认机制：

- 等待区块确认，防止链分叉（Reorg）。
- ETH：约 2 个 epoch，约 12 分钟。
- Polygon / Arbitrum：L2 到 L1 最终确认，时间更长。

流程：

- 监听
- 检测到交易
- 等待确认
- 风控筛查
- 回调

#### 6. 交易模拟（41:17-42:57）

- 作用：签名前模拟执行，预判结果。
- 关键：必须在签名前模拟。签名后再模拟意义有限，因为签名已经产生并可能泄露。

#### 7. 服务侧钱包安全（43:00-45:25）

- 资金拆分：冷热钱包分离，小额热钱包，大额冷存储。
- 多签 + 权限拆分：大资金必须多签，分级审批。
- 交易审核 + 模拟：大额或风控触发交易，需要人工审核、模拟、再签名。
- TEE 可信执行环境：私钥加密存储，在内存中解密签名，明文不出环境。

### 五、AI 时代：变与不变、开发者能力模型（45:26-50:01）

#### 1. AI 改变了什么？

- 编码更快。
- 学习更易。
- 调试效率提升。
- 降低重复劳动成本。
- 放大个体能力。

#### 2. AI 没改变什么？

- 系统复杂度不变：架构、安全、逻辑复杂度仍在。
- 责任不变：AI 出问题，人背锅。
- 判断力不变：AI 给方案，人负责判断对错。

#### 3. AI 时代架构师能力模型

- 扎实基础知识：底层、协议、密码学、链原理。
- 架构设计能力：拆解系统、设计流程、权衡取舍。
- Debug / 逆向能力：深入底层、定位问题、分析逻辑。
- 驾驭 AI 能力：懂 AI 边界，能评估输出，能纠正错误。

核心 Slogan：

> 驾驭 AI，而非被 AI 驱动。

### 六、Q&A 详细整理（50:15-91:45）

#### 1. Web3 安全学习路径？

- 先打好开发基础：会写合约、懂链基础。
- 看头部安全公司招聘要求，用 AI 反推所需能力。
- 针对性补全链原理、合约安全、钱包安全、密码学。

#### 2. 浏览器插件钱包 / 交易所钱包私钥在哪？

- 插件钱包：私钥在本地浏览器，不上传服务器。
- 交易所钱包：交易所托管私钥，充值地址由交易所生成，资金归集到热钱包。

#### 3. AI 在 Web3 安全的应用？

- 逆向未开源合约字节码。
- 漏洞挖掘。
- 自动化审计与风险检测。

#### 4. 交易所订单簿数据可信吗？

- CEX 数据大概率真实，API 供流动性提供商套利。
- 插针等极端情况存在，但并非普遍。

#### 5. Web3 大数据 / 量化需要 Web2 大数据架构吗？

- 有需求，但市场体量小、岗位少。
- 量化核心是策略和实时数据，策略通常是内部机密。
- 可参考 Dune、Flipside 等链上数据平台。

#### 6. 链上小额免密支付可行吗？

- 技术可行，信任上不可行。授权本质上意味着交出资产控制权。
- 替代方案：账号权限拆分 + 风控规则，例如单日限额、高频拦截。

#### 7. 钱包如何监听交易？性能如何？

- 方式：轮询 / Push 订阅。
- 可用 Go 协程高效处理。
- 影响即时性，不影响核心性能。
- 参考开源项目 Epusdt，多链收款实现。

#### 8. AA 钱包前景？

- 必然成熟：以太坊账号体系割裂，AA 是融合方案。
- 现状：不成熟、场景有限，多链优先用原生签名。

#### 9. 文科生能转 Web3 吗？

- 可以，逻辑思维比文理出身更重要。
- 方法：定方向、倒推能力、AI 辅助学习。

#### 10. 密码学到什么程度？

- 够用即可。
- 做 MPC 需要理解 GG18 / GG20 私钥分片。
- 做 ZK 需要理解证明逻辑。
- 推荐 B 站 Lindell（密码学博士）课程。

#### 11. 跨链需求大吗？

- 熊市需求弱，牛市会增长，因为链间交互增多。
- 现状：无完全去中心化跨链，中心化方案成熟且收益高。

#### 12. 面试 Web3 基础岗考什么？

- 基础知识 + AI 使用经验。
- 一面考基础，二三面考架构 / 场景设计。
- 建议基础扎实、诚实作答、重点清晰。

#### 13. 链上监听自己做还是付费？

- 付费为主，成本较低，月费通常可低于 100U。
- 建议双重校验，防单点故障。
- 自建成本高，需要专人维护节点、处理分叉。

#### 14. 智能合约审计怎么入行？

- 打基础：Solidity、EVM、密码学、漏洞类型。
- 做实战：找漏洞、写报告、参与审计项目。
- 参考安全公司招聘和社区竞赛。

#### 15. AI 编码放权边界？

- 本质是风控边界。
- 短时高频、大额、异常时间需要人工审核。
- 合规场景可自动放行。

#### 16. Web3 招聘渠道？

- 直接投优质项目方官网，成功率高。

#### 17. Debug 能力怎么提升？

- 逆向思维：从结果倒推原因。
- 熟悉底层执行逻辑。
- 多练：看字节码、调合约、分析漏洞。

## English Digest

### Overview

This was the first live session of the AI full-stack course, focused on the foundational and architectural capabilities Web3 developers need in the AI era. The speaker, TC, approached the topic from a security and architecture background.

### Core Message

AI does not remove complexity. It amplifies a developer's ability, but only if the developer has enough foundation, system-design judgment, debugging skill, and security awareness to evaluate and steer AI-generated work.

### Key Topics

- Whether developers still need fundamentals in the AI era.
- Why Web2 and Web3 are not separate worlds.
- Why Web3 security must start from design.
- How Web2 payment flows differ from Web3 payment flows.
- Why wallets are the core of Web3 identity and asset control.
- Wallet categories: EOA, contract wallets, AA wallets, MPC wallets, multisig wallets, custodial models, hardware wallets, privacy wallets, and hierarchical wallets.
- Transaction lifecycle: construction, signing, broadcasting, consensus, confirmation, and state update.
- Key transaction parameters: gas, nonce, calldata.
- Transaction monitoring, confirmations, simulation, and server-side wallet security.
- What changes and what does not change in the AI era.
- The capability model for AI-era architects.

### Architecture Takeaway

The session used payment systems as a simple but powerful architecture case. In Web2, payment relies on trusted banks and payment providers. In Web3, the blockchain replaces part of that trust model with deterministic execution, public state, signatures, and consensus. This changes not only the technical architecture but also the security assumptions.

### Security Takeaway

Web3 security cannot be bolted on after launch. A design mistake can directly lead to irreversible asset loss. Auditing helps, but it does not replace solid fundamentals, secure architecture, transaction simulation, monitoring, hot/cold wallet separation, multisig controls, and clear risk boundaries.

### AI Takeaway

AI improves coding speed, learning speed, and debugging efficiency, but humans remain responsible for architecture, judgment, correctness, and risk. The slogan from the class was:

> Master AI, do not be driven by AI.

## My Understanding / 我的理解

- 这节课把“AI 时代还要不要学基础”讲得很直接：越有 AI，越需要基础，因为判断 AI 输出质量的责任仍在人身上。
- Web3 不是脱离 Web2 的新世界，而是把 Web2 工程能力、链上资产逻辑、密码学身份和安全设计叠在一起。
- 钱包不是一个简单插件，而是 Web3 身份、资产控制、签名授权和安全边界的核心。
- Web3 支付系统是理解架构差异的好例子：Web2 依赖机构信任，Web3 依赖私钥、签名、链上状态和监听确认。
- 安全设计要前置，尤其是交易模拟、多签、冷热钱包、风控审核、TEE 等服务端钱包安全措施。
- AI 编码放权不是技术问题本身，而是风控和责任边界问题。

- This class made the AI-era foundation question very concrete: the more powerful AI becomes, the more important human judgment becomes.
- Web3 is not separated from Web2. It combines Web2 engineering, onchain asset logic, cryptographic identity, and security design.
- A wallet is not just a browser plugin; it is the core boundary for identity, asset control, signing authorization, and user safety.
- A Web3 payment system is a useful architecture example because it replaces institutional trust with private keys, signatures, onchain state, and transaction monitoring.
- Security design needs to happen before launch, especially around simulation, multisig, hot/cold wallets, risk review, and TEE-based server-side key handling.
- Delegating coding work to AI is ultimately a risk-control and responsibility-boundary decision.

## Concepts to Review / 待复习概念

- Web2 payment request flow / Web2 支付请求流
- Web3 payment monitoring / Web3 支付监听
- Wallet as identity / 钱包作为身份
- Private key and signature / 私钥与签名
- Message signing vs transaction signing / 消息签名与交易签名
- EOA wallet / EOA 钱包
- Contract wallet / 合约钱包
- Account abstraction / 账户抽象
- MPC wallet / MPC 钱包
- Contract multisig / 合约多签
- EIP-712
- Gas, nonce, calldata
- EIP-1559
- Reorg and confirmation / 链分叉与确认
- Transaction simulation / 交易模拟
- Hot wallet and cold wallet / 热钱包与冷钱包
- TEE
- Web3 security learning path / Web3 安全学习路径
- AI-assisted audit / AI 辅助审计

## Questions / 问题

- 一个最小 Web3 支付系统需要哪些模块，哪些可以先手写实验？
- EIP-712 签名可视化如何在真实钱包中呈现，用户是否真的能理解？
- 对小额免密支付，账户权限拆分和限额规则可以如何设计？
- AA 钱包现在不成熟的主要原因是技术、生态、成本还是用户体验？
- 服务侧钱包使用 TEE 时，和 MPC / 多签方案各自适合什么场景？
- AI 编码权限边界能否用类似交易风控的规则来管理？

- What modules are needed for a minimal Web3 payment system, and which ones can be prototyped first?
- How does EIP-712 signing visualization appear in real wallets, and can users actually understand it?
- How can account-permission splitting and spending limits support small-value passwordless payments?
- Is the current immaturity of AA wallets mainly due to technology, ecosystem, cost, or UX?
- When should server-side wallet systems use TEE, MPC, or multisig?
- Can AI coding permissions be governed using rules similar to transaction risk controls?

## Follow-up Actions / 后续行动

- [ ] 画一个 Web2 支付和 Web3 支付的对比流程图。
- [ ] 做一个最小 Web3 支付监听实验，优先使用测试网和 burner wallet。
- [ ] 复习 EOA、合约钱包、AA 钱包、MPC 钱包和多签钱包的区别。
- [ ] 研究 EIP-712 签名可视化，并记录到 `experiments/` 或 `handbook-feedback/`。
- [ ] 设计一个 AI 编码放权边界清单，用于后续 agent workflow。
- [ ] 把交易生命周期整理成一篇 topic note。

- [ ] Draw a comparison flow between Web2 payment and Web3 payment.
- [ ] Build a minimal Web3 payment-monitoring experiment using testnet and a burner wallet.
- [ ] Review EOA, contract wallets, AA wallets, MPC wallets, and multisig wallets.
- [ ] Study EIP-712 signing visualization and record findings in `experiments/` or `handbook-feedback/`.
- [ ] Design an AI coding permission boundary checklist for future agent workflows.
- [ ] Turn the transaction lifecycle into a topic note.

## Related Links / 相关链接

- AI x Web3 School Handbook: https://aiweb3.school/zh/handbook/
- Web3 Career Build AI x Web3 School: https://web3career.build/zh/programs/AI-Web3-School

## Verification Status / 核验状态

- [ ] Direct source checked / 已检查直接来源
- [x] Learner-provided class notes only / 目前仅基于学习者提供课堂笔记
- [x] Needs follow-up / 需要后续核验

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, or session data / 不包含私钥、助记词、API key、cookie 或 session 数据
- [x] No wallet addresses, transaction hashes, balances, or private account information / 不包含钱包地址、交易哈希、余额或私人账户信息
- [x] No private chat logs or non-public transcripts / 不包含私人聊天记录或非公开逐字稿
- [x] Speaker information follows learner-provided public class notes / 讲师信息沿用学习者提供的课程笔记
