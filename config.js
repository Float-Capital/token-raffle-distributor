// Config to set which network
const network = "mumbai";

const numberOfWinners = 20;
const winnerAmount = "50.0";

const config = {
  mumbai: {
    providerUrl: "https://rpc-mumbai.matic.today",
    daiAddress: "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F",
    gasPrice: 1000000000, // TODO
  },
  polygon: {
    providerUrl: "https://polygon-rpc.com",
    daiAddress: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    gasPrice: 1000000000, // TODO
  },
};

module.exports = { config, network, numberOfWinners, winnerAmount };
