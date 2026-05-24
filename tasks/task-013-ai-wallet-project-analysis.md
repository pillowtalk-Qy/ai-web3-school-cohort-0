# Task 013 - AI Wallet Project Analysis

## Metadata

- Date: 2026-05-25
- Program: AI x Web3 School
- Week: Week 1 / Week 2 bridge
- Track: industry observation advanced task
- WCB task: Week 1｜行业观察进阶｜拆解 1–2 个 AI × Web3 项目或个人
- WCB task id: `cmp9wlt0p0s4nmw01ypoa45tk`
- Points: 30
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Task file: `tasks/task-013-ai-wallet-project-analysis.md`
- Status: completed locally; not yet deployed to GitHub or submitted to WCB

## Task Goal / 任务目标

拆解 1–2 个 AI x Web3 项目，训练自己判断真实问题、技术路径、可验证材料和 proof-of-work 的能力。

我选择围绕自己的 Hackathon 方向 `AI Wallet Clear Intent Guard` 来拆解：

1. Cobo Agentic Wallet / CAW
2. Coinbase AgentKit + Agentic Wallet + x402

The goal is not to write a generic market map. I want to understand how strong AI wallet projects define authority, safety, payment execution, and human confirmation, then turn the findings into a sharper Hackathon direction.

## WCB Requirement Check / 平台要求核对

WCB read-only API check on 2026-05-25 confirmed the task requirements:

```text
Task id: cmp9wlt0p0s4nmw01ypoa45tk
Title: Week 1｜行业观察进阶｜拆解 1–2 个 AI × Web3 项目或个人
Points: 30
Proof required: true
Available: true
Current status before this proof: NOT_STARTED
Submission history before this proof: none
```

Minimum requirements:

- Analyze 1–2 AI x Web3 related objects.
- For each object, explain the AI part, Web3 part, and verifiable materials.
- Write my own judgment, takeaway, or questions.
- Attach source links.
- Do not submit API keys, tokens, `.env` files, or other sensitive information.

## Why These Two Projects / 为什么选这两个项目

我的黑客松方向是 AI 钱包安全，尤其是签名前的用户意图、权限边界和交易事实核对。

在目前可参考的项目里，我认为 Cobo 和 Coinbase 的组合最适合：

- Cobo Agentic Wallet 更接近“安全授权架构”：Pact、MPC、预算、allowlist、approval 和审计。
- Coinbase AgentKit / Agentic Wallet / x402 更接近“主流开发者生态”：让 AI agent 拥有钱包、链上动作和 x402 支付能力。

一个偏安全控制层，一个偏开发者与支付基础设施。两者合起来，正好可以检验我问 Sophia 的三个问题。

## Candidate Shortlist / 候选项目清单

如果这个任务只拆解 1-2 个对象，我会把候选项目分成三类：

| Candidate / 候选对象 | Why it matters / 为什么值得看 | Fit for AI wallet Hackathon / 对黑客松的参考度 | Decision / 选择 |
|---|---|---|---|
| Cobo Agentic Wallet | Purpose-built agentic wallet with Pact, MPC, policy engine, approval flow, and auditability. | Very high. It is the clearest reference for scoped authority, spending rules, allowlists, revoke path, and human review. | Selected |
| Coinbase AgentKit + Agentic Wallet + x402 | Mainstream developer stack for agents that need wallets, onchain actions, and programmatic payment. | Very high. It connects wallet actions with x402 payment and facilitator transparency. | Selected |
| Crossmint AI Agents payment infrastructure | Strong agent payment and wallet infrastructure, including cards, stablecoins, x402, scoped spending rules, and user authorization flows. | High. Good reference for agent payments and commerce, but broader than wallet signing safety. | Useful follow-up |
| Privy Agentic Wallets | Developer wallet infrastructure for autonomous agents with policy controls and server-wallet patterns. | Medium-high. Useful for embedded wallet and policy-control design, but less iconic as a public AI wallet case than Cobo / Coinbase. | Useful follow-up |
| GOAT SDK | Open-source onchain agent toolkit with many plugins, chains, wallets, and frameworks. | Medium. Excellent for action/tool integration, but it is more an agent toolkit than an AI wallet safety product. | Reference only |
| ERC-8004 ecosystem | Agent identity, reputation, and validation registry standard. | High as an upstream trust layer, but not itself a wallet. | Reference layer |

