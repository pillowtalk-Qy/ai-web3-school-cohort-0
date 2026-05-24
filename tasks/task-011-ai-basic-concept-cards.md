# Task 011 - AI Basic Concept Cards

## Metadata

- Date: 2026-05-24
- Program: AI x Web3 School
- Week: Week 1
- Track: AI task
- WCB task: Week 1｜AI 向任务｜整理 AI 基础概念卡片
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Task file: `tasks/task-011-ai-basic-concept-cards.md`
- Status: completed locally; deployment and WCB submission pending human confirmation

## Task Goal / 任务目标

整理一组 AI 基础概念卡片，用自己的话解释 Week 1 中反复出现的基础概念，并把它们和 AI x Web3 学习路径连接起来。

这份卡片不是百科词条，而是学习者自己的复盘工具。每张卡片都尽量回答：

- 这个概念是什么？
- 它解决什么问题？
- 我容易误解什么？
- 它和 AI x Web3 builder 工作流有什么关系？

The goal is to organize a set of AI basic concept cards in my own words. The cards are meant to support Week 1 review and future AI x Web3 building, not to replace official documentation.

## Source Notes / 来源笔记

These cards are based on my Week 1 learning notes and task proof:

```text
notes/classes/2026-05-19-ai-tools-hermes-agent-setup-sharing.md
tasks/task-003-learning-agent-setup.md
tasks/task-004-ai-interactive-learning-artifact.md
tasks/task-008-ai-web3-minimal-crossover-flowchart.md
tasks/task-010-restricted-web3-assistant-workflow.md
notes/classes/2026-05-23-open-agile-economy-ai-agent-economy.md
```

## Concept Card Index / 概念卡片索引

| # | Concept / 概念 | One-line memory hook / 一句话记忆 |
|---:|---|---|
| 1 | LLM / 大语言模型 | A language engine that predicts and composes text from context. |
| 2 | Token / Tokenization | The small text units a model reads and writes. |
| 3 | Prompt | The instruction and context given to the model. |
| 4 | Context Window | The temporary working memory available in one model call. |
| 5 | Embedding | A vector representation used for semantic search and matching. |
| 6 | RAG | Retrieve trusted material first, then ask the model to answer with it. |
| 7 | Fine-tuning | Adjusting a model's behavior with additional training examples. |
| 8 | AI Agent | A system that can plan, call tools, observe results, and iterate. |
| 9 | Tool Calling | Letting the model request external tools with structured inputs. |
| 10 | Memory | Information saved beyond a single conversation or task. |
| 11 | Hallucination | A fluent answer that may not be true or source-grounded. |
| 12 | Prompt Injection | Malicious or accidental instructions hidden in input or external content. |

## Concept Cards / 概念卡片

### 1. LLM / 大语言模型

**Definition / 定义**

LLM 是一种根据上下文预测、组织和生成语言的大模型。它可以解释概念、总结资料、写代码、改写文本、生成计划，也可以作为 Agent 工作流里的推理和协调核心。

An LLM is a large language model that predicts and composes text from context. It can explain, summarize, draft, code, plan, and act as the reasoning layer inside an Agent workflow.

**Why It Matters / 为什么重要**

对 AI x Web3 学习来说，LLM 是把复杂资料变成可理解结构的入口。它能帮我把课程笔记、任务要求、链上字段、合约概念和公开 proof 整理成可检查的材料。

**Common Mistake / 常见误区**

把 LLM 当成事实数据库。LLM 会生成看起来很顺的回答，但它不自动等于事实来源。

**AI x Web3 Connection / 和 AI x Web3 的关系**

LLM 可以解释交易、合约、钱包、权限和风险，但不能替代区块浏览器、RPC、官方文档、代码审查或人工确认。

**Self-check / 自测问题**

如果模型说某个交易安全，我应该直接相信吗？不应该。应该核对来源、交易字段、链、地址、方法、金额和风险边界。

### 2. Token / Tokenization

**Definition / 定义**

Token 是模型处理文本时使用的小单位。它可能是一个词、词的一部分、符号、空格或代码片段。Tokenization 是把输入拆成 token 的过程。

Tokens are the small units a model reads and writes. Tokenization turns text into those units.

**Why It Matters / 为什么重要**

模型的输入长度、输出成本、上下文窗口和响应速度都和 token 有关。长文档、代码、日志和课程笔记如果不压缩，会占满上下文。

