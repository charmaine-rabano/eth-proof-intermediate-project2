# Smart Contract Frontend Integration (ETH Proof Intermediate Project 2)

This program integrates a Solidity smart contract into a React frontend. 

This program was created as a project for the [Metacrafters ETH Proof Intermediate course](https://academy.metacrafters.io/content/solidity-intermediate).

## Description

The application allows the user to connect their Metamask wallet and then add or delete items into a cart that is stored in the blockchain and displayed in the frontend.

The Solidity smart contract has 3 functions: `getCart()` to get the cart array stored in the blockchain, `addItem()` to add the item entered by the user, and `deleteLastItem()` to delete the last item in the cart.

The React frontend connects to this contract and calls its functions to display the cart items and to modify the cart when the user clicks on the "Add item" and "Delete last item" buttons.

## Getting Started

### Executing program

To run the smart contract alone, you can use [Remix](https://remix.ethereum.org/), an online Solidity IDE.

To run entire application, run the following in the project directory:

1. `npm install`
    - Installs dependencies
2. `npx hardhat node`
    - Creates a local Ethereum node on your computer
3. `npx hardhat run --network localhost scripts/deploy.js`
    - Deploys the contract on the local node using the deploy.js script
4. `npm start` (in the "frontend" directory)
    - Runs the frontend

## Video Walkthrough

Here's a video of me explaining my solution: [Video walkthrough](https://drive.google.com/file/d/1hqwyMY39hdzqIsE62ipGVxcM1vJGyYoc/view?usp=sharing)

## Author

Charmaine Eunice Rabano
