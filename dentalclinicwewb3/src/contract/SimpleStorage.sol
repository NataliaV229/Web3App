pragma solidity ^0.5.17;

contract FavouriteStorage {
    string Name;
    string Email;
    string Message;

    function setInfo(string memory name, string memory email, string memory message) public {
        Name = name;
        Email = email;
        Message = message;
    }
}