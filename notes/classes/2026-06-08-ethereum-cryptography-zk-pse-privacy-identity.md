# Ethereum Cryptographic Engineering, Zero-Knowledge Proofs, and PSE Privacy Identity Systems - 2026-06-08

## Metadata / 元信息

- Date / 日期: 2026-06-08
- Title / 标题: 以太坊密码学工程、零知识证明与 PSE 隐私身份证明系统探索
- Source / 来源: learner-provided class notes / 学习者提供的课堂笔记
- Type / 类型: technical and research sharing / 技术与研究分享
- Topics / 主题: Ethereum cryptographic engineering, PSE, privacy, proof systems, zero-knowledge proofs, ZK-SNARK, ZKML, ZK identity, ZK Rollup, mixers, privacy ethics / 以太坊密码学工程、PSE、隐私、证明系统、零知识证明、ZK-SNARK、ZKML、零知识身份、ZK Rollup、混币器、隐私伦理
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-06-08-ethereum-cryptography-zk-pse-privacy-identity.md`

## Important Caveat / 重要说明

这是一份基于学习者提供记录整理的课堂笔记，不是以太坊基金会官方文档、PSE 官方说明、零知识证明教材、密码学安全审计、ZK Rollup 技术规范或对任何项目的独立技术背书。

笔记中涉及的 PSE 团队定位、CROPS 价值观、ZK-SNARK、ZKML、ZK 身份、ZK Rollup、匿名交易工具、政府 / 商业落地案例、项目名称、路线图年份和学习资料，都来自课堂记录，正式引用、研究或技术落地前应回到官方文档、论文、项目仓库、协议文档和公开公告核验。

公开笔记中不记录主持人或嘉宾真实姓名、私人联系方式、群聊原文、未公开课件链接、账户信息、钱包信息、API key 或任何私密数据。

This note summarizes learner-provided class notes. It is not official Ethereum Foundation or PSE documentation, a cryptography textbook, a ZK security audit, a ZK Rollup specification, or an independent endorsement of any project. Technical claims and project details should be verified against primary sources before use.

## Executive Summary / 摘要

本次分享围绕三个核心问题展开：

```text
1. What is a proof?
2. Why do traditional proof systems leak privacy or allow fraud?
3. How do zero-knowledge proofs prove facts without revealing unnecessary information?
```

中文理解：

```text
1. 什么是证明？
2. 传统证明体系为什么容易造假或泄露隐私？
3. 零知识证明如何在不暴露额外信息的情况下证明事实成立？
```

分享从日常证明场景出发，解释了 issuer、holder、verifier 三个角色，以及传统证明体系中的三类作恶风险：发行方作恶、持有方作恶、验证方作恶。随后通过 `Where's Waldo` 和色盲辨色案例解释零知识证明、交互式概率证明、完整性、可靠性和零知识特性。

最重要的技术线索包括：

- ZK-SNARK 是目前主流零知识证明技术之一。
- 零知识证明可以用于 ZKML、图片防伪、身份认证、ZK Rollup、匿名隐私工具等场景。
- 零知识证明的价值不只是隐私，也包括压缩证明、链上扩容和可验证计算。
- 隐私保护不是可有可无的高级功能，而可能是互联网基础权利。

对我的 `AI Wallet Clear Intent Guard` 来说，这节课最重要的启发是：

```text
好的安全系统应该只暴露完成验证所需的最小信息。
```

如果未来 Demo 需要展示用户身份、权限、支付条件或交易事实，应该尽量区分：

```text
what must be verified
what does not need to be revealed
```

English companion:

The session explained proof systems from everyday examples, then introduced zero-knowledge proofs as a way to prove facts without leaking unnecessary information. The most useful takeaway for my own direction is data minimization: a safety system should verify what is necessary without exposing everything about the user, transaction, or identity.

## 1. Opening and Session Scope / 开场与主题范围

本次分享主题是以太坊密码学工程与零知识证明，重点介绍 PSE 团队在隐私身份证明系统方向的探索。

主持人 A 开场后介绍分享嘉宾 B，并说明本次分享会从基础概念讲起：