Candidate source links checked:

- Crossmint AI agents overview: https://docs.crossmint.com/agents/overview
- Crossmint wallets overview: https://docs.crossmint.com/wallets/overview
- Privy agentic wallets docs: https://docs.privy.io/recipes/agent-integrations/agentic-wallets
- GOAT SDK docs: https://docs.goat-sdk.com/
- ERC-8004 draft / discussion entry: https://eips.ethereum.org/EIPS/eip-8004

我的最终选择是：

```text
Primary object: Cobo Agentic Wallet
Second object: Coinbase AgentKit + Agentic Wallet + x402
```

理由：

- Cobo 回答的是 AI wallet 最危险的问题：agent 到底被允许做什么，权限如何被限制、审查、撤销和审计。
- Coinbase 回答的是 AI wallet 最容易落地的问题：agent 如何接入钱包、链上动作、x402 支付和开发者工具链。
- Crossmint / Privy / GOAT SDK 都值得继续看，但更适合作为后续实现参考，不如 Cobo + Coinbase 适合作为本任务的两个主分析对象。

## My Sophia Question Lens / 我的 Sophia 三问分析框架

在 Sophia 的 Open Agile Economy / AI Agent Economy 课上，我问的问题是：

```text
ERC-8004 could provide agent identity and reputation, while x402 enables automated payments. As wallets become more autonomous in making decisions and payments, I’m curious how you think about three related challenges:

1. How can reputation systems resist Sybil attacks, fake reviews, reputation farming, identity resale, or high-reputation agents abusing trust later?
2. What should be the minimum security model for an AI wallet? Should session keys, spending limits, reputation thresholds, allowlists, or human confirmation become default safeguards?
3. How can we prevent x402 facilitators from becoming new centralized payment gateways, and make them replaceable, verifiable, and competitive at the protocol level?
```

I will use this as the project-analysis lens:

| Lens / 分析维度 | Question / 要问的问题 |
|---|---|
| Agent identity and reputation | Does the project define who the agent is, what it can do, and why it should be trusted? |
| Wallet authority | Does the project give the agent raw key access, scoped authority, or human-reviewed delegation? |
| Minimum safety model | Are spending limits, allowlists, session keys, simulation, clear signing, human confirmation, and revoke paths default? |
| Payment openness | If the project touches x402 or machine payment, is the facilitator replaceable, verifiable, and competitive? |
| Hackathon relevance | What can my `AI Wallet Clear Intent Guard` learn from it or improve? |

## Object 1 - Cobo Agentic Wallet / CAW

### What Problem It Solves / 它解决什么问题

Cobo Agentic Wallet 解决的是：AI agent 需要代表用户或团队执行链上任务，但不能直接拿到无限私钥权限。

它的核心表达很清楚：

```text
Give your agent a Pact, not your private key.
```

也就是说，agent 拿到的不是完整资产控制权，而是围绕某个任务被批准、被约束、可结束的执行授权。

In my words, Cobo is trying to turn agent wallet execution from "give the agent a key" into "give the agent an enforceable mandate."

### AI Part / AI 部分

AI 部分主要是 agent workflow：

- 用户用自然语言表达任务意图。
- Agent 根据意图提出 Pact。
- Pact 包含 intent、execution plan、policies 和 completion conditions。
- Agent 在 Pact 被批准后执行链上操作。
- Agent 可以用于 trading、yield、treasury、risk、ops、payment flows、transfers 和 smart contract interactions 等场景。

AI 的价值不是“直接签名”，而是把任务拆成可审查的执行计划。

### Web3 Part / Web3 部分

Web3 部分主要是钱包、MPC、策略执行和链上操作：

