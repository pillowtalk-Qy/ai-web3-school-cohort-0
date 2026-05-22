# Task 005 - Testnet Transaction

## Metadata

- Date: 2026-05-22
- Program: AI x Web3 School
- Week: Week 1
- Track: Web3 task
- WCB task: Week 1｜Web3 向任务｜完成一笔测试网交易
- WCB task id: `cmp3jyqxo07sen301c3ljomc5`
- Points: 20
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Task file: `tasks/task-005-testnet-transaction.md`
- Status: completed locally; WCB submission prepared

## 任务目标

在测试网上完成一笔基础交易，并学会用区块浏览器验证交易状态。

这次任务的重点不是金额或复杂度，而是理解一笔交易从钱包发起、人工确认、广播到测试网、被区块浏览器记录和验证的完整链路。

The goal is to complete one basic transaction on a testnet and verify it with a block explorer. The focus is not value or complexity, but the path from wallet initiation, human confirmation, network broadcast, and explorer verification.

## 安全策略

本任务优先选择最小风险路径：使用测试网 burner wallet 发送一笔普通测试网交易，不部署合约。

原因：

- 任务允许测试币转账、faucet 领取后的转账或其他低风险测试网操作。
- 普通测试网转账没有合约代码、合约权限、外部调用、升级代理、owner 权限或提款逻辑。
- AI 不接触私钥、助记词、钱包备份、真实资产钱包或主网资产。
- 钱包签名和交易广播必须由我在测试钱包中人工确认。

如果后续单独完成“部署或调用一个最小智能合约”任务，再使用最小无资金合约，并在部署前单独检查合约代码。

There is no such thing as absolute smart-contract safety. For this specific task, the safest valid path is to avoid a contract entirely and use a normal burner-wallet testnet transaction.

## Recommended Execution Plan / 推荐执行方案

推荐使用 Sepolia 测试网，也可以使用 WCB 接受的其他公开测试网。

1. 使用单独的测试钱包或 burner wallet。
2. 确认钱包里没有主网资产、真实资产或重要账户。
3. 切换到 Sepolia 或其他测试网。
4. 从官方或可信 faucet 领取少量测试币。
5. 发送一笔最小测试交易：
   - 方案 A：向另一个 burner wallet 转少量测试币。
   - 方案 B：向自己的 burner wallet 地址发送 0 或极小数量测试币，只产生一笔可验证交易。
6. 在钱包弹窗里人工检查：
   - 网络是测试网，不是主网。
   - 收款地址是预期地址。
   - 金额是测试币，且很小。
   - Gas 费用是测试网费用。
7. 人工确认交易。
8. 在区块浏览器中记录交易哈希、状态、Gas、区块高度和时间。

## Transaction Record / 交易记录

The transaction was completed on Sepolia testnet and verified through a public Sepolia RPC plus Etherscan link.

```text
Network: Sepolia testnet
Explorer: Sepolia Etherscan
Transaction hash: 0xbbfdaa8b966523d7feb966858eaaf522004aebc7dd8f08f94aba452f195a7016
Explorer link: https://sepolia.etherscan.io/tx/0xbbfdaa8b966523d7feb966858eaaf522004aebc7dd8f08f94aba452f195a7016
From: 0xa882...2a88
To: 0x4649...6fc5b
Value: 0.1 SepoliaETH
Status: Success
Gas used: 21000
Effective gas price: 2.069450184 gwei
Transaction fee: 0.000043458453864 SepoliaETH
Block number: 10898364
Timestamp: 2026-05-22T14:38:36.000Z
Nonce: 285
Input data: 0x
Contract address: none
```

## What I Need To Verify / 待验证字段

- [x] The transaction is on a testnet, not mainnet.
- [x] The transaction status is successful.
- [x] The block explorer link is publicly accessible.
- [x] The transaction hash is recorded.
- [x] Gas and block number are recorded.
- [x] No private key, seed phrase, API key, token, cookie, or wallet backup is included.
- [x] No real-asset wallet, mainnet balance, private screenshot, or private transaction pattern is included.

Verification details:

- Chain id: `11155111` (`0xaa36a7`), Sepolia.
- Transaction type: `0x2`, EIP-1559 transaction.
- Receipt status: `0x1`, success.
- Gas used: `0x5208`, or `21000`, matching a plain ETH transfer.
- Input data: `0x`, so this was not a contract call.
- Contract address: `null`, so no contract was deployed.

## Human Confirmation Boundary / 人工确认边界

AI / Agent can help with:

- reading the WCB task requirement,
- preparing this task proof note,
- explaining transaction fields,
- checking the public explorer result,
- drafting the WCB submission text.

AI / Agent must not:

- ask for or store seed phrases or private keys,
- import or control a wallet,
- sign a transaction,
- broadcast a transaction through a private key,
- submit WCB proof without explicit human confirmation.

## WCB Submission Draft

To be completed after the transaction proof is verified:

```text
Task proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-005-testnet-transaction.md

Explorer link:
https://sepolia.etherscan.io/tx/0xbbfdaa8b966523d7feb966858eaaf522004aebc7dd8f08f94aba452f195a7016

说明：
我使用 Sepolia 测试网完成了一笔基础测试网交易，并通过区块浏览器和公开 Sepolia RPC 验证了交易状态、交易哈希、Gas、区块高度和时间。

交易哈希：
0xbbfdaa8b966523d7feb966858eaaf522004aebc7dd8f08f94aba452f195a7016

验证结果：
- Network: Sepolia testnet
- Status: Success
- Value: 0.1 SepoliaETH
- Gas used: 21000
- Block number: 10898364
- Timestamp: 2026-05-22T14:38:36.000Z
- Input data: 0x
- Contract address: none

本次任务只使用测试网，不涉及主网资产、真实资产钱包、私钥、助记词、API Key 或私密截图。交易签名由我在测试钱包中人工确认，AI 只协助整理任务要求、验证公开区块浏览器字段和准备 proof 文本。
```

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, or `.env` content.
- [x] No mainnet wallet, real-asset balance, or private transaction pattern.
- [x] No private screenshots or private chat transcripts.
- [x] The WCB submission text is prepared for human-confirmed submission.
- [x] Future commits, pushes, and WCB proof submissions still require explicit human confirmation.
