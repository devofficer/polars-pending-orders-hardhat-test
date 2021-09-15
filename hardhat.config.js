require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_URL = 'https://rinkeby.infura.io/v3/059f00fd28f64c8ba68b1180e3e2f2ee';
const PRIVATE_KEY = '02284f6566b2459b142be102c07b86288fdcd5119b69832dc5757170be882e40';

module.exports = {
  solidity: "0.7.3",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: ['0x${PRIVATE_KEY}']
    }
  }
};
