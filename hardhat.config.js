require("@nomiclabs/hardhat-waffle");

module.exports = {

  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url:'https://polygon-mumbai.g.alchemy.com/v2/_y1UTW2L38QpFnG6zui4OXSZTN0Sz3XR',
      accounts:['5372d48a461bf3717181349fe85f88b10c42cc6ab0d7ba8a890eb3aa680ad78f']
    }
  },


  solidity: "0.8.4",
};