- MPC threshold signing。
- Agent + Cobo 和 Human + Cobo 两类 signing group。
- Pact-scoped authority。
- Spending controls。
- Approval flow。
- Address / contract / token / chain constraints。
- Auditability。
- Transfers and smart contract interactions under scoped authority。

Cobo 的设计重点是把 Web3 钱包从“手动签名工具”推进到“有策略约束的 agent execution layer”。

### Verifiable Materials / 可验证材料

Public sources:

- Cobo Agentic Wallet official page: https://www.cobo.com/agentic-wallet
- Cobo Pact mechanism docs: https://www.cobo.com/products/agentic-wallet/manual/security/pact-mechanism
- Cobo Agentic Wallet docs index: https://cobo.com/products/agentic-wallet/manual/llms.txt
- Cobo GitHub organization / related code entry: https://github.com/CoboGlobal
- My previous watchlist note: `tasks/task-002-ai-web3-information-flow-watchlist.md`
- My Hackathon idea note: `hackathon/idea-ai-wallet-clear-intent-guard.md`

### Sophia Lens Analysis / 用 Sophia 三问拆解

#### 1. Agent identity and reputation

Cobo 更强的是 wallet authority and policy，不是公开 agent reputation protocol。

它回答了“agent 拿到什么权限”，但没有完全回答：

- 这个 agent 为什么值得信任？
- 是否有跨平台 reputation？
- agent operator 是否可以刷 reputation？
- 高声誉 agent 后期作恶如何处理？

这说明 ERC-8004 这样的 identity / reputation layer 可以成为 Cobo 类 wallet 的上游输入，但不是 Cobo 当前公开叙事的中心。

#### 2. Minimum AI wallet safety model

这一点 Cobo 很强。

我能看到的默认安全思想包括：

- Agent 不拿原始私钥。
- 每个任务对应 Pact。
- Pact 需要 owner review。
- Pact 中包含 intent、plan、policies、completion conditions。
- 策略可以限制预算、approval、allowlist、chain、token、contract。
- Policy engine 对每个 operation 做 allow / require approval / deny 判断。
- Pact-level policies 是 fail-closed / default-deny：未被 policy 覆盖的操作会被自动拒绝。
- Pact 结束后 authority 自动结束。
- MPC 避免单点私钥控制。
- Human side 保留 recovery path。

我自己的判断是：Cobo 已经给出了 AI wallet safety baseline 的一个强参考版本。

但我还想继续追问：

- Pact approval UI 是否足够 clear-signing？
- 用户是否真的看得懂 execution plan 和 calldata？
- Transaction simulation 是否是默认步骤？
- 高风险操作是否有更硬的 deny-by-default 模式？
- Reputation threshold 是否可以进入 Pact policy？

#### 3. x402 facilitator openness

Cobo 的 CAW 可以支持 payment flows，但它公开资料里的核心不是 x402 facilitator 市场设计。

所以它没有直接回答我的第三个问题：如果 agent payment 依赖 facilitator，如何避免 facilitator 成为新的中心化支付网关？

这给我的启发是：AI wallet 不只要管“谁能签”，还要管“支付路线怎么选、由谁验证、由谁结算、失败怎么切换”。

### What I Learned / 我的启发

Cobo 对我的 Hackathon 方向最重要的启发是：

```text
AI wallet safety should be task-scoped, policy-enforced, reviewable, and revocable.
```

我的 `AI Wallet Clear Intent Guard` 不应该只做“交易解释器”，而应该把用户意图、交易事实、权限策略和人工确认放在一个 review layer 里。

可以从 Cobo 学到的设计点：

- 不要让 agent 直接拿私钥。
- 先让 agent 提交 plan。
- 用户看到 intent、plan、policy、risk，再确认。
- 每笔交易都要检查是否仍在授权范围内。
- 授权应该有结束条件和 revoke path。

## Object 2 - Coinbase AgentKit + Agentic Wallet + x402

### What Problem It Solves / 它解决什么问题

