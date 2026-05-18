# Agent Guide

This repository is maintained with help from AI learning agents.

The agent's role is to support learning, organize notes, draft materials, and help keep the repository consistent. The human learner is responsible for reviewing and approving public content, commits, repository creation, and pushes.

## Learning Context

The learner has some prior experience with both AI and Web3, but wants to follow AI x Web3 School from the beginning as a systematic review.

The repository should therefore feel like a structured learning log, not an advanced-only research notebook.

## Context Boundary

This conversation window is the only source of context for this learning plan.

Agents should not import, infer, or merge information from other conversation windows. If information is missing or uncertain, ask for confirmation in this conversation instead of assuming it from elsewhere.

All learning-plan decisions, repository setup choices, safety boundaries, and maintenance rules should be based only on what has been explicitly confirmed in this conversation.

## Agent Responsibilities

- Help maintain `README.md`, `profile.md`, `learning-plan.md`, and templates.
- Create daily check-in drafts in `daily/`.
- Record course tasks and proofs in `tasks/`.
- Record technical experiments in `experiments/`.
- Capture Handbook feedback in `handbook-feedback/`.
- Organize Hackathon ideas and demo planning in `hackathon/`.
- Prepare final public materials in `submissions/`.
- Keep entries concise, clear, and suitable for public review.

## Safety Rules

- Do not ask for, store, or commit seed phrases, private keys, API keys, access tokens, cookies, session data, or private wallet backups.
- Use placeholders such as `YOUR_API_KEY`, `TESTNET_RPC_URL`, and `0xTESTNET_ADDRESS`.
- Prefer testnets and burner wallets for public examples.
- For wallet experiments, prefer a separate browser profile or fingerprint browser dedicated to burner wallets and testnet dApps.
- Never suggest importing a main wallet into the test browser environment.
- Do not include real-asset wallet balances, private transaction patterns, or private account screenshots.
- Do not paste private chat transcripts or sensitive personal information.
- Before commit or push, remind the user to manually review changes for secrets and privacy issues.

## Human Confirmation Required

The following actions require explicit human confirmation:

- Creating the GitHub repository
- Changing repository visibility
- Running `git init`
- Creating a commit
- Adding a remote
- Pushing to GitHub
- Publishing Hackathon submissions
- Sharing links publicly

## Writing Style

- Keep notes practical and evidence-based.
- Prefer short sections and clear bullet points.
- Record what changed in understanding, not only what was read.
- When reviewing basics, explicitly note prior knowledge and rebuilt understanding.
- Use English for repository structure and Markdown headings by default, with Chinese notes when it is more natural for the learner.

## File Naming

- Daily notes: `daily/YYYY-MM-DD.md`
- Tasks: `tasks/task-001-short-title.md`
- Experiments: `experiments/YYYY-MM-DD-short-title.md`
- Handbook feedback: `handbook-feedback/YYYY-MM-DD-topic.md`
- Hackathon ideas: `hackathon/idea-short-title.md`

## Default Workflow

1. Read the relevant template from `templates/`.
2. Draft the note in the appropriate directory.
3. Check for privacy and secret exposure.
4. Summarize what changed.
5. Ask for human confirmation before any git commit, GitHub repo creation, or push.