- 什么是证明。
- 传统证明体系有什么问题。
- 什么是零知识证明。
- 零知识证明有哪些应用。
- 零知识证明目前还有哪些争议和学习路径。

公开笔记中不记录主持人和嘉宾真实姓名，只保留角色信息。

## 2. PSE and Ethereum Privacy Values / PSE 与以太坊隐私价值

分享嘉宾 B 介绍自己隶属于以太坊基金会 PSE 团队，主要负责隐私方向研究与应用开发。

记录中提到，以太坊基金会核心价值观关键词 `CROPS` 中，`P` 代表：

```text
Privacy
```

中文：

```text
隐私
```

这也是本次分享的核心切入点。

我的理解是，隐私不是和以太坊价值观分离的“附加功能”，而是去中心化、抗审查和用户自主权的一部分。没有隐私保护，很多所谓的公开验证会变成对用户的过度暴露。

## 3. Traditional Proof Systems / 传统证明体系

### 3.1 What Is a Proof? / 什么是证明

分享中用通俗定义解释 proof：

```text
proof = sufficient evidence that supports a statement as true
```

中文理解：

```text
证明 = 支撑某个命题为真的有效证据
```

传统证明体系通常包含三个角色：

- issuer / 证明发行方：出具证据的主体。
- holder / 证明持有方：持有并使用证明的主体。
- verifier / 证明验证方：核验证明真伪的主体。

超市购物收据例子：

```text
store = issuer
customer = holder
staff checking refund = verifier
receipt = proof
```

中文：

```text
超市 = 证明发行方
消费者 = 证明持有方
退换货工作人员 = 验证方
收据 = 证明
```

### 3.2 Fraud Risks / 作恶风险

传统证明体系的脆弱性在于三类角色都可能作恶。

Issuer 作恶：

- 发行方篡改证明信息。
- 例如把 100 元消费伪造成 1000 元。

Holder 作恶：

- 持有方私自修改证明。
- 例如修改票据金额用于虚报报销。

Verifier 作恶：

- 验证方明知证明造假仍核验通过。
- 可能和其他参与者串通。

这些问题在很多场景都会出现：

- 学历和资质证明。
- 财务凭证和报销票据。
- 预言机把线下数据传入链上。
- DAO 投票结果证明。
- 线下签章和签名。

我的理解是，证明系统不只是“出一张证书”。它还包含信任链、验证路径和作恶成本。

### 3.3 Privacy Leakage / 隐私泄露

传统证明体系还有一个核心问题：为证明一个条件，往往暴露过多信息。

课堂中的例子：

```text
Need to prove age >= 18
but must show full ID card
```

中文：

```text
只需要证明年满 18 岁
却不得不出示完整身份证
```

这会同时暴露：

- 姓名。
- 住址。
- 样貌。
- 身份证号。
- 其他与验证目标无关的信息。

零知识证明想解决的问题就是：

```text
Can I prove the fact without revealing unrelated private data?
```

中文：

```text
能不能证明事实成立，同时不泄露无关隐私？
```

## 4. Zero-Knowledge Proof Basics / 零知识证明基础

### 4.1 Where's Waldo Example / 威利在哪案例

分享用绘本 `Where's Waldo` 解释零知识证明。

目标：

- 证明自己已经找到威利。
- 但不透露威利在整张图里的具体位置。

方法：

- 用一张很大的纸盖住整幅图。
- 纸上只开一个洞。
- 洞口只露出威利。

效果：

- 验证方知道证明者找到了威利。
- 但不知道威利在原图中的具体坐标。

这个例子很好地表达了零知识证明的直觉：

```text
prove the fact
without revealing the secret
```

中文：

```text
证明事实
不暴露秘密
```

### 4.2 Interactive Probabilistic Proof / 交互式概率证明

分享随后引入 IP：

```text
Interactive Probabilistic Proof
```

两个关键词：

- Interactive / 互动性：证明方和验证方进行多轮问答，而不是一次性提交证明。
- Probabilistic / 概率性：验证方随机提问，让证明方难以提前准备假答案。

这类系统不是依靠一次检查，而是通过多轮随机挑战提高造假成本。

### 4.3 Color-Blind Paper Example / 色盲辨色案例

经典例子是向色盲验证方证明两张纸颜色不同。