Coinbase 的相关产品线更像开发者基础设施：

- AgentKit 让 AI agent 可以接入钱包管理和链上动作。
- Agentic Wallet 让 agent 能 hold、spend、trade、earn stablecoins，并接入 x402 payment。
- x402 把 HTTP `402 Payment Required` 变成可编程支付流程，让人类开发者和 AI agents 都可以按请求付费访问 API 或数字资源。

In my words, Coinbase is trying to make "agent with wallet + programmatic payment" easy for mainstream developers.

### AI Part / AI 部分

AI 部分是 agent tool / action layer：

- AgentKit 可以和 LangChain、Eliza、Vercel AI SDK 等框架集成。
- Agent can perform onchain actions through tools.
- Agentic Wallet CLI / MCP can be dropped into AI clients or agent runtimes.
- Agents can discover and pay for services through x402.

Coinbase 的重点不是“某一个 AI 模型”，而是把 wallet and payment capabilities 变成 agent 可以调用的工具层。

### Web3 Part / Web3 部分

Web3 部分包括：

- Secure wallet management。
- Transfers。
- Swaps。
- Smart contract deployments。
- EVM-compatible networks and Solana。
- Stablecoin payments。
- x402 payment flow。
- Facilitator-based payment verification and settlement。

Coinbase 更强调让 agent 进入真实链上和支付场景，而不是只停留在 demo chatbot。

### Verifiable Materials / 可验证材料

Public sources:

- Coinbase AgentKit docs: https://docs.cdp.coinbase.com/agent-kit
- Coinbase AgentKit GitHub repo: https://github.com/coinbase/agentkit
- Coinbase Agentic Wallet docs: https://docs.cdp.coinbase.com/agentic-wallet/welcome
- Coinbase x402 docs: https://docs.cdp.coinbase.com/x402/welcome
- x402 facilitator docs: https://docs.x402.org/core-concepts/facilitator
- OpenX402 docs: https://docs.openx402.ai/

### Sophia Lens Analysis / 用 Sophia 三问拆解

#### 1. Agent identity and reputation

Coinbase AgentKit / Agentic Wallet 主要解决 agent 能不能调用钱包和链上能力，并不直接解决 agent identity / reputation。

它能让 agent act，但不一定说明：

- 这个 agent 是谁？
- 它的能力声明是否可验证？
- 它过去的任务成功率如何？
- 它是否被 fake review 或 reputation farming 影响？

这部分更适合接 ERC-8004。

ERC-8004 的公开规范将问题定义为：跨组织发现、选择和信任 agents，并引入 Identity Registry、Reputation Registry 和 Validation Registry。它可以作为 Coinbase / Cobo 这类 agent wallet 上游的 trust layer。

#### 2. Minimum AI wallet safety model

Coinbase 文档说 Agentic Wallet 带有 built-in security guardrails，但从 overview 层能看到的细节比 Cobo Pact 少。

它的优势是：

- Developer adoption path 清晰。
- CLI / MCP / AgentKit 工具链完整。
- 与 x402 payment 场景直接连接。
- 更适合快速做 agent payment demo。
- Agentic Wallet MCP 的风险边界相对清楚：agent 可以发现并支付 x402 services，但不能转账到任意地址，不能自己设置 spending limits，也不能发起 onramp。

我还会继续追问：

- built-in guardrails 具体包括哪些？
- 是否有默认 spending limit？
- 是否有 target allowlist / function allowlist？
- 是否强制 high-risk human confirmation？
- Agentic Wallet MCP 只能 discover and pay for services，但不能 send / trade，这是否是安全分层？
- 如果开发者用 CLI 开放 send / trade，默认风险边界在哪里？

#### 3. x402 facilitator openness

Coinbase x402 文档非常贴近我第三个问题。

x402 的 facilitator 负责：

- payment payload verification
- settlement submission
- returning verification / settlement result

官方 x402 文档也说明 facilitator 是 optional but recommended，server 可以本地验证和结算，也可以使用 facilitator 降低复杂度。

