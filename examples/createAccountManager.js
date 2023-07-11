const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../", ".env") });
const { AccountManager, CoinType } = require("@iota/wallet");

async function createAccountManager() {
  const accountManagerOptions = {
    storagePath: "./db",
    clientOptions: {
      nodes: [process.env.NODE_URL],
      localPow: true,
    },
    coinType: CoinType.Shimmer,
    secretManager: {
      Stronghold: {
        snapshotPath: `./stronghold/db.stronghold`,
        password: `${process.env.SH_PASSWORD}`,
      },
    },
  };

  const manager = new AccountManager(accountManagerOptions);
  await manager.storeMnemonic(process.env.MNEMONIC);
  return manager;
}

module.exports = createAccountManager;
