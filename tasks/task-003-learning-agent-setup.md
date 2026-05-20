# Task 003 - Learning Agent Setup

## Metadata

- Date: 2026-05-20
- Task: Week 1 AI 向任务 - 完成 Learning Agent Setup
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Task file: `tasks/task-003-learning-agent-setup.md`
- Related agent guide: `AGENTS.md`
- Related daily notes:
  - `daily/2026-05-18.md`
  - `daily/2026-05-19.md`
- Related class note: `notes/classes/2026-05-19-ai-tools-hermes-agent-setup-sharing.md`
- Status: completed locally, pending commit and WCB submission

## 任务目标

配置一个可以辅助 AI x Web3 School 学习的 coding / learning agent 工作流。这个工作流不替我学习，也不绕过人工确认，而是帮助我制定计划、解释概念、维护学习仓库、整理课程笔记、生成任务 proof 草稿、检查公开发布边界，并在我确认后辅助完成低风险文件更新。

我选择以 Codex 作为当前主 learning agent，并把 Hermes Agent 作为长期个人助手方向进行学习和评估。Codex 负责当前 GitHub 学习仓库的结构维护、笔记整理、任务 proof 准备和 WCB 只读状态检查；Hermes 相关内容目前主要作为课程学习笔记和后续工作流设计方向。

The goal is to configure a coding / learning agent workflow for AI x Web3 School. The agent helps with planning, concept explanation, repository maintenance, note organization, task-proof drafting, public-safety checks, and low-risk file updates after human confirmation.

For this stage, Codex is my main learning agent. Hermes Agent is being studied as a possible long-running personal assistant workflow.

## Agent / AI 工具选择

### 当前主工具：Codex

用途：

- 读取课程 handoff 和本地仓库状态。
- 维护 AI x Web3 School public learning repo。
- 起草和整理 daily notes、class notes、meeting notes 和 task proof。
- 用 Git 命令核对 commit、diff 和未提交文件。
- 通过 WCB Agent API 做只读任务状态检查。
- 在提交、push、proof submission、API 写操作、钱包相关动作前暂停并请求人工确认。

Codex is used as the main repository-aware learning agent. It can read local files, inspect Git status, draft notes, prepare task proof, and run read-only verification commands. High-impact actions remain human-confirmed.

### 辅助学习方向：Hermes Agent

我已经整理了 Hermes Agent 课程笔记，用来理解长期个人助手、消息网关、memory、skills 和安全边界：

- `notes/classes/2026-05-19-ai-tools-hermes-agent-setup-sharing.md`

当前我还没有让 Hermes 自动执行本仓库的发布、提交或 WCB 写入动作。Hermes 更适合作为长期受控助手方向继续评估。

Hermes Agent is currently treated as a learning and future-workflow direction. I have not delegated repository publishing, WCB submission, wallet actions, or secret-handling tasks to Hermes.

## 关键 Prompt / 配置说明

这个仓库使用 `AGENTS.md` 作为本地 agent 工作规则。核心边界包括：

- Agent 可以帮助规划、解释、整理、生成草稿、检查结果和维护公开学习材料。
- GitHub repo 创建、commit、remote 设置、push、公开链接分享、WCB proof submission 都需要人工确认。
- 钱包签名、转账、授权、合约写入、API key、token、私钥、助记词等敏感动作不能由 Agent 自动执行或接触。
- 公开笔记采用中文为主、英文伴随的风格，避免机械逐句翻译。

对应文件：

- `AGENTS.md`

Key configuration: `AGENTS.md` defines the agent's responsibilities, repository boundaries, writing style, and human-confirmation requirements. It keeps the agent useful for learning work while preventing it from crossing publishing, platform, wallet, or secret-handling boundaries.

## 成功输出记录

### 1. 初始化并维护公开学习仓库

Codex 协助初始化了 AI x Web3 School 学习仓库结构，包括：

- `README.md`
- `profile.md`
- `learning-plan.md`
- `daily/`
- `tasks/`
- `experiments/`
- `handbook-feedback/`
- `hackathon/`
- `submissions/`
- `templates/`
- `AGENTS.md`

已部署 commit：

- `1286592 Initialize AI x Web3 School learning repo`
- `a3f0c39 Add minimal proof-of-work submission test`

This output shows that the learning agent helped turn the course workflow into a structured repository with a learning plan, privacy boundary, reusable templates, and task-proof areas.

### 2. 生成并维护任务 proof

Codex 已协助整理至少两份任务 proof：

- `tasks/task-001-minimal-proof-of-work-submission-test.md`
- `tasks/task-002-ai-web3-information-flow-watchlist.md`

其中 Task 001 用于最小 Proof-of-Work 提交测试；Task 002 用于 AI x Web3 行业信息流关注清单。两者都记录了 proof 类型、提交文本和隐私检查。

