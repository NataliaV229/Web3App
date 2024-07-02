//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.6.6;

contract Transactions {

    address payable public recipient;

    //Address --> Contract -- deposit
    function deposit() external payable {
    }

    constructor() public {
        recipient= 0x65f4854b01582D2377DE5d59a9093bbC1c163c3B;
    }

    //Contract --> Address  -- withdrawal
    function withdraw(address payable _to, uint256 _amount) external payable {
        
        _to.transfer(_amount);
    }

    function test(uint256 _amount) public payable{
        this.deposit();
        this.withdraw(recipient, _amount);
    }

}