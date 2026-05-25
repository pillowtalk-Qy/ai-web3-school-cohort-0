# Long Term Memory for AI Agents - 2026-05-25

## Metadata / 元信息

- Date / 日期: 2026-05-25
- Title / 标题: Long Term Memory for AI Agents / AI Agent 的长期记忆
- Speaker / 主讲人: 刘小二
- Program / 项目: AI x Web3 School
- Type / 类型: class note / 课程笔记
- Topics / 主题: AI Agent, long-term memory, working memory, semantic memory, episodic memory, procedural memory, RAG, context engineering, memory engineering / AI Agent、长期记忆、工作记忆、语义记忆、情景记忆、程序记忆、RAG、上下文工程、记忆工程
- Source / 来源: learner-provided full meeting notes / 学习者提供的完整会议记录
- Status / 状态: summarized from learner notes; product timelines and project names need follow-up verification / 已基于学习者笔记整理，产品时间线与项目名称需后续核验
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-05-25-long-term-memory-for-ai-agents.md`

## Important Caveat / 重要说明

这份笔记不是逐字稿，而是基于课堂记录整理出的学习笔记。它保留了分享的主要结构、关键概念、产品案例、技术框架和问答要点。

课堂中提到的产品发布时间、用户规模、开源项目名称、商业产品名称和具体数值，需要在后续写成正式研究材料或产品判断前回到官方文档、项目仓库或可信资料源复核。

This note is not a verbatim transcript. It is a learning summary based on class notes. Product timelines, user numbers, project names, and specific metrics should be verified against primary sources before being used as formal research claims.

## One-line Summary / 一句话总结

Agent Memory 是跨越时间的意图与状态管理系统。它让 Agent 能够记住用户偏好、项目背景、任务历史、决策过程和执行轨迹，从而支撑长期任务、多人协作和可复查的持续工作流。

My one-line takeaway: long-term memory is not a nice-to-have feature for agents; it is infrastructure for continuity, identity, purpose, and learning over time.

## Core Definition / 核心定义

主讲人给出的核心定义是：

```text
Agent Memory is an intention and state management system across time.
```

也就是：Agent Memory 是一个跨时间的意图与状态管理系统。

这个定义比“把聊天记录存起来”更深。Agent 同时面向人类用户、大模型和自己的 runtime。它不仅要知道用户说过什么，还要知道：

- 用户长期偏好是什么。
- 当前项目背景是什么。
- 之前做过哪些任务。
- 哪些决策已经被确认。
- 哪些执行轨迹需要保留。
- 多人协作中不同身份、目的和权限如何保持一致。

我的理解是，Agent Memory 不是单一数据库，也不是一个 RAG 插件，而是 Agent 基础设施里负责“长期连续性”的系统层。

## Why Memory Matters / 为什么记忆重要

### 1. Product Retention / 产品留存

课堂中提到，一个面向 C 端的 AI 硬件产品，如果没有记忆能力，用户留存会明显下降。这个例子用来说明：记忆不是边缘功能，而是用户是否愿意长期使用 Agent 的核心体验。

如果 Agent 每次都像第一次见用户，用户就需要反复解释自己是谁、正在做什么、偏好什么、前一次为什么这样决策。重复搭上下文会消耗信任，也会让长期任务无法自然延续。

### 2. Human Intent Is Fuzzy / 人类意图天然模糊

人类表达需求时通常并不完整：

- 用户一开始可能说不清真正目标。
- 新想法常常在多轮对话中涌现。
- 决策会随着信息增加而变化。
- 工具调用、失败、修正和偏好会一起构成任务状态。

所以 Agent 如果只依赖单次 prompt，就很难支撑长期协作。它需要持续维护“用户意图如何演化”和“当前任务状态在哪里”。

### 3. Long-running Agents Need State / 长时段 Agent 需要状态

一个长期运行的 Agent 不只是回答问题，而是在执行连续任务：

- 记录项目约定。
- 记住已尝试的方法。
- 避免重复犯错。
- 保留重要执行证据。
- 根据历史反馈调整工作方式。

这和 AI x Web3 School 的学习仓库维护很像：每天的课程笔记、task proof、daily note、hackathon idea、提交状态和安全边界都需要被持续记住，否则下一次工作就会断线。

## Product Patterns / 产品记忆模式对比

### 1. ChatGPT: User Continuity / 用户连续性

课堂中把 ChatGPT 作为消费级聊天产品的代表。它的核心问题是跨会话连续性：如果没有记忆，用户每次都要重新解释自己的背景和偏好。

课堂记录中提到的两类记忆包括：

- Saved Memory: 用于保存长期有效事实、偏好和用户背景。
- Chat History: 用于利用历史对话，帮助当前回答保持连续。

我的理解是，ChatGPT 的记忆更偏“用户模型”：它要知道用户长期是谁、喜欢什么、常做什么，以及哪些信息对未来会话持续有用。

### 2. Claude Code: Project Continuity / 项目连续性

Claude Code 的记忆更偏 Coding Agent 场景。程序员工作中已经有大量外部结构，例如代码库、CI/CD、lint 规则、README、issue、commit history 和项目约定。

因此，Coding Agent 的记忆重点不是“记住所有聊天”，而是保持项目一致性：

- 项目规则。
- 技术决策。
- 执行约定。
- 代码风格。
- 不要反复重读和重建上下文。

课堂中提到通过类似 `CLAUDE.md` / project memory 文件和 `/init`、`/memory` 等命令管理项目记忆。这里的关键启发是：记忆应该服务具体任务场景，不同 Agent 类型需要不同记忆边界。

### 3. Open-source Computer-use Agent / 开源电脑控制 Agent

课堂中也讨论了开源电脑控制类 Agent 的记忆痛点。它们想象力很强，可以通过移动端、Telegram、Discord 等入口控制电脑或连接多 Agent，但如果记忆架构过于扁平，执行链路过长，就容易出现：

- 失败概率高。
- 任务状态丢失。
- 只增不改导致信息过载。
- 关键上下文被无关历史淹没。
- 国内网络环境进一步放大不稳定体验。

这个案例提醒我：Agent Memory 不只是“存得越多越好”。如果没有更新、压缩、冲突处理和召回权重，记忆越多，反而越容易让 Agent 迷路。

## Technical Stack / 技术栈理解

### 1. Three Core Angles / 三个核心面向

课堂把 Agent Memory 放在三个交叉领域里理解：

- Database / 数据库：存储、查询、索引、更新和删除。
- RAG / 检索增强生成：把外部信息检索出来，增强模型生成。
- Context Engineering / 上下文工程：决定哪些信息应该进入模型上下文窗口。
- Agent Learning / Agent 学习：程序性记忆让 Agent 通过经验改进自己的工作方式。

我的理解是，Memory Engineering 是比 RAG 更宽的系统设计问题。RAG 解决“如何检索并增强生成”，Memory 还要解决“什么值得存、什么时候改、冲突如何处理、旧信息如何降权、什么应该忘掉”。

### 2. Lifecycle / 记忆生命周期

Agent Memory 的生命周期不只是写入和读取，而包括：

- Create / 增：从对话、工具调用、文件、任务结果中提取记忆。
- Read / 查：在合适时机召回相关记忆。
- Update / 改：新信息出现时修正旧记忆。
- Delete / 删：删除错误、过期或敏感信息。
- Merge / 整合：把碎片信息压缩为稳定知识。
- Conflict resolution / 冲突处理：处理新旧偏好、事实和任务状态冲突。
- Weighting / 权重调整：根据可信度、时间、频率和任务相关性排序。

课堂强调召回指标很重要。只有在正确时机召回正确记忆，用户才会感知到 Agent “真的记得”。

### 3. Concept Pyramid / 概念层级

可以把相关概念理解成一个层级：

```text
Memory OS
-> Memory Engineering
-> RAG / context management / lifecycle management
-> embedding model + vector database
-> retrieve / generate / summarize / rank
```

底层动作如检索、生成、摘要和排序都很重要，但它们不是完整的 Memory OS。真正的 Memory OS 需要管理长期状态、记忆策略、冲突、权限、可见性和持续学习。

## Memory Taxonomy / 记忆分类

### 1. By Time / 按时间维度

常见分法包括：

- Working Memory / 工作记忆：当前任务或当前上下文窗口里即时使用的信息。
- Short-term Memory / 短期记忆：短时间内有用，但未必需要长期持久化的信息。
- Long-term Memory / 长期记忆：需要跨会话、跨任务、跨时间保留的信息。

核心区别不是名字，而是是否需要持久化，以及未来是否会被有效召回。

### 2. By Content / 按内容类型

课堂借鉴认知神经科学，把记忆分成三类：

- Semantic Memory / 语义记忆：事实和知识，例如“2026-05-25 参加了 Agent Memory 分享”。
- Episodic Memory / 情景记忆：某次交互、事件、时间、地点和主观体验。
- Procedural Memory / 程序记忆：Agent 学会的工作方法、流程和操作技能，也就是 how-to。

这套分类不一定是唯一标准，但它很适合作为设计脚手架。不同产品可以按自己的场景划分标签、存储结构和召回策略。

## Prompt, Context, and Memory / 提示词、上下文与记忆

课堂中区分了三个容易混淆的概念：

- Prompt Engineering / 提示词工程：面向单次输入输出，追求一次回答效果。
- Context Engineering / 上下文工程：把代码库、文档、工具结果和相关材料放进上下文窗口。
- Memory Engineering / 记忆工程：决定哪些内容值得长期保存，哪些内容应该进入未来上下文。

我的理解是，提示词工程像“这一回合怎么问”，上下文工程像“这一回合给模型看什么”，记忆工程则像“系统如何长期成长和保持连续性”。

## Short-term Memory Handling / 短期记忆处理

问答中提到，短期记忆常见处理方式包括：

- Summarize / 摘要压缩：保留关键信息，降低上下文和存储压力。
- Drop / 直接丢弃：对不重要或低价值信息不做持久化。
- Persist / 持久化：当信息会影响后续任务时，转入长期存储。
- Fast cache / 高速缓存：例如结合 embedding 和 Redis 一类内存存储，提高读取速度。

关键不是把所有短期信息都保存下来，而是判断哪些信息会在未来产生价值。只增不改、扁平化存储和无权重召回，会让 Agent 看似记得很多，实际更难找到重点。

## Open Projects and Industry State / 开源项目与行业现状

课堂中提到一些记忆相关项目和方向，包括通用 Agent Memory、Coding Agent memory 和商业 Memory 产品。

我的记录重点不是具体项目排名，而是行业状态：

- 大家都想做通用 All-in-one Memory。
- 目前还没有一个系统能覆盖所有 Agent 场景。
- Coding Agent 是最容易落地的方向之一，因为软件工程已有明确项目结构和外部状态。
- 通用记忆系统仍处于早期，分类学、工程指标和产品边界都还在探索。

这说明 Agent Memory 现在像一个正在成形的基础设施层，既有数据库问题，也有产品体验问题，还有 Agent 学习和安全边界问题。

## QA Highlights / 问答要点

### 1. Memory 是数据库吗？

答复要点：Memory 不等于数据库。数据库背景有帮助，因为它涉及存储、索引、更新和查询；但如果只用传统数据库思维理解 Memory，可能会限制 AI-native 的设计。

Memory 更像数据库、RAG、上下文管理和 Agent 学习之间的新交叉领域。

### 2. 语义记忆、情景记忆和程序记忆怎么区分？

答复要点：这三类是思考脚手架，不是唯一标准。

- 语义记忆偏事实。
- 情景记忆偏具体交互场景和时间线。
- 程序记忆偏 Agent 自己学会的工作方式。

实际工程中是否自动打标签、如何打标签、是否采用这套分类，都应由产品场景决定。

### 3. RAG 项目里短期记忆怎么存？会话多导致响应慢怎么办？

答复要点：

- 可以对短期记忆做摘要和压缩。
- 低价值信息可以直接丢弃。
- 需要持续影响任务的信息再持久化。
- 对读取速度敏感的场景可以用 embedding + 内存存储提升检索速度。
- 需要避免只增不改的扁平化记忆，否则会信息过载，反而召回不到关键内容。

## My Understanding / 我的理解

这节课让我把“Agent 记忆”从一个产品功能，重新理解成一个长期运行系统的基础设施问题。

第一，记忆不是聊天记录。聊天记录只是原材料，真正有价值的是从记录中提炼出偏好、事实、项目规则、决策、失败经验和可复查轨迹。

第二，召回比存储更重要。用户感受到 Agent “记得我”，不是因为数据库里存了很多信息，而是因为 Agent 在正确时刻拿出了正确的上下文。

第三，记忆需要更新和遗忘。旧偏好可能过期，旧事实可能被修正，临时任务状态不应该永久污染长期记忆。一个好的 Memory System 必须能增删改查，也要能压缩、合并、降权和处理冲突。

第四，这和我的学习仓库维护非常相关。当前仓库里的 `AGENTS.md`、handoff、daily note、task proof 和 class note，其实都是一种人类可读的外部长期记忆。区别是：现在主要靠人和 Codex 手动维护，未来更成熟的 Agent Memory 应该能自动识别哪些内容值得沉淀，哪些只是临时上下文。

Fifth, this topic connects to Web3 more than it first appears. If agents become economic actors, memory will affect identity, reputation, permissions, payment history, audit trails, and accountability. A memory system for agents should eventually be designed with privacy, consent, revocation, and verifiability in mind.

## My Question / 我的提问

课后我有一个自己的小问题：我不确定这个问题有没有价值。我好像知道 memory 和数据向量有关，但人的记忆并不是一个无限长的上下文。人的记忆更像是被某个节点触发，然后再对相关记忆进行深层解析和重新理解。

所以，Agent Memory 的应用是不是也不应该只追求扩大上下文长度，而应该更深入研究：

- 如何对内容进行高质量压缩。
- 如何形成可触发的记忆节点。
- 如何在合适任务里召回相关记忆。
- 如何在召回后重新解释和组合记忆。
- 如何更新、遗忘或修正旧记忆。

### Response and Expanded Understanding / 回答与扩展理解

这个问题很有价值，而且方向是对的：Agent Memory 不应该只追求“更长上下文”。更关键的是如何压缩、索引、触发、召回、更新和解释记忆。

Memory 不等于向量，但向量是常用实现方式。Embedding 会把文本转换成语义空间里的向量，方便系统根据相似度找回相关内容。例如，当用户问“我之前的 AI wallet 想法是什么”，系统可以通过向量检索找到相关的 hackathon idea、class note 或 task proof。

但完整的 Agent Memory 还包括：

- 原始记录：对话、文件、工具结果和任务历史。
- 摘要记忆：压缩后的重点。
- 结构化记忆：用户偏好、项目状态、人物、任务、决策和风险边界。
- 程序记忆：Agent 学到的工作方法和执行流程。
- 权重系统：重要性、时间、可信度、使用频率和任务相关性。
- 召回机制：什么时候应该想起哪条记忆。
- 更新与遗忘：旧信息是否过期，是否需要修正、合并或删除。

所以，向量数据库只是记忆系统的一部分，不是记忆本身。

人的记忆类比很有启发性。人并不会把一生经历全部塞进一个超长上下文，而是更像：

```text
当前问题或场景
-> 触发某个记忆节点
-> 联想到相关事件和知识
-> 根据当下目标重新解释
-> 得到新的判断或行动
-> 必要时改写自己对过去的理解
```

Agent Memory 也可以朝这个方向设计：

```text
current task / question
-> trigger relevant memory nodes
-> retrieve a small set of high-signal memories
-> reinterpret them with current context
-> decide or act
-> update long-term memory if needed
```

长上下文当然有价值，但它不是完整答案。单纯扩大上下文会带来成本高、速度慢、重点被稀释、旧信息污染、隐私信息误带入、模型忽略中间内容等问题。更长的上下文不等于更好的记忆。

更好的目标应该是：在正确时间想起正确内容。

因此，Agent Memory 的核心难点可能不是“存得最多”，而是：

- 选择性记住什么。
- 如何压缩成未来可用的形态。
- 如何让记忆节点被正确触发。
- 如何召回少量高相关内容。
- 如何处理新旧记忆冲突。
- 如何在召回后重新解释，而不是机械复读旧记录。

这也让我意识到，Memory Engineering 的重点不只是 storage，而是 compression, triggering, retrieval, reinterpretation, update, and forgetting。

## Concepts to Review / 待复习概念

- Agent Memory
- Memory OS
- Long-term Memory
- Working Memory
- Short-term Memory
- Semantic Memory
- Episodic Memory
- Procedural Memory
- RAG
- Embedding
- Vector database
- Context Engineering
- Memory Engineering
- Memory lifecycle management
- Memory recall metrics
- Conflict resolution
- Memory compression
- Redis / in-memory cache
- Agent reinforcement learning

## Questions / 问题

- Agent Memory 的最小可用版本应该包含哪些能力：保存、召回、更新、删除，还是还必须包含冲突处理？
- 如何判断一条记忆应该进入长期记忆，而不是只作为短期上下文？
- 记忆召回的质量应该如何评估？只看相似度够不够？
- Agent Memory 是否应该主要追求扩大上下文窗口，还是更关注高质量压缩、记忆节点触发和召回后的再解释？
- 用户如何查看、编辑、删除和撤回 Agent 对自己的记忆？
- 多人协作场景下，哪些记忆属于个人，哪些属于项目，哪些属于团队？
- 如果 Agent 的程序记忆来自失败经验，如何避免错误经验被固化？
- Web3 Agent 的 memory 是否应该和 identity、reputation、payment history 分层设计？
- 公开学习仓库里的 handoff、AGENTS.md 和 task proof，能否被看作一种外部可审计 memory layer？

## Follow-up Actions / 后续行动

- 复核课堂中提到的 ChatGPT、Claude Code 和相关记忆产品时间线。
- 阅读一个开源 Agent Memory 项目的架构，理解它如何做存储、召回、更新和删除。
- 为 AI x Web3 School 学习仓库总结一套“公开长期记忆”维护规则：什么进 `AGENTS.md`，什么进 handoff，什么进 daily note，什么只留在当前对话。
- 在 Hackathon 的 AI wallet / agent payment 方向中，补充 memory 与 audit trail、permission history、payment history 的关系。
- 思考一个最小 Agent Memory demo：用户偏好、项目状态、任务历史、风险边界四类记忆如何被写入和召回。

## Verification Status / 核验状态

- [x] Based on learner-provided class notes.
- [x] Speaker claims are summarized as class-note content, not independently verified facts.
- [ ] Product timelines and user-number claims have not been independently verified.
- [ ] Open-source / commercial memory project names have not been independently verified.
- [ ] Technical taxonomy should be compared with primary papers, docs, or project implementations before formal use.

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No wallet address, balance, transaction pattern, or private financial information.
- [x] No private screenshots or private chat transcripts.
- [x] Non-speaker participants are not individually identified.
- [x] Product claims and metrics are marked as needing follow-up verification.
