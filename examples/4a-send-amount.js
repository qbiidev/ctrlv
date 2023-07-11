/**
 * This example sends a specified amount to an address.
 */

const getUnlockedManager = require("./account-manager");

async function run() {
  try {
    const manager = await getUnlockedManager();
    const account = await manager.getAccount("hamburgers");
    console.log("Account:", account);

    await account.sync();

    //TODO: Replace with the address of your choice!
    const address =
      "rms1qqpvpcpcc3zkttf9fgq0rvhmttnz3wvytst3hregzwkrf5szz3ywvz8u2pt";
    const amount = "3000000";

    const response = await account.sendAmount([
      {
        address,
        amount,
      },
    ]);

    console.log(JSON.stringify(response));

    console.log(
      `Check your block on ${process.env.NODE_URL}/api/core/v2/blocks/${response.blockId}`
    );
  } catch (error) {
    console.log("Error: ", error);
  }
  process.exit(0);
}

run();
