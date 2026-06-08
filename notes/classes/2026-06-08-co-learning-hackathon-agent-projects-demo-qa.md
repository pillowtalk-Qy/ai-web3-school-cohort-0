# AI x Web3 School Co-learning - Hackathon Agent Projects, Demo QA, and Collaboration Notes - 2026-06-08

## Metadata / 元信息

- Date / 日期: 2026-06-08
- Title / 标题: 黑客松最后一周交流、Agent 项目分享、Demo 答疑与合作对接
- Source / 来源: learner-provided co-learning notes / 学习者提供的共学笔记
- Time range in source / 原始片段时间: 00:26-55:17
- Type / 类型: co-learning session / 共学讨论
- Topics / 主题: hackathon final week, project sharing, agentic commerce, Feishu Agent, decentralized science review agent, GLM, Agent evaluation, Demo scope, Web3 x AI judging logic / 黑客松最后一周、项目分享、agentic commerce、飞书 Agent、去中心化科研评审 Agent、GLM、Agent 评估、Demo 范围、Web3 x AI 评分逻辑
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-06-08-co-learning-hackathon-agent-projects-demo-qa.md`

## Important Caveat / 重要说明

这是一份基于学习者提供记录整理的 co-learning 笔记，不是黑客松官方公告、项目招聘信息、商务合作邀约、投资建议、技术背书或逐字稿。

笔记中涉及的项目合作、商业机会、工具建议、模型能力、赛道评分标准、Demo 建议、Agent 自主性判断和后续活动安排，都应在正式行动前回到主办方公告、项目方公开资料、官方文档、mentor 说明或当事人直接确认。

公开笔记中不记录私人姓名、微信号、私聊对接方式、照片、私人行程地点、未公开项目链接、商业合作细节、后台截图、真实用户数据或任何敏感账户信息。原始记录中出现的个别工具 / 项目名可能来自口误或转写误差，例如 `internal transition`、`Codec`、`a minor`、`Coco`、`GI` 等，本笔记保留为待核验术语。

This note summarizes learner-provided co-learning notes. It is not an official announcement, job posting, business invitation, investment advice, technical endorsement, or verbatim transcript. Any project, tool, model, judging rule, partnership, or event detail should be verified against official or primary sources before action.

## Session Overview / 讨论概览

本次 co-learning 发生在黑客松最后一周，参会人数相对较少，原因可能是多数同学正在集中开发项目。

会议主要包括五类内容：

1. 开场闲聊与黑客松最后一周状态交流。
2. 一个小程序 + 飞书 Agent 的商业项目对接与项目架构介绍。
3. 去中心化科研资助评审 AI Agent 项目分享。
4. 学员技术问题集中答疑，围绕 Demo、工具接入、Agent 自主性和评分逻辑。
5. 后续合作对接与零知识证明专题分享会预告。

对我最有用的是 Demo 答疑和科研评审 Agent 分享。它们共同提醒我，黑客松项目不能只靠“接了很多工具”或“用了 Agent”来打动评委。更重要的是：

```text
clear narrative
-> smallest working Demo
-> Agent hypothesis / tool / verification loop
-> human review or final decision boundary
```

English companion:

The co-learning session happened during the final week of the hackathon. It covered project sharing, agentic commerce ideas, a decentralized science review agent, Demo Q&A, and collaboration follow-up. The most useful takeaway for my own work is that a strong Demo needs a clear narrative, a minimal working loop, and a visible agent reasoning / tool / verification cycle.

## 1. Opening and Hackathon Context / 开场与黑客松状态

### Attendance and Context / 参会状态

主持人 A 开场后提到，本场参会人数相对较少。一个可能原因是黑客松进入最后一周，大部分人正在忙于项目开发。

现场状态：

- 到场人员可能多是已经完成或推进较快的参与者。
- 主持人提议先自由闲聊。
- 鼓励大家上麦交流黑客松构思、开发过程中的问题和当前阻塞。
- 现场也出现了屏幕共享权限问题，判断可能与 Mac 设备授权有关。

公开笔记不记录具体个人姓名、调侃内容或无关闲聊细节。

### Hackathon Participation Reminder / 黑客松参与提醒

主持人鼓励尚未报名或仍在犹豫的同学参与黑客松，提醒当前仍可能来得及报名。

这对我来说是一个状态提醒：

```text
final week means build and submit,
not only discuss and imagine.
```

中文理解：

```text
最后一周的重点已经不是继续构思，
而是尽快做出可展示、可提交的版本。
```

## 2. Commercial Agent Project Discussion / 商业 Agent 项目对接

### Project Positioning / 项目定位

Speaker B 分享了一个待启动的商业项目，并寻找有相关开发经验的合作人员。

公开笔记只保留项目架构层面，不记录具体私聊对接、个人身份、照片、私人行程或商务条款。

项目大致可以理解为：

```text
WeChat mini program
-> private-domain user activity entry
-> Feishu operations console
-> AI Agent as operation assistant
-> independent backend data layer
```

中文表达：

```text
微信小程序作为用户入口
飞书作为运营操作台
AI Agent 部署在飞书内辅助运营
后端数据独立部署，避免被单一平台云服务锁死
```

### Architecture Notes / 架构要点

项目架构要点包括：

- 前端入口：使用微信小程序承接用户侧私域活动入口，降低用户使用门槛。
- 运营后台：使用飞书作为运营操作台，让运营人员可以通过和 Agent 对话完成日常工作。
- 数据存储：后端数据独立部署，不使用微信云，以保留后续扩展灵活性。
- 产品本质：将已有聊天式商业交互模式落到更垂直的业务场景中。
- 使用场景：线上 + 线下活动集成、活动升级、打卡和运营动作自动化。

### Collaboration Boundary / 合作边界

Speaker B 提到，项目优先寻找有类似实操经验的人，而不是纯零基础现学人员。

这对我有一个很现实的提醒：黑客松之外的真实商业项目更看重交付经验、业务理解和工程落地，而不只是学习热情。

English companion:

The commercial project discussion showed a practical agentic-commerce architecture: mini program as user entry, Feishu as operation console, AI Agent as workflow assistant, and independent backend data. It is useful as a reference for how agent products can be embedded into existing business tools rather than forcing users into a new standalone app.

## 3. Decentralized Science Review Agent / 去中心化科研资助评审 Agent

### Project Background / 项目背景

Speaker D 分享了一个去中心化科研资助评审 AI Agent 项目。

项目场景：

- 团队开展去中心化科学资助工作。
- 面向全球征集科研项目申请。
- 当前一轮申请项目数量较多。
- 人工评审人员少，逐一阅读、核查、评分和判断真实性的工作量非常大。

这个痛点非常清楚：

```text
many applications
limited reviewers
high verification workload
need structured review reports
```

中文理解：

```text
项目申请多
评审人力少
核验资料和评分成本高
需要标准化评审报告辅助人工判断
```

### Agent Role / Agent 定位

该 Agent 的定位不是替代最终评审，而是：

```text
AI review assistant
```

具体能力包括：

- 阅读项目申请书。
- 梳理项目优势。
- 标记潜在风险。
- 找出内容缺失项。
- 分步执行评审流程。
- 输出标准化评审报告。
- 对同品类项目做横向对比。
- 判断项目更像创新研究，还是重复造轮子。
- 尝试核验申请内容真实性，降低信息差套利风险。

这里很重要的一点是：

```text
AI produces review reports;
humans keep the final funding decision.
```

中文理解：

```text
AI 输出评审辅助报告，
最终资助决策仍由人工评审团队判断。
```

### Technical Stack and Current Bottleneck / 技术选型与当前卡点

记录中提到的技术状态：

- 基于 GLM 5.1 开发。
- 全程调用第三方 API。
- 使用 `GLM 5.1`、`Codec` 等工具或服务。
- 未自研大模型。
- 未做模型微调。
- 当前更多依赖提示词、评分规则和模型本身能力。

当前卡点：

- 学术核验模块暂未接入正式学术数据库。
- 记录中提到的 `a minor` 数据库拥有大量学术资料，但团队暂时无法获取 API 接口。
- 当前只能用模型自身知识和已有材料模拟学术评审。

数据规划：

- 先处理首批几十个申请项目。
- 后续计划将过往多轮数百个项目整理成 AI 可读取数据库。
- 用历史案例继续优化评审质量。

### Evaluation and Harness Advice / 评估体系与 Harness 建议

现场一个很有价值的建议是：该类垂直 Agent 需要重视评估体系。

建议方向：

- 学习 Anthropic 的 Agent Evals 相关论文或方法。
- 建立人工测试用例。
- 用测试集评估 Agent。
- 找出 Agent 在哪类评审环节失分。
- 通过 prompt、规则、案例库和工具链迭代优化。

这对我很有启发。Agent 项目不是“能输出一段看似合理的文字”就够了。尤其在评审、资助、金融、钱包安全这类场景里，必须有：

```text
evaluation harness
test cases
failure analysis
human final review
```

English companion:

The decentralized science review agent is a strong example of an AI-assisted expert workflow. The agent reads applications and generates structured reports, but final funding decisions remain human. The most useful technical advice was to build an evaluation harness with test cases, failure analysis, and iterative improvement.

## 4. Hackathon Technical Q&A / 黑客松技术答疑

### Tool Integration for Onchain Investigation / 链上取证工具接入

问题 1 讨论是否建议接入 `internal transition` 工具，场景与链上取证、攻击分析或行为分析相关。

主持人的回答可以概括为：

- 如果 Demo 核心方向是攻击取证或行为分析，接入此类工具可能有意义。
- 但单纯添加工具不会自动加分。
- 关键在于工具是否真正服务项目逻辑。
- 需要展示工具如何帮助分析合约内部情况或链上行为。

我的理解是：

```text
tool count is not product value
```

工具数量不是产品价值。工具必须进入清楚的判断链路。

### Agent Autonomy Scoring / Agent 自主性评分

问题 2 讨论 Agent 自主性评分重点。

主持人强调，评分并不是看工具调用次数，而是看 Agent 是否能形成完整闭环：

```text
input
-> hypothesis
-> tool selection
-> verification
-> adjust direction if evidence is insufficient
-> conclusion
```

中文理解：

```text
输入
-> 自主提出假设
-> 选择合适工具验证
-> 证据不足时调整方向
-> 二次验证
-> 输出结论
```

这对我非常有用，因为 `AI Wallet Clear Intent Guard` 也需要展示 Agent 的判断过程，而不是只展示最终一句“安全 / 不安全”。

### Web3 Layer Depth / Web3 Layer 强度

问题 3 涉及 Web3 底层架构、协议和深层执行功能。

主持人表示自己专业度不足，暂时无法作答，该问题延后处理。

这也是一个健康的公开笔记边界：不知道的问题不强行答，保持待核验状态。

### Demo Scope / Demo 范围取舍

问题 4 非常关键：一周工期内，如果只能扎实完成一个模块，应该如何取舍？

mentor 更看重两点：

1. 项目叙事完整、逻辑自洽、方案具备落地可行性，形成业务闭环。
2. 完成最小可运行 Demo，证明构想可以落地。

加分项：

- 实现一次链上 + 线上完整执行流程。
- 链路清楚。
- 不是只停留在静态展示。

这对我当前阶段非常直接：

```text
one solid module
> many unfinished surfaces
```

中文理解：

```text
扎实做出一个模块
大于堆很多没跑通的功能点
```

### Unclear Product/Ethics Question / 模糊问题暂缓

问题 5 涉及项目伦理、产品定位和宠物自助购物相关设想，但因为问题背景不足、提问人不在现场、缺少链接和上下文，暂时无法有效解答。

这也提醒我，好的提问需要带上：

- 项目背景。
- 目标用户。
- Demo 想证明什么。
- 已有材料或链接。
- 当前卡点。

## 5. Follow-up Collaboration and Closing / 后续对接与会议收尾

### Collaboration Follow-up / 合作对接

会议后段出现了一些项目合作和外包经验交流。

公开笔记只保留抽象层：

- 有参会者对 agentic commerce、酒店 CRM 或商业项目合作感兴趣。
- 有人具备 Python 脚本、CRM / ERP 外包开发经验。
- 后续可能通过私下渠道继续沟通。

公开笔记不记录微信号、私聊路径、个人身份或商务条款。

### Next Sharing Session / 后续分享会

主持人提醒，会议结束后会开启新的分享会，主题为：

```text
zero-knowledge proof theory and applications
```

中文：

```text
零知识证明理论及各类落地应用
```

本场 co-learning 随后结束。

## 6. Action Items / 行动项

- [ ] 将 Demo 范围继续压缩到一个扎实模块。
- [ ] 为 `AI Wallet Clear Intent Guard` 明确 Agent 自主性展示链路：输入、假设、工具、验证、调整、结论。
- [ ] 在 Demo 里避免“工具堆叠”，只保留真正服务判断链路的工具。
- [ ] 学习 Agent evaluation / harness 方法，把评测思路用于 review card 和风险判断。
- [ ] 继续保持人工最终确认边界，不让 AI 替代最终授权或资助 / 风险决策。

## My Understanding / 我的理解

这次 co-learning 对我最有价值的是两个点。

第一，科研资助评审 Agent 让我看到一个很清楚的 AI Agent 落地模式：

```text
domain-specific workflow
-> structured report
-> evidence checking
-> human final decision
```

这比“AI 全自动做决定”更可信。无论是科研资助、商业运营，还是钱包风险审查，Agent 最适合的位置都不是最终裁判，而是：

- 整理材料。
- 发现缺口。
- 对比同类案例。
- 生成结构化报告。
- 提醒风险。
- 把复杂信息压缩给人判断。

第二，黑客松答疑非常直接地提醒我：评委不看“我接了多少工具”，而是看 Demo 是否讲得清楚、是否跑得通、Agent 是否有自主判断和验证闭环。

这对 `AI Wallet Clear Intent Guard` 的影响是：

```text
User intent
-> Agent forms risk hypothesis
-> Tool / fact source checks transaction or payment facts
-> Guard compares policy and intent
-> If evidence is weak, mark as needs review
-> Human confirms or rejects
-> Proof is recorded
```

我后续应该把这个链条做成 Demo，而不是只做一个静态风险说明页面。

English companion:

The strongest takeaway is that useful agents often assist expert workflows instead of replacing final human decisions. The decentralized science review agent shows a pattern: domain workflow, structured report, evidence checking, evaluation harness, and human final decision. For `AI Wallet Clear Intent Guard`, the Demo should show a similar loop: user intent, agent hypothesis, tool-based fact checking, policy comparison, uncertainty handling, human confirmation, and proof.

## Concepts to Review / 待复习概念

- agent evaluation harness
- Anthropic Agent Evals
- GLM 5.1
- academic database API
- decentralized science funding
- structured review report
- agentic commerce
- Feishu Agent
- WeChat mini program as user entry
- tool selection vs tool count
- Agent autonomy scoring
- onchain investigation tools
- chain + online execution flow

## Questions / 问题

- `AI Wallet Clear Intent Guard` 的 Agent 自主性应该如何在 Demo 中展示？
- 是否需要让 Agent 显示自己的 risk hypothesis，而不是只显示最终判断？
- review card 是否应该显示证据强度，例如 `verified facts`、`uncertain`、`needs human review`？
- 哪个工具或 fact source 最适合服务第一版 Demo，而不是变成工具堆叠？
- 如果一周内只能做一个模块，应该优先做 review card、Demo script，还是完整链上 + 线上执行路径？
- Agent evaluation harness 能否用于测试 wallet review 判断是否稳定？

## English Summary

This co-learning session happened during the final week of the hackathon. Attendance was lower, likely because many participants were busy building. The session included open discussion, a commercial mini-program plus Feishu Agent project, a decentralized science funding review agent, hackathon technical Q&A, and follow-up collaboration.

The decentralized science review agent was the most useful product example. It assists human reviewers by reading applications, identifying strengths and risks, comparing similar proposals, checking evidence, and producing structured reports. It does not make final funding decisions. The evaluation-harness advice was especially important: serious agent products need test cases, failure analysis, and iteration.

For my own project, the Demo Q&A clarified that tool count does not equal score. A strong hackathon Demo needs a clear narrative, a minimal working module, and an agent loop that shows hypothesis, tool selection, verification, adjustment, and conclusion.

## Verification Status / 核验状态

- [x] Notes are based on learner-provided co-learning notes.
- [x] Speaker identities are anonymized.
- [x] Commercial project details are summarized at architecture level only, not treated as official recruitment or business offer.
- [x] Tool names, model names, database names, track names, judging criteria, and event details are recorded as meeting discussion, not verified final facts.
- [x] Private contact channels, private project links, photos, personal travel details, backend screenshots, and business terms are intentionally omitted.

中文核验状态：

- [x] 来源为学习者提供共学记录。
- [x] 发言人身份已匿名化。
- [x] 商业项目只保留架构层总结，不作为正式招聘或商务邀约。
- [x] 工具名、模型名、数据库名、赛道名、评分标准和活动信息均按会议讨论记录，不作为已核验最终事实。
- [x] 私人联系方式、私密项目链接、照片、个人行程细节、后台截图和商务条款均已刻意省略。

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, sessions, or `.env` content.
- [x] No private group chat transcript, private contact information, WeChat ID, personal travel detail, or unredacted speaker identity.
- [x] No private project link, backend screenshot, unpublished business material, user data, account data, or payment proof.
- [x] Collaboration details are kept at public, abstract level without exposing private negotiation paths.
- [x] Hackathon judging and tool suggestions are treated as discussion notes requiring official confirmation.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、token、cookie、session 或 `.env` 内容。
- [x] 不包含群聊原文、私人联系方式、微信号、个人行程细节或未匿名化 speaker 身份。
- [x] 不包含私密项目链接、后台截图、未公开商务材料、用户数据、账户数据或付款证明。
- [x] 合作对接只保留公开抽象层，不暴露私人协商路径。
- [x] 黑客松评分和工具建议均作为会议讨论记录处理，正式行动前需要官方确认。