这里的问题是：一旦 facilitator 成为默认路径，它就可能形成新的中心化依赖。

我认为需要拆成两层：

```text
Protocol level:
x402 should allow multiple facilitators, local verification, direct settlement, discovery, and failover.

Product level:
Wallet / agent UI should show which facilitator is used, what it verifies, what it settles, fee / latency / network, and what fallback exists.
```

OpenX402 自称 permissionless facilitator，不需要注册、登录、API key，并支持多链。这说明 facilitator openness 已经有项目在尝试解决，但它仍然需要更多可验证指标：

- facilitator uptime
- fee
- latency
- supported chains
- failure rate
- censorship behavior
- settlement correctness
- fallback options

### What I Learned / 我的启发

Coinbase 对我的 Hackathon 方向最重要的启发是：

```text
AI wallet safety cannot stop at wallet signing. It must include agent payment routing and facilitator transparency.
```

如果我的项目只解释 calldata，它能解决 blind signing 的一部分问题。

但如果 AI agent 要通过 x402 自动付费，用户还需要知道：

- 这次 payment 的 resource 是什么？
- 价格是多少？
- 使用哪个 network / token？
- 谁是 recipient？
- 哪个 facilitator 负责 verify / settle？
- 是否有替代 facilitator？
- 支付失败或重复 settlement 如何处理？

这可以成为 `Clear Intent Guard` 的扩展模块：x402 payment review card。

## Comparison Table / 对比表

| Dimension / 维度 | Cobo Agentic Wallet | Coinbase AgentKit / Agentic Wallet / x402 |
|---|---|---|
| Primary focus | Safe delegated wallet execution | Developer stack for agent wallet + onchain actions + x402 payments |
| AI role | Agent proposes task and plan, then executes under Pact | Agent calls wallet / payment / onchain tools through SDK, CLI, MCP, or AgentKit |
| Web3 role | MPC wallet, scoped delegation, policy enforcement, payment / transfer / contract interactions | Wallet management, transfers, swaps, smart contract deployments, stablecoin x402 payments |
| Authority model | Pact-scoped authority; no raw private key to agent | Tool-based wallet access; safety depends on chosen product path and guardrails |
| Human confirmation | Strong in Pact approval flow | Present as guardrail idea, but overview docs expose fewer policy details |
| Policy controls | Budgets, approvals, allowlists, chain / token / contract constraints, completion conditions | Needs deeper doc review; overview focuses more on capabilities and integration |
| x402 relevance | Payment flows possible, but facilitator openness not the main public focus | Directly tied to x402 payment flow and facilitator model |
| Best lesson for my Hackathon | Task-scoped, reviewable, enforceable wallet authority | Agent payment UX needs facilitator transparency and fallback awareness |

## Hackathon Direction Update / 黑客松方向更新

Before this analysis, my idea was:

```text
AI Wallet Clear Intent Guard
```

After this analysis, I would sharpen it to:

```text
AI Wallet Clear Intent Guard:
pre-signing and policy review for agent wallets
```

中文方向：

```text
AI 钱包签名前意图与权限守卫
```

### What the MVP Should Include / MVP 应该包含什么

最小版本不做完整钱包，不碰真实私钥，不自动签名。

It should show a review layer with four cards:

1. User intent card
   - 用户自然语言目标
   - 结构化 intent

2. Transaction facts card
   - method
   - recipient / spender
   - token / amount
   - chain id
   - approval / transfer / contract write classification

3. Policy check card
   - spending limit
   - target allowlist
   - function allowlist
   - high-risk human confirmation
   - emergency stop / revoke reminder

4. Payment route card for x402-like payments
   - resource
   - price
   - network
   - token
   - recipient
   - facilitator
   - fallback / no fallback

### What It Should Not Do First / 第一版不做什么

- 不做完整 AI wallet。
- 不接真实主网钱包。
- 不保存私钥或助记词。
- 不自动签名。
- 不自动授权 token。
- 不自动转账。
- 不把 AI 判断当成唯一事实来源。

