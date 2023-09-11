import { ethers, run, network } from "hardhat";
const { verify } = require("../utils/verify");

async function main() {
  const godOfWarNFTContract = await ethers.deployContract("GodOfWarNFT");

  console.log("=========Deploying GodOfWarNFTContract================");

  await godOfWarNFTContract.waitForDeployment();
  console.log(`GodOfWarNFTContract deployed to: ${godOfWarNFTContract.target}`); //

  if (
    network.config.chainId === 11155111 ||
    (5 && process.env.ETHERSCAN_API_KEY)
  ) {
    console.log("Waiting for block confirmations...");

    //wait for 10 block confirmations before verifying the transaction
    // @ts-ignore
    await godOfWarNFTContract.waitForDeployment(10);
    await verify(godOfWarNFTContract.target, []);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// https://ipfs.io/ipfs/QmPXBtxStUwHp1qry2VmDxVLunkS4vGRwQaAuD22jFJLwG
