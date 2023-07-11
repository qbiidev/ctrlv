/**
 * This example creates a new database and account
 */
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../", ".env") });
const { AccountManager, CoinType } = require("@iota/wallet");

async function run() {
  try {
    const manager = await createAccountManager();

    const account = await manager.createAccount({
      alias: "Romar",
    });
    console.log("Account created:", account);
    console.log("Account:", account.meta.publicAddresses);

    const secondAccount = await manager.createAccount({
      alias: "Bob",
    });
    console.log("Account created:", secondAccount);
    console.log("2ndAccount:", account.meta.publicAddresses);
  } catch (error) {
    console.log("Error: ", error);
  }
  process.exit(0);
}

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

  const MNEMONIC =
    "iron upon shallow elevator answer civil verb faith success inmate ball seat ethics recycle bird arrange allow law account law wreck message secret action";
  const manager = new AccountManager(accountManagerOptions);
  await manager.storeMnemonic(MNEMONIC);
  return manager;
}

run();