规则：

- 验证方随机决定是否翻转两张纸。
- 证明方判断纸张是否被调换。
- 如果纸确实有两种颜色，证明方每次都能答对。
- 如果纸是同色，证明方只能猜。

造假概率：

```text
1 round = 1/2
10 rounds = 1/1024
```

也就是说，多轮随机挑战会让伪造者连续蒙混过关的概率指数级下降。

### 4.4 Three Properties / 三个核心性质

分享中总结了 IP / ZK 证明的重要特性。

Completeness / 完整性：

- 如果陈述为真，诚实证明方可以让验证方接受。

Soundness / 可靠性：

- 如果陈述为假，作恶证明方几乎无法骗过验证方。

Zero Knowledge / 零知识：

- 验证方只知道命题为真。
- 不获得任何额外隐私信息。

这三者合在一起，就是零知识证明最重要的安全与隐私直觉。

## 5. Technical Terms / 技术名词

### 5.1 SNARK / SNARK

分享中将 SNARK 解释为一类证明系统。

特征：

- 证明体积小。
- 验证速度快。
- 可以理解为 IP 证明的一类分支。
- 具备完整性和可靠性。

课堂记录中提到 SNARK 本身不一定具备隐私保护能力，因此需要区分 SNARK 与 ZK-SNARK。

### 5.2 ZK-SNARK / ZK-SNARK

ZK-SNARK 可以理解为：

```text
SNARK + zero-knowledge property
```

也就是在小证明和快速验证基础上加入零知识特性。

研究方向：

- 压缩证明体积。
- 提升证明生成和验证效率。
- 研发抗量子版本，应对未来量子计算风险。

这和 6 月 8 日以太坊中文周会中的后量子安全讨论可以连接起来：签名系统、证明系统和链上验证未来都需要考虑量子风险。

## 6. Application Areas / 应用场景

### 6.1 ZKML / ZK + Machine Learning

ZKML 的思路是把机器学习模型或神经网络转成零知识证明电路，使输入、输出或模型执行过程可验证。

分享中按输入和模型是否隐私，拆成几类场景：

#### Public Data + Private Model / 数据公开、模型隐私

用途：

- 保护自研模型参数。
- 在模型竞赛或服务场景中证明模型效果。
- 防止直接泄露模型权重或核心参数。

#### Public Model + Private Data / 模型公开、数据隐私

用途：

- 保护用户输入数据。
- 验证服务商确实使用了指定模型。
- 避免服务商偷偷换成低配模型。

#### Public Data + Public Model / 数据与模型均公开

用途：

- 验证 AI 输出结果是否由指定模型正确执行。

课堂中提到的工具或项目包括 `easykl`、`Bio net` 等，名称和功能需要后续核验。

我的理解是，ZKML 和 AI x Web3 的交叉点非常强。它不仅可以证明“我用了某个模型”，还可能证明“我没有泄露输入数据”或“服务方没有偷换模型”。

### 6.2 Image Authenticity / 影像与图片防伪

分享中提到，可以在相机中内置私钥，为拍摄照片生成数字签章，并结合零知识证明验证照片未被篡改。

价值：

- 防止图片裁切或篡改。
- 对抗虚假图片和信息战。
- 提供更可信的媒体来源证明。

这里需要注意：具体实现涉及硬件私钥管理、签名链路、元数据保护和验证工具，并不是只靠 ZK 就自动解决。

### 6.3 ZK Identity / 零知识身份

ZK 身份是本次分享中和隐私最直接相关的应用。

目标：

```text
prove only the required attribute
without revealing full identity
```

中文：

```text
只证明必要属性
不暴露完整身份
```

例如：

- 证明年满 18 岁。
- 证明国籍。
- 证明具有某种资格。

但不暴露：

- 身份证号。
- 住址。
- 照片。
- 姓名。
- 完整护照信息。

课堂中比较了两类方案：

- `SDE JOT`：通过哈希隐藏隐私数据，但不同验证方可能交叉比对哈希值，从而关联同一用户。
- `open AC`：以太坊基金会相关匿名凭证方案，基于零知识证明，验证方无法通过证明追溯用户本人。

这些名称需要后续核验，但核心问题很清楚：

