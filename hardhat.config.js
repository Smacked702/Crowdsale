require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
      hardhat: {
        // Configuration options
      },
      local: {
        url: "http://127.0.0.1:8545"
      }
    },
    solidity: "0.8.0",
};
