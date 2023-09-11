//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract GodOfWarNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIDs;

    constructor() ERC721("Mars God Of War", "MGW") {}

    function mintNFT(string memory tokenURI) public returns (uint256) {
        tokenIDs.increment();

        uint256 newItemId = tokenIDs.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function burnNFT(uint256 tokenID) public {
        tokenIDs.decrement();

        _burn(tokenID);
    }

    function getTokenURI(
        uint256 tokenID
    ) external view returns (string memory) {
        return tokenURI(tokenID);
    }

    function totalSupply() public view returns (uint256) {
        return tokenIDs.current();
    }
}

//QmPXBtxStUwHp1qry2VmDxVLunkS4vGRwQaAuD22jFJLwG
