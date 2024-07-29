// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Xrays is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    mapping(uint256 => string) private tokenIdToCid;

    constructor(address initialOwner)
        ERC721("Xrays", "XRY")
        Ownable(initialOwner)
    {}

//base uri doesn#t really work because of unique images with unqiue cids
//we dont know the cid ahead of time 
    function _baseURI() internal pure override returns (string memory) {
        return "";
    }

//pass in the cid from ipfs/pinata 
    function safeMint(address to, string memory cid) public {
        uint256 tokenId = _nextTokenId;
        _safeMint(to, tokenId);
        tokenIdToCid[tokenId] = cid;
        _nextTokenId++;
    }

//this function would return the ipfs hash associated with the tokenid.
    function getCid(uint256 tokenId) public returns (string memory) {
        return tokenIdToCid[tokenId];
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}