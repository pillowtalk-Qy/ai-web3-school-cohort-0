# AI x Web3 School Co-learning - Hackathon Progress Check-in - 2026-06-04

## Metadata / 元信息

- Date / 日期: 2026-06-04
- Title / 标题: 黑客松进度沟通、报名情况、项目提交与参赛心态提醒
- Source / 来源: learner-provided partial co-learning notes / 学习者提供的部分共学记录
- Time range in source / 原始片段时间: 39:06-52:13
- Type / 类型: co-learning check-in / 共学进度沟通
- Topics / 主题: hackathon registration, project progress, Q&A channels, participation mindset / 黑客松报名、项目进度、答疑渠道、参赛心态
- Status / 状态: summarized from learner-provided notes, not independently source-verified / 基于学习者提供记录整理，尚未逐条核验直接来源
- Public / 公开状态: yes, after privacy review / 隐私检查后可公开
- Repository / 仓库: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- File / 文件: `notes/classes/2026-06-04-co-learning-hackathon-progress-check-in.md`

## Important Caveat / 重要说明

这是一份基于学习者提供片段整理的共学笔记，只覆盖会议中 39:06-52:13 左右关于黑客松进度沟通的部分，不是完整逐字稿，也不是黑客松官方公告。

笔记中提到的报名人数、已提交项目数量、后续赛题安排、项目开发进度和答疑渠道，都应以黑客松官网、官方群公告、主办方通知和后续正式说明为准。

公开笔记中不记录私人联系方式、群聊原文、个人身份、私聊渠道或未公开项目细节。

This note summarizes a learner-provided partial session record. It is not an official announcement or a complete transcript. Registration numbers, submission status, upcoming prompts, and support channels should be verified against official sources.

## Session Overview / 会议概览

本段会议主要是黑客松活动的进度沟通和心态提醒。

核心信息包括：

- 会议进入自由交流和答疑阶段。
- 参会者可以自由上麦或在评论区提问。
- 现场提到黑客松已有约 80 人报名。
- 有些参赛者仍是单人参赛，暂未组队。
- 现场提到已有 3 个项目完成提交。
- 部分参赛者推进速度很快，容易让其他人感到压力。
- 后续可能会陆续放出更多赛题。
- 部分项目可能只需要替换支付模块或 API，就可以完成适配。
- 发言人提醒大家不要被“内卷感”压垮，真正的竞争对象首先是自己。

English companion:

This session segment focused on hackathon progress and participant mindset. The useful message was that some teams are already moving fast, but the goal is not to compare anxiously with others. The real target is to make progress from one's own starting point and complete a working submission.

## 1. Meeting Context / 会议场景

发言人在会议中正式开启线上交流，并说明自己因为身处室外环境，到场较晚。

现场进入比较开放的沟通状态：

- 可以自由上麦聊天。
- 可以在评论区留言提问。
- 设备或麦克风状态可能仍在调整。
- 会议后续还会衔接下一场分享。

公开笔记不记录具体个人身份或现场无关闲聊。

## 2. Hackathon Registration and Progress / 报名与进度

会议中提到：

- 黑客松报名人数约为 80 人。
- 有些参赛者仍然是单人参赛。
- 不是所有参赛者都已经完成组队。
- 现场提到已有 3 个项目完成提交。

这些数字对我有两个提醒。

第一，赛事已经进入真实推进阶段，不是“还可以慢慢想”的状态。

第二，进度差异会很明显。有些人已经提交，有些人还在组队或选题，这很正常。不能因为看到别人很快就直接否定自己的节奏。

## 3. Project Development Notes / 项目开发信息

会议中提到，后续可能会继续放出更多赛题。

也提到有些项目可能只需要替换支付模块或 API，就能完成一定程度的适配。这说明黑客松项目不一定都要从零开始：

- 可以基于已有项目做赛道适配。
- 可以围绕支付模块、钱包模块或 API 集成做局部改造。
- 可以把已有能力变成符合赛题要求的最小闭环。

对我来说，这一点很有启发。`AI Wallet Clear Intent Guard` 也不应该追求一次性做完整系统，而应该找到最能说明问题的一小段闭环。

English companion:

Some projects may be able to adapt existing work by replacing payment modules or APIs. This is useful because a hackathon MVP does not need to be a full system. It needs a clear, working loop that matches the track.

## 4. Participation Mindset / 参赛心态

这一段最重要的不是具体规则，而是心态提醒。