### Better Product Thesis / 更清楚的产品判断

```text
AI wallets should not make dangerous actions easier.
They should make intent, authority, payment route, and risk easier to inspect before execution.
```

AI 钱包不应该只是让用户更快点击确认。它应该让用户在签名前更清楚地看到：

- 我想做什么。
- 交易实际会做什么。
- agent 被允许做什么。
- 哪些规则正在保护我。
- 哪些地方必须人工确认。
- 如果涉及 x402，付款由谁验证和结算。

## Open Questions / 后续问题

### For Cobo-like systems

- Pact 是否可以接入 ERC-8004 reputation as policy input？
- Pact approval UI 是否能展示 clear-signing descriptor coverage？
- 每笔交易是否默认模拟？
- 用户是否可以看到 agent plan 和 transaction facts 的差异？

### For Coinbase-like systems

- Agentic Wallet guardrails 的默认值是什么？
- CLI 和 MCP 两种路径是否体现了不同风险等级？
- x402 facilitator 选择是否能由用户或 agent policy 控制？
- 是否可以在 wallet UI 中展示 facilitator metadata 和 fallback？

### For ERC-8004

- Reputation 是否按任务类型分层？
- Feedback 是否容易被刷？
- Agent owner 变化后 reputation 如何继承或清零？
- Validation Registry 是否适合高风险 wallet actions？

### For my Hackathon MVP

- 第一版应该先支持 ERC-20 approve / transfer，还是先支持 x402 payment review？
- 如何把 Cobo 的 Pact 思路压缩成 demo 里的 policy checklist？
- 如何让用户看见“AI 解释”和“确定性交易事实”之间的区别？

## WCB Submission Draft

```text
Task proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-013-ai-wallet-project-analysis.md

说明：
我拆解了两个和 AI 钱包方向高度相关的 AI × Web3 项目 / 工具链：

1. Cobo Agentic Wallet / CAW
2. Coinbase AgentKit + Agentic Wallet + x402

每个对象都分析了：
- 它在解决什么问题
- AI 部分是什么
- Web3 部分是什么
- 可验证材料和官方链接
- 对我黑客松方向 AI Wallet Clear Intent Guard 的启发

我还把 Sophia 嘉宾课中自己提出的三个问题作为分析框架：
1. Agent identity / reputation 如何抗攻击
2. AI wallet 的最低安全模型应该是什么
3. x402 facilitator 如何避免成为新的中心化支付网关

结论：
Cobo 更适合作为 wallet authority / Pact / policy enforcement 的参考；Coinbase 更适合作为 Agent wallet developer stack 和 x402 payment flow 的参考。我的黑客松方向应从“AI 交易解释器”升级为“AI 钱包签名前意图与权限守卫”，重点做 pre-signing review、policy check 和 x402 payment route transparency，而不是做完整钱包或自动签名工具。

本 proof 不包含 API key、token、.env 文件、私钥、助记词、真实资产钱包信息或私密截图。
```

## Verification Status / 验证状态

- [x] WCB task details checked through read-only API / 已通过只读 API 查询任务详情
- [x] 2 AI x Web3 related objects analyzed / 已拆解 2 个 AI x Web3 相关对象
- [x] AI part explained for each object / 已说明每个对象的 AI 部分
- [x] Web3 part explained for each object / 已说明每个对象的 Web3 部分
- [x] Verifiable source links included / 已包含可验证来源链接
- [x] Personal judgment and Hackathon implication included / 已包含个人判断和黑客松启发
- [x] WCB submission draft prepared / 已准备 WCB 提交草稿
- [ ] Deployed to GitHub / 尚未部署到 GitHub
- [ ] Submitted through WCB platform / 尚未通过 WCB 平台提交

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, or private transaction pattern.
- [x] No private screenshots or private chat transcripts.
- [x] No unpublished team information or private Hackathon strategy.
- [x] This is a public learning analysis and does not execute wallet actions.
- [x] Future commit, push, and WCB proof submission still require explicit human confirmation.
