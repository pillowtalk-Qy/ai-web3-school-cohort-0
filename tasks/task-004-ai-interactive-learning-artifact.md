# Task 004 - AI Interactive Learning Artifact

## Task

- Program: AI x Web3 School
- Week: Week 1
- Track: AI task
- WCB task: Week 1｜AI 向任务｜完成 AI 可交互学习产物
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Artifact: `experiments/ai-interactive-learning-artifact/`

## Proof Links

After deployment:

```text
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/tree/main/experiments/ai-interactive-learning-artifact
```

Main demo file:

```text
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/experiments/ai-interactive-learning-artifact/index.html
```

Live preview:

```text
https://pillowtalk-qy.github.io/ai-web3-school-cohort-0/experiments/ai-interactive-learning-artifact/
```

## 中文说明

### 1. 它解决什么学习问题

这个作业是一个最小可交互 AI / Web3 学习工作台。

它解决的问题是：把一个 AI / Web3 概念、问题或代码片段，从静态笔记变成一个可以交互的学习回路。学习者不只是阅读解释，还可以继续看机制图、扩展资料、常见误区、实践任务，并通过选择题和自由复述检查自己是否真正理解。

当前支持的示例主题包括：

- RAG
- Prompt injection
- ERC-20 allowance / approve
- Agent workflow

### 2. 用户如何与它交互

用户打开 `experiments/ai-interactive-learning-artifact/index.html` 后：

1. 在输入框中填写概念、问题或片段。
2. 选择学习模式：
   - AI 概念
   - Web3 / 合约
   - 实践任务
3. 使用深度滑块选择解释深度。
4. 点击 `生成学习路径`。
5. 在生成结果中继续交互：
   - 点击术语卡查看解释。
   - 切换学习资料 tab。
   - 切换流程 stepper。
   - 完成即时选择题。
   - 输入自由复述并获得反馈。
   - 查看理解画像和下一题建议。

### 3. 输入示例和输出示例

输入示例：

```text
RAG 是什么？我是前端背景，想快速理解它怎么工作。
```

学习模式：

```text
AI 概念
```

输出示例包括：

- 一句话解释：RAG 是把外部资料先检索出来，再交给模型回答的做法。
- 为什么值得学：它适合企业知识库、客服问答、研究资料检索和代码库问答等依赖外部资料的场景。
- 机制图：定义问题、拆成流程、找失败场景、做小练习。
- 学习资料：资料切分、Embedding、检索器、上下文组装、答案验证。
- 常见误区：RAG 不能保证完全不会幻觉，错误资料或错误检索仍然会导致错误答案。
- 小测反馈：选择题会判断核心理解，自由复述会提示是否补充机制、验证或风险边界。

### 4. 哪部分由 AI 生成，哪部分由我人工修改 / 验证

AI 辅助的部分：

- 生成学习卡结构。
- 草拟概念解释、类比、机制图节点、扩展知识、常见误区、实践任务和测验问题。
- 设计生成过程、术语点击、学习资料 tabs、流程 stepper 和反馈文案。
- 根据选择题和自由复述生成理解画像、遗漏点和下一题建议。

人工修改或验证的部分：

- 收窄功能范围，避免做成泛泛聊天机器人。
- 检查 RAG、prompt injection、agent、ERC-20 allowance 等概念表述。
- 手动测试样例填充、生成学习路径、点击术语、切换学习资料、切换步骤、选择题、自由回答反馈和理解画像。
- 确认当前版本是本地静态模板逻辑，不需要 API key，不上传用户输入。
- 检查公开仓库中不包含私钥、助记词、token、cookie、真实钱包地址或 `.env` 文件。

### 5. 限制和下一步改进

当前限制：

- 当前版本是静态前端 demo，没有接入真实 LLM API。
- 生成内容来自本地模板和规则，开放性不如真实模型。
- 主题范围有限，主要覆盖 Week 1 的基础 AI / Web3 概念。
- 它不能替代官方文档、代码审查、合约审计或真实安全验证。

下一步改进：