```text
hashing is not always privacy
unlinkability matters
```

中文：

```text
哈希不等于真正隐私
不可关联性同样重要
```

### 6.4 ZK Rollup / 区块链扩容

ZK Rollup 用零知识证明进行链上扩容。

基本流程：

```text
many transactions execute on L2
-> state changes are aggregated
-> one proof is generated
-> L1 verifies the proof
```

中文：

```text
大量交易在 L2 执行
-> 汇总状态变化
-> 生成一个聚合证明
-> L1 只验证这份证明
```

价值：

- 降低主网计算压力。
- 提升吞吐。
- 降低单笔交易成本。
- 保留 L1 验证安全性。

课堂中强调，零知识证明在区块链里同时有两类价值：

- 隐私保护。
- 链上扩容。

### 6.5 Mixers and Anonymous Payments / 混币器与匿名支付

分享中也讨论了匿名隐私工具，例如 token mixer / 混币器。

价值：

- 链上转账匿名化。
- 保护用户资产流向隐私。
- 降低被追踪风险。

争议：

- 手续费可能很高。
- 可能被黑客或犯罪组织用于洗钱。
- 去中心化系统没有后门，会提高执法和调查难度。
- 技术开发者责任边界难以界定。

嘉宾观点偏向：

```text
privacy should be a default right
```

中文：

```text
隐私应当成为默认基础权利
```

我的理解是，这部分不能简单站队。隐私工具既有保护普通用户的正当性，也确实会带来监管、执法和伦理挑战。

## 7. Privacy Value and Historical Warning / 隐私价值与历史提醒

分享中用历史案例说明隐私泄露的滞后风险：

- 某些身份数据在当下看似无害。
- 多年后社会环境变化，原本无害的数据可能被用于迫害、歧视或控制。

核心观点是：

```text
Data harm can be delayed.
```

中文：

```text
数据伤害可能是滞后的。
```

这让我重新理解隐私保护：它不是“现在有没有坏人看见”的问题，而是用户是否有权控制未来别人如何使用自己的数据。

## 8. Q&A Notes / 答疑要点

### 8.1 What Goes Onchain in ZK Rollup? / ZK Rollup 上链内容

问题：ZK Rollup 最终上链的内容是什么？交易如何完成验证？

解答要点：

- L2 中多笔交易被汇总。
- 最终只将聚合证明上传到以太坊主网。
- 不把每一笔交易明细都上传到 L1。
- 证明可以递归聚合。
- L1 只需要验证最终证明，就能确认批量交易合法。
- 单笔交易明细由 L2 自行存储。

### 8.2 Mainstream ZK Layer2 Projects / 主流 ZK Layer2 项目

问题：目前主打零知识证明的 Layer2 项目有哪些？Polygon ZK 现状如何？

记录中的回答：

- Scroll 被提到为 ZK 系 Layer2 代表。
- 当前市场上 Optimistic Rollup 使用更广。
- Polygon ZK 相关项目被描述为进入维护阶段。
- Polygon 团队目前更主攻 ZKVM 方向。
- 以太坊长期规划会逐步深度整合零知识技术，简化主网架构，时间线被提到为 2029-2030 年。

这些项目状态和时间线需要官方核验。

### 8.3 Government and Commercial Use Cases / 政府与商业落地案例

问题：政府或商业领域是否有大型 ZK 落地案例？

记录中提到：

- 欧盟 EUDI 数字身份系统规划集成 ZK 技术。
- ZK Passport。
- Self / self sell Protocol。
- 基于护照生成零知识证明，验证国籍或年龄。
- 部分项目空投使用类似技术做身份核验。

这些名称和落地状态需要后续核验。

### 8.4 Learning Path / 学习路径

推荐学习方式：

- 课程：Berkeley 2023 ZK MOOC。
- 实践：参与以太坊基金会、PSE 团队和生态开源项目。
- 辅助：使用 AI 工具降低入门难度。

我的理解是，ZK 学习很难只靠阅读概念。更好的方式是：

```text
course
-> small circuit
-> open-source contribution
-> real application
```

### 8.5 Can ZK Proofs Be Forged? / 零知识证明能否被伪造

回答要点：

