# hedera-cli-basics

A small collection of educational examples demonstrating the basics of interacting with the **Hedera network** using the **Hierō Ledger SDK** (`@hiero-ledger/sdk`) in Node.js.

## Purpose

This project is designed for **learning purposes** — a hands-on playground for people getting started with the Hedera SDK. It covers fundamental concepts like:

- Loading credentials and keys from a `.env` file
- Connecting to the Hedera testnet
- Setting an operator account on a client
- Building, signing, and executing transactions
- Converting mnemonic seed phrases into DER-formatted private keys

## Examples

- **`send-hbar.js`** — Transfers HBAR between two accounts on the Hedera testnet. A good starting point to learn how transactions are built, signed, frozen, and executed.
- **`seed-to-der.js`** — Demonstrates mnemonic (seed phrase) handling and how to derive an Ed25519 private key in DER format, useful for wallet integrations like HashPack.

## Prerequisites

- Node.js installed
- A Hedera testnet account (you can create one via the [Hedera Portal](https://portal.hedera.com/))
- Testnet HBAR for transaction fees

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.sample` to `.env` and fill in your credentials:

   ```env
   OPERATOR_ID=0.0.xxxxx
   OPERATOR_KEY=302e020100300506032b657004220420...
   ```

   > **Important:** Never commit your `.env` file — it contains your private key.

## Running

```bash
node send-hbar.js
node seed-to-der.js
```

## Notes

- All scripts target the **Hedera testnet** (`Client.forTestnet()`).
- This code is intended for **learning only** — do not use it with real funds or production accounts.
- For deeper learning, check out the [Hedera documentation](https://docs.hedera.com/) and the [Hierō SDK reference](https://docs.hedera.com/hedera/networks/documentation/sdks).
