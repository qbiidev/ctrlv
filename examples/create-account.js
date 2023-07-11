const accountManager = require("./account-manager");

async function createAccount() {
  try {
    const alias = process.argv[2];

    const manager = await accountManager();
    // await manager.storeMnemonic(process.env.MNEMONIC);
    const account = await manager.createAccount({
      alias,
    });
    console.log("Account created:", {
      account,
      mnemonic: process.env.MNEMONIC,
    });

    // console.log("Account:", account.meta.publicAddresses);
  } catch (error) {
    console.log("Error: ", error);
  }
  process.exit(0);
}

createAccount();
