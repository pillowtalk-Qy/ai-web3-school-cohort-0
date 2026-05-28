# 任务 017 - Agent Profile 与能力声明草图 / Task 017 - Agent Profile and Capability Claim Sketch

## 元信息 / Metadata

- 日期：2026-05-28
- 项目：AI x Web3 School
- 周次：Week 2
- 方向：Agent Identity
- WCB 任务：Week 2｜Agent Identity｜Agent Profile 与能力声明草图
- WCB 任务 ID：`cmpkl65aonbgdmu01wvheztth`
- 分值：20
- 仓库：https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- 任务文件：`tasks/task-017-agent-profile-capability-claim.md`
- 状态：已完成，已部署到 GitHub，WCB 最新提交状态为 `SUBMITTED`，提交时间为 2026-05-28T17:33:25.558Z

**English Companion**

- Date: 2026-05-28
- Program: AI x Web3 School
- Week: Week 2
- Track: Agent Identity
- WCB task: Week 2｜Agent Identity｜Agent Profile 与能力声明草图
- WCB task id: `cmpkl65aonbgdmu01wvheztth`
- Points: 20
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Task file: `tasks/task-017-agent-profile-capability-claim.md`
- Status: completed, deployed to GitHub, WCB latest submission status `SUBMITTED` at 2026-05-28T17:33:25.558Z

## 任务目标 / Task Goal

这个任务要求我选择一个熟悉的 agent 或 workflow，写清它的 identity、capability、输入输出、协作对象与失败点。

产出应该是一份 agent profile 草图，说明：

- 它是谁。
- 由谁维护。
- 能做什么。
- 如何被调用。
- 如何收费。
- 如何被验证。
- 失败如何处理。

可选加分：比较 MCP、A2A、ERC-8004、MPP 中任意两个，说明它们分别适合解决哪类协作、支付或接口问题。

**English Companion**

This task asks me to choose a familiar agent or workflow and describe its identity, capability, inputs and outputs, collaboration objects, and failure points.

The deliverable should be an agent profile sketch that explains:

- Who the agent is.
- Who maintains it.
- What it can do.
- How it is called.
- How it charges.
- How it can be verified.
- How failure is handled.

Optional bonus: compare two protocols or interface layers such as MCP, A2A, ERC-8004, or MPP, and explain which collaboration, payment, or interface problems they fit.

## WCB 要求核对 / WCB Requirement Check

2026-05-28 通过 WCB Agent API 只读查询确认任务要求：

```text
Task id: cmpkl65aonbgdmu01wvheztth
Title: Week 2｜Agent Identity｜Agent Profile 与能力声明草图
Points: 20
Available: true
Proof required: true
Current status before this proof: NOT_STARTED
Submission history before this proof: none
```

**English Companion**

The WCB read-only API check on 2026-05-28 confirmed the task requirements:

```text
Task id: cmpkl65aonbgdmu01wvheztth
Title: Week 2｜Agent Identity｜Agent Profile 与能力声明草图
Points: 20
Available: true
Proof required: true
Current status before this proof: NOT_STARTED
Submission history before this proof: none
```

## Agent 选择 / Agent Choice

我选择一个和我 Week 2 主线一致的 Agent：

```text
Clear Intent Payment Review Agent
```

这个 Agent 在自主 Agent 付款前审查 x402 或 wallet-payment request。它不持有私钥，不直接签名交易，也不替用户做最终商业判断。它的作用是在付款前把 payment intent、payment route、budget、payee、service scope、delivery criteria 和 failure path 展示清楚。

**English Companion**

I choose an agent aligned with my Week 2 main direction:

```text
Clear Intent Payment Review Agent
```

This agent reviews an x402 or wallet-payment request before an autonomous agent pays. It does not hold private keys, sign transactions directly, or make the final business judgment. Its role is to make the payment intent, route, budget, payee, service scope, delivery criteria, and failure path visible before payment.

## 为什么选这个 Agent / Why This Agent

我选择它，是因为它连接了已经完成的三个任务：

- Task 014：AI x Web3 问题地图与主方向选择。
- Task 015：最小 payment / commerce flow。
- Task 016：x402 paywall + CAW agent 自主支付闭环。

这些任务之间缺少的一层就是 identity 和 capability declaration。如果一个 Agent 可以审查或影响付款，用户需要知道它是谁、它声称能做什么、不能做什么、如何验证输出，以及失败时谁负责。

