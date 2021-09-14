const { ethers } = require("ethers");
let secretsManager = require("./secretsManager.js");
let {
  config,
  network,
  gasPrice,
  numberOfWinners,
  winnerAmount,
} = require("./config.js");
let receivers = require("./recipients.json");

const erc20Abi = [
  "function transfer(address to, uint amount) returns (bool) @100000",
];

const transferToRandomAttendees = async () => {
  console.log("Start transfer");

  let provider = await new ethers.providers.JsonRpcProvider(
    config[network].providerUrl
  );

  let wallet = await new ethers.Wallet.fromMnemonic(secretsManager.mnemonic);

  wallet = wallet.connect(provider);

  const defaultOptions = { gasPrice };

  console.log("Get DAI contract");

  let dai = new ethers.Contract(config[network].daiAddress, erc20Abi, wallet);
  console.log("DAI contract setup:", dai.address);

  const getUniqueRandomReceiver = () => {
    // TODO
    return receivers[0];
  };

  let winnersCount = 0;
  while (winnersCount < numberOfWinners) {
    // && receivers.length
    try {
      console.log("-------New tx attempt-------");
      let receiver = getUniqueRandomReceiver();
      console.log("Transfering to: ", receiver);
      let receiverMaticBalance = await provider.getBalance(receiver);
      console.log(
        receiver,
        " - Matic balance: ",
        receiverMaticBalance.toString()
      );
      let receiverHasMatic = receiverMaticBalance > 0;
      console.log("receiverHasMatic: ", receiverHasMatic);
      if (receiverHasMatic) {
        let amount = ethers.utils.parseEther(winnerAmount);
        let tx = await dai.functions.transfer(receiver, amount, defaultOptions);
        console.log("Transaction hash: ", tx.hash);
        console.log("Active winner count: ", winnersCount);
        console.log("-------------------");
        winnersCount++;
      }
    } catch (e) {
      console.log("-------------------");
      console.log("ERROR");
      console.log(e);
      console.log("-------------------");
    }
  }
};

transferToRandomAttendees();
