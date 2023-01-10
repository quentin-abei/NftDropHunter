const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const nftDrop = await ethers.getContractFactory("NftDrop");
  const NftDrop = await nftDrop.deploy();
  console.log("deploying NftDrop.....");
  await NftDrop.deployed();

  console.log("NftDrop deployed at; ", NftDrop.address);

  console.log( await NftDrop.owner());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
