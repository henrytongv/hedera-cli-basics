require('dotenv').config();

const {
  Client,
  AccountId,
  PrivateKey,
  TransferTransaction,
  Hbar,
} = require('@hiero-ledger/sdk');

const TARGET_ACCOUNT = '0.0.6215263'; 

const AMOUNT_HBAR = 2;

async function main() {
  const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
  const operatorKey = PrivateKey.fromStringDer(process.env.OPERATOR_KEY);

  const client = Client.forTestnet();
  client.setOperator(operatorId, operatorKey);

  const tx = await new TransferTransaction()
    .addHbarTransfer(operatorId, Hbar.fromTinybars(-AMOUNT_HBAR * 100_000_000))
    .addHbarTransfer(AccountId.fromString(TARGET_ACCOUNT), Hbar.fromTinybars(AMOUNT_HBAR * 100_000_000))
    .freezeWith(client);

  const signedTx = await tx.sign(operatorKey);
  const response = await signedTx.execute(client);
  const receipt = await response.getReceipt(client);

  console.log('Transaction ID:', response.transactionId.toString());
  console.log(`Sent ${AMOUNT_HBAR} HBAR from ${operatorId.toString()} to ${TARGET_ACCOUNT}`);
  console.log('Status:', receipt.status.toString());

  client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
