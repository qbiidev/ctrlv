/**
 * This example gets the balance for an account
 */

const getUnlockedManager = require("./account-manager");

async function run() {
  try {
    const manager = await getUnlockedManager();
    const account = await manager.getAccount("Alice");
    const accounts = await manager.getAccount("1");
    console.log({ account, accounts: accounts.meta.publicAddresses });

    const addressObject = await account.addresses();
    console.log("Addresses before:", addressObject);

    // Always sync before calling getBalance()
    const synced = await account.sync();
    // console.log("Syncing... - ", synced);

    console.log("Available balance", await account.getBalance());

    const transactions = await account.pendingTransactions();

    console.log({ transactions });

    // transactions.forEach((txn) => {
    //   console.log({ txn: txn.inputs[0].metadata });
    // });

    console.log({
      account: account.meta.addressesWithUnspentOutputs[0],
    });
    const hex = await manager.bech32ToHex(
      "rms1qqpvpcpcc3zkttf9fgq0rvhmttnz3wvytst3hregzwkrf5szz3ywvz8u2pt"
    );
    console.log("Hex encoded address: ", hex);

    // Convert the hex encoded address back to bech32
    const bech32 = await manager.hexToBech32(hex);
    console.log("Bech32 encoded address: ", bech32);

    // Use the Faucet to send testnet tokens to your address:
    console.log(
      "Fill your address with the Faucet: https://faucet.testnet.shimmer.network"
    );
  } catch (error) {
    console.log("Error: ", error);
  }
  process.exit(0);
}

run();
