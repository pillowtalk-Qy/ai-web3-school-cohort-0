# Task 007 - EOA, Smart Account, and Multisig Permission Differences

## Metadata

- Date: 2026-05-23
- Program: AI x Web3 School
- Week: Week 1
- Track: Web3 advanced task
- WCB task: Week 1｜Web3 向进阶｜比较 EOA、智能账户、多签的权限差异
- WCB task id: `cmp9wlsoh0s4hmw01lck7hidd`
- Points: 30
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Task file: `tasks/task-007-eoa-smart-account-multisig-permissions.md`
- Status: completed, deployed to GitHub, WCB latest submission status `SUBMITTED` at 2026-05-23T08:31:47.142Z

## 任务目标

比较 EOA、智能账户和多签账户的权限差异，理解“谁能发起交易、谁能批准、谁承担风险”。

本任务不需要真实创建账户，也不需要上传钱包截图。重点是用自己的话说明三类账户的控制权、使用场景、安全边界和人工确认要求。

The goal is to compare EOA, smart accounts, and multisig accounts, especially around who controls the account, who can initiate transactions, who approves transactions, and who bears the risk.

## Short Definitions / 简短定义

### EOA / 外部拥有账户

EOA 是由私钥直接控制的普通链上账户。常见浏览器钱包和移动钱包里的普通地址通常就是 EOA。

特点：

- 私钥直接决定控制权。
- 签名者就是执行者。
- 交易从 EOA 发起并支付 gas。
- 链上本身没有自定义权限规则。

EOA is an externally owned account controlled directly by a private key. Whoever controls the private key can sign transactions from that address.

### Smart Account / 智能账户

智能账户是由智能合约控制逻辑管理的账户。它可以把权限、恢复、限额、批量交易、session key、gas sponsorship 等规则写入合约或账户抽象框架。

特点：

- 控制规则由合约逻辑决定。
- 可以支持社交恢复、限额、自动化策略和 session key。
- 不一定由单一私钥直接控制全部权限。
- 安全性取决于合约代码、权限配置和升级机制。

A smart account is controlled by smart-contract logic. It can support custom permission rules, recovery, spending limits, batching, session keys, and gas abstraction.

### Multisig / 多签账户

多签账户通常也是一种合约账户，但重点是“多人或多把 key 共同批准”。例如 2-of-3、3-of-5 等阈值模型。

特点：

- 单个私钥不能独立转走资产。
- 交易需要多个 signer 确认。
- 适合团队、DAO、项目金库和高价值资产管理。
- 安全性取决于 signer 分布、阈值设置、治理流程和合约实现。

A multisig account requires multiple signers to approve a transaction. It is commonly used for teams, DAO treasuries, protocol operations, and high-value asset control.

## Comparison Table / 对比表

| Dimension / 维度 | EOA | Smart Account / 智能账户 | Multisig / 多签账户 |
|---|---|---|---|
| Core control / 核心控制权 | One private key controls the account / 单一私钥控制账户 | Contract logic controls permissions / 合约逻辑控制权限 | Multiple signers approve by threshold / 多个 signer 按阈值批准 |
| Who can initiate / 谁能发起交易 | The private-key holder / 私钥持有人 | Owner, session key, module, relayer, or automation rule depending on design / owner、session key、模块、relayer 或自动化规则，取决于设计 | Usually any signer can propose, but execution needs enough approvals / 通常 signer 可发起提案，执行需要足够确认 |
| Approval model / 批准方式 | One signature is enough / 一个签名即可 | Programmable: single owner, guardians, limits, policy checks, modules / 可编程：单 owner、guardian、限额、策略检查、模块 | M-of-N threshold, such as 2-of-3 or 3-of-5 / M-of-N 阈值，例如 2/3 或 3/5 |
| Recovery / 恢复能力 | Weak by default; lost key usually means lost account / 默认很弱，私钥丢失通常意味着账户丢失 | Can support social recovery, guardian recovery, passkey recovery, or upgradeable recovery modules / 可支持社交恢复、guardian、passkey 或恢复模块 | Can rotate signers if enough signers remain / 如果剩余 signer 足够，可轮换 signer |
| Spending limits / 限额 | No native limit; wallet UI may warn but cannot enforce onchain policy / 原生无链上限额，钱包 UI 可提醒但难强制 | Can enforce daily limits, per-dApp limits, token allowlists, session scopes / 可强制每日限额、dApp 限额、token 白名单、session 范围 | Can enforce via policy modules, but classic multisig mainly relies on signer approval / 可通过策略模块实现，但传统多签主要依赖多人审批 |
| Automation / 自动化 | Unsafe if private key is given to a bot / 如果把私钥交给 bot，风险很高 | Better suited for controlled automation through session keys, modules, and policies / 更适合用 session key、模块和策略做受控自动化 | Suitable for proposals and treasury workflows, not usually for high-frequency automation / 适合提案和金库流程，不适合高频自动化 |
| Gas and UX / Gas 与体验 | User usually pays gas directly / 用户通常直接付 gas | May support gas sponsorship, batching, paymaster, or account abstraction UX / 可支持代付 gas、批量交易、paymaster、账户抽象体验 | Usually slower and more operationally heavy / 通常更慢、操作成本更高 |
| Main risk / 主要风险 | Single key compromise or loss / 单点私钥泄露或丢失 | Contract bugs, bad permissions, bad modules, upgrade risk / 合约漏洞、权限配置错误、恶意模块、升级风险 | Signer collusion, signer loss, weak threshold, operational delay / signer 串谋、signer 丢失、阈值过低、流程延迟 |
| Best fit / 适用场景 | Individual simple use, small testnet tasks, low-value interactions / 个人简单使用、小额测试网任务、低价值交互 | Advanced personal wallets, AI Agent wallets, session-key dApps, safer UX / 高级个人钱包、AI Agent 钱包、session key dApp、更安全 UX | Team treasury, DAO operations, protocol admin, high-value assets / 团队金库、DAO 运营、协议管理员、高价值资产 |