**English Companion**

I choose this agent because it connects three tasks I already completed:

- Task 014: AI x Web3 problem map and main direction.
- Task 015: minimal payment and commerce flow.
- Task 016: x402 paywall plus CAW agent autonomous payment loop.

The missing layer between those tasks is identity and capability declaration. If an agent is allowed to review or influence payments, users need to know who it is, what it claims to do, what it cannot do, how to verify its output, and who is responsible when it fails.

## Agent Profile 草图 / Agent Profile Sketch

| 字段 | Profile |
|---|---|
| Agent 名称 | Clear Intent Payment Review Agent |
| 类型 | Payment-route review、wallet-permission review、agent-commerce safety |
| 维护者 | 本仓库学习者 / project maintainer |
| 运行方 | 第一版原型中使用本地或 self-hosted agent runtime |
| 用户 | Human wallet owner、DAO operator 或另一个受限 Agent |
| 主要任务 | 在付款执行前审查 x402 或 wallet-payment request |
| 不是签名者 | 不持有私钥、不签署 payload、不广播交易、不绕过 wallet policy |
| 输出 | Review report、risk label、policy mismatch notes、recommended next action、audit log |
| 验证方式 | 确定性 payment fields、CAW / Pact policy result、receipt hash、delivery hash、human review |
| 收费方式 | 学习 proof 阶段免费；未来可按次 review 收费，或内嵌在 wallet workflow 中 |
| 失败模式 | 缺少数据、支付路径分类错误、AI 解释幻觉、policy 过期、verifier 不可用 |
| 升级处理 | 要求人工确认、阻止付款、请求更多数据，或标记为无法验证 |

**English Companion**

| Field | Profile |
|---|---|
| Agent name | Clear Intent Payment Review Agent |
| Category | Payment-route review, wallet-permission review, agent-commerce safety |
| Maintainer | Learner / project maintainer in this repository |
| Operator | Local or self-hosted agent runtime in the first prototype |
| User | Human wallet owner, DAO operator, or another bounded agent |
| Primary job | Review an x402 or wallet-payment request before payment execution |
| Not a signer | It does not hold private keys, sign payloads, broadcast transactions, or bypass wallet policy |
| Output | Review report, risk label, policy mismatch notes, recommended next action, audit log |
| Verification | Deterministic payment fields, CAW / Pact policy result, receipt hash, delivery hash, human review |
| Payment model | Free in learning proof; future version could charge per review or be bundled with a wallet workflow |
| Failure mode | Missing data, wrong route classification, hallucinated explanation, stale policy, unavailable verifier |
| Escalation | Ask human, block payment, request more data, or mark result as unverifiable |

## 身份声明 / Identity Claim

Identity claim 要回答：“这个 Agent 是谁，谁对它的行为负责？”

```json
{
  "agent_id": "clear-intent-payment-review-agent.local.v0",
  "display_name": "Clear Intent Payment Review Agent",
  "version": "0.1.0-design-proof",
  "maintainer": "pillowtalk-Qy / AI x Web3 School learning repo",
  "operator": "local prototype runtime",
  "repository": "https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0",
  "profile_url": "tasks/task-017-agent-profile-capability-claim.md",
  "status": "design proof, not production service",
  "accountability": "human maintainer reviews outputs before any wallet action"
}
```

这只是本地 profile，不是公开 registry 声明。未来生产版本可以发布 signed profile、registry entry 或 attestation，但本 proof 不创建链上身份。

**English Companion**

The identity claim should answer: "Who is this agent, and who is accountable for its behavior?"

The JSON above is intentionally a local profile, not a public registry claim. A future production version could publish a signed profile, registry entry, or attestation, but this proof does not create an onchain identity.

## 能力声明 / Capability Claim

Capability claim 要回答：“这个 Agent 能做什么，在什么约束下做，哪些事情不在范围内？”

### 允许能力

- 解析 payment request summary 或 x402 `PAYMENT-REQUIRED` 字段。
- 提取 resource、price、token、network、payee、scheme、expiration、facilitator 或 verifier 线索。
- 对比付款要求与用户意图、钱包策略是否一致。
- 检查请求是否符合 CAW / Pact-like budget、payee allowlist、service scope 和 time window。
- 输出风险标签：`consistent`、`needs human review` 或 `block`。
- 用 hash 和 mock id 生成审计记录，而不是暴露敏感原始数据。
- 解释未知项和缺失的验证来源。

