require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env"});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks:{
    mumbai:{
      url:process.env.ALCHEMY_KEY_URL,
      accounts:[process.env.MUMBAI_TESTNET_PRIVATE_KEY],
    },
  },
};


//here deploying to polyon mumbai testnet