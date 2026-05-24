# Task 012 - Web3 Basic Concept Cards

## Metadata

- Date: 2026-05-24
- Program: AI x Web3 School
- Week: Week 1
- Track: Web3 task
- WCB task: Week 1｜Web3 向任务｜整理 Web3 基础概念卡片
- WCB task id: `cmp3jyqq507scn3016sd7iflf`
- Points: 10
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Task file: `tasks/task-012-web3-basic-concept-cards.md`
- Status: completed locally; not yet deployed to GitHub or submitted to WCB

## Task Goal / 任务目标

用自己的话整理一组 Web3 基础概念卡片，帮助后续理解测试网交易、合约调用、钱包确认和链上验证任务。

这份卡片不是术语表，而是我的 Week 1 Web3 复盘工具。每张卡片尽量回答：

- 这个概念是什么？
- 它在一次链上操作中起什么作用？
- 我容易误解什么？
- 它的安全边界在哪里？

The goal is to organize Web3 fundamentals in my own words. These cards support later tasks around testnet transactions, contract calls, wallet confirmation, and onchain verification.

## WCB Requirement Check / 平台要求核对

WCB read-only API check on 2026-05-24 confirmed the task requirements:

```text
Task id: cmp3jyqq507scn3016sd7iflf
Title: Week 1｜Web3 向任务｜整理 Web3 基础概念卡片
Points: 10
Proof required: true
Available: true
Current status before this proof: NOT_STARTED
Submission history before this proof: none
```

Minimum requirements:

- Include at least 8 Web3 fundamentals.
- Explain each concept in my own words.
- Include examples, safety reminders, or common misconceptions.
- Explain why private keys, seed phrases, signatures, and approvals require special care.
- Do not submit private keys, seed phrases, API keys, tokens, `.env` files, or sensitive real-asset information.

## Source Notes / 来源笔记

These cards are based on my Week 1 notes and proofs:

```text
notes/classes/2026-05-20-web3-operating-principles-sharing.md
tasks/task-005-testnet-transaction.md
tasks/task-006-minimal-smart-contract-call.md
tasks/task-007-eoa-smart-account-multisig-permissions.md
tasks/task-008-ai-web3-minimal-crossover-flowchart.md
tasks/task-010-restricted-web3-assistant-workflow.md
```

## Concept Card Index / 概念卡片索引

| # | Concept / 概念 | One-line memory hook / 一句话记忆 |
|---:|---|---|
| 1 | Account / 账户 | A chain-level identity that can hold state and initiate or receive actions. |
| 2 | Address / 地址 | The public identifier people use to receive funds or call contracts. |
| 3 | Wallet / 钱包 | A key-management and signing tool, not the place where assets live. |
| 4 | Seed Phrase / 助记词 | The backup root that can derive many private keys and addresses. |
| 5 | Private Key / 私钥 | The secret that gives signing control over an account. |
| 6 | Public Key / 公钥 | A public cryptographic value derived from the private key. |
| 7 | Signature / 签名 | Cryptographic proof that a private-key holder authorized a message or transaction. |
| 8 | Transaction / 交易 | Signed intent sent to the network for execution. |
| 9 | Gas | The fee mechanism for paying shared network computation and storage. |
| 10 | Nonce | The account sequence number that orders transactions and prevents replay. |
| 11 | Smart Contract / 智能合约 | Public onchain code that executes according to deterministic rules. |
| 12 | Testnet / 测试网 | A practice network for learning without real-value assets. |
| 13 | Block Explorer / 区块浏览器 | A public interface for checking transactions, blocks, contracts, and addresses. |
| 14 | EOA / 外部拥有账户 | A normal account directly controlled by a private key. |
| 15 | Smart Account / 智能账户 | A contract-controlled account with programmable permission rules. |
| 16 | Multisig / 多签账户 | An account that requires multiple signers to approve important actions. |
| 17 | RPC | The access bridge that lets wallets and apps read from or send data to a chain. |
| 18 | Token Approval / Token 授权 | Permission for another address or contract to spend a token up to a set amount. |

## Concept Cards / 概念卡片

### 1. Account / 账户

**Definition / 定义**

账户是链上系统里的身份和状态入口。它可以接收资产、发起交易、保存 nonce，也可能对应普通用户、合约或更复杂的智能账户。

An account is an onchain identity and state entry point. It can receive assets, initiate transactions, hold a nonce, and represent either a user, a contract, or a programmable account.

