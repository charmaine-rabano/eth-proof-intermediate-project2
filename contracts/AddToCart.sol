// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

/*
    Create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application.
*/

contract AddToCart {

    string[] public cart;

    function getCart() public view returns(string[] memory) {
        return cart;
    }

    function addItem(string memory _item) public {
        cart.push(_item);
    }

    function deleteLastItem() public {
        assert(cart.length > 0);
        cart.pop();
    }
}