- 标准 ZK-SNARK 证明理论上难以伪造，符合可靠性要求。
- 但风险仍然存在。

主要风险：

- 老旧系统依赖 trusted setup。
- 如果初始化参数泄露，可能伪造证明。
- 电路代码可能有 bug。
- ZK 电路漏洞会影响整个系统安全。

这说明 ZK 不是“自动安全”。它需要：

- 可靠协议。
- 正确电路。
- 安全实现。
- 审计和测试。

### 8.6 How Can Users Tell Whether a Project Uses ZK? / 普通用户如何判断项目是否使用 ZK

简单判断：

- 如果平台要求上传完整身份证、人脸等隐私数据，基本可以怀疑它并没有真正使用 ZK 做隐私最小化。

进阶判断：

- 阅读技术文档。
- 搜索 SNARK、ZK 等关键词。
- 向技术社区或从业者求证。

我的理解是，用户不应该只看项目口号是否写了 ZK，而要看：

```text
private data stays local?
only proof is submitted?
verification is documented?
```

中文：

```text
隐私数据是否留在本地？
是否只提交证明？
验证流程是否有文档说明？
```

## 9. Impact on My Hackathon Direction / 对我方向的影响

这节课对 `AI Wallet Clear Intent Guard` 的影响很直接。

过去我更多关注：

```text
intent
transaction facts
policy check
risk label
human confirmation
audit proof
```

今天新增了一个更明确的维度：

```text
data minimization
```

中文：

```text
数据最小化
```

如果 Guard 要审查用户的身份、权限、预算、任务边界或交易意图，它不应该要求用户暴露所有原始数据。更好的设计应该是：

- 只展示完成判断所需的信息。
- 把敏感信息留在本地或用户端。
- 对外只给出必要 proof 或 yes / no 结果。
- 区分事实证明、AI 解释和用户授权。

一个可能的 Demo 方向是：

```text
User proves eligibility or permission
-> Guard checks payment / Packet facts
-> AI explains risk
-> User confirms
-> System records proof without exposing unnecessary private data
```

这可以让 `AI Wallet Clear Intent Guard` 不只是“更懂交易”，也更重视“少暴露数据”。

English companion:

The session adds a data-minimization layer to my hackathon direction. A wallet guard should not require users to reveal full identity, full history, or unnecessary private details just to verify one condition. The Demo can separate proof, explanation, policy decision, and human confirmation.

## 10. Action Items / 行动项

- [ ] 阅读 ZK MOOC 或至少先建立 ZK 基础概念地图。
- [ ] 了解 PSE 团队和相关开源项目，重点关注身份、匿名凭证和隐私证明。
- [ ] 研究 ZK identity 与 wallet permission / payment review 的结合点。
- [ ] 在 `AI Wallet Clear Intent Guard` 的 review card 里加入 `data minimization` 思路。
- [ ] 区分 `proof`、`AI explanation`、`policy decision` 和 `human confirmation`，避免把它们混成一个黑箱判断。
- [ ] 后续核验课堂中提到的 `easykl`、`Bio net`、`SDE JOT`、`open AC`、`ZK Passport`、`Self Protocol` 等项目或工具名称。

## My Understanding / 我的理解

这节课让我重新理解了“证明”。

以前我更容易把证明理解成：

```text
拿出一个文件或数据，让别人相信我说的是真的。
```

但今天更清楚的是，证明系统真正要解决的是：

```text
谁出具？
谁持有？
谁验证？
谁可能作恶？
验证时暴露了多少不必要的信息？
```

零知识证明最有力量的地方，不只是“很高级的密码学”，而是它改变了证明的交互方式：

```text
I can prove what you need to know
without giving you everything else.
```

中文：

```text
我可以证明你需要知道的事，
但不用把其他所有信息都交给你。
```

这和 AI x Web3 很相关。未来 Agent、钱包、支付、身份、声誉和权限都会需要证明系统。如果每一次验证都要求用户暴露完整身份、完整交易历史或完整上下文，那 AI Agent 经济会非常危险。

所以对我的方向来说，Guard 的目标不只是解释风险，还应该帮助用户控制：