**Example / 例子**

我在 Sepolia 上发送测试网交易时，`from` 地址对应发起交易的账户，`to` 地址对应接收方账户。

**Common Mistake / 常见误区**

把账户等同于钱包软件。账户是链上的地址和状态，钱包只是管理密钥、展示信息和发起签名的工具。

**Safety Note / 安全提醒**

控制账户的关键不是“登录了哪个钱包 App”，而是谁掌握了对应的私钥、助记词或账户权限。

### 2. Address / 地址

**Definition / 定义**

地址是链上公开标识，可以用来接收资产、查看余额、调用合约或检查交易记录。它通常由公钥经过哈希等步骤生成。

An address is a public identifier used to receive funds, inspect balances, call contracts, or look up activity.

**Example / 例子**

`0x694AA1769357215DE4FAC081bf1f309aDC325306` 是 Sepolia 上一个 Chainlink ETH / USD price feed 合约地址。它不是私钥，也不能用来控制资产。

**Common Mistake / 常见误区**

以为地址公开就一定危险。地址本来就是公开标识，但如果地址关联到真实资产、身份、交易习惯或隐私场景，就需要谨慎公开。

**Safety Note / 安全提醒**

地址可以公开接收资产，但不要把真实资产地址、余额、交易习惯和个人身份在公开 proof 里无必要绑定。

### 3. Wallet / 钱包

**Definition / 定义**

钱包不是资产容器，而是私钥管理、账户展示和交易签名工具。资产和余额在链上，钱包负责读取链上状态，并在用户确认后生成签名。

A wallet is a key-management and signing tool. Assets live onchain; the wallet helps the user view state and authorize actions.

**Example / 例子**

MetaMask 可以展示 SepoliaETH 余额、构造一笔转账、展示交易预览，并等待我人工确认签名。

**Common Mistake / 常见误区**

把“卸载钱包 App”等同于“资产消失”。只要助记词或私钥仍可用，对应链上账户就可以在其他钱包中恢复。

**Safety Note / 安全提醒**

钱包弹窗是高风险确认点。签名前必须检查网络、接收方、金额、合约、方法、授权额度和数据来源。

### 4. Seed Phrase / 助记词

**Definition / 定义**

助记词是一组用于恢复钱包的单词，通常可以派生出多个私钥和多个地址。它是很多钱包体系里的备份根。

A seed phrase is a recovery phrase that can derive multiple private keys and addresses.

**Example / 例子**

同一组 12 或 24 个助记词可以在不同钱包软件中恢复同一组地址。

**Common Mistake / 常见误区**

只把助记词当成“登录密码”。密码可以重置，助记词通常不能重置；助记词泄露后，攻击者可能控制由它派生出来的所有账户。

**Safety Note / 安全提醒**

不要把助记词发给 AI、网站、客服、群聊或截图工具；不要写入 GitHub、Notion 公共页、日志或 `.env` 文件。

### 5. Private Key / 私钥

**Definition / 定义**

私钥是控制账户签名权的秘密数据。谁掌握私钥，谁就能代表对应账户签名交易或消息。

A private key is the secret that controls signing authority for an account.

**Example / 例子**

如果某个 EOA 的私钥泄露，攻击者可以从这个地址发起转账、授权或合约调用。

**Common Mistake / 常见误区**

以为“只是在测试环境粘贴一下私钥没关系”。坏习惯会迁移到主网；而且很多工具日志会保存输入内容。

**Safety Note / 安全提醒**

私钥永远不应提交到 GitHub，也不应该交给 Agent、脚本、网页或陌生工具。若私钥泄露，应视为账户已失控。

### 6. Public Key / 公钥

**Definition / 定义**

公钥由私钥生成，可以公开使用，用于验证签名或进一步生成地址。公钥公开不等于私钥公开。

A public key is derived from the private key and can be used to verify signatures or derive addresses.

**Example / 例子**

节点可以利用交易内容和签名恢复或验证签名者，从而判断这笔交易是否来自对应账户。

**Common Mistake / 常见误区**

把公钥、地址和私钥混为一谈。地址和公钥可以公开；私钥绝不能公开。

**Safety Note / 安全提醒**

公开可验证信息和秘密控制信息要分清。Web3 的安全很大一部分来自这个边界。

### 7. Signature / 签名

**Definition / 定义**