### 明确不能做

- 不能签署交易。
- 不能持有私钥或助记词。
- 不能绕过 CAW / Pact、wallet policy 或人工确认。
- 不能保证服务提供方诚实。
- 没有 delivery hash、acceptance checklist 或 human review 时，不能证明交付质量。
- 不能把 reputation 自动转换成付款权限，除非策略明确允许。

**English Companion**

The capability claim should answer: "What can this agent do, under what constraints, and what is outside scope?"

### Allowed Capabilities

- Parse a payment request summary or x402 `PAYMENT-REQUIRED` fields.
- Extract resource, price, token, network, payee, scheme, expiration, and facilitator or verifier hints.
- Compare payment requirements against user intent and wallet policy.
- Check whether the request fits a CAW / Pact-like budget, payee allowlist, service scope, and time window.
- Produce a risk label: `consistent`, `needs human review`, or `block`.
- Produce an audit record with hashes and mock ids instead of sensitive raw data.
- Explain unknowns and missing verification sources.

### Explicit Non-Capabilities

- It cannot sign transactions.
- It cannot hold private keys or seed phrases.
- It cannot bypass CAW / Pact, wallet policy, or human confirmation.
- It cannot guarantee that a service is honest.
- It cannot prove delivery quality without a delivery hash, acceptance checklist, or human review.
- It cannot convert reputation into automatic permission without explicit policy.

## 输入与输出 / Inputs and Outputs

### 输入格式 / Input Schema

```json
{
  "user_intent": "Buy one AI research brief about agent wallet safety.",
  "payment_request": {
    "resource": "/api/research-brief",
    "amount": "0.20",
    "token": "USDC",
    "network": "base",
    "payee": "mock-ai-research-brief-api-payee",
    "scheme": "exact",
    "expires_at": "2026-05-28T12:00:00Z"
  },
  "wallet_policy": {
    "max_per_request_usd": "0.25",
    "rolling_24h_usd": "1.00",
    "allowed_payees": ["mock-ai-research-brief-api-payee"],
    "allowed_resources": ["/api/research-brief"],
    "allowed_networks": ["base"],
    "allowed_tokens": ["USDC"]
  },
  "verification_context": {
    "source": "x402 PAYMENT-REQUIRED header",
    "pact_id": "mock-pact-id",
    "request_id": "mock-request-id"
  }
}
```

### 输出格式 / Output Schema

```json
{
  "decision": "consistent",
  "risk_level": "low",
  "summary": "The payment request matches the user's stated intent and wallet policy.",
  "checks": {
    "resource": "pass",
    "amount": "pass",
    "payee": "pass",
    "network": "pass",
    "token": "pass",
    "time_window": "pass"
  },
  "recommended_action": "continue_to_wallet_policy_enforcement",
  "audit": {
    "payment_requirement_hash": "hash-of-payment-required",
    "policy_hash": "hash-of-policy",
    "profile_version": "0.1.0-design-proof"
  }
}
```

**English Companion**

The input schema contains user intent, payment request facts, wallet policy, and verification context. The output schema returns a decision, risk level, check results, recommended action, and audit hashes. The examples use mock values and do not include real payment data.

## 协作对象 / Collaboration Objects

这个 Agent 应该和以下对象协作：

| 对象 | 协作方式 |
|---|---|
| Human owner | 对高风险付款或模糊 review 结果做人工确认。 |
| CAW / Pact policy engine | 执行真实钱包权限边界。 |
| x402 paywalled API | 提供机器可读的付款要求。 |
| Facilitator 或 local verifier | 验证并结算 payment payload。 |
| Audit log | 保存 hash、decision、receipt 和 delivery reference。 |
| 未来 identity registry | 发布 agent profile、maintainer、capability、version 和 validation references。 |

**English Companion**

This agent should collaborate with:

| Object | Collaboration |
|---|---|
| Human owner | Confirms high-risk payment or ambiguous review result. |
| CAW / Pact policy engine | Enforces the actual wallet permission boundary. |
| x402 paywalled API | Provides machine-readable payment requirements. |
| Facilitator or local verifier | Verifies and settles the payment payload. |
| Audit log | Stores hashes, decisions, receipts, and delivery references. |
| Future identity registry | Publishes agent profile, maintainer, capability, version, and validation references. |

