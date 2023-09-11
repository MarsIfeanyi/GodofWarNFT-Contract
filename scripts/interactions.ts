import { ethers } from "hardhat";

async function main() {
  // INTERACTIONS

  const deployedGodOfWarNFTContractAddress =
    "0x06448574948e481E395C702B65e13bB23C2f5aeF";

  const tokenURI1 =
    "https://ipfs.io/ipfs/QmUXSbJAV4JhWRbn88WokTmuTEmJMxJ1WkgWKztJ1HMTBb";

  const tokenURI2 =
    "https://ipfs.io/ipfs/QmcoYP1kgfAME28rbkPFjVC57wMt7pQBYhwxFon4k5sSyv";

  const godOfWarNFT = await ethers.getContractAt(
    "IGodOfWarNFT",
    deployedGodOfWarNFTContractAddress
  );

  console.log("============MINTING NFT==============");

  const txReceipt = await godOfWarNFT.mintNFT(tokenURI2);

  // console.log(txReceipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