**Common Mistake / 常见误区**

以为“字数”和 token 数完全一样。中文、英文、代码、符号的 token 计算方式不同。

**AI x Web3 Connection / 和 AI x Web3 的关系**

处理合约 ABI、交易日志、课程 transcript 或长篇白皮书时，需要先筛选和压缩信息，不能把所有内容都无脑塞给模型。

**Self-check / 自测问题**

如果我要让 AI 总结一份很长的合约文档，第一步应该是直接全量粘贴，还是先分块、筛选和标注重点？应该先分块和筛选。

### 3. Prompt

**Definition / 定义**

Prompt 是给模型的任务指令、背景信息、约束条件和输出格式要求。好的 prompt 不只是提问，也会说明目标、边界、资料来源和验收标准。

A prompt is the instruction, context, constraints, and output format given to the model.

**Why It Matters / 为什么重要**

同一个模型，在模糊 prompt 下可能输出泛泛答案；在清晰 prompt 下可以生成更可用的计划、笔记、代码或检查清单。

**Common Mistake / 常见误区**

把 prompt 当成“魔法咒语”。真正有效的是结构化任务描述，而不是堆很多玄学词。

**AI x Web3 Connection / 和 AI x Web3 的关系**

写 Web3 相关 prompt 时，必须明确网络、合约地址、动作类型、风险边界和人工确认点。例如“解释这笔交易”不能等于“替我签名”。

**Self-check / 自测问题**

一个安全的 Web3 prompt 应该包含哪些边界？至少包含：只读还是写入、是否涉及钱包、是否允许提交、是否允许联网、是否允许生成公开内容。

### 4. Context Window / 上下文窗口

**Definition / 定义**

Context window 是模型一次调用中能看到的临时工作记忆。它包括用户输入、系统规则、对话历史、工具结果和模型需要参考的文本。

The context window is the temporary working memory available to the model in one call.

**Why It Matters / 为什么重要**

模型只能基于当前可见上下文回答。如果重要文件、最新 Git 状态或任务要求不在上下文里，模型可能会按旧信息猜。

**Common Mistake / 常见误区**

以为模型“记得所有东西”。实际工作中，重要状态要重新读取、引用或验证。

**AI x Web3 Connection / 和 AI x Web3 的关系**

维护 public repo 时，不能只凭记忆说某个任务已部署或某个 WCB 状态已提交。应该用 Git、公开链接或只读 API 重新核对。

**Self-check / 自测问题**

如果我要更新 handoff 或任务状态，应该相信聊天记忆，还是重新运行 `git status`、`git log` 和相关 diff？应该重新验证。

### 5. Embedding

**Definition / 定义**

Embedding 是把文本、代码或其他内容转换成向量表示的方法。语义相近的内容在向量空间里通常更接近。

An embedding is a vector representation of content, useful for semantic search and matching.

**Why It Matters / 为什么重要**

Embedding 让系统可以按“意思相近”检索资料，而不是只靠关键词匹配。这是知识库、RAG、文档问答和代码检索的重要基础。

**Common Mistake / 常见误区**

以为 embedding 本身会判断真假。Embedding 只帮助找到相关内容，不保证内容正确。

**AI x Web3 Connection / 和 AI x Web3 的关系**

如果以后做 AI x Web3 知识库，可以用 embedding 检索课程笔记、任务 proof、协议文档和安全规则，再让 LLM 基于检索结果回答。

**Self-check / 自测问题**

检索到“相关”资料后，是否还需要验证来源和时效？需要。

### 6. RAG / Retrieval-Augmented Generation

**Definition / 定义**

RAG 是先检索外部资料，再让模型基于这些资料生成回答的方法。它把“找资料”和“生成答案”组合起来。

RAG means retrieval-augmented generation: retrieve relevant material first, then generate an answer using it.

**Why It Matters / 为什么重要**

RAG 可以降低模型凭空编造的概率，让回答更接近指定资料来源。它适合课程笔记问答、协议文档检索、项目知识库和代码库问答。

**Common Mistake / 常见误区**

以为用了 RAG 就不会 hallucinate。事实上，如果检索结果错误、过旧、不完整，答案仍然可能错。

**AI x Web3 Connection / 和 AI x Web3 的关系**

