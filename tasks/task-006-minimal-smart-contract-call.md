# Task 006 - Minimal Smart Contract Call

## Metadata

- Date: 2026-05-23
- Program: AI x Web3 School
- Week: Week 1
- Track: Web3 task
- WCB task: Week 1｜Web3 向任务｜部署或调用一个最小智能合约
- WCB task id: `cmp3jyr3h07sgn301jpcjoma9`
- Points: 30
- Repository: https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0
- Task file: `tasks/task-006-minimal-smart-contract-call.md`
- Status: completed locally; WCB submission prepared

## 任务目标

在测试网上部署或调用一个最小智能合约，理解合约地址、读取 / 写入、交易确认和链上验证之间的关系。

我选择“调用一个已部署测试网合约的读取函数”，而不是部署新合约或执行写入函数。

原因：

- WCB 任务允许“部署或调用”二选一。
- 只读调用不需要钱包签名。
- 只读调用不产生交易，不消耗 gas，也不涉及授权或转账。
- 这种方式可以把学习重点放在合约地址、ABI 函数、返回值解码和区块浏览器验证上。

The task asks the learner to deploy or call a minimal smart contract on a testnet. I chose to call read-only functions on an already deployed Sepolia contract instead of deploying a new contract or sending a write transaction.

## Target Contract / 调用目标合约

I used the Chainlink ETH / USD price feed contract on Sepolia.

```text
Network: Sepolia testnet
Chain id: 11155111
Target contract: 0x694AA1769357215DE4FAC081bf1f309aDC325306
Explorer: https://sepolia.etherscan.io/address/0x694AA1769357215DE4FAC081bf1f309aDC325306
Contract type: Chainlink price feed / AggregatorV3Interface-compatible contract
Read method: eth_call
RPC used for verification: public Sepolia RPC
```

The target address has contract code on Sepolia:

```text
eth_getCode result: non-empty
Code prefix: 0x6080604052348015
Code length: 13986 hex characters
```

## Read Calls / 读取调用

### 1. `decimals()`

Function selector:

```text
0x313ce567
```

Raw result:

```text
0x0000000000000000000000000000000000000000000000000000000000000008
```

Decoded result:

```text
decimals = 8
```

Meaning:

The price feed answer uses 8 decimal places.

### 2. `description()`

Function selector:

```text
0x7284e416
```

Decoded result:

```text
description = ETH / USD
```

Meaning:

This confirms that the contract is an ETH / USD price feed.

### 3. `version()`

Function selector:

```text
0x54fd4d50
```

Raw result:

```text
0x0000000000000000000000000000000000000000000000000000000000000004
```

Decoded result:

```text
version = 4
```

### 4. `latestRoundData()`

Function selector:

```text
0xfeaf968c
```

Raw result:

```text
0x000000000000000000000000000000000000000000000001000000000000815f0000000000000000000000000000000000000000000000000000002ffdcecea2000000000000000000000000000000000000000000000000000000006a114ad0000000000000000000000000000000000000000000000000000000006a114ad0000000000000000000000000000000000000000000000001000000000000815f
```

Decoded result:

```text
roundId: 18446744073709584735
answerRaw: 206121651874
decimals: 8
answerDecimal: 2061.21651874
startedAt: 2026-05-23T06:36:00.000Z
updatedAt: 2026-05-23T06:36:00.000Z
answeredInRound: 18446744073709584735
```

Meaning:

The read call returned an ETH / USD price feed round. Because `decimals()` returned `8`, the raw answer `206121651874` represents `2061.21651874`.

## Verification Commands / 验证方式

The read calls were made with public Sepolia JSON-RPC `eth_call`.

Examples:

```bash
curl https://ethereum-sepolia-rpc.publicnode.com \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_call","params":[{"to":"0x694AA1769357215DE4FAC081bf1f309aDC325306","data":"0x313ce567"},"latest"]}'
```

```bash
curl https://ethereum-sepolia-rpc.publicnode.com \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":2,"method":"eth_call","params":[{"to":"0x694AA1769357215DE4FAC081bf1f309aDC325306","data":"0x7284e416"},"latest"]}'
```

```bash
curl https://ethereum-sepolia-rpc.publicnode.com \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":3,"method":"eth_call","params":[{"to":"0x694AA1769357215DE4FAC081bf1f309aDC325306","data":"0xfeaf968c"},"latest"]}'
```

## What I Learned / 我的理解

- 合约地址是链上代码的位置，不等同于普通钱包地址。
- 读取函数可以通过 `eth_call` 执行，不会产生交易，也不需要钱包签名。
- 写入函数会改变链上状态，因此需要交易、gas、钱包签名和人工确认。
- 区块浏览器可以帮助确认目标地址确实是合约，并查看合约公开信息。
- ABI / function selector 决定了调用哪个函数，返回值需要按 ABI 类型解码。

This task helped me separate contract reads from contract writes. A read-only call can inspect public contract state without signing a transaction, while a write call requires a transaction, gas, and human wallet confirmation.

## Human Confirmation Boundary / 人工确认边界

No wallet signature was required for this proof because all calls were read-only.

If I later deploy a contract or call a write function:

- I must use a testnet and burner wallet.
- I must inspect the transaction in the wallet before signing.
- I must not expose private keys, seed phrases, API keys, tokens, or `.env` files.
- I must keep any contract write, token approval, transfer, or wallet signature behind human confirmation.

## WCB Submission Draft

```text
Task proof:
https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/tasks/task-006-minimal-smart-contract-call.md

Contract / target address:
0x694AA1769357215DE4FAC081bf1f309aDC325306

Block explorer:
https://sepolia.etherscan.io/address/0x694AA1769357215DE4FAC081bf1f309aDC325306

说明：
我选择完成“调用一个已部署测试网合约的读取函数”，没有部署新合约，也没有执行写入交易。目标合约是 Sepolia 上的 Chainlink ETH / USD price feed。

读取结果：
- decimals() = 8
- description() = ETH / USD
- version() = 4
- latestRoundData() 返回 roundId 18446744073709584735，answerRaw 206121651874。因为 decimals 为 8，所以解码后的价格为 2061.21651874。

这次调用使用 public Sepolia RPC 的 eth_call 完成，是只读调用，不需要钱包签名，不产生交易，不消耗 gas，也不涉及授权或转账。如果后续进行合约部署或写入函数调用，钱包签名、授权、转账和合约写入都必须人工确认。
```

## Privacy Check / 隐私检查

- [x] No private keys, seed phrases, API keys, cookies, tokens, or `.env` content.
- [x] No mainnet wallet address, real-asset balance, or private transaction pattern.
- [x] No private screenshots or private chat transcripts.
- [x] The target contract is a public Sepolia testnet contract.
- [x] This proof uses read-only calls and does not require wallet signing.
- [x] WCB proof submission still requires explicit human confirmation.
