require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-etherscan"); // to verify the contract
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY_MAINNET}`,
      accounts: [`0x${process.env.MAINNET_PRIVATE_KEY}`],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [`0x${process.env.MAINNET_PRIVATE_KEY}`]
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_MAINNET}`,
      accounts: [`0x${process.env.POLYGON_MAINNET_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHSCAN_KEY
  }
};
