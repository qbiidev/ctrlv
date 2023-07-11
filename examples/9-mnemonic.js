/**
 * This example generates, stores and verifies a mnemonic
 */

const accountManager = require("./account-manager");

async function run() {
  try {
    const manager = await accountManager();
    const mnemonic = await manager.generateMnemonic();
    await manager.verifyMnemonic(mnemonic);
    // await manager.storeMnemonic(mnemonic);
    console.log({ mnemonic });
    // console.log({ ver });

    // console.log("Mnemonic successfully stored!");
  } catch (error) {
    console.log("Error: ", error);
  }
  process.exit();
}

run();
