# Hackathon Idea - AI Wallet Clear Intent Guard / AI 钱包签名前意图守卫

## Problem / 问题

AI 钱包和 Agent 钱包可以帮助用户用自然语言生成交易，但用户仍然需要知道自己到底在签什么。

真正危险的断点在“用户意图”和“交易 bytes”之间：

- 用户可能只要求一个有限操作。
- 实际生成的交易可能包含额外权限、无限授权或无法读懂的 calldata。
- 如果 AI 只根据上下文猜测，可能会错误解释交易。

AI wallets and Agent wallets may help users create transactions from natural language, but users still need to know what they are signing. The risky gap is between user intent and transaction bytes.

## Target Users / 目标用户

- AI 钱包用户
- Agent wallet builder
- Safe / 多签 signer
- 看不懂 calldata 的 Web3 新用户

- AI wallet users
- Agent wallet builders
- Safe / multisig signers
- New Web3 users who cannot read calldata

## AI Component / AI 组件

AI 应该作为解释层，而不是唯一事实来源。

AI 需要对比：

- 用户刚才要求做什么
- 交易实际包含什么
- 哪些风险信号需要人工复核

Use AI as an explanation layer, not as the only source of truth. The AI compares user intent, decoded transaction facts, and risk signals that need human review.

## Web3 Component / Web3 组件

使用 `Cyfrin/clearsig` 的 clear-signing 思路作为确定性的交易事实层。

Useful reference:

- https://github.com/Cyfrin/clearsig

系统可以在用户签名前检查 calldata、EIP-712 message、Safe transaction hash，以及基于 descriptor 的交易语义。

Use clear-signing ideas from `Cyfrin/clearsig` as the deterministic transaction facts layer before the user signs.

## Why Now / 为什么现在

AI Agent 正在越来越多地准备钱包操作，但钱包 UX 仍然存在 blind-signing 问题。

一个有用的 AI 钱包不应该只会执行任务。它还应该解释、验证，并在交易和用户意图不清楚匹配时暂停。

AI Agents are becoming more capable of preparing wallet actions, but wallet UX still has a blind-signing problem. A useful AI wallet should explain, verify, and pause when the transaction does not clearly match the user's intent.

## MVP / 最小版本

- 输入一笔 sample transaction 或 calldata。
- 尽可能把交易解码成可读事实。
- 让用户用自然语言描述本来想做什么。
- 对比用户意图和解码后的交易事实。
- 生成简短风险解释：
  - 这笔交易在做什么
  - 谁会收到资产或权限
  - 授权是有限授权还是无限授权
  - 交易是否完整可解释，还是只能做 digest 核对
- 输出一个判断：
  - 看起来一致
  - 需要人工复核
  - 不建议签名

- Input a sample transaction or calldata.
- Decode it into readable facts when possible.
- Compare user intent with decoded transaction facts.
- Generate a short risk explanation.
- Output: looks consistent, needs human review, or do not sign.

## Risks / 风险

- clear-signing descriptor 不一定覆盖所有合约。
- 某些 calldata 格式无法完整解码。
- 如果 AI 解释没有建立在确定性解码上，可能会出错。
- demo 必须避免处理真实私钥、真实资金或生产钱包签名。

- Clear-signing descriptors may not cover every contract.
- Some calldata formats cannot be fully decoded.
- AI explanations can be wrong if not grounded in deterministic decoding.
- A demo must avoid real private keys, real funds, and production wallet signing.

## Demo Plan / Demo 计划

- 做一个小型本地页面或浏览器页面。
- 左边展示用户意图，右边展示解码后的交易事实。
- 高亮无限授权、额外权限或无法解释的 calldata。
- 生成一条简单的 AI 签名前风险提示。
- 只使用测试数据或公开示例交易。

- Build a small local or browser-based review screen.
- Show user intent beside decoded transaction facts.
- Highlight mismatches such as unlimited approvals or unclear calldata.
- Produce a simple AI-generated signing warning.
- Use only test data or public example transactions.

## Privacy / Public Boundary / 隐私与公开边界

- [x] This idea is safe to describe publicly at the current level of detail.
- [x] No private collaborator information is included.
- [x] No sensitive implementation details are included before the idea is ready to publish.
- [x] No private keys, seed phrases, API keys, wallet balances, or private transaction data are included.
- [x] 当前粒度适合公开描述。
- [x] 不包含私密合作者信息。
- [x] 不包含尚未准备公开的敏感实现细节。
- [x] 不包含私钥、助记词、API key、钱包余额或私密交易数据。
