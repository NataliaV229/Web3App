// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract xray is ERC721, Ownable {
    uint256 private _tokenIdCounter;
    uint256 public MAX_SUPPLY = 10; // set max total supply
    uint256 public maxMintsPerUser = 2; // max mints per user

    string public baseTokenURI;
    mapping(address => uint256) private _mintsPerUser;

    constructor() ERC721("{Collection-Name}", "{Collection-Symbol}") Ownable(msg.sender) {}

    function mintTo(address to) public payable returns (uint256) {
        require(_tokenIdCounter < MAX_SUPPLY, "max NFTs already minted");
        require(_mintsPerUser[to] < maxMintsPerUser, "exceeded max");
        
        _tokenIdCounter++;
        _safeMint(to, _tokenIdCounter);
        _mintsPerUser[to]++;

        return _tokenIdCounter;
    }

    function setMaxMintsPerUser(uint256 maxMints) external onlyOwner {
        maxMintsPerUser = maxMints;
    }

    function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }
}