现场提到，有些参赛者推进很快，甚至已经完成项目提交，这会让人产生明显的内卷压力。

但发言人提醒：

```text
The real competitor is yourself.
```

中文理解：

```text
真正的对手首先是自己。
```

参加这类 Web3 产品开发赛事，本身就是一次训练：

- 第一次做出来，比只停留在想法阶段更重要。
- 能完成参赛，就已经是一次有效突破。
- 和自己之前相比有进步，就是实际收获。
- 不需要用别人的速度来否定自己的项目节奏。

这对黑客松中后期很重要。越接近提交，越容易被别人进度影响判断。这个时候应该回到自己的最小闭环：

```text
one problem
-> one user flow
-> one working demo
-> one clear proof
```

## 5. Impact on My Hackathon Direction / 对我方向的影响

这次沟通对 `AI Wallet Clear Intent Guard` 的影响是：不要继续发散，也不要被别人已经提交的节奏吓到。

我现在应该更专注于：

- 选择第一版 review surface。
- 确定是 `Packet / authority package review`，还是 `x402 payment review`。
- 把 demo 做成一个小但完整的闭环。
- 保留清楚的安全边界。
- 准备能被评委快速理解的 3 到 5 分钟展示。

更现实的判断是：

```text
small and clear
> large and unfinished
```

如果能把一个支付或权限申请在签名前讲清楚，让用户看到 facts、policy decision、risk label 和 final confirmation，那就已经比继续堆概念更有价值。

English companion:

For my project, this session is a reminder not to over-expand. The next step is to pick one review surface and build a small, complete loop. A small clear demo is better than a large unfinished system.

## 6. Action Items / 行动项

- [ ] 不再继续扩大 `AI Wallet Clear Intent Guard` 的范围。
- [ ] 尽快在 `Packet / authority package review` 和 `x402 payment review` 中选择第一版 MVP。
- [ ] 把 demo 拆成一个最小闭环：输入、审查、决策、proof。
- [ ] 继续更新团队 Notion 计划表，避免信息只停留在聊天里。
- [ ] 需要问题时优先走官方答疑渠道，但公开笔记不记录私聊入口。

## My Understanding / 我的理解

这次笔记虽然短，但提醒很及时。

黑客松现在已经不是纯学习阶段，而是进入了真实交付阶段。有人已经提交项目，这会制造压力，但也说明赛程已经真的开始往终点走。

我需要做的不是追别人的节奏，而是把自己的项目做成能交付的版本。

对 `AI Wallet Clear Intent Guard` 来说，最重要的仍然是：

```text
pre-sign facts
policy boundary
human confirmation
audit proof
```

如果这四件事能在一个小 demo 里跑通，就比继续等待完美方案更重要。

## Questions / 问题

- 第一版 demo 今天是否必须定下来？
- 如果只能做一个 review surface，哪个最能体现 Cobo 赛道价值？
- 当前团队进度是否足够支撑 6 月 13 日提交？
- 哪些功能必须做，哪些应该放到 post-hackathon roadmap？
- 如何避免被其他参赛者进度影响自己的项目判断？

## English Summary

This co-learning segment focused on hackathon progress and mindset. Around 80 people were mentioned as registered, some participants were still solo, and some projects were already submitted. The important reminder was not to compare too anxiously with faster teams.

For my own project, the takeaway is to keep the MVP small and concrete. `AI Wallet Clear Intent Guard` should now focus on one review surface, one working flow, one clear decision point, and one proof path.

## Verification Status / 核验状态

- [x] Notes are based on learner-provided partial co-learning notes.
- [ ] Registration count not independently verified.
- [ ] Submitted project count not independently verified.
- [ ] Future prompt / topic release plan not independently verified.
- [ ] Official Q&A channels not listed in this public note.

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, tokens, cookies, sessions, or `.env` content.
- [x] No private group chat transcript, private contact information, or personal identity details.
- [x] No private project details, teammate information, wallet address, or payment proof.
- [x] Speaker identity is generalized.
- [x] Registration and submission numbers are treated as meeting notes requiring official verification.

中文隐私检查：

- [x] 不包含私钥、助记词、API key、token、cookie、session 或 `.env` 内容。
- [x] 不包含群聊原文、私人联系方式或个人身份细节。
- [x] 不包含私密项目细节、队友信息、钱包地址或付款证明。
- [x] 发言人身份已泛化处理。
- [x] 报名人数和已提交项目数量都作为会议记录处理，正式引用前需要官方核验。