Codex also used the WCB Agent API in read-only mode to verify platform task status. It did not call `tasks.submitEvidence` without human confirmation.

### 3. 整理课程笔记和每日学习记录

Codex 协助把课程和会议内容整理成公开学习材料：

- `daily/2026-05-18.md`
- `daily/2026-05-19.md`
- `notes/classes/2026-05-18-ai-era-web3-architecture-capabilities.md`
- `notes/classes/2026-05-19-ai-tools-hermes-agent-setup-sharing.md`
- `notes/meetings/2026-05-18-zk-trading-system-fireside-chat.md`

这些输出帮助我把课堂内容、个人理解、疑问、后续行动和隐私检查沉淀到同一个 public repo 中。

## 人工复核、修正或拒绝记录

### 双语格式修正

在整理 Task 001 时，我发现旧版本没有按照当前 public note 标准使用双语格式。随后我明确要求修正，Codex 根据 `AGENTS.md` 和 Task 002 的参考结构重写了 Task 001：

- 中文作为主要说明语言。
- 英文作为 companion summary。
- 保留 WCB `SUBMITTED` 状态。
- 添加 `Verification Status / 验证状态` 和 `Privacy Check / 隐私检查`。

这说明 Agent 输出不是直接接受，而是经过人工发现问题、提出修正要求，再由 Agent 按仓库标准调整。

### 发布和平台动作人工确认

在整个仓库维护过程中，Codex 多次检查 `git status`、`git diff` 和 WCB 任务状态，但没有自行 commit、push 或提交 WCB proof。每次涉及 commit、push、proof submission 或 API 写动作时，都保留人工确认。

This is the main safety boundary of the workflow: the agent can prepare and verify, but publishing and platform submission remain human-controlled.

## 当前工作流边界

Agent 可以做：

- 读取公开课程材料和本地学习仓库。
- 生成学习计划、笔记、任务 proof 草稿和提交文本。
- 检查 Markdown 格式、Git diff、任务状态和隐私边界。
- 调用 WCB 只读接口查询任务列表和提交历史。

Agent 不可以自动做：

- commit / push / GitHub publishing。
- WCB proof submission。
- 钱包签名、转账、授权、合约写入。
- 读取、保存或输出 API key、token、私钥、助记词、`.env` 文件。
- 发布未复核的公开内容。

## 提交文本

任务记录：

https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-003-learning-agent-setup.md

我使用 Codex 作为 AI x Web3 School 当前主 learning agent，帮助我维护公开学习仓库、整理 daily notes / class notes / task proof、检查 Git 状态，并通过 WCB Agent API 做只读任务状态核对。

这个 learning agent 工作流已经产出公开 GitHub repo、学习计划、Agent 维护规则、Task 001 / Task 002 proof、两天 daily notes、课程笔记和会议笔记。关键配置记录在 `AGENTS.md`，其中明确了 commit、push、WCB proof submission、钱包、API key、token、私钥和助记词等动作必须人工确认。

一次人工复核记录是：我发现 Task 001 没有按照当前双语 public note 标准整理，于是要求 Codex 根据 `AGENTS.md` 和 Task 002 的格式重写。Codex 随后把 Task 001 改成中文为主、英文伴随的 task proof，并保留 WCB `SUBMITTED` 状态和隐私检查。

Task proof:

https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-003-learning-agent-setup.md

I use Codex as my current AI x Web3 School learning agent. It helps maintain the public learning repository, organize daily notes, class notes, and task proof, inspect Git status, and run read-only WCB task-status checks.

This workflow has already produced a public GitHub repo, learning plan, agent maintenance guide, Task 001 / Task 002 proof, daily notes, class notes, and meeting notes. The key configuration is documented in `AGENTS.md`, which requires human confirmation for commit, push, WCB proof submission, wallet actions, API keys, tokens, private keys, and seed phrases.

One human-review example: I noticed that Task 001 did not follow the current bilingual public-note standard, so I asked Codex to rewrite it based on `AGENTS.md` and Task 002. Codex then converted Task 001 into a Chinese-first companion-English task proof while preserving the WCB `SUBMITTED` status and privacy checks.

## Verification Status / 验证状态

- [x] Agent / AI tool selected / 已选择 Agent 或 AI 工具
- [x] Learning tasks completed with Agent assistance / 已完成 Agent 辅助学习任务
- [x] Key prompt or configuration documented / 已记录关键 prompt 或配置说明
- [x] Successful output recorded / 已记录一次成功输出
- [x] Human review or correction recorded / 已记录一次人工复核或修正
- [ ] Submitted through WCB platform / 尚未通过 WCB 平台提交
- [ ] Submission result recorded / 尚未记录提交结果

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, or session data.
- [x] No `.env` contents or secret configuration values included.
- [x] No sensitive wallet, transaction, balance, or identity information.
- [x] Only public repository links, public notes, and sanitized workflow descriptions are included.
