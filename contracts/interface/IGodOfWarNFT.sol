// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IGodOfWarNFT {
    function mintNFT(string memory tokenURI) external returns (uint256);

    function burnNFT(uint256 tokenID) external;

    function getTokenURI(uint256 tokenID) external view returns (string memory);
}