签名是私钥持有人对某段消息或交易内容的授权证明。它证明“某个控制者同意了这段内容”，但不代表这段内容本身一定安全。

A signature proves that the private-key holder authorized a message or transaction, but it does not prove that the action is safe.

**Example / 例子**

发送 Sepolia 测试网交易时，我在钱包里确认后，钱包会用私钥对交易内容签名，再把交易广播出去。

**Common Mistake / 常见误区**

以为签名只是“登录确认”，没有风险。某些签名可能绑定登录身份、授权 session，甚至和资产操作相关。

**Safety Note / 安全提醒**

签名前要读清楚 message、domain、chain id、目标网站、权限范围和过期时间。AI 可以解释签名内容，但不能替我点击确认。

### 8. Transaction / 交易

**Definition / 定义**

交易是发送到链上的已签名执行请求。它可以是转账，也可以是合约写入、NFT mint、投票、授权或其他状态改变。

A transaction is a signed request sent to the network for execution.

**Example / 例子**

我的 Task 005 交易是一笔 Sepolia 普通转账：`value` 为 `0.1 SepoliaETH`，`input data` 为 `0x`，所以它不是合约调用。

**Common Mistake / 常见误区**

把所有交易都理解成“转钱”。很多交易不直接转 ETH，但可能改变合约状态、授权 token、创建订单或绑定权限。

**Safety Note / 安全提醒**

交易签名前必须检查网络、`to`、`value`、method、calldata、token approval、gas 和是否符合原始意图。

### 9. Gas

**Definition / 定义**

Gas 是使用链上计算、存储和网络资源的计费机制。它让资源有成本，防止垃圾请求，并激励出块和验证参与者。

Gas is the fee mechanism for using shared blockchain computation, storage, and network resources.

**Example / 例子**

一笔普通 ETH 转账通常消耗 `21000` gas；复杂合约调用会消耗更多 gas。

**Common Mistake / 常见误区**

以为 gas 只是钱包收的手续费。Gas 是链上资源价格的一部分，不是某个钱包单方面收取的费用。

**Safety Note / 安全提醒**

主网 gas 可能是真实成本；测试网 gas 虽然不是真钱，但仍然应该养成检查网络和费用的习惯。

### 10. Nonce

**Definition / 定义**

Nonce 是账户交易序号，用来保证同一账户的交易顺序，并防止同一笔交易被重复执行。

A nonce is the account sequence number used to order transactions and prevent replay.

**Example / 例子**

如果一个账户的当前 nonce 是 `285`，下一笔从该账户发出的交易通常会使用下一个序号。

**Common Mistake / 常见误区**

以为交易失败后什么状态都不会影响。某些失败交易仍可能消耗 gas，nonce 也可能被占用。

**Safety Note / 安全提醒**

遇到卡住的交易时，不要乱改 nonce 或重复提交高价值操作。先查区块浏览器和钱包提示，再决定是否加速、取消或等待。

### 11. Smart Contract / 智能合约

**Definition / 定义**

智能合约是部署在链上的代码，可以被交易或只读调用触发，并按确定性规则执行。

A smart contract is onchain code that executes according to deterministic rules.

**Example / 例子**

Task 006 中，我调用了 Sepolia 上 Chainlink ETH / USD price feed 的 `latestRoundData()` 读取函数，没有执行写入交易。

**Common Mistake / 常见误区**

以为“合约公开”就一定安全。合约公开只能帮助检查，不能自动保证没有漏洞、恶意权限或不符合预期的逻辑。

**Safety Note / 安全提醒**

合约写入、升级、授权、mint、提款等动作都要人工确认。只读 `eth_call` 风险低，但返回值也要核对来源和含义。

### 12. Testnet / 测试网

**Definition / 定义**

测试网是用于学习、开发和测试的区块链网络，通常使用没有真实价值的测试币。

A testnet is a practice blockchain network used for development and learning with non-real-value test tokens.

**Example / 例子**

Sepolia 是以太坊常用测试网之一。我用它完成测试网转账和只读合约调用学习任务。

**Common Mistake / 常见误区**

以为测试网就可以随便签任何东西。测试网适合练习，但签名习惯、授权习惯和安全流程应该和主网一样认真。

**Safety Note / 安全提醒**

学习任务优先使用隔离测试钱包，不把主钱包、真实资产地址、真实余额或私密截图混进测试过程。

### 13. Block Explorer / 区块浏览器

**Definition / 定义**

