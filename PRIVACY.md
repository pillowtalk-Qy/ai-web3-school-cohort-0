# Privacy and Security Boundary

This repository is designed to be public. Treat it as a learning portfolio and proof record, not as a private notebook or secret store.

## Core Principles

1. Public by default, sensitive by exception.
2. Use testnets and burner wallets for public experiments.
3. If a secret is committed, assume it is compromised.
4. Human review is required before creating the GitHub repository, committing, or pushing.

## Never Commit

- Seed phrases
- Private keys
- Keystore files
- Wallet backups
- API keys
- RPC provider keys
- GitHub tokens
- JWTs
- Cookies
- Session data
- `.env` files
- Browser or wallet extension screenshots containing account details
- Real-asset wallet addresses linked to identity
- Mainnet transaction details that reveal private financial behavior
- Exchange account information
- Personal identity documents
- Phone numbers, addresses, or private emails
- Private work information
- Private group chat screenshots or transcripts
- Unpublished business details that are not ready to share

## Redact Before Publishing

- Wallet addresses: use testnet addresses or redact as `0xabc...123`.
- Transaction hashes: prefer testnet only.
- Screenshots: crop account names, emails, balances, wallet extensions, browser profiles, and private tabs.
- Logs: remove tokens, RPC URLs, cookies, local usernames, and machine-specific paths when sensitive.
- Agent conversations: summarize the learning instead of pasting full private transcripts.
- Hackathon ideas: keep early notes focused on problem and direction until the idea is ready to share.

## Safe to Publish

- Daily learning notes
- Concept reviews
- Public task proofs
- Testnet experiment records
- Prompt and agent workflow designs
- Handbook feedback
- Public documentation links
- Public demo links
- High-level Hackathon planning

## Wallet Environment Isolation

Use a separate browser profile or fingerprint browser for burner wallets and testnet experiments.

The goal is to isolate the testing environment from production wallets, production accounts, and normal browsing activity.

Rules:

- Never import a main wallet or real-asset wallet into the test browser environment.
- Never import a burner wallet into the main wallet environment.
- Keep test dApps, test wallets, and test accounts isolated from production wallets.
- Do not log into main Google, GitHub, Discord, Telegram, or other identity accounts inside the test wallet environment unless explicitly needed and reviewed.
- Install wallet extensions only from official sources.
- Disable cloud sync for browser profiles that may contain wallet or extension state.
- If the test environment is compromised, discard the browser profile and burner wallet.

## Agent Rules

Any AI assistant helping maintain this repository should:

- Avoid asking for or storing secrets.
- Use placeholders such as `YOUR_API_KEY`, `TESTNET_RPC_URL`, and `0xTESTNET_ADDRESS`.
- Prefer testnet and burner-wallet examples.
- Remind the user to review staged changes before commit or push.
- Never create a GitHub repository, commit, or push without explicit human confirmation.

## Incident Response

If sensitive information is committed:

1. Treat it as compromised.
2. Revoke or rotate the exposed secret immediately.
3. Move funds from any exposed wallet if applicable.
4. Remove the sensitive data from the repository.
5. Review Git history and remote copies.
6. Avoid relying only on deleting the visible file, because Git history may still contain the data.
