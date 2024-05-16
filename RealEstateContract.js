// src/contracts/RealEstateContract.js
import Web3 from 'web3';

const web3 = new Web3('YOUR_SOROBAN_NODE_URL'); // Replace with your actual node URL
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address

const abi = [
  // Your contract ABI (interface) here
  // Example: [{ "constant": true, "inputs": [], "name": "purchase", ... }]
];

const realEstateContract = new web3.eth.Contract(abi, contractAddress);

export default realEstateContract;