## Scenario Analysis / 场景分析

### 1. EOA Scenario / EOA 场景

适用场景：

- 个人使用 MetaMask 等钱包完成测试网任务。
- 低价值交互，例如领取测试币、发送测试网交易、调用小额或低风险 dApp。
- 学习交易、gas、nonce、签名和区块浏览器验证。

风险点：

- 私钥或助记词泄露后，攻击者可以直接转走资产。
- 私钥丢失后，账户通常无法恢复。
- 用户容易误签恶意交易、无限授权或钓鱼签名。
- 如果把 EOA 私钥交给脚本或 Agent，就等于把完整资产控制权交出去。

人工确认要求：

- 转账、授权、合约写入、签名登录和任何交易广播都必须人工确认。
- 不应把 EOA 私钥、助记词、keystore 或浏览器钱包导出给 Agent。

### 2. Smart Account Scenario / 智能账户场景

适用场景：

- 希望支持社交恢复、限额、批量交易或 gas 代付的钱包。
- 需要 session key 的游戏、社交、支付或 AI Agent 场景。
- 需要把权限拆成不同级别：例如小额自动支付可以自动执行，大额转账必须人工确认。

风险点：

- 合约代码可能有漏洞。
- 账户模块、插件或策略配置错误，可能导致权限扩大。
- 如果账户可升级，升级管理员或治理流程本身会成为风险点。
- 复杂抽象可能让用户更难理解自己到底授权了什么。

人工确认要求：

- 创建或更改 owner、guardian、session key、模块、paymaster、spending limit 等权限设置时必须人工确认。
- 大额转账、无限授权、跨链桥接、升级账户逻辑和添加高权限模块必须人工确认。
- AI Agent 可以建议策略，但不能绕过用户确认直接修改账户权限。

### 3. Multisig Scenario / 多签场景

适用场景：

- 团队金库。
- DAO 资金管理。
- 协议管理员权限。
- 项目方热钱包 / 冷钱包分工。
- 需要多人共同批准的高价值操作。

风险点：

- signer 串谋可以绕过单个成员的反对。
- signer 丢失或无法联系，可能导致交易卡住。
- 阈值设置过低会削弱安全性，过高会降低效率。
- 多签交易如果说明不清楚，signer 仍可能集体误签。
- 如果多签控制可升级合约，错误升级会影响所有用户。

人工确认要求：

- 每个 signer 都应该独立查看交易内容，而不是只相信发起人说明。
- 大额转账、协议升级、管理员权限变更、token mint、treasury payout 都必须经过明确审批。
- AI 可以帮助解释交易和生成摘要，但不能替 signer 自动批准。

## Permission Boundary / 权限边界理解

我现在对三类账户的理解是：

- EOA 的核心问题是“一个私钥 = 完整控制权”。简单、直观，但单点风险很大。
- 智能账户的核心价值是“权限可编程”。它可以支持恢复、限额、session key 和 Agent 受控执行，但复杂性和合约风险更高。
- 多签的核心价值是“多人共同控制”。它牺牲速度和便利性，换取团队治理和高价值资产管理的安全性。

For AI x Web3, the important design question is not only "can an Agent execute," but "what permission does the Agent have, how is that permission limited, who can revoke it, and when must a human approve?"

## AI Agent Wallet Implication / 对 AI Agent 钱包的启发

如果未来设计 AI Agent wallet，我不会让 Agent 直接持有 EOA 私钥。

更合理的方向是：

- 用智能账户或多签作为权限层。
- 给 Agent session key，而不是主控制权。
- 为 session key 设置时间、金额、目标合约和函数范围。
- 大额交易、授权、跨链、合约升级、提款等动作必须回到人工确认。
- 使用交易模拟、风险检测、clear signing 和日志记录作为前置检查。

This connects directly to my Hackathon direction around AI Wallet Clear Intent Guard: the AI layer should explain and compare intent, while the wallet/account layer should enforce permission boundaries.

## WCB Submission Draft

```text
Task proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-007-eoa-smart-account-multisig-permissions.md

说明：
我整理了一份公开 GitHub Markdown 笔记，比较 EOA、智能账户和多签账户的权限差异。笔记包含三类账户的定义、核心控制权、发起交易者、批准模型、恢复能力、限额、自动化能力、gas/UX、主要风险和适用场景。

最低要求对应：
1. 已比较 EOA、智能账户、多签账户三类账户。
2. 比较维度超过 4 个，包括控制权、发起方、批准模型、恢复、限额、自动化、gas/UX、风险和适用场景。
3. 每类账户都写了至少一个适用场景和一个风险点。
4. 单独说明了人工确认边界：转账、授权、合约写入、权限设置、session key、大额交易、多签批准、协议升级等都必须人工确认。

本笔记不包含私钥、助记词、API Key、token、.env 文件、真实资产钱包地址或私密截图。
```

## WCB Submission Status / WCB 提交状态

- Submission id: `cmpi3awg5e7ismu01r8i8nsd6`
- Status: `SUBMITTED`
- Submitted at: 2026-05-23T08:31:47.142Z
- Review status: not reviewed in the checked API response
- Submitted proof:
  - https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-007-eoa-smart-account-multisig-permissions.md

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, or `.env` content.
- [x] No real wallet address, balance, or private transaction pattern.
- [x] No private screenshots or private chat transcripts.
- [x] No real multisig signer information or team treasury information.
- [x] This is a conceptual comparison note and does not create or control any wallet.
- [x] WCB proof was submitted only after explicit human confirmation.
