# AI x Web3 School Week 1 Review Meeting - 2026-05-22

## Metadata / 元信息

- Date / 日期: 2026-05-22
- Title / 标题: AI x Web3 School 第一周学习复盘例会
- Host / 主持人: TreeTree
- Duration / 时长: around 73 minutes / 约 73 分钟
- Source / 来源: learner-provided meeting notes / 学习者提供的会议整理
- Type / 类型: weekly review meeting / 周例会复盘
- Topics / 主题: Week 1 review, excellent notes, learner sharing, leaderboard, Week 2 preview / 第一周复盘、优秀笔记、学员分享、积分排名、下周预告
- Status / 状态: summarized, not fully source-verified / 已整理，尚未逐条核验直接来源
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/meetings/2026-05-22-week-1-review-meeting.md`

## Important Caveat / 重要说明

这是一份基于学习者会后整理材料形成的例会笔记，主要用于 AI x Web3 School 学习复盘。内容包含主持人流程说明、学员分享摘要、项目想法、工具经验和课程预告，不等同于逐字稿或逐条核验后的官方公告。

This note is based on learner-provided post-meeting notes. It is for learning review, not a verbatim transcript or fully verified official announcement.

## Meeting Flow / 会议流程

本次例会围绕第一周学习复盘展开，主要环节包括：

1. 优秀笔记展示。
2. 6 位学员学习心得与项目分享。
3. 第一周积分排行榜公布。
4. 下周课程预告。
5. Q&A 与自由交流。
6. 会后资料、回放和下期报名安排。

The meeting reviewed Week 1 learning progress through excellent-note showcases, six learner sharing sessions, leaderboard updates, Week 2 previews, Q&A, and post-meeting follow-up announcements.

## 一、会议开场与流程说明

主持人 TreeTree 说明本次例会有四个主要板块：

- 优秀笔记分享与 6 位学员学习心得分享。
- 第一周积分排行榜公布。
- 下周课程预告。
- Q&A 自由提问与交流。

参与方式比较开放，学员可以上麦发言，也可以在评论区留言。

## 二、优秀笔记展示

主持人说明，助教已经整理了更完整的 Excel 版优秀笔记清单，包括仓库链接和完整内容，会后会发到群里。现场只快速展示一些有代表性的笔记类型。

### 代表性笔记类型

- 跨学科思考型：从密码学、经济学和自身项目经历出发，理解 Web3 基础概念。
- 结构化笔记型：每节固定整理核心结论、关键知识点和个人理解。
- 深度预习型：有同学完成了 42 节完整预习笔记。
- 问题推导型：围绕 Hermes 相关内容，用“提出问题 -> 逐步分析 -> 得出结论”的方式整理。

### 学习建议

输出方式不必统一。平台打卡、个人账号分享、备忘录记录、GitHub 仓库沉淀都可以，关键是找到适合自己的持续输出方式。

## 三、6 位学员学习心得与项目分享

### 学员 A：Web3 + 医疗落地场景

学员 A 的背景是医学方向，分享了如何结合专业背景思考 Web3 在医疗场景中的实际应用。

主要想法：

- 理赔自动化：病历上链，结合智能合约和预言机，在条件满足时自动触发赔付，减少人工核对流程。
- 临床数据授权：患者通过签名自主授权病例数据给科研机构或药企，自愿贡献数据并获得激励。
- 医疗纠纷存证：使用哈希存证和链上不可篡改记录，降低纠纷中的证据争议。

这个分享提醒我，Web3 不一定只从金融和交易开始。医疗、科研数据授权、纠纷存证等场景也可以用“可验证记录 + 用户授权 + 激励机制”重新设计流程。

### 学员 B：AI + Web3 学习方法论

学员 B 是区块链技术专业大四学生，主攻合约和前端。TA 提到自己曾经因为 AI 热点感到学习焦虑，但后来意识到重点不是追逐工具或热点，而是建立可执行的学习闭环。

五步学习法：

1. 让 AI 讲清概念，不只问定义，还追问区别、组成和真实场景价值。
2. 把概念放入熟悉场景，例如思考 Agent 在钱包、合约、链上交易中能做什么、不能做什么。
3. 拆解最小可执行任务，不急着做大项目，先做小 demo，明确页面、接口和合约。
4. 亲自实践，不照搬 AI 答案，要自己筛选和判断。
5. 输出个人理解，用日报、笔记、GitHub 或流程图沉淀。

关键建议是找到“自身背景 x AI”的交叉点。例如产品背景可以关注用户流程，内容背景可以做知识库，前端背景可以做 AI 交互。目标是从“完成需求的开发者”走向“发现问题并用 AI / Web3 解决问题的 builder”。

### 学员 C：钱包智能助手与套利 Agent

学员 C 有共学营和黑客松经验，分享了链上数据监控和自动化套利 Agent 方向。

当前流程：

- 使用 Hermes 获取链上数据。
- 定时扫描潜在机会。
- 发送交易或市场信号。
- 通过飞书机器人推送消息。

分享中提到的两类机会：

- 永续合约资金费率异常：通过现货买入和合约开空进行资金费率套利。
- 交易所横盘刷量：在低波动时期快速交易，以获取平台空投奖励。

当前进展是已经实现消息推送，并获得过小额奖励。下一步目标是自动化执行更低风险的量化策略，并测试市场中性策略。

我的理解是，这类项目很适合观察 AI Agent 与链上执行之间的安全边界。数据监控和信号推送可以先自动化，但真实交易、授权和资金操作仍然需要明确的风控与人工确认。

### 学员 D：WCB 平台 Agent API 自动化打卡

学员 D 是全栈背景，分享了 WCB 平台提供给 Agent 调用的 API，并展示了如何把课程任务查询和本地学习记录同步自动化。

核心接口包括：

- `get profile`：验证 key 并拉取个人信息。
- `get by ID`：获取任务 id、课程大纲和公告等信息。
- `my task history`：查询任务提交记录和总分。
- 提交类接口：提交任务证明。

已实现的场景：

- 一键拉取 Week 1 全部任务进度。
- 自动同步课程大纲到本地并生成中文摘要。
- 尝试自动提交任务，计划在 Week 2 继续完善。

踩坑经验：

- `tasks.listForLearner` 这类接口如果参数不完整，可能返回空数组。
- 需要先通过课程 id 或课程详情找到 task id，再循环查询具体任务状态。

这个分享与我当前仓库维护方式高度相关：Agent 可以帮助读取任务、整理 proof 和检查提交状态，但提交 proof、commit、push、钱包签名等动作仍然必须保留人工确认。

### 学员 E：Obsidian + Hermes 学习知识库

学员 E 是金融学大一学生，分享了用 Obsidian 和 Hermes 搭建个人学习知识库的流程。

核心观点：

- AI 可以负责整理素材，但独立思考部分不能完全交给 AI。
- AI 没有个人立场、经历和审美，关键是把自己的素材、方法论和判断喂给 AI，让输出保留个人印记。

知识库分类参考了 TARA / PARA 思路：

- Projects：短期、有目标、有截止日的任务。
- Areas：长期维持、没有终点的领域，例如健康和财务。
- Resources：学习资料和素材库。
- Archives：已经完成或归档的资料。

推荐插件：

- Calendar：日历。
- Template：模板，用于自动填充和双向链接。

协作流程：

- 整理学习疑问和名词。
- 发给 Hermes 做结构化整理。
- 生成打卡笔记。
- 同步到 GitHub。

一个重要原则是文件夹层级保持浅层，先不要过度分类。等真实材料变多之后，再根据使用场景调整结构。

### 学员 F：拒绝技术焦虑

学员 F 是计算机本硕、AI 方向和全栈背景，分享主题是拒绝技术焦虑。

核心观点：

- 新工具和新名词很多，但底层框架经常没有变，只是外层模块持续迭代。
- 看不懂时先拆核心模块和功能，不必一开始纠结代码细节。
- 焦虑往往说明基础框架还不够稳，需要回到基本概念和系统结构。

TA 也提到自己有量化智能体开发经验，做过平台量化交易，当前主攻套利机器人方向，并愿意在全栈、AI、前端、后端、嵌入式、产品落地和黑客松 demo 快速实现上提供帮助。

这个分享对 Week 1 很有意义：AI x Web3 的概念密度高，但学习路径不应该被名词牵着走。更可靠的方法是回到模块、边界、执行链路和可验证 proof。

## 四、补充自由分享

自由分享环节中，有学员补充了 Web coding 技巧和 AI coding 工具使用经验，包括 Codex、目标模式、sub-agent、深度链接、系统级操作、GitHub 同步、额度节省等话题。

这部分内容更偏实操经验和协作招募。公开笔记中只记录高层方向，不记录私人联系方式或未经确认的具体资源链接。

## 五、第一周积分排行榜

积分统计截止到当日 17:00 截图。

现场公布时，有 24 位学员并列第一，积分为 200 分。主持人提醒，后续任务更新后排名仍会变化，最终排行榜会有专属激励。

我的理解是，积分榜更像一个节奏反馈机制：它能鼓励学员持续完成 proof-of-work，但更重要的仍然是学习质量、实践记录和能复盘的输出。

## 六、下周课程预告

以下预告以会议现场信息为基础，实际时间和内容以 WCB 平台与群置顶通知为准。

| Time / 时间 | Speaker / 分享嘉宾 | Topic / 主题 | Language / 语言 | Best for / 适合人群 |
|---|---|---|---|---|
| Saturday 09:30 | External guest / 外部嘉宾 | Agent protocols, ERC-804 / ERC-8183, payment and identity verification / Agent 协议、ERC-804 / ERC-8183、支付与身份验证 | English | Agent protocol developers / Agent 协议开发者 |
| Monday 20:00 | Community ambassador / 社区大使 | Agent persistent context and long-term memory / Agent 持久上下文与长期记忆 | Chinese | Learners studying Agent memory / 研究 Agent 记忆机制的学员 |
| Wednesday 20:00 | Wallet PM / 钱包 PM | Wallet permission signatures and safe execution / 钱包权限签名与安全执行 | English | Wallet and security builders / 钱包与安全方向开发者 |
| Thursday | Teacher Carl / 卡尔老师 | AI + hackathon track building / AI + 黑客松赛道构建 | Chinese | Hackathon participants / 准备黑客松的学员 |
| Friday 19:00 | Women builder representatives / 女性 Builder 代表 | Women's learning paths and global opportunities in AI + Web3 / 女性在 AI + Web3 的学习路径与全球机会 | Chinese | Women builders / 女性建设者 |

## 七、Q&A 与自由交流

Q&A 和自由交流环节鼓励学员继续开麦分享心得、交流项目、寻找队友。

主持人补充，欢迎学员报名后续专题正式分享，例如 X Space 或 AMA。平台会提供一定资源支持。有意向者可以通过课程社群登记。

## 八、会后安排与公告

会后安排包括：

- 最晚次日整理分享老师联系方式、项目链接和相关文档，并发群置顶。
- 发放优秀笔记 Excel 表和仓库链接。
- 会议回放同步到 YouTube、B 站和 X。
- 欢迎提前报名第二周例会学习心得分享。
- 重要通知以群置顶为准，避免遗漏。

## My Understanding / 我的理解

这次例会最大的价值不是单一知识点，而是让我看到不同背景的人如何把 AI x Web3 课程转化成自己的学习路径。

对我最有启发的几点：

- 医疗、金融、知识库、Agent API、量化、钱包安全都可以成为 AI x Web3 的切入口。
- 好的学习输出不只有一种格式，重要的是能持续、能复盘、能被别人检查。
- AI 可以加速整理、脚本化和打卡，但真正的判断力仍然来自人自己的背景、问题意识和实践反馈。
- 钱包、交易、合约写入和自动化执行越接近真实资产，越需要清晰的权限边界、风控和人工确认。
- 技术焦虑可以通过拆模块、做最小 demo、公开 proof 和持续复盘来缓解。

## Concepts to Review / 待复习概念

- Agent persistent memory / Agent 持久记忆
- Agent protocol / Agent 协议
- Wallet permission signature / 钱包权限签名
- Smart account / 智能账户
- Oracle / 预言机
- Onchain data authorization / 链上数据授权
- Agent workflow safety boundary / Agent workflow 安全边界
- Proof-of-work learning record / 学习型 proof-of-work

## Questions / 问题

- AI Agent 在链上量化或钱包助手场景里，哪些步骤可以自动化，哪些必须强制人工确认？
- WCB Agent API 的自动化边界如何设计，才能既提高效率，又不让提交和发布动作失控？
- Obsidian / Hermes / GitHub 之间的长期学习工作流，应该如何避免变成只整理、不思考？
- 黑客松项目如何在“够小、可 demo”和“真实问题、有安全边界”之间取得平衡？

## Follow-up Actions / 后续行动

- 继续把课程任务 proof 放在 GitHub 仓库中，保持可检查、可复盘。
- 对 WCB API 工作流保持只读优先，提交类动作继续保留人工确认。
- 在后续 Hackathon 方向中重点关注钱包安全、交易解释和 Agent 执行边界。
- 下周重点关注钱包权限签名、安全执行、Agent 记忆和黑客松赛道构建。

## English Summary

This Week 1 review meeting focused on learning reflections, excellent notes, learner project sharing, leaderboard updates, Week 2 previews, and open discussion.

The strongest theme was that AI x Web3 can start from many different backgrounds: healthcare data authorization, smart-contract and frontend learning, wallet assistants, arbitrage monitoring, WCB Agent API automation, Obsidian-based knowledge systems, and full-stack hackathon execution.

My main takeaway is that good learning output is not only about using AI faster. It is about building a repeatable loop: understand concepts, place them in a familiar domain, build a small executable demo, verify the result, and publish a safe proof-of-work record.

The meeting also reinforced a safety boundary: AI can help organize notes, read APIs, draft proof text, generate scripts, and explain transaction data, but wallet signatures, asset transfers, contract writes, public publishing, and WCB submissions still need explicit human confirmation.

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, or `.env` content.
- [x] No private wallet balances, real-asset transaction details, or private screenshots.
- [x] Learner sharing is summarized with anonymous labels instead of private names.
- [x] Private contact details are not included.
- [x] Course schedule is marked as subject to WCB platform and pinned group updates.