区块浏览器是查看链上公开数据的工具，可以查询交易、区块、地址、合约、日志、gas 和确认状态。

A block explorer is a public interface for inspecting onchain data.

**Example / 例子**

Sepolia Etherscan 可以查看我的测试网交易是否成功、gas 用量、区块高度和 input data。

**Common Mistake / 常见误区**

把区块浏览器当成“区块链本身”。它只是读取和展示链上数据的界面，可能有展示延迟、标签错误或解析不完整。

**Safety Note / 安全提醒**

区块浏览器适合做 proof，但不要把 explorer 页面里的标签或第三方备注当成唯一事实来源。关键数据可以结合 RPC 或合约源码核对。

### 14. EOA / 外部拥有账户

**Definition / 定义**

EOA 是由私钥直接控制的普通账户。常见浏览器钱包里的普通地址通常是 EOA。

An EOA is an externally owned account controlled directly by a private key.

**Example / 例子**

测试网 burner wallet 里的普通地址可以作为 EOA 发起转账，并由用户在钱包中签名。

**Common Mistake / 常见误区**

以为 EOA 简单就安全。EOA 的风险是单点私钥控制：私钥丢失或泄露都可能导致账户不可恢复或资产失控。

**Safety Note / 安全提醒**

AI Agent 不应该直接持有 EOA 私钥。即使是自动化脚本，也应该优先只读或使用受限权限设计。

### 15. Smart Account / 智能账户

**Definition / 定义**

智能账户是由合约逻辑控制的账户，可以支持更复杂的权限、恢复、限额、session key、批量操作或 gas 代付。

A smart account is controlled by smart-contract logic and can support programmable permissions.

**Example / 例子**

一个智能账户可以允许小额测试网操作自动执行，但把大额转账、授权或合约升级留给人工确认。

**Common Mistake / 常见误区**

以为智能账户一定比 EOA 安全。它能提供更多控制能力，但也引入合约漏洞、模块配置和升级权限风险。

**Safety Note / 安全提醒**

设置 owner、guardian、session key、spending limit、policy 或模块时，必须清楚每个权限能做什么、如何撤销、失败后如何恢复。

### 16. Multisig / 多签账户

**Definition / 定义**

多签账户需要多个 signer 按阈值共同批准动作，例如 2-of-3 或 3-of-5。

A multisig account requires multiple signers to approve an action by threshold.

**Example / 例子**

团队金库可以用 3-of-5 多签管理，避免单个成员私钥泄露就转走全部资产。

**Common Mistake / 常见误区**

以为多人批准就不会错。多个 signer 如果都不看交易内容，仍然可能集体批准错误交易。

**Safety Note / 安全提醒**

每个 signer 都应该独立核对交易摘要、目标合约、金额、权限变化和风险，而不是只相信发起人的描述或 AI 摘要。

### 17. RPC

**Definition / 定义**

RPC 是钱包、dApp、脚本和区块链节点之间的访问接口。它可以用来读取链上状态，也可以广播已签名交易。

RPC is the interface layer used by wallets, apps, and scripts to read from or send data to blockchain nodes.

**Example / 例子**

Task 006 中，我用 public Sepolia RPC 执行 `eth_call`，读取合约返回值，不需要钱包签名。

**Common Mistake / 常见误区**

以为 RPC 只要能返回结果就完全可信。RPC 可能宕机、限流、被配置错误，或来自不可信服务商。

**Safety Note / 安全提醒**

只读 RPC 查询通常风险较低，但涉及广播交易时，仍然要确保交易已经由用户明确确认，且不要通过脚本暴露私钥。

### 18. Token Approval / Token 授权

**Definition / 定义**

Token approval 是允许另一个地址或合约在一定额度内使用我的 token。它不是立即转账，但会授予未来花费权限。

A token approval gives another address or contract permission to spend a token up to a specified amount.

**Example / 例子**

在 DEX 交易前，用户可能需要先 approve 某个合约使用一定数量的 ERC-20 token。

**Common Mistake / 常见误区**

以为 approval 因为没有马上转账就不危险。无限授权或授权给恶意合约可能导致后续资产被转走。

**Safety Note / 安全提醒**

授权前要确认 spender、token、amount、network 和 dApp 来源。优先使用最小额度，定期撤销不需要的授权。

## Special Safety Focus / 特别安全重点

### Private Keys and Seed Phrases / 私钥与助记词