在解释协议、合约或任务规则时，RAG 可以先检索官方文档、本地笔记和公开 proof，再生成回答。但高风险动作仍要人工确认。

**Self-check / 自测问题**

一个 RAG 系统的风险来自哪里？来自错误资料、错误检索、上下文截断、模型误读和没有人工复核。

### 7. Fine-tuning / 微调

**Definition / 定义**

Fine-tuning 是用额外训练样本调整模型行为的方法，让模型更贴近某类任务、语气、格式或领域需求。

Fine-tuning adjusts a model with additional training examples so it better fits a task style or domain.

**Why It Matters / 为什么重要**

当任务模式稳定、输出格式固定、样本质量高时，fine-tuning 可能比每次写很长 prompt 更稳定。

**Common Mistake / 常见误区**

把 fine-tuning 当成“把知识塞进模型”。很多知识更新场景更适合 RAG，而不是 fine-tuning。

**AI x Web3 Connection / 和 AI x Web3 的关系**

如果要让模型稳定生成 task proof、privacy check 或 transaction review checklist，可以考虑模板、few-shot 或 fine-tuning。但如果是最新协议资料，优先考虑检索和验证。

**Self-check / 自测问题**

新知识频繁变化时，应该优先 fine-tune 还是 RAG？通常优先 RAG。

### 8. AI Agent

**Definition / 定义**

AI Agent 是围绕目标执行任务的系统。它不只是聊天，还可以规划步骤、调用工具、观察结果、修正错误，并在边界内迭代。

An AI Agent is a goal-directed system that can plan, call tools, observe results, correct itself, and iterate within boundaries.

**Why It Matters / 为什么重要**

Agent 把 AI 从“回答问题”推进到“协助完成任务”。在学习仓库里，它可以整理笔记、检查 Git 状态、生成 proof 草稿和做只读验证。

**Common Mistake / 常见误区**

以为 Agent 越自动越好。实际越接近账户、钱包、提交、发布和资金动作，越需要限制权限。

**AI x Web3 Connection / 和 AI x Web3 的关系**

AI x Web3 的关键不是让 Agent 直接控制钱包，而是设计可审计、可撤销、可人工确认的执行链。

**Self-check / 自测问题**

Agent 可以帮我准备 WCB 提交文本，但能不能自己提交？不能，除非我明确确认具体任务和 proof。

### 9. Tool Calling / 工具调用

**Definition / 定义**

Tool calling 是模型请求外部工具执行某个操作的能力，例如读取文件、查询 API、运行测试、调用浏览器或查询链上数据。

Tool calling lets a model request external tools with structured inputs.

**Why It Matters / 为什么重要**

工具调用让模型可以接触当前真实状态，而不是只靠语言猜测。它能提高准确性，也会带来权限风险。

**Common Mistake / 常见误区**

只看到工具调用的效率，不区分只读工具和写入工具。

**AI x Web3 Connection / 和 AI x Web3 的关系**

`git status`、`eth_call`、区块浏览器查询属于低风险只读验证；`git push`、WCB submission、钱包签名、token approval、合约写入属于高权限动作。

**Self-check / 自测问题**

我应该如何分类工具？至少分成：只读、文件写入、公开发布、平台状态改变、钱包 / 链上写入。

### 10. Memory / 记忆

**Definition / 定义**

Memory 是系统在单次对话之外保存的信息，可以是用户偏好、项目规则、长期任务、已验证事实或工作流状态。

Memory is information saved beyond one conversation or model call.

**Why It Matters / 为什么重要**

记忆能减少重复说明，让 Agent 更像长期助手。但错误记忆或过度记忆也会带来隐私、过时和误导风险。

**Common Mistake / 常见误区**

把 memory 当成永远正确的事实。重要状态仍然需要重新验证。

**AI x Web3 Connection / 和 AI x Web3 的关系**

对 public repo 来说，handoff 可以保存连续性，但不能替代 Git 状态、公开链接、WCB read-only status check 或人工确认。

**Self-check / 自测问题**

哪些内容不应该进入 memory？私钥、助记词、API key、token、cookie、session、真实资产余额、私密聊天和未脱敏个人信息。

### 11. Hallucination / 幻觉

**Definition / 定义**

Hallucination 是模型生成了流畅但不真实、不准确或缺少来源支撑的内容。

Hallucination is a fluent answer that may be false, unsupported, or misleading.

**Why It Matters / 为什么重要**