## 失败点与处理方式 / Failure Points and Handling

| 失败点 | 可能出错的地方 | 处理方式 |
|---|---|---|
| Payment request 不完整 | 缺少 amount、payee、token 或 network。 | 标记为无法验证，并请求更多数据。 |
| Payee 不匹配 | 请求中的 payee 不在 allowlist。 | 阻止付款并展示 mismatch。 |
| 价格超预算 | 金额超过单次上限或滚动预算。 | 阻止或要求人工复核。 |
| Policy 过期 | Wallet policy 或 Pact 已过期。 | 停止并要求更新授权。 |
| AI 解释幻觉 | AI 编造 payment data 中不存在的事实。 | 输出必须基于确定性字段，并显示 unknowns。 |
| 服务未交付 | 付款成功但 API 没有返回预期输出。 | 记录 receipt，并打开退款或争议路径。 |
| 声誉滥用 | 高声誉 Agent 后期作恶。 | 不把 reputation 自动等同于权限，仍保留硬性 wallet policies。 |

**English Companion**

| Failure point | What can go wrong | Handling |
|---|---|---|
| Payment request incomplete | Missing amount, payee, token, or network. | Mark unverifiable and ask for more data. |
| Payee mismatch | Request payee is not in allowlist. | Block payment and surface mismatch. |
| Price over budget | Amount exceeds max per request or rolling budget. | Block or require human review. |
| Stale policy | Wallet policy or Pact is expired. | Stop and request updated authorization. |
| Hallucinated explanation | AI invents facts not present in payment data. | Ground output in deterministic fields and show unknowns. |
| Service non-delivery | Payment succeeds but API does not return expected output. | Record receipt and open refund or dispute path. |
| Reputation abuse | A high-reputation agent later behaves badly. | Do not treat reputation as automatic permission; keep hard wallet policies. |

## 验证模型 / Verification Model

这个 Agent 应该通过几层验证：

1. Profile verification：profile 包含 version、maintainer、repository 和 status。
2. Capability verification：每项能力都有明确 input、output 和 non-capability 边界。
3. Runtime verification：每次 review 都引用确定性 payment fields，而不是自由猜测。
4. Policy verification：最终付款决策仍由 CAW / Pact 或 wallet policy layer 执行。
5. Delivery verification：服务输出有 delivery hash 或 acceptance checklist。
6. Human verification：高风险或不清楚的结果必须人工复核。

**English Companion**

This agent should be verified through several layers:

1. Profile verification: the profile has a version, maintainer, repository, and status.
2. Capability verification: each capability has explicit input, output, and non-capability boundaries.
3. Runtime verification: every review references deterministic payment fields instead of free-form guesses.
4. Policy verification: the final payment decision is still enforced by CAW / Pact or a wallet policy layer.
5. Delivery verification: service output has a delivery hash or acceptance checklist.
6. Human verification: high-risk or unclear results require human review.

## 协议对比：MCP 与 ERC-8004 / Protocol Comparison: MCP and ERC-8004

我比较 MCP 和 ERC-8004，因为它们解决的是 Agent 协作中的不同层。

| 维度 | MCP | ERC-8004 |
|---|---|---|
| 核心问题 | Agent 如何调用工具并获得上下文？ | Agent 如何被发现、识别和建立信任？ |
| 最适合解决 | 本地工具、外部 API、workflow context、结构化 tool invocation。 | Agent profile、registry、reputation、validation、attestation。 |
| 在本 profile 中的作用 | Review Agent 可以通过 MCP 调用 decoder、policy checker、x402 parser 或 audit tool。 | 未来版本可以发布身份、能力声明、声誉和验证记录。 |
| 不解决什么 | 不判断一个 Agent 在跨平台场景下是否可信。 | 不定义本地工具接口，也不执行 workflow。 |
| 风险 | 工具输出可能伪造、过期或被过度信任。 | Reputation 可能被 Sybil attack、刷分、转卖或后期滥用。 |

我的判断：

```text
MCP 适合 agent-tool interaction。
ERC-8004 适合 agent discovery and trust。
二者都不能替代 wallet policy、human confirmation 或 delivery verification。
```

