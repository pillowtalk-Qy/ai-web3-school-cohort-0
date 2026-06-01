# AI x Web3 School Co-learning - Hermes, Hackathon Strategy, Local Models, and AI-era Education - 2026-06-01

## Metadata / 元信息

- Date / 日期: 2026-06-01
- Title / 标题: Hermes 搭建、黑客松策略、本地模型部署、AI 时代教育与 Prompt 能力共学讨论
- Source / 来源: learner-provided meeting notes / 学习者提供的会议整理
- Type / 类型: co-learning session / 共学答疑与项目讨论
- Topics / 主题: Hermes setup, AI project workflow, hackathon participation strategy, local model deployment, game computation, AI-era education, prompt clarity, business-first AI product building / Hermes 搭建、AI 项目工作流、黑客松参与策略、本地模型部署、游戏计算、AI 时代教育、Prompt 清晰性、业务优先的 AI 产品构建
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-06-01-co-learning-hermes-hackathon-local-models-ai-education.md`

## Important Caveat / 重要说明

这是一份基于学习者提供材料整理的共学笔记，不是逐字稿，也不是对任何软件、模型、设备规格、价格、黑客松赛道、教育路径或技术路线的正式背书。笔记中所有人物均匿名化为 speaker，不记录私人身份、私人聊天内容或无关讨论。

关于几个术语与说法：

- `ptxjs`、`Cap`、`Agency Commerce`、`TE`、`Gemini 31B`、`Deepseek V4 Pro`、`Flash`、`QWEN38B` 等都来自会议整理，需要在公开引用、正式研究或技术落地前回到官方资料、文档或实测结果核验。
- 设备规格、显存 / 内存需求、模型层数、性能差异和二手价格都属于会议讨论内容，不应直接视为稳定技术结论或购买建议。
- Hermes、API / Token 消耗、赞助方赛道前景和黑客松策略相关讨论，也应视为经验分享，不是官方规则或标准答案。

This note summarizes learner-provided co-learning notes. It is not a verbatim transcript, verified technical benchmark, hardware buying advice, hackathon rule confirmation, or formal endorsement of any tool or model. Terms such as `ptxjs`, `Cap`, `Agency Commerce`, `TE`, `Gemini 31B`, `Deepseek V4 Pro`, `Flash`, and `QWEN38B` are preserved as terms to verify.

## Session Overview / 讨论概览

本次共学主要围绕六类问题展开：

- AI 项目与 Hermes 搭建分享。
- 黑客松参与策略：获奖导向与原创 idea 导向。
- 项目技术交流：小额贷款、游戏可验证计算、Hermes 工具消耗问题。
- 本地模型部署与效果讨论。
- AI 时代教育理念探讨。
- AI 使用核心能力：业务理解、Prompt 清晰性与自然语言编程趋势。

English companion:

The session focused on Hermes-based AI project setup, hackathon participation strategy, project technical feedback, local-model deployment tradeoffs, AI-era education, and the practical skills needed to use AI effectively in real product work.

## 1. Speaker A: AI 项目与 Hermes 搭建分享

### 用 AI 快速完成项目搭建

Speaker A 分享，前天接到 NCC 展示任务后，在几小时内借助 AI 完成 Hermes 搭建，并把自己的角色形容成：

```text
监工
```

也就是说，主要工作不是逐行手写，而是在 AI 出错时介入、校正和把控方向。

我的理解是，这是一种很典型的 AI-assisted building workflow：

```text
提出目标
-> 让 AI 生成与搭建
-> 人类负责检查、纠错和收口
```

它不是“完全自动化”，而是把人的角色从直接执行者转向监督者、质量控制者和边界设定者。

### 工具选择与经验反馈

Speaker A 还分享了几个实操经验：

- 做 PPT 大约用了 10 分钟。
- 之前使用开源软件 `Cap`，但后来发现其收费且有 bug。
- 在 PPT 相关生成上，感觉 Python 库 `ptxjs` 优于 Node 方案。

这些都属于实操经验，不等于稳定结论，但对我很有启发：AI 项目里常常不是“有没有工具”，而是“哪个工具在当前阶段更顺手、更少坑、更适合快速交付”。

### 指南与资源分享

Speaker A 在推特发布了 Hermes 搭建指南和 API key 指南，并表示两份材料组合起来就足以帮助他人快速落地项目。

公开笔记中只保留这一层信息：

- Hermes 已有面向初学者的实践指南。
- 可通过公开帖子或分享链接进入。
- 欢迎进一步提问和技术交流。

不记录评论区链接细节、不记录未公开资源入口。

### 分享延伸

会议中还回顾了前一天的一个主题分享：

```text
用 Hermes 创造 Hermes agent
```

这说明 Hermes 不只是安装工具，而是已经被拿来作为“AI 构建 AI”的练习场。

English companion:

Speaker A showed an AI-assisted workflow for building with Hermes: the human acts more like a supervisor than a line-by-line implementer. The interesting lesson is not just that AI can build quickly, but that the real work shifts toward correction, tool choice, and quality control.

## 2. Speaker A: 黑客松参与策略指导

### 两种不同的参与目标

针对参会者的疑问，Speaker A 给出了两种黑客松参与方向。

第一种是：

```text
以获奖为目标
```

这种情况下，不需要过度执着于原创性，而是应该在规则约束内最大化得分，并研究往届获奖作品的规律。Speaker A 甚至建议可以让 AI Agent 帮忙总结：

- 往届获奖项目的共性。
- 什么叙事更容易得分。
- 什么展示方式更容易打动评委。

第二种是：

```text
以原创 idea 为目标
```

如果自己有很强烈、很想做的创意，就不一定需要迎合黑客松规则。因为一个真正有价值的想法，意义可能超过奖项本身。

### 我的理解

这两个方向其实对应两种不同的成功标准：

- 比赛中的成功。
- 长期项目中的成功。

前者重在适配规则、展示和 scoring logic；后者重在长期问题意识、产品潜力和个人方向一致性。

### 关于赛道前景

现场提到 `Agency Commerce` 可能是一个较有前景的交叉赛道，而另一个赛道约束更少、可以做的内容更多，但最终是否有前景仍然要结合具体项目判断。

这里我会把 `Agency Commerce` 视为一个待进一步核验和理解的方向标签，而不是已经确定的正式赛道定义。

English companion:

Speaker A framed hackathon participation around two goals: optimizing for awards or optimizing for an original idea. These are different success criteria. One prioritizes rule-fit and score logic; the other prioritizes long-term product value and personal conviction.

## 3. 项目技术交流：小额贷款、游戏计算协议与 Hermes 问题

### 小额贷款项目

Speaker D 提到一个涉及小额贷款、AD 诊断和非线性耦合数据的项目。Speaker A 的反馈是：这个方向难度极高，甚至可以达到博士论文级别，并邀请项目方进一步细讲。

我的理解是，这类项目的问题不只是工程复杂，而是：

- 数据复杂。
- 风险与因果关系复杂。
- 解释责任重。
- 很难在黑客松范围内做成清楚、可信且可展示的闭环。

### 游戏加密计算项目

这部分讨论很有意思，因为它直接碰到了“AI 该放在哪一层”的问题。

项目方计划用 AI 来做游戏加密计算，但现场提出了多个问题：

- 易受提示词攻击。
- 数值可能被篡改。
- 高并发场景延迟大。
- 整体性能不足。

Speaker A 的核心质疑是：

```text
AI 是效率放大器，不必硬拿来做加密计算本身。
```

如果本地加密已经可以通过成熟方案处理，例如 ZK 或 `TE term to verify`，那么没有必要为了“用了 AI”而让 AI 承担它不擅长的那层职责。

### 落地建议

给出的建议更偏系统分层：

- 游戏过程不必全上链。
- 稀有资产、NFT 或最终结果可以上链。
- 玩法过程更多放到链下。
- 链上更适合存关键结果和状态承诺。

进一步的改进方向是：

```text
本地计算
-> 可验证证明
-> 链上状态承诺
-> AI 异常检测
```

这比“AI 直接负责加密计算”更符合各层的能力边界：

- 本地计算负责效率。
- 可验证证明负责可信。
- 链上负责承诺与记录。
- AI 负责辅助检测异常。

### Hermes 使用问题

Speaker A 还反馈 Hermes 当前存在一些实际问题：

- 工具未及时更新。
- API / Token 消耗过高。
- 大约 80% 的消耗落在没有实际使用到的初始工具与技能上。
- 后续想尝试本地模型运行。

这对我很有启发：Agent 工具链的成本问题，并不只来自模型推理本身，还来自初始化工具、默认技能和无效调用路径。

English companion:

The technical discussion highlighted a useful principle: AI should not be forced into the layer it is worst at. For game computation, local compute, verifiable proof, onchain commitment, and AI anomaly detection form a more sensible stack than asking AI to do cryptographic computation directly.

## 4. 本地模型部署与效果讨论

### 设备适配与资源需求

现场讨论了本地模型部署在不同设备上的资源差异。

Mac 统一内存架构下，讨论中提到：

- 64G 设备可能可以运行 `Gemini 31B`。
- 512G 级别设备才能部署 `Deepseek V4 Pro`、`Flash` 等全量模型。
- 高配设备二手价格甚至被炒到约 10 万元。

Windows 混合架构下，讨论中提到：

- 显卡 100G 左右可能就能运行 Deepseek 全量模型。
- 不需要 512G 统一内存。

这些说法都需要源头核验，但它们反映出一个现实问题：本地大模型部署并不只是“软件选择”，而是直接受硬件架构和预算影响。

### 模型规模与效果差异

会议里还对不同规模模型的效果做了经验性比较：

- 8B 模型推理逻辑较弱。
- 31B 模型逻辑更缜密。
- 层数越高，复杂推理能力越强。

对于垂类场景：

- 微调后的小模型，如 8B / 38B 级别模型，适合简单垂类 Agent，例如智能导购。
- 涉及复杂思维链的任务，仍然更依赖大模型。

### 成本与行动建议

现场提到：

- 4090（24G）可以跑 8B 模型。
- 成本更低。
- 但效果与高规格全量模型差距明显。

Speaker A 建议说话人 E 直接测试 8B 模型在垂类场景中的表现，并产出测试报告。

我的理解是，这是一个很好的 builder 方法：

```text
不要先争论抽象优劣
-> 先做针对场景的测试
-> 再输出报告
```

English companion:

The local-model section was less about theory and more about tradeoffs: hardware architecture, memory limits, model size, reasoning quality, and cost. The practical advice was to test smaller models in a narrow scenario first and evaluate with evidence instead of abstract preference.

## 5. AI 时代教育理念探讨

### 传统教育的痛点

现场对传统教育的批评很直接：

- 大学教育内容可能过时。
- 大量教授容易被 AI 取代的知识。
- 和真实应用场景脱节。

### 非标教育实践

会议提到一种更非标准化的教育实践：

- 一些家长带孩子离开传统教育路径。
- 在乡间或更自由的环境里做 AI、音乐和技术融合实践。
- 从小培养审美、设计感和创造能力。

这里的重点不是简单反对学校，而是重新思考：

```text
AI 时代最稀缺的能力到底是什么？
```

### 对未来教育的判断

现场给出的方向更偏实践：

- 理解业务。
- 接触真实项目。
- 学会把产品落地。
- 培养架构思维。

而不仅仅是会用某个 AI 工具。

我的理解是，这和前面讨论的黑客松、Hermes、本地模型其实是一条线：未来更重要的能力，不是“有没有接触 AI”，而是“能不能把 AI 放在正确层次上，解决真实问题”。

English companion:

The education discussion argued that AI-era learning should move closer to business understanding, real project exposure, design sense, and applied architecture thinking. The central shift is from memorizing replaceable knowledge to building judgment in real contexts.

## 6. AI 使用核心能力与技巧

### 业务优先

Speaker A 强调：

```text
AI 最终拼业务。
```

如果不懂业务，只懂 AI，很难落地产品。真正需要的是：

- 理解 C 端或 B 端需求。
- 找到真实卡点。
- 把 AI 放到最有价值的位置。

### LLM 的底层直觉

会议里用一种通俗方式解释了大模型：

```text
高概率预测模型
```

它通过关键词和向量匹配生成结果，因此问题越模糊，答案越容易偏。

### Prompt 清晰性

因为自然语言本身有模糊性，所以给 AI 的指令必须有清晰边界，例如：

- 禁止执行 `remove` 命令。
- 限制只能操作某个文件夹。
- 明确哪些步骤必须人工确认。

这部分和我现在做的 Agent / Wallet / Hackathon 方向高度一致，因为它本质上就是：

```text
把模糊意图变成清晰边界
```

### Prompt 能力不会贬值

现场还提出一个很重要的观点：

- 模型能力提升后，Prompt 能力不会下降，反而更重要。
- 熟练使用者能更精准地控制输出。
- 新手容易被表面结果迷惑。

### 自然语言即新编程语言

最后一个趋势判断是：

```text
自然语言将成为新一代编程语言
Coding Agent 像编译器
```

如果这个判断成立，那么真正需要训练的是：

- 逻辑表达能力。
- 结构化描述能力。
- 边界设定能力。

English companion:

The final section made a strong case for business-first AI usage. Prompting is not becoming less important. As models improve, the value shifts toward precise instruction, clear boundaries, and better logical expression. In that framing, natural language becomes a programming interface and coding agents behave like compilers.

## My Understanding / 我的理解

这次共学对我最有价值的地方，是把几个看上去分散的话题收束成了同一个问题：

```text
AI 应该放在哪一层？
人应该保留哪一层？
什么必须可验证？
什么必须有边界？
```

Hermes 分享、本地模型讨论、游戏计算协议、Prompt 清晰性、Hackathon 策略，这些内容看起来很不一样，但底层其实都在问：

- AI 适合做什么？
- AI 不适合做什么？
- 人类应该保留哪部分判断权？
- 系统该如何分层，才能既高效又可信？

这和我现在的 `AI Wallet Clear Intent Guard` 方向非常一致。它也不是“AI 全权处理钱包”，而是：

- AI 负责比较、解释、提示。
- Wallet policy 负责硬边界。
- Human confirmation 负责高风险闭环。
- Audit proof 负责可复查性。

English companion:

The strongest takeaway for me is that many different AI discussions collapse into the same design question: what layer should AI occupy, what layer should humans retain, what must be verifiable, and where must the boundary live? That maps directly to my `AI Wallet Clear Intent Guard` direction.

## Follow-up Actions / 后续行动

- 继续核验 Hermes、本地模型规格、`ptxjs`、`Agency Commerce`、`TE` 等术语和说法。
- 观察 Hermes 或类似 Agent 工具的默认工具消耗问题，思考如何降低无效 token 成本。
- 在黑客松方向上继续保持“小切口、强边界”的 demo 策略。
- 把“AI 适合哪一层、不适合哪一层”的判断，继续写进自己的 demo 设计和 risk review 逻辑里。
- 如果后续继续看到本地模型垂类测试案例，可以记录成对比笔记或实验报告结构。

## Verification Status / 核验状态

- [x] Source is learner-provided meeting notes.
- [x] Speaker identities are anonymized.
- [x] Hermes, hackathon, hardware, model, and education claims are recorded as meeting discussion, not verified final conclusions.
- [x] `ptxjs`, `Cap`, `Agency Commerce`, `TE`, `Gemini 31B`, `Deepseek V4 Pro`, `Flash`, and `QWEN38B` should be checked against official sources before formal use.
- [x] No private API key, local model path, hardware serial, private chat content, or private contact information is included.

中文核验状态：

- [x] 来源为学习者提供会议整理。
- [x] 发言人身份已匿名化。
- [x] Hermes、黑客松、硬件、模型和教育相关说法按会议讨论记录，不作为已核验最终结论。
- [x] `ptxjs`、`Cap`、`Agency Commerce`、`TE`、`Gemini 31B`、`Deepseek V4 Pro`、`Flash`、`QWEN38B` 等术语在正式引用前需要回到官方资料核验。
- [x] 不包含私人 API key、本地模型路径、硬件序列号、私密聊天内容或私人联系方式。

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, private transaction payload, or private transaction history.
- [x] No private chat transcript, private contact information, or unredacted speaker identity.
- [x] No private hardware serial number, private local file path, or unpublished internal resource link.
- [x] Hackathon strategy and hardware/model discussion are recorded as public learning discussion, not as private team planning detail.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、cookie、token、session 或 `.env` 内容。
- [x] 不包含真实钱包地址、真实资产余额、私密交易 payload 或私密交易历史。
- [x] 不包含私人聊天逐字稿、私人联系方式或未匿名化 speaker 身份。
- [x] 不包含私人硬件序列号、私有本地路径或未公开内部资源链接。
- [x] 黑客松策略与硬件 / 模型讨论按公开学习讨论记录，不包含私人团队规划细节。