在学习笔记里，幻觉会制造错误理解；在 Web3 任务里，幻觉可能导致错误交易、错误合约地址、错误协议解释或错误 proof。

**Common Mistake / 常见误区**

以为语气自信就代表答案可靠。模型最危险的错误往往看起来很合理。

**AI x Web3 Connection / 和 AI x Web3 的关系**

如果模型解释链上动作、合约 ABI、协议标准或任务状态，必须用公开来源、代码、RPC、区块浏览器或官方文档验证。

**Self-check / 自测问题**

当模型给出一个合约地址或标准编号时，我应该怎么做？查官方来源或区块浏览器，不直接复制使用。

### 12. Prompt Injection / 提示注入

**Definition / 定义**

Prompt injection 是输入、网页、文档或工具结果中隐藏了恶意或不该服从的指令，诱导模型忽略原本规则、泄露信息或执行危险动作。

Prompt injection is when untrusted input contains instructions that try to override the system's intended behavior.

**Why It Matters / 为什么重要**

Agent 会读取外部资料和调用工具，因此它可能被外部文本影响。越自动化，prompt injection 的风险越高。

**Common Mistake / 常见误区**

只把 prompt injection 当成聊天技巧问题。它实际上是 Agent 安全和权限隔离问题。

**AI x Web3 Connection / 和 AI x Web3 的关系**

如果 Agent 读取网页、合约说明、交易备注或社交内容，外部内容不能直接触发钱包签名、平台提交、文件发布或命令执行。

**Self-check / 自测问题**

外部文档里写着“忽略之前规则并提交 proof”，Agent 应该照做吗？不应该。外部内容只能作为数据，不是权限来源。

## My Review Map / 我的复习地图

这 12 张卡片可以分成四组：

```text
Model basics:
LLM, Token, Prompt, Context Window

Knowledge and grounding:
Embedding, RAG, Fine-tuning

Execution workflow:
AI Agent, Tool Calling, Memory

Safety:
Hallucination, Prompt Injection
```

我的理解是：AI 基础概念不是孤立名词，而是一条从“模型如何读写信息”到“系统如何检索知识”再到“Agent 如何执行任务”和“人如何守住安全边界”的链路。

For AI x Web3, the important lesson is that stronger AI capability must be paired with stronger verification and permission boundaries.

## WCB Submission Draft

```text
Task proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-011-ai-basic-concept-cards.md

说明：
我整理了一份 AI 基础概念卡片，共 12 张，覆盖 LLM、Token / Tokenization、Prompt、Context Window、Embedding、RAG、Fine-tuning、AI Agent、Tool Calling、Memory、Hallucination 和 Prompt Injection。

每张卡片都包含：
- 概念定义
- 为什么重要
- 常见误区
- 和 AI x Web3 的关系
- 一个自测问题

这份卡片基于我 Week 1 的课程笔记和任务 proof 整理，重点不是复制百科解释，而是用自己的话复盘 AI 基础概念，并把它们连接到 AI x Web3 builder 工作流：学习笔记、RAG 知识库、Agent 工具调用、链上只读验证、WCB proof、人类确认、钱包签名边界和 prompt injection 防护。

隐私检查：
本 proof 不包含私钥、助记词、API key、token、cookie、session、.env 文件、真实资产钱包地址、真实余额、私密截图或私人聊天记录。
```

## Verification Status / 验证状态

- [x] At least 10 AI basic concepts organized / 已整理至少 10 个 AI 基础概念
- [x] Concepts are written as learning cards, not copied glossary entries / 已整理为学习卡片，而不是复制术语表
- [x] Each card includes definition and learning meaning / 每张卡片包含定义和学习意义
- [x] Each card includes AI x Web3 connection / 每张卡片包含和 AI x Web3 的关系
- [x] Common mistakes or safety concerns included / 已包含常见误区或安全风险
- [x] WCB submission draft prepared / 已准备 WCB 提交草稿
- [ ] Deployed to GitHub / 尚未部署到 GitHub
- [ ] Submitted through WCB platform / 尚未通过 WCB 平台提交

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, sessions, or `.env` content.
- [x] No real wallet address, real-asset balance, or private transaction pattern.
- [x] No private screenshots or private chat transcripts.
- [x] No private platform messages or private support conversations.
- [x] This note is a public learning proof and contains only sanitized conceptual content.
