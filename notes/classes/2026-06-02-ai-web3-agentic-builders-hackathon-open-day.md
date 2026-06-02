# AI Web3 Agentic Builders Hackathon Open Day - 2026-06-02

## Metadata / 元信息

- Date / 日期: 2026-06-02
- Time / 时间: 20:00
- Title / 标题: AI Web3 Agentic Builders Hackathon Open Day
- Source / 来源: learner-provided Open Day notes / 学习者提供的 Open Day 笔记
- Type / 类型: hackathon open day / 黑客松开放日
- Topics / 主题: rules, tracks, awards, timeline, team formation, submission, sponsor resources, Q&A / 规则、赛道、奖金、时间安排、组队报名、项目提交、赞助方资源、答疑
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-06-02-ai-web3-agentic-builders-hackathon-open-day.md`

## Important Caveat / 重要说明

这是一份基于学习者提供的 Open Day 笔记整理出的黑客松规则与行动清单，不是官方公告原文。提交截止时间、赛道要求、赞助方 API / SDK 要求、补贴规则、奖项数量、评审方式和奖金发放方式，最终仍应以黑客松官网、官方文档、赞助方文档和主办方后续公告为准。

公开笔记中不记录私人联系方式、群聊原文、真实 UserID、邮箱、订阅截图、钱包地址或任何支付凭证。

This note summarizes learner-provided Open Day notes. It is not the official rulebook. Final hackathon requirements, API details, reimbursement rules, judging process, and award distribution should be checked against official sources before submission.

## Executive Summary / 摘要

本次 Open Day 明确了黑客松的核心约束：

- 必须产出可运行 Demo，纯 PPT / 纯概念不能参赛。
- 总奖池为 `7000 USDT`，两个赛道各 `3500 USDT`。
- 开发周期为 `2026-06-01` 到 `2026-06-12`。
- 项目提交截止为 `2026-06-13 12:00`，逾期不受理。
- Demo Day 为 `2026-06-14`。
- 赞助商评审为 `2026-06-15` 到 `2026-06-16`。
- 获奖公示为 `2026-06-17`。

两个赛道分别是：

1. Cobo: Agent Economy / Agent Wallet
2. ZAI: Web3 + Long Horizon Task

对我的黑客松方向来说，Cobo 赛道的信息最关键。它要求围绕 Agent 参与真实经济活动时的安全、权限、风控和可审计边界，实现一个最小闭环，并回答：

```text
Why Agent?
Why Web3?
Why not a centralized system?
```

这和 `AI Wallet Clear Intent Guard` 的方向高度相关：项目不能只停留在“AI 帮我看交易”，而要展示一个可运行、可解释、权限明确、能被审计的 pre-signing review / wallet policy flow。

English companion:

The Open Day clarified the hackathon timeline, two sponsor tracks, judging criteria, submission requirements, and support resources. For my own project direction, the Cobo track is the most relevant because it focuses on agent wallets, economic activity, permission boundaries, risk control, and auditability.

## 1. Basic Event Information / 活动基础信息

### Activity Name / 活动名称

```text
AI Web3 Agentic Builders Hackathon
```

### Timeline / 时间线

| Date / 日期 | Milestone / 节点 |
|---|---|
| 2026-06-01 to 2026-06-12 | Development period / 开发周期 |
| 2026-06-02 | Open Day / 开放日 |
| 2026-06-13 12:00 | Project submission deadline / 项目提交截止 |
| 2026-06-14 | Demo Day |
| 2026-06-15 to 2026-06-16 | Sponsor judging / 赞助商评审 |
| 2026-06-17 | Winner announcement / 获奖公示 |
| 1 to 2 weeks after announcement | Award distribution / 奖金发放 |

关键提醒：

- `2026-06-13 12:00` 是强制截止时间，逾期不受理。
- Demo Day 可能根据项目数量安排一场或上下半场。
- 奖金发放预计在公示后 1 到 2 周。
- 直播与回放会通过 Twitter / X 相关账号沉淀，后续可回看。

### Prize Pool / 奖金

| Track / 赛道 | Prize / 奖金 |
|---|---:|
| Cobo: Agent Economy / Agent Wallet | 3500 USDT |
| ZAI: Web3 + Long Horizon Task | 3500 USDT |
| Total / 总奖池 | 7000 USDT |

具体奖项数量尚未在笔记中明确，预计在 Demo Day 前公布。

## 2. Sponsor Sharing / 赞助方分享

### 2.1 ZAI

### Product and Model Direction / 产品与模型方向

ZAI 代表介绍的核心产品是 GLM 大模型。会议记录中提到的能力包括：

- 支持长时间自主执行。
- 可完成复杂多任务工作流。
- 可从单提示词生成包含多个应用的 Linux 桌面环境。
- 会议中提到 GLM 5.1 的开源模型表现对比，但这类模型排名和性能说法需要回到官方资料或独立 benchmark 核验。

### Suggested Hackathon Directions / 建议方向

ZAI 侧建议的方向包括：

- Agent + Web3 developer tools
- AI-driven 3D world generation
- AI + creator economy
- Content production with revenue flowing directly into wallets

会议中也提到，本次参赛者可申请新模型早期访问权限。具体申请方式、额度和限制应以 ZAI 后续官方说明为准。

### 2.2 Cobo

### Track Focus / 赛道重点

Cobo 赛道聚焦：

```text
Agent Economy / Agent Wallet
```

核心问题是：当 AI Agent 参与真实经济活动时，如何保证安全、权限、风控和可审计边界。

会议中强调，项目需要实现一个最小闭环，例如：

- 一次支付。
- 一次交易。
- 一次资金调度。
- 一次权限受控的钱包操作。

并且项目需要回答三个问题：

```text
Why must this use an Agent?
Why must this use Web3?
Why can a centralized system not solve it well enough?
```

### Workshop / 专属 Workshop

会议记录中提到：

- Time / 时间: 2026-06-03 20:00
- Topic / 主题: Cobo 专属 Workshop
- Format / 形式: 技术专家手把手教学

这场 Workshop 对 `AI Wallet Clear Intent Guard` 尤其重要，应该优先参加或回看。

## 3. Participants and Team Rules / 参赛对象与组队规则

### Who Can Join / 适合参赛的人

适合参赛的人包括：

- AI / Web3 开发者。
- Solidity、Agent 开发者。
- 产品、运营、UI / UX、演讲者、研究员。
- 已参与前两周共学的学员。
- 对 Agent、钱包、支付、大模型、3D、内容创作感兴趣的人。

### Team Size / 团队人数

会议记录中的组队规则：

- 支持单人参赛。
- 建议团队规模为 3 到 5 人。
- 最多不超过 5 人。
- 超过 5 人需要单独沟通，不建议超过 10 人。
- 所有组员必须先完成个人报名。
- 队长提交项目，并填写组员、分工和用于发奖的钱包地址。

公开笔记中不记录任何真实钱包地址。

## 4. Support During Development / 开发期支持

### Development Period / 开发期

```text
2026-06-01 to 2026-06-12
```

支持安排包括：

- Workshop: 本周每日 20:00 到 21:00，下周减少场次。
- Office Hour: 每周一 / 三 / 四 19:00 到 20:00。
- 支持渠道：微信群、TG 群、赛事群、助教驻场、每晚分享会主持人。

公开笔记不记录具体私人联系方式。加入社群应以官方渠道或课程群通知为准。

## 5. Track 1: Cobo - Agent Economy / Agent Wallet

### Core Direction / 核心方向

Cobo 赛道关注：

- 资金管理。
- 支付。
- 交易。
- 结算。
- 钱包权限。
- 风控。
- 可审计边界。

### Core Requirements / 核心要求

根据 Open Day 笔记，Cobo 赛道的关键要求包括：

- 必须实现真实资金操作能力。
- 必须是可运行 MVP，不能只是概念。
- 必须有清晰权限边界。
- 必须说明安全设计。
- 必须能展示至少一个经济活动最小闭环。

这里的“真实资金操作能力”需要谨慎理解。对公开开发和演示来说，应优先使用测试环境、低风险账户、mock 数据、录屏和最小金额实验，并在正式提交前核验赞助方对主网、测试网、模拟环境和真实资金的具体要求。

### Reference Directions / 参考方向

- Onchain asset custody / 链上资产托管。
- AI automated payment / AI 自动化支付。
- Permission-controlled wallet / 权限可控钱包。
- A2A collaboration / Agent 间协作。

## 6. Track 2: ZAI - Web3 + Long Horizon Task

### Core Direction / 核心方向

ZAI 赛道关注：

- 复杂长流程自主执行。
- AI 3D 世界生成。
- 创作者经济。
- Web3 工具。

### Core Requirements / 核心要求

根据 Open Day 笔记，ZAI 赛道要求包括：

- 调用 ZAI GLM 大模型。
- 支持多工具调用。
- 支持迭代修复。
- 展示完整工作流。
- 从需求到计划、执行、交付形成闭环。

### Reference Directions / 参考方向

- Agent developer toolchain / Agent 开发工具链。
- AI 3D world generation / AI 3D 世界生成。
- Creator economy automation / 创作者经济自动化。

## 7. API Subsidy and Resources / API 补贴与资源

### ZAI API Subsidy / ZAI API 补贴

会议记录中提到：

- 需要自行购买海外版 Light Plan。
- 记录中价格为 `18 USDT / month`。
- 赛后根据项目质量和排名，提供有限数量实报实销。
- Cobo 和 ZAI 赛道均可申请。
- 以团队为单位申请。
- 需要提交订阅截图、UserID 和邮箱。
- 有 10% off 折扣码。

公开笔记中不记录任何真实订阅截图、UserID、邮箱或折扣码。申请前应核验官方补贴表单和报销规则。

## 8. Judging Rules / 评审规则

### General Score / 通用评分

总分 `50` 分，每项 `10` 分：

| Dimension / 维度 | Score / 分值 |
|---|---:|
| Innovation / 创新度 | 10 |
| Technical implementation / 技术实现 | 10 |
| User experience / 用户体验 | 10 |
| Ecosystem impact / 生态影响 | 10 |
| Demo quality / Demo 演示质量 | 10 |

### Judging Process / 评审流程

流程为：

```text
track shortlist
-> sponsor internal final review
-> 2026-06-15 to 2026-06-16 judging
-> 2026-06-17 announcement
```

## 9. Registration, Submission, and Demo / 报名、提交与展示

### Registration / 报名

会议记录中的报名规则：

- 先完成个人报名。
- 团队功能正在开发中，预计本周内更新。
- `2026-06-13 12:00` 前可修改赛道。
- 所有组员必须完成个人报名。

### Submission Requirements / 项目提交要求

项目提交建议包括：

- 可运行 Demo。
- 项目文档。
- GitHub 链接。
- 录屏视频。
- README。
- 运行说明。

项目文档应覆盖：

- Problem / 问题。
- Solution / 方案。
- Users / 用户。
- Technology / 技术。
- Completion / 完成度。
- Roadmap / 规划。

最重要的是：必须实现最小闭环 MVP。

### Demo Requirements / 展示要求

会议记录中的 Demo 要求：

- 时长：3 到 5 分钟，可能按总量调整。
- 语言：中英文均可，清晰流利优先。
- 建议提前录屏，避免现场网络或环境故障。
- 包含评委问答环节。

## 10. Official Q&A / 高频问题

### Can a team join both tracks? / 能否同时报两个赛道？

开发阶段可以尝试两个方向，但最终提交只能选择一个赛道，不能重复获奖。

### Must the project use ZAI models? / 必须用 ZAI 模型吗？

ZAI 赛道建议必须使用 ZAI GLM；Cobo 赛道可选。

### Must the project use mainnet? / 必须用主网吗？

Cobo 赛道要求具备真实资金执行能力。具体是否必须主网、是否接受测试网、模拟环境或最小金额操作，需要提交前向官方或赞助方核验。

### Does the project need to be open source? / 项目需要开源吗？

初期仅主办方与评委可见，后期可开放。

### Can the demo be recorded? / Demo 可以录屏吗？

可以，并且推荐提前录屏防止现场故障。

### How are awards distributed? / 奖金如何发放？

会议记录中提到奖金以 EVM 主网稳定币形式发放。提交真实钱包地址前应做隐私与安全检查，不应使用主钱包。

### Can one team submit multiple projects? / 一个团队能提交多个项目吗？

不允许。会议记录中的规则是：

```text
1 team = 1 project
```

## 11. Impact on My Hackathon Direction / 对我方向的影响

这次 Open Day 让我更清楚地看到，`AI Wallet Clear Intent Guard` 如果要贴近 Cobo 赛道，需要从“AI 帮用户解释交易”升级成一个更完整的最小闭环：

```text
user intent
-> agent builds or receives transaction/payment request
-> guard extracts deterministic facts
-> wallet policy boundary checks permissions and risk
-> user reviews clear explanation
-> user approves or rejects
-> audit proof is recorded
```

对这个方向来说，Open Day 给出的约束很直接：

- 必须有可运行 Demo。
- 必须有最小经济闭环。
- 必须解释为什么需要 Agent。
- 必须解释为什么需要 Web3。
- 必须解释为什么中心化系统不够。
- 必须把权限、安全和审计讲清楚。

这说明项目展示不能只讲“AI 看懂交易”，而要让评委看到：

- Agent 的参与是必要的，因为它处理多步骤意图、上下文和执行准备。
- Web3 是必要的，因为最终动作涉及资产、签名、权限、结算和链上可验证记录。
- 中心化系统不够，因为用户需要可自托管、可撤销、可审计、可由钱包策略约束的执行边界。

English companion:

For my `AI Wallet Clear Intent Guard` direction, the Open Day makes the target clearer. The project should not be only an AI explanation layer. It should become a minimal wallet policy and review flow where an agent prepares an economic action, deterministic facts are extracted, risk and permission boundaries are checked, the user gives final approval, and an audit proof is preserved.

## 12. Action Checklist / 行动清单

### Before Picking the Track / 选赛道前

- [ ] Re-read Cobo official docs and workshop materials.
- [ ] Re-read ZAI GLM docs and API requirements.
- [ ] Decide whether the project should submit to Cobo or ZAI.
- [ ] Confirm whether Cobo accepts testnet, mock-safe demos, or minimal mainnet transactions.
- [ ] Confirm whether ZAI model usage is required for non-ZAI tracks.

### For Cobo Track / Cobo 赛道

- [ ] Choose one first review surface: payment request, ERC-20 approve, or authority package.
- [ ] Define one economic action MVP.
- [ ] Write the three required answers: Why Agent, Why Web3, Why not centralized.
- [ ] Define wallet permission boundary.
- [ ] Define audit proof.
- [ ] Prepare a 3 to 5 minute demo script.
- [ ] Prepare a fallback recording.

### For Submission / 提交前

- [ ] Create README and run instructions.
- [ ] Prepare GitHub link.
- [ ] Prepare demo video.
- [ ] Prepare project document.
- [ ] Ensure all team members completed individual registration.
- [ ] Submit before `2026-06-13 12:00`.

## 13. Questions / 待确认问题

- Cobo 的“真实资金操作能力”是否接受测试网或最小金额主网演示？
- `AI Wallet Clear Intent Guard` 是否应该明确报名 Cobo，而不是保持中性 wallet review 方向？
- 第一个 MVP 应该选择 `x402 payment request review`、`ERC-20 approve mismatch`，还是 `authority package review`？
- 如果 Cobo Workshop 提供 SDK，是否应该直接围绕 SDK 做 demo，而不是自建钱包模拟层？
- Demo 的 audit proof 应该是本地 JSON、链上事件、签名消息，还是提交说明中的 proof artifact？
- ZAI GLM 是否可以作为解释层或 planning layer，同时主赛道报名 Cobo？

## English Summary

The Open Day confirmed the hackathon's practical requirements: a working demo, a minimal MVP loop, track selection, clear documentation, and a short demo presentation. The two tracks are Cobo's Agent Economy / Agent Wallet and ZAI's Web3 + Long Horizon Task.

The Cobo track is especially relevant to my current idea. It asks projects to show agent-based economic activity with permission boundaries, risk control, and auditability. For `AI Wallet Clear Intent Guard`, this means the demo should focus on a concrete review flow, not abstract wallet-safety language.

The next step is to attend or review the Cobo Workshop, confirm the exact SDK and environment requirements, and turn the project direction into one narrow MVP that can be demonstrated in 3 to 5 minutes.

## Verification Status / 核验状态

- [x] Notes are based on learner-provided Open Day notes.
- [ ] Official hackathon website not checked in this note.
- [ ] Sponsor docs and SDK docs not checked in this note.
- [ ] ZAI API subsidy details not independently verified.
- [ ] Cobo mainnet / testnet / mock-safe demo requirements not independently verified.

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, sessions, or `.env` content.
- [x] No real wallet address, private transaction payload, private wallet screenshot, UserID, email, subscription screenshot, or payment proof.
- [x] No private group chat transcript or private contact information.
- [x] Organizer contact details are not repeated in the public note.
- [x] Sponsor claims, model-performance claims, API subsidies, timelines, and reimbursement rules are treated as meeting notes requiring official verification before action.
