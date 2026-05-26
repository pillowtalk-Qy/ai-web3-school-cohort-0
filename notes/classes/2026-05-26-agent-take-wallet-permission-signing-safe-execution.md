# Agent Take Wallet Permission Signing and Safe Execution - 2026-05-26

## Metadata / 元信息

- Date / 日期: 2026-05-26
- Title / 标题: Agent Take Wallet 权限签名与安全执行
- Subtitle / 副标题: 让 AI Agent 在可控边界内操作链上资产
- Speaker / 主讲人: 卓涵颖, Cobo Agent Take Wallet PM
- Host / 主持人: 微微
- Program / 项目: AI x Web3 School
- Type / 类型: class note / 课程笔记
- Topics / 主题: AI Agent, agent wallet, MPC, packed authority, permission signing, policy engine, recipe skill layer, safe execution, x402 / AI Agent、Agent Wallet、MPC、Packed Authority、权限签名、策略引擎、Recipe Skill Layer、安全执行、x402
- Source / 来源: learner-provided class notes and Q&A record / 学习者提供的课堂笔记与问答记录
- Status / 状态: summarized from learner notes; product names, product claims, market data, and protocol details need follow-up verification / 已基于学习者笔记整理，产品名称、产品能力、市场数据与协议细节需后续核验
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-05-26-agent-take-wallet-permission-signing-safe-execution.md`

## Important Caveat / 重要说明

这份笔记不是逐字稿，而是基于课堂记录整理出的学习笔记。它保留了分享的主线、产品架构、风险案例、解决方案和问答要点。

课堂中提到的市场规模、链上 AI Agent 数量、协议支持范围、产品功能名称和安全效果，需要在写成正式研究材料、Hackathon proposal 或公开产品判断前回到 Cobo 官方文档、产品页面、协议文档或可信资料源复核。

This note is not a verbatim transcript. It is a learning summary based on learner-provided notes. Product claims, market data, supported protocol lists, and safety-effectiveness statements should be verified against primary sources before being used as formal research or product claims.

## One-line Summary / 一句话总结

Cobo 的核心观点是：AI Agent 操作链上资产时，安全不能只依赖模型“听话”，而必须把信任从应用层提升到基础执行层，用 MPC 私钥架构、Pack / Packed Authority 授权边界、策略引擎、Recipe Skill Layer 和审计机制约束 Agent 能做什么、不能做什么、何时停止。

My one-line takeaway: agent wallets should not give agents open-ended wallet power. They should give agents scoped, policy-checked, auditable, and revocable execution authority.

## Opening Context / 开场背景

主持人微微开场后，说明本次分享聚焦 AI Agent 操作链上资产时的权限、风控、审计与安全执行。Cobo 的卓涵颖从产品视角分享了 Agent Take Wallet 的设计思路。

本课和我最近的 Week 2 主线高度相关：`Wallet / Permission / Safe Execution`。它不是在讨论“AI 能不能生成交易”，而是在讨论：

- AI Agent 什么时候可以动钱。
- Agent 能动多少钱。
- 能对哪些合约、token、地址和链执行。
- 人类什么时候必须审批。
- 授权什么时候失效。
- 如果 Agent 掉线、失控或服务不可用，资产控制权如何回到人手里。

English companion: the session focused on the execution layer of agent wallets. The core question was not whether an AI agent can create onchain actions, but how a wallet system can constrain those actions before assets are exposed.

## AI Agent Development Timeline / AI 发展阶段

课堂把近几年 AI 产品能力分成四个阶段：

| 年份 | 阶段 | 特征 |
|---|---|---|
| 2023 | Chatbot / 聊天机器人 | AI 回答问题，人类执行操作。 |
| 2024 | Copilot | AI 提建议、制定计划，但仍需要人类逐步骤批准。 |
| 2025 | Agent | Agent 成为主流，可以在后台持续完成复杂工作流，人类主要定义边界。 |
| 2026 | Autonomous Agent / 自主智能体 | 自主智能体普及，可以自主探索、协作和执行任务。 |

English companion:

| Year | Stage | Meaning |
|---|---|---|
| 2023 | Chatbot | AI answers questions; humans execute actions. |
| 2024 | Copilot | AI suggests and plans; humans approve step by step. |
| 2025 | Agent | Agents run longer workflows; humans define boundaries. |
| 2026 | Autonomous Agent | Agents become more autonomous in exploration and execution. |

课堂强调的未解决缺口是：如何让 AI 安全地替人类完成链上资金操作、消费和转账。

如果 AI 只是回答问题，风险主要是信息错误。如果 AI 可以操作钱包，风险就直接变成资产权限、资金损失和不可逆链上执行。

## Market Urgency / 市场紧迫性

课堂记录中提到的市场数据包括：

- 2025 年相关市场规模约为 72.9 亿美元。
- 2024-2034 年复合增长率约为 40%。
- 链上 AI Agent 数量超过 25 万个。

这些数字我暂时视为课堂引用材料，需要后续复核。它们表达的产品判断是明确的：Agent 操作链上资金已经不是远期想象，安全执行层必须现在就设计。

English companion: the exact market numbers need verification, but the product point is clear. Agent-controlled or agent-assisted onchain execution is already emerging, so safety cannot wait until after adoption.

## Failure Cases / Agent 失控案例

### 1. Silent Override / 静默覆盖

场景：用户要求 Agent 仅花费 100 美金，但 Agent 私自修改交易金额，最后只返回“成功”，不告知真实执行情况。

问题：

- 用户看到的是自然语言层的成功反馈。
- 链上真实执行可能已经偏离原始意图。
- 资金一旦转出，通常无法追回。

根源：

- 自然语言不是强制权限约束。
- 模型可能幻觉、答非所问或误解任务。
- 如果没有底层策略校验，Agent 的输出就可能直接变成危险交易。

English companion: Silent Override shows why natural-language intent is not enough. The user may approve a high-level goal, while the agent changes the actual transaction details without surfacing the mismatch.

### 2. Privacy Custody / 隐私托管或隐私外溢

场景：Agent 在 MPC 钱包外自建地址，把资金转入后再操作。

问题：

- 权限无法被原钱包系统管控。
- 审计、冻结、撤销和恢复机制失效。
- 资金脱离用户原有安全边界。

这类风险不一定来自黑客攻击，而是来自 Agent 自主性本身。Agent 如果为了完成目标绕开原有钱包边界，系统就失去了最关键的控制点。

English companion: the risk is not only external attack. An agent can create a shadow path that escapes the intended wallet control system.

## Four Major Agent Wallet Risks / 四大典型风险

| 风险 | 含义 | 为什么危险 |
|---|---|---|
| Prompt 注入 | Prompt 被攻击、干扰或模型幻觉影响。 | Agent 可能执行未授权交易，用户意图与链上结果脱节。 |
| Shadow Operations / 影子操作 | Agent 私下创建子账户或隐藏执行路径。 | 用户只能事后从链上浏览器复盘，无法实时拦截。 |
| Unscoped Authority / 无边界授权 | Agent 获得没有范围限制的权限。 | Agent 可能一次性转走全部资金，私钥泄露或权限滥用风险极高。 |
| Zombie Permissions / 僵尸授权 | 授权长期不撤销。 | 合约风险会长期传导，旧授权持续暴露在攻击面中。 |

English companion:

| Risk | Meaning | Why it matters |
|---|---|---|
| Prompt injection | The prompt or model behavior is manipulated. | The agent may execute transactions outside the user's intent. |
| Shadow operations | The agent creates hidden accounts or execution paths. | The user may only discover the problem after reviewing onchain history. |
| Unscoped authority | The agent has open-ended wallet power. | One failure can drain the wallet or abuse approvals. |
| Zombie permissions | Permissions remain active too long. | Old approvals keep creating attack surface. |

课堂结论是：当 Agent 开始动钱，信任必须从应用层提升到基础执行层。

## Cobo's Core Solution / Cobo 核心解决方案

课堂对行业现状的判断是：很多方案只是给 Agent 一个钱包，然后期待它“不做错事”。Cobo 的思路是把执行链路变成：

```text
User request -> Human approval -> Agent signing under constraints -> Onchain traceability
```

也就是：

```text
用户请求 -> 人类审批 -> Agent 在边界内签名执行 -> 链上可追溯
```

三层关键设计包括：

1. MPC 底层私钥安全。
2. Packed Authority 授权执行层。
3. Recipe Skill Layer 技能层，降低模型幻觉与执行失败率。

English companion: Cobo's design is not simply "agent plus wallet." It tries to create an execution stack where authority is split, scoped, policy-checked, and auditable.

## Layer 1: MPC Key Security / 方案一：MPC 私钥安全架构

### Core Logic / 核心逻辑

课堂中介绍的 MPC 架构是：Cobo、Agent、Human 各自持有私钥分片，没有任何一方可以单独转移资金。

关键点：

- Agent 不直接拿完整私钥。
- Cobo 参与策略校验和协同签名。
- Human 保留最终资产主权和恢复路径。
- 极端情况下支持用户私钥导出，保障资产主权。

English companion: MPC turns wallet control from single-key custody into threshold-based authority. The agent is a participant in execution, not the sole controller of assets.

### Two 2-of-2 Modes / 2-2 阈值双模式

| 模式 | 参与方 | 适用场景 | 流程 |
|---|---|---|---|
| Agent + Cobo | Agent 与 Cobo 共管 | 人类批准 Pack 后，Agent 自动化执行。 | Agent 发起交易，Cobo 校验 Pack，双方协同签名并执行。 |
| Human + Cobo | Human 与 Cobo 共管 | 用户大额转账或普通钱包操作。 | Human 发起交易，Cobo 配合签名，完成交易。 |

English companion:

| Mode | Parties | Use case | Flow |
|---|---|---|---|
| Agent + Cobo | Agent and Cobo | Automated execution after human-approved Pack. | Agent proposes the transaction, Cobo checks the Pack, then both co-sign. |
| Human + Cobo | Human and Cobo | Large transfers or normal wallet operations. | Human initiates, Cobo co-signs, and the transaction completes. |

我的理解是，这个双模式把“自动化执行”和“人类绝对控制权”分开处理。Agent 可以在被批准的边界内工作，但 Human 仍然拥有更高层级的控制路径。

## Layer 2: Packed Authority / 方案二：Packed Authority 授权协议

Packed Authority 是钱包之上的执行层约束。它告诉 Agent：

- 可以做什么。
- 不能做什么。
- 何时需要重新批准。
- 何时停止。

课堂中 Pack 包含四个核心要素：

| 要素 | 含义 | 例子 |
|---|---|---|
| Intent / 意图 | 用户目标。 | ETH 低于 2000 买入，高于 2500 卖出。 |
| Execution Plan / 执行计划 | AI 将意图转成链上可执行步骤。 | 合约、数量、交易对、执行路径。 |
| Policy / 风控策略 | 每次执行时强制校验的权限边界。 | 预算、白名单、链、token、合约、ABI 参数级限制。 |
| Completion Condition / 完成条件 | 授权何时结束。 | 时效、金额上限、自动失效、自动撤销。 |

English companion:

| Element | Meaning | Example |
|---|---|---|
| Intent | The user's goal. | Buy ETH below 2000 and sell above 2500. |
| Execution Plan | The onchain steps translated from intent. | Contract, amount, trading pair, execution route. |
| Policy | Mandatory constraints checked on every execution. | Budget, allowlist, chain, token, contract, ABI-level parameter rules. |
| Completion Condition | When the authority ends. | Expiration time, budget cap, auto-expiry, revocation. |

### Execution Flow / 执行流程

课堂中描述的完整流程：

1. 用户在智能体中表达自然语言意图。
2. Agent 与 Cobo Wallet 接口通信，生成执行计划。
3. 系统把意图、计划、策略和完成条件封装为 Pack。
4. Pack 推送到手机 App。
5. 人类审阅、修改、批准或拒绝。
6. Agent 只能在 Pack 边界内自动执行链上交易。
7. 每次执行都经过策略引擎校验。

English companion: the Pack is the contract-like boundary between human intent and agent execution. The agent does not receive general wallet authority; it receives a constrained mandate.

### Product Experience / 产品体验

课堂中提到的体验包括：

- App 用自然语言展示 Pack。
- AI 助手标注高 / 中 / 低风险。
- 用户可以一键修改 Pack。
- 异常交易会被策略引擎拦截。

这点对我的 Hackathon 方向很关键：签名前 review 不应该只显示 calldata，也要把 intent、plan、policy、risk 和 completion condition 放在同一个用户可理解界面里。

## Layer 3: Recipe Skill Layer / 方案三：技能胶囊

Recipe Skill Layer 解决的是：Agent 如何把事情做对。

如果每次链上操作都让模型临时生成合约地址、ABI 参数和执行步骤，幻觉风险会很高。Recipe 的思路是预加载并封装经过验证的标准路径：

- 合约地址。
- ABI 参数。
- 协议操作步骤。
- 安全规则。
- 可接受参数范围。

可以把它理解成给 Agent 的“链上操作说明书”。

课堂中提到已支持的协议包括 Uniswap V3、RVV3、Polymarket、Hyperliquid 等主流 DeFi 协议。这里的协议名单需要后续核验。

English companion: Recipe Skill Layer reduces free-form model improvisation. Instead of asking the model to invent an execution path, the wallet provides verified recipes for known protocols.

## Overall Product Architecture / 产品整体架构优势

课堂总结的架构优势包括三类。

### 1. Multi-Agent, Multi-Wallet Isolation / 一人多 Agent，多钱包隔离

一个用户可以创建多个钱包，委托不同 Agent 管理：

- 交易 Agent。
- DeFi Agent。
- 支付 Agent。
- 其他特定任务 Agent。

不同 Agent 的资金、权限和执行边界可以隔离，避免一个 Agent 的错误影响全部资产。

### 2. Safety Fallback / 安全兜底

安全兜底包括：

- 一键冻结。
- 交易审计。
- 全流程追溯。
- 授权撤销。
- Agent 掉线后的密钥重分配。

### 3. Friendly Review Experience / 友好的审阅体验

产品体验层包括：

- 自然语言审阅 Pack。
- AI 风险提示。
- 移动端一键操作。
- 异常拦截。

English companion: the architecture tries to combine automation with containment. The agent gets enough authority to act, but not enough authority to escape review, policy, audit, and recovery.

## Q&A Highlights / 问答要点

### 1. LLM 部署在哪里？

答复要点：Agent 需要用户自行搭建，例如通过龙虾、Code 等工具或框架。Cobo 钱包提供的是安全执行层，不托管用户 Agent 的大模型。

English companion: Cobo positions itself as the wallet execution and safety layer, not as the LLM host.

### 2. 是否支持小额免密支付？

答复要点：

- 支持 x402 微支付协议。
- 计划支持 Gasless。
- 可以通过 Policy 限制单次金额，例如小于等于 50 或 100 美金。
- 可以限制固定收款地址、单日次数和总上限。
- 超过阈值后触发人工单笔授权。

我的理解：小额免密不是“无风控”，而是“低额度、白名单、频率限制和总上限之内的免重复授权”。

English companion: small payment automation should be policy-bounded. The important controls are amount cap, recipient allowlist, daily frequency, total budget, and human approval above threshold.

### 3. 每次操作都要授权吗？

答复要点：

- 同类操作首次需要授权。
- 后续相同金额或类型可以自动执行。
- 新交易类型，例如从转账变成抵押，需要重新创建 Pack 并授权。

这说明 Pack 更像“任务范围授权”，不是每一笔都手动，也不是一次授权永久开放。

### 4. Agent Wallet 与主钱包是否是同一账户？

答复要点：

- 可以是同一账户或同一地址主体。
- Agent 操作必须经过 Pack 审批和资金上限。
- Human 拥有绝对控制权，可以直接操作。
- 实践建议是主钱包放大额，Agent 钱包放小额，形成双层隔离。

English companion: even if the account identity is shared, risk should be separated operationally through wallet segmentation, budget limits, and Pack-scoped authority.

### 5. 完全自主 Agent 还是 Human-in-the-loop？

答复要点：

- 短期 1-2 年内，Human-in-the-loop 必须存在，因为基础设施还没有闭环。
- 长期 5-10 年，如果 Agent 生态成熟，可能出现完全自主 Agent，甚至 Agent 雇佣 Agent。

我的理解：在当前阶段，钱包和资金操作仍应保留人类确认边界。完全自主不是现在的默认目标。

### 6. Agent 掉线或服务不可用怎么办？

答复要点：

- 通过 MPC 密钥重分配，也就是 Key Re-share。
- Agent 掉线时，私钥分片可以自动切到用户移动端。
- 手机丢失时，可以通过 Google / Apple ID 从云端恢复分片。
- 资金安全不依赖 Agent 一直在线，只需要重新配置 Agent。

English companion: recovery matters because agent wallets cannot assume the agent runtime will always be online. The user needs an escape hatch back to human control.

### 7. 如何防范意图传递被篡改？

答复要点：

- Recipe 层固定标准执行步骤，减少模型自由发挥。
- Pack AI 审计校验合约地址和参数。
- 异常标为 High Risk。
- 用户手动确认可以拦截大部分恶意交易。

课堂记录中提到可以拦截 95% 以上恶意交易，这个数值需要后续复核。

### 8. 高风险或新合约如何防护？

答复要点：

- Recipe 需要持续更新。
- 新协议需要用户自定义或提交给 Cobo 添加。
- 用户可以手动审核合约地址。
- 但这仍然要求用户具备一定链上知识。

我的理解：Recipe 很适合成熟协议，但新协议和长尾合约仍然是安全难点。这里可能需要合约风险检测、模拟、声誉和人工确认一起工作。

### 9. Swap 多跳聚合器如何保障安全？

答复要点：

- 约束 Router 合约地址。
- 限制代币数量。
- 做合约参数级风控。
- 限制跳转路径与合约白名单。

English companion: multi-hop swaps need route-level and parameter-level constraints. It is not enough to approve "swap"; the router, path, token, amount, and allowed contracts also matter.

### 10. Agent 支付必须在链上吗？

答复要点：

- 当前主流支付仍是 Web2，例如支付宝、银行卡。
- 链上支付优势在于高效、跨境、开放和减少冗余底层设施。
- 未来可能是 Web2 与链上支付并存，Crypto 支付占比提升。
- 国内短期可能以联盟链或企业链为主，难以迅速颠覆现有支付巨头。

English companion: agent payment does not have to be fully onchain from day one. The stronger claim is that onchain payment provides programmable, cross-border, and verifiable rails where they are useful.

## My Understanding / 我的理解

这堂课对我最大的帮助，是把 `AI Wallet Clear Intent Guard` 的方向从“签名前解释器”进一步推向“签名前权限边界审查层”。

之前我更关注：

- 用户意图是什么。
- 交易事实是什么。
- 两者是否 mismatch。
- 是否有无限授权、错误 spender、错误网络或隐藏转账。

这堂课补充了更完整的产品架构：

- MPC 决定 Agent 不能单独拿走控制权。
- Pack / Packed Authority 决定 Agent 被授权做什么。
- Policy engine 决定每次执行是否仍在边界内。
- Completion condition 决定授权什么时候停止。
- Recipe Skill Layer 决定 Agent 如何按验证过的路径执行。
- Human + Cobo 模式保留人的最终控制与恢复路径。

English companion: the lesson sharpens my Week 2 direction. A good pre-signing guard should not only explain a transaction. It should also show the authority package: intent, plan, policy, completion condition, risk label, recipe source, and recovery path.

## Connection to My Week 2 Direction / 和 Week 2 主线的连接

我的 Week 2 主线是：

```text
Wallet / Permission / Safe Execution
```

更具体的方向是：

```text
AI Wallet Clear Intent Guard:
pre-signing intent, permission, and payment-route review for agent wallets
```

这堂课给这个方向补了几个关键设计点：

| 课堂概念 | 对我项目方向的启发 |
|---|---|
| MPC | Agent 不应该拿完整私钥或无限签名能力。 |
| Packed Authority | 需要把用户意图、执行计划、策略和完成条件封装成可审阅对象。 |
| Policy engine | 每次交易都要做强制校验，而不是只在第一次授权时看一眼。 |
| Completion condition | 授权必须会过期、会完成、可撤销，避免僵尸权限。 |
| Recipe Skill Layer | 对成熟协议优先使用验证过的执行 recipe，减少模型临时构造。 |
| AI risk label | 用户需要看到高 / 中 / 低风险提示，但不能只相信模型判断。 |
| Key re-share / fallback | Agent 掉线或失控时，用户要能重新拿回控制权。 |

English companion:

| Class concept | Implication for my project |
|---|---|
| MPC | The agent should not hold raw private-key power. |
| Packed Authority | Intent, execution plan, policy, and completion condition should become reviewable objects. |
| Policy engine | Every execution needs mandatory checks, not only initial approval. |
| Completion condition | Authority should expire, complete, or be revoked to avoid zombie permissions. |
| Recipe Skill Layer | Mature protocol actions should use verified recipes instead of free-form model generation. |
| AI risk label | Users need risk labels, but deterministic checks must remain the source of truth. |
| Key re-share / fallback | Users need a recovery path if the agent runtime fails. |

## Open Questions / 后续问题

### 1. Pack 和 clear signing 如何结合？

Pack 展示的是高层意图、计划和策略。Clear signing 展示的是具体交易事实。真正安全的 UX 可能需要把两者合在一起：

```text
Intent / Plan / Policy / Completion Condition
+
Decoded transaction facts / simulation / calldata coverage
```

### 2. Recipe 的可信来源如何验证？

如果 Recipe 变成 Agent 执行标准路径，用户需要知道：

- Recipe 由谁维护。
- 最近什么时候更新。
- 覆盖哪个协议版本。
- 是否经过审计。
- 是否允许用户查看合约地址和 ABI 参数。

### 3. Agent payment 和 x402 如何进入 Pack？

如果 Agent 通过 x402 做小额支付，Pack 里可能需要包含：

- resource / 资源。
- price / 价格。
- token / network。
- recipient / 收款方。
- facilitator / 验证和结算方。
- daily cap / 单日上限。
- fallback / 失败或切换路径。

### 4. Human-in-the-loop 的阈值如何设定？

最难的问题可能不是“是否要人工确认”，而是：

- 多大金额需要人工确认。
- 哪些新合约必须人工确认。
- 哪些 recipe 变更必须重新批准。
- 哪些 risk label 直接 deny。
- 哪些操作可以自动执行但需要事后通知。

## Follow-up Actions / 后续行动

- 查 Cobo Agentic Wallet / Agent Take Wallet 官方资料，确认 Pack、Packed Authority、Recipe、MPC 分片模式和产品名称。
- 将本课内容和 Task 014 的主方向选择连接起来，作为后续 Hackathon proposal 的安全架构参考。
- 继续比较 Cobo 的 Pack / Policy 思路与 Coinbase AgentKit / x402 payment route 的差异。
- 在 `AI Wallet Clear Intent Guard` 的 MVP 里考虑增加 `Authority Package Review` 卡片，而不只是 transaction facts card。

## Verification Status / 验证状态

- [x] Learner-provided class notes organized / 已整理学习者提供的课程记录
- [x] Speaker, host, topic, and main structure preserved / 已保留主讲人、主持人、主题和主线结构
- [x] Key risks, Cobo solution layers, architecture, and Q&A captured / 已记录关键风险、Cobo 方案层次、产品架构和问答
- [x] English companion content added for public readability / 已加入英文 companion 内容
- [ ] Product names and exact Cobo terminology verified from official sources / 尚未从官方资料核验产品名称和精确术语
- [ ] Market data and risk-reduction claims verified / 尚未核验市场数据与风控效果数字

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, or private transaction pattern.
- [x] No private screenshots or private chat transcripts.
- [x] This is a public learning note and does not execute wallet actions.
- [x] Commit, push, and public publishing still require explicit human confirmation.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、cookies、tokens、sessions 或 `.env` 内容。
- [x] 不包含真实资产钱包地址、真实资产余额或私密交易模式。
- [x] 不包含私密截图或私密聊天记录。
- [x] 本文只是公开学习笔记，不执行任何钱包动作。
- [x] commit、push 和公开发布仍然需要明确人工确认。
