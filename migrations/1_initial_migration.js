var Migrations = artifacts.require("./DIR_contract.sol");

module.exports = function(deployer) {
  deployer.deploy(DIR_contract);
};
