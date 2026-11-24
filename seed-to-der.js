const { Mnemonic } = require('@hiero-ledger/sdk');

const SEED_PHRASE = 'cancel rain afraid hospital jealous gown bid wet stereo pledge excite valley junk version gym saddle able lyrics black man benefit salon model sorry';

async function main() {
  const mnemonic = await Mnemonic.fromString(SEED_PHRASE);

  // ED25519 (legacy derivation - matches accounts created via toPrivateKey())
  // using legacy method because it is used by HashPack wallet
  const legacyKey = await mnemonic.toPrivateKey();
  console.log('Legacy Ed25519 DER:          ', legacyKey.toStringDer());
  console.log('Legacy Ed25519 Public Key:   ', legacyKey.publicKey.toStringDer());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
