const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules"); 
module.exports = buildModule("ERC20MinerReward", (m) => { 
    const mint = m.contract("ERC20MinerReward", []); 

    return { mint }; 
}); 