- 哪些事实需要被验证。
- 哪些信息不应该被暴露。
- 哪些判断来自确定性证明。
- 哪些判断只是 AI 解释。
- 哪些操作必须由人最终确认。

## 11. Questions / 问题

- ZK identity 是否适合放进 `AI Wallet Clear Intent Guard` 的第一版 Demo，还是应该留到后续路线图？
- 如果只做一个最小隐私证明，应该证明年龄、国籍、资格，还是 wallet permission？
- Guard 是否应该显示 `only proof submitted, raw data stays local` 这样的提示？
- ZK proof 和 AI explanation 在 UI 上应该如何区分，避免用户以为 AI 本身就是证明？
- 如果一个项目声称使用 ZK，但仍上传完整身份证和人脸数据，用户界面应该如何提示风险？
- ZK Rollup 的证明聚合和 wallet proof / identity proof 在 Demo 叙事里是否容易混淆？

## English Summary

This session introduced proof systems, zero-knowledge proofs, and PSE's privacy-oriented work. It started from everyday proof examples and showed why traditional proof systems are vulnerable: issuers, holders, and verifiers can all behave dishonestly, and ordinary verification often leaks far more private data than necessary.

Zero-knowledge proofs solve a different kind of problem: proving a fact without revealing the underlying secret. The session explained this through `Where's Waldo`, interactive probabilistic proof, the color-blind paper example, completeness, soundness, and zero knowledge.

The application sections covered ZKML, image authenticity, ZK identity, ZK Rollup, mixers, and privacy ethics. The most important takeaway for my own project is data minimization. `AI Wallet Clear Intent Guard` should separate proof, AI explanation, policy decision, and human confirmation, while exposing only the data required for the review.

## Glossary / 术语

- issuer: proof issuer / 证明发行方
- holder: proof holder / 证明持有方
- verifier: proof verifier / 证明验证方
- prover: party generating the proof / 生成证明的一方
- IP: Interactive Probabilistic Proof / 交互式概率证明
- completeness: true statement should be accepted / 完整性
- soundness: false statement should be rejected with high probability / 可靠性
- zero knowledge: verify without learning extra information / 零知识
- SNARK: succinct proof system family / 简洁证明系统类别
- ZK-SNARK: SNARK with zero-knowledge property / 具有零知识性质的 SNARK
- ZKML: zero-knowledge machine learning / 零知识机器学习
- ZK Rollup: L2 scaling using validity proofs / 使用有效性证明的二层扩容
- trusted setup: initialization process whose compromise may break security / 可信初始化

## Verification Status / 核验状态

- [x] Notes are based on learner-provided class notes.
- [x] Speaker identities are anonymized.
- [x] Technical concepts are summarized for learning and should be checked against primary cryptography or PSE sources before formal citation.
- [x] Project names, tool names, route-map years, government/commercial use cases, and ZK project status are recorded as class discussion, not verified final facts.
- [x] No private class link, private contact information, unpublished slide deck, wallet data, or account credential is included.

中文核验状态：

- [x] 来源为学习者提供课堂笔记。
- [x] 发言人身份已匿名化。
- [x] 技术概念为学习向整理，正式引用前需要回到密码学一手资料或 PSE 官方资料核验。
- [x] 项目名、工具名、路线图年份、政府 / 商业落地案例和 ZK 项目状态均按课堂讨论记录，不作为已核验最终事实。
- [x] 不包含私密课程链接、私人联系方式、未公开课件、钱包数据或账户凭证。

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, private transaction payload, private identity document, or private biometric data.
- [x] No private class transcript, private contact information, unredacted speaker identity, or private slide link.
- [x] No private group chat content, unpublished resource link, or account credential.
- [x] Privacy and mixer discussion is presented as technical/ethical learning context, not as instructions for illicit use.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、token、cookie、session 或 `.env` 内容。
- [x] 不包含真实钱包地址、真实资产余额、私密交易 payload、私人身份证件或生物识别数据。
- [x] 不包含私人课程逐字稿、私人联系方式、未匿名化 speaker 身份或私密课件链接。
- [x] 不包含群聊原文、未公开资源链接或账户凭证。
- [x] 隐私与混币器讨论仅作为技术 / 伦理学习背景，不提供非法使用指导。
