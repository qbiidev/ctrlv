/**
 * This example builds an output.
 */

const getUnlockedManager = require("./account-manager");

async function run() {
  try {
    const manager = await getUnlockedManager();
    const account = await manager.getAccount("Alice");

    //TODO: Replace with the address of your choice!
    const recipientAddress =
      "rms1qpfz42rvmlsmnwykt57ahj9gk2kklhnhftf2qcc82qat2uwhjtv8y2xp6dl";
    const amount = "1000";
    const output = await account.prepareOutput({
      recipientAddress,
      amount,
    });
    const minimumRequiredStorageDeposit =
      await account.minimumRequiredStorageDeposit(output);

    const ddd = await account.unspentOutputs();
    console.log({ ddd: ddd[0] });

    // const response = await account.sendOutputs([output]);
    // console.log("Output response:", response);
    console.log("Output:", JSON.stringify(output));
    console.log(
      "Minimum required storage deposit:",
      minimumRequiredStorageDeposit
    );
  } catch (error) {
    console.log("Errors: ", error);
  }
  process.exit(0);
}

run();
