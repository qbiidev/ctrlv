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

    // TODO: Replace with the address of your choice!
    // const address =
    //   "rms1qqpvpcpcc3zkttf9fgq0rvhmttnz3wvytst3hregzwkrf5szz3ywvz8u2pt";
    // const amount = "1000000";

    // const preparedTransaction = await account.prepareSendAmount([
    //   {
    //     address,
    //     amount,
    //   },
    // ]);

    // const signedTransactionEssence = await account.signTransactionEssence(
    //   preparedTransaction
    // );

    // console.log({
    //   preparedTransaction: preparedTransaction.essence.outputs,
    //   signedTransactionEssence: JSON.stringify(signedTransactionEssence),
    // });

    const data =
      '{"transactionPayload":{"type":6,"essence":{"type":1,"networkId":"1856588631910923207","inputs":[{"type":0,"transactionId":"0xb194ad9a4e53cadc278a281e0f37f366c24a578a2839d36366107bbc2135ad14","transactionOutputIndex":1}],"inputsCommitment":"0x003f83b23cfee86e05264f184429ab175b4eef1a305bef88960ecc185352c6f5","outputs":[{"type":3,"amount":"1000000","unlockConditions":[{"type":0,"address":{"type":0,"pubKeyHash":"0x02c0e038c44565ad254a00f1b2fb5ae628b9845c171b8f2813ac34d2021448e6"}}]},{"type":3,"amount":"1000000","unlockConditions":[{"type":0,"address":{"type":0,"pubKeyHash":"0xf3467f0e33d6d28be235cd3bc64606840f0fc4f22eed6abc2f1abd03a7e44d66"}}]}]},"unlocks":[{"type":0,"signature":{"type":0,"publicKey":"0x10546f6c8e781354632508048251c1f983a5f314d1e5285a2e35fceff41af796","signature":"0x933f8588d9922a6125afd087592d98f4310c588b361345dfb86db8a7d57c3b607a7033a810e3c48b1ad5de8c1e2db3993e383e4cce108fdfa319c8e1f003b405"}}]},"inputsData":[{"output":{"type":3,"amount":"2000000","unlockConditions":[{"type":0,"address":{"type":0,"pubKeyHash":"0xf3467f0e33d6d28be235cd3bc64606840f0fc4f22eed6abc2f1abd03a7e44d66"}}]},"outputMetadata":{"blockId":"0xfd27af85ab67dade218165386a294f24c413205647852ffb08d9a11a3e39bf6f","transactionId":"0xb194ad9a4e53cadc278a281e0f37f366c24a578a2839d36366107bbc2135ad14","outputIndex":1,"isSpent":false,"milestoneIndexBooked":5960310,"milestoneTimestampBooked":1688314356,"ledgerIndex":5960315},"chain":[{"hardened":true,"bs":[128,0,0,44]},{"hardened":true,"bs":[128,0,16,123]},{"hardened":true,"bs":[128,0,0,1]},{"hardened":true,"bs":[128,0,0,0]},{"hardened":true,"bs":[128,0,0,0]}]}]}';

    const response = await account.submitAndStoreTransaction(JSON.parse(data));

    console.log({ response });
  } catch (error) {
    console.log("Error: ", error);
  }
  process.exit(0);
}

run();