- 接入真实 LLM API，但继续避免把 API key 写入前端或公开仓库。
- 支持 Solidity 函数逐行解释。
- 支持保存学习卡或导出 Markdown。
- 增加学习记录、错题回看和基于历史表现的下一题推荐。

## English Summary

This artifact is a small interactive AI / Web3 learning studio.

The learner can enter a concept, question, or snippet, select a learning mode and explanation depth, then generate a learning path with explanation, analogy, mechanism flow, learning-material tabs, common pitfalls, practice tasks, clickable term cards, process steps, quiz feedback, free-recall feedback, a learning profile, and next-question suggestions.

The current version is intentionally safe and static:

- It runs from local HTML/CSS/JavaScript.
- It does not call a real LLM API.
- It does not require API keys.
- It does not upload user input.
- It avoids private keys, seed phrases, tokens, cookies, real wallet addresses, and `.env` files.

## WCB Submission Draft

```text
Demo / GitHub proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/tree/main/experiments/ai-interactive-learning-artifact

Main demo file:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/experiments/ai-interactive-learning-artifact/index.html

Live preview:
https://pillowtalk-qy.github.io/ai-web3-school-cohort-0/experiments/ai-interactive-learning-artifact/

Supporting task note:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-004-ai-interactive-learning-artifact.md

说明：
我完成了一个最小可交互 AI / Web3 学习工作台。用户可以输入 AI / Web3 概念、问题或代码片段，选择 AI 概念、Web3 / 合约、实践任务三种学习模式，并用深度滑块控制解释深度。页面会生成一个学习回路：简明解释、类比、机制图、分层学习资料、扩展知识、常见误区、实践任务、可点击术语卡、流程 stepper、即时选择题反馈、自由复述反馈、理解画像和下一题建议。

它解决的问题：
把 Week 1 的基础概念从静态笔记变成可以反复练习的交互学习产物，帮助我用“解释 → 流程 → 误区 → 实践 → 测验 → 复述反馈”的方式理解 RAG、prompt injection、agent workflow、ERC-20 allowance 等概念。

交互方式：
打开 index.html 后，输入问题，例如“RAG 是什么？我是前端背景，想快速理解它怎么工作。”，选择学习模式和解释深度，点击“生成学习路径”。生成后可以点击术语卡、切换学习资料 tabs、切换流程 stepper、完成选择题、输入自由复述，并查看理解画像和下一题建议。

输入 / 输出示例：
输入：RAG 是什么？我是前端背景，想快速理解它怎么工作。
输出：页面会生成 RAG 的一句话解释、为什么值得学、开卷考试类比、资料切分 / Embedding / 检索器 / 上下文组装 / 答案验证等学习资料、常见误区、实践任务，以及关于“为什么要先检索资料”的即时小测和复述反馈。

AI 辅助与人工修改：
AI 辅助生成了学习卡结构、概念解释、类比、机制图节点、扩展知识、常见误区、实践任务、测验问题、交互流程和反馈文案。我人工收窄功能范围，检查 RAG、prompt injection、agent、ERC-20 allowance 等概念表述，手动测试样例填充、生成学习路径、点击术语、切换 tabs、切换步骤、选择题、自由回答反馈和理解画像，并确认当前版本不需要 API key、不上传用户输入、不包含私钥/助记词/token/cookie/真实钱包地址或 .env 文件。

限制和下一步：
当前版本是静态前端 demo，没有接入真实 LLM API，生成内容来自本地模板和规则。下一步可以接入真实 LLM API，但要把 key 放在安全后端；也可以支持 Solidity 函数逐行解释、导出 Markdown、学习记录和错题回看。
```

## Verification

- `node --check experiments/ai-interactive-learning-artifact/app.js`
- Static server smoke test on `http://localhost:4187/`
- Secret scan against `experiments/ai-interactive-learning-artifact`

## Privacy Check

- [x] No API keys, tokens, cookies, private keys, seed phrases, or `.env` content.
- [x] No real wallet address, real-asset balance, or private transaction pattern.
- [x] No private screenshots or private chat transcripts.
- [x] The current demo is static and does not upload user input.
- [x] WCB API submission still requires explicit human confirmation.
