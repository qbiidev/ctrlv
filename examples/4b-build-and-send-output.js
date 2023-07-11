/**
 * This example sends IOTA tokens to an address.
 */

const getUnlockedManager = require("./account-manager");

async function run() {
  try {
    const manager = await getUnlockedManager();
    const account = await manager.getAccount("Alice");

    await account.sync();

    // The address has to be specified in Ed25519 format

    const hex = await manager.bech32ToHex(
      "rms1qpfz42rvmlsmnwykt57ahj9gk2kklhnhftf2qcc82qat2uwhjtv8y2xp6dl"
    );
    console.log("Hex encoded address: ", hex);

    const output = await account.buildBasicOutput({
      amount: "200000",
      unlockConditions: [
        {
          type: 0,
          address: {
            type: 0,
            pubKeyHash: `${hex}`,
          },
        },
      ],
    });

    console.log("Output built:", output);

    const response = await account.sendOutputs([output]);

    console.log(response);

    console.log(
      `Check your block on ${process.env.NODE_URL}/api/core/v2/blocks/${response.blockId}`
    );
  } catch (error) {
    console.log("Error: ", error);
  }
  process.exit(0);
}

run();