**English Companion**

I compare MCP and ERC-8004 because they address different layers of agent collaboration.

| Dimension | MCP | ERC-8004 |
|---|---|---|
| Main question | How does an agent call tools and receive context? | How can agents be discovered, identified, and trusted? |
| Best fit | Local tools, external APIs, workflow context, structured tool invocation. | Agent profile, registry, reputation, validation, attestations. |
| In this profile | The review agent may use MCP to call decoders, policy checkers, x402 parsers, or audit tools. | A future version may publish identity, capability claims, reputation, and validation records. |
| What it does not solve | It does not decide whether an agent is trustworthy across platforms. | It does not define the local tool interface or execute the workflow. |
| Risk | Tool output may be forged, stale, or over-trusted. | Reputation can be Sybil-attacked, farmed, sold, or abused later. |

My takeaway:

```text
MCP is useful for agent-tool interaction.
ERC-8004 is useful for agent discovery and trust.
Neither replaces wallet policy, human confirmation, or delivery verification.
```

## 最小 Profile 卡片 / Minimal Profile Card

```text
Agent：Clear Intent Payment Review Agent
维护者：学习者 / repo maintainer
版本：0.1.0-design-proof
用途：在 Agent 付款前审查 payment intent、route、budget、payee 和 delivery assumptions
调用方式：local workflow、未来 MCP tool endpoint 或未来 agent registry entry
输入：user intent、payment request、wallet policy、verification context
输出：risk label、checks、explanation、recommended action、audit hashes
收费：学习 proof 阶段免费；未来可按次 review 收费或内嵌在 wallet workflow 中
验证：deterministic fields、CAW/Pact policy、audit hash、human review
失败处理：block、ask human、request more data 或 mark unverifiable
隐私边界：不包含私钥、助记词、API key 或真实钱包数据
```

**English Companion**

```text
Agent: Clear Intent Payment Review Agent
Maintainer: learner / repo maintainer
Version: 0.1.0-design-proof
Purpose: review payment intent, route, budget, payee, and delivery assumptions before an agent pays
Call method: local workflow, future MCP tool endpoint, or future agent registry entry
Inputs: user intent, payment request, wallet policy, verification context
Outputs: risk label, checks, explanation, recommended action, audit hashes
Pricing: free in learning proof; future per-review or wallet-bundled model
Verification: deterministic fields, CAW/Pact policy, audit hash, human review
Failure handling: block, ask human, request more data, or mark unverifiable
Privacy boundary: no private keys, no seed phrases, no API keys, no real wallet data
```

## 和我的主方向的关系 / Why This Supports My Main Direction

我的 Week 2 主线是：

```text
Wallet / Permission / Safe Execution
```

这份 profile 补上了上游 trust layer。在 wallet 或 CAW policy 判断 Agent 能不能付款之前，用户应该先知道这个 review Agent 声称能做什么，以及它的输出如何被验证。

这份 profile 也说明：identity 和 reputation 本身还不够。一个看起来可信的 Agent 仍然可能失败、幻觉或被攻破。因此，能力声明必须连接到具体输入、确定性检查、硬性 policy boundary、audit log 和 human review。

**English Companion**

My Week 2 main direction is:

```text
Wallet / Permission / Safe Execution
```

This profile adds the upstream trust layer. Before a wallet or CAW policy decides whether an agent can pay, the user should know what the reviewing agent claims to do and how its output is verified.

The profile also makes clear that identity and reputation are not enough. A trusted-looking agent can still fail, hallucinate, or be compromised. Therefore, capability claims must connect to concrete inputs, deterministic checks, hard policy boundaries, audit logs, and human review.

## WCB 提交草稿 / WCB Submission Draft

```text
Task proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-017-agent-profile-capability-claim.md

说明：
我完成了 Week 2 Agent Identity 任务「Agent Profile 与能力声明草图」的双语设计型 proof。

我选择的对象是 Clear Intent Payment Review Agent，也就是一个和 Week 2 钱包安全主线相关的 payment-route 和 wallet-permission review agent。

这份 proof 包含：
1. WCB 要求核对。
2. Agent identity claim。
3. Capability claim 和 explicit non-capabilities。
4. 输入与输出。
5. 协作对象。
6. 失败点与处理方式。
7. 验证模型。
8. MCP 与 ERC-8004 协议对比。
9. 最小 profile card。

核心结论是：Agent profile 不应该只写“它能做什么”，还应该写清谁维护它、如何被调用、如何被验证、不能做什么、失败如何处理，以及哪些动作仍然必须由 wallet policy 或 human confirmation 控制。

本 proof 不包含私钥、助记词、API key、token、.env 文件、真实钱包地址、真实资产余额、真实 payment payload、真实交易数据或私密截图。
```