私钥和助记词是账户控制权，不是普通登录资料。

- 私钥泄露：对应账户可能被完全控制。
- 助记词泄露：由它派生出来的多个账户都可能被控制。
- 丢失私钥或助记词：通常无法像 Web2 密码一样找回。
- 写进 GitHub、日志、截图、聊天或 AI prompt：都可能变成永久泄露。

My rule:

```text
Never paste private keys or seed phrases into AI, websites, public notes, code, logs, screenshots, or task proof.
```

### Signatures / 签名

签名是授权动作，不是无意义的按钮。签名可能用于：

- 登录网站。
- 发起交易。
- 授权 session。
- 绑定身份。
- 证明某个地址同意某段消息。

签名前要检查：

- domain / 网站来源
- chain id / 网络
- message / 消息内容
- spender / 授权对象
- amount / 金额或授权额度
- expiration / 过期时间
- 是否和自己的原始意图一致

### Approvals / 授权

授权尤其需要谨慎，因为它经常不是“现在转走”，而是“允许未来被花费”。

高风险授权包括：

- 无限额度 approval。
- 授权给陌生合约。
- 主网真实资产授权。
- 用户看不懂 spender 或 token 的授权。
- AI 或网页引导用户快速点击确认。

更安全的做法：

- 使用测试网和 burner wallet 练习。
- 设置最小必要额度。
- 授权前核对 spender。
- 定期检查和 revoke 不再需要的 approval。
- 高风险动作必须人工确认。

## My Review Map / 我的复习地图

这 18 张卡片可以分成五组：

```text
Identity and control:
Account, Address, Wallet, Seed Phrase, Private Key, Public Key

Authorization and execution:
Signature, Transaction, Gas, Nonce, Token Approval

Onchain programs and environments:
Smart Contract, Testnet, Block Explorer, RPC

Account models:
EOA, Smart Account, Multisig

Safety boundary:
Human confirmation before private-key exposure, signature, approval, transfer, contract write, deployment, or public proof submission
```

我的理解是：Web3 基础概念不是一串孤立名词，而是一条从“谁控制账户”到“谁授权动作”再到“网络如何执行并留下公开记录”的链路。

For AI x Web3, the key lesson is that AI can help explain fields and prepare checklists, but the human must keep control over private keys, signatures, approvals, transfers, contract writes, and public submissions.

## WCB Submission Draft

```text
Task proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-012-web3-basic-concept-cards.md

说明：
我整理了一份 Web3 基础概念卡片，共 18 张，覆盖 account、address、wallet、seed phrase、private key、public key、signature、transaction、gas、nonce、smart contract、testnet、block explorer、EOA、smart account、multisig、RPC 和 token approval。

每张卡片都包含：
- 概念定义
- 一个具体例子
- 常见误区
- 安全提醒

我也单独说明了私钥、助记词、签名和授权为什么需要特别谨慎：
- 私钥和助记词代表账户控制权，不应该提交到 GitHub、AI prompt、日志、截图或公开 proof。
- 签名是授权动作，可能涉及登录、交易、身份绑定或权限授予，不能只当作普通确认按钮。
- Token approval 可能授予未来花费权限，尤其要避免无限授权、陌生合约授权和主网真实资产授权。

本 proof 不包含真实私钥、助记词、API key、token、cookie、session、.env 文件、真实资产钱包地址、真实余额、私密截图或私人聊天记录。
```

## Verification Status / 验证状态

- [x] WCB task details checked through read-only API / 已通过只读 API 查询 WCB 任务详情
- [x] At least 8 Web3 concepts included / 已包含至少 8 个 Web3 概念
- [x] Each card uses my own explanation / 每张卡片使用自己的解释
- [x] Examples included / 已包含例子
- [x] Common mistakes or safety reminders included / 已包含常见误区或安全提醒
- [x] Private key, seed phrase, signature, and approval risks explained / 已说明私钥、助记词、签名和授权风险
- [x] WCB submission draft prepared / 已准备 WCB 提交草稿
- [ ] Deployed to GitHub / 尚未部署到 GitHub
- [ ] Submitted through WCB platform / 尚未通过 WCB 平台提交

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, or private transaction pattern.
- [x] No private screenshots or private chat transcripts.
- [x] No private platform messages or private support conversations.
- [x] Public contract addresses and testnet concepts are used only as learning references.
- [x] Future commit, push, and WCB proof submission still require explicit human confirmation.