**English Companion**

```text
Task proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-017-agent-profile-capability-claim.md

Description:
I completed a bilingual design proof for the Week 2 Agent Identity task "Agent Profile and Capability Claim Sketch."

I chose the Clear Intent Payment Review Agent, a payment-route and wallet-permission review agent connected to my Week 2 wallet safety direction.

The proof includes:
1. WCB requirement check.
2. Agent identity claim.
3. Capability claim and explicit non-capabilities.
4. Inputs and outputs.
5. Collaboration objects.
6. Failure points and handling.
7. Verification model.
8. MCP vs ERC-8004 protocol comparison.
9. Minimal profile card.

The key conclusion is that an agent profile should not only say what the agent can do. It should also state who maintains it, how it is called, how it is verified, what it cannot do, how failure is handled, and which actions still require wallet policy or human confirmation.

This proof does not include private keys, seed phrases, API keys, tokens, `.env` files, real wallet addresses, real balances, real payment payloads, real transaction data, or private screenshots.
```

## 验证状态 / Verification Status

- [x] 已通过只读 API 查询 WCB 任务详情。
- [x] 已通过只读 API 查询 WCB 提交历史。
- [x] 已选择熟悉的 Agent 或 workflow。
- [x] 已包含 identity claim。
- [x] 已包含 capability claim。
- [x] 已包含输入与输出。
- [x] 已包含协作对象。
- [x] 已包含失败点与处理方式。
- [x] 已包含维护者、调用方式、收费方式、验证方式和责任边界。
- [x] 已比较 MCP 与 ERC-8004。
- [x] 已完成中文优先的双语 proof 格式。
- [x] 已准备 WCB 提交草稿。
- [x] 已部署到 GitHub。
- [x] 已通过 WCB 平台提交。

2026-05-28 通过只读 API 核验的 WCB 最新提交状态：

- Submission id: `cmppruppydbhkpo01k2y3eqhz`
- Status: `SUBMITTED`
- Submitted at: 2026-05-28T17:33:25.558Z
- Review status: not reviewed in the checked API response

**English Companion**

- [x] WCB task details checked through read-only API.
- [x] WCB submission history checked through read-only API.
- [x] Familiar agent or workflow selected.
- [x] Identity claim included.
- [x] Capability claim included.
- [x] Inputs and outputs included.
- [x] Collaboration objects included.
- [x] Failure points and handling included.
- [x] Maintainer, call method, pricing, verification, and responsibility included.
- [x] MCP and ERC-8004 compared.
- [x] Chinese-first bilingual proof format completed.
- [x] WCB submission draft prepared.
- [x] Deployed to GitHub.
- [x] Submitted through WCB platform.

WCB latest submission status verified through read-only API on 2026-05-28:

- Submission id: `cmppruppydbhkpo01k2y3eqhz`
- Status: `SUBMITTED`
- Submitted at: 2026-05-28T17:33:25.558Z
- Review status: not reviewed in the checked API response

## 隐私检查 / Privacy Check

- [x] 不包含私钥、助记词、API key、cookies、tokens、sessions 或 `.env` 内容。
- [x] 不包含真实资产钱包地址、真实资产余额或私密交易模式。
- [x] 不包含真实 payment payload、真实交易 calldata 或私密 x402 请求。
- [x] 不包含私密截图或私密聊天记录。
- [x] 本任务是 profile 与 capability 设计型 proof，不执行钱包动作。
- [x] commit、push 和 WCB proof submission 仍需要明确人工确认。

**English Companion**

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, or private transaction pattern.
- [x] No real payment payload, real transaction calldata, or private x402 request.
- [x] No private screenshots or private chat transcripts.
- [x] This task is a profile and capability design proof. It does not execute wallet actions.
- [x] Commit, push, and WCB proof submission still require explicit human confirmation.
