import { ethers } from "ethers";
import React from "react";

const TwoButtons: React.FC = () => {
  const etherscanUrl = "https://etherscan.io/address/YOUR_NFT_CONTRACT_ADDRESS";

  const mintNFT = async () => {
    if (!window.ethereum) {
      alert("MetaMask is required to mint an NFT");
      return;
    }

    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // We create a provider to interact with Ethereum
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // We create a signer to sign transactions
      const signer = provider.getSigner();

      // Replace with your contract address and ABI
      //const contractAddress = "YOUR_NFT_CONTRACT_ADDRESS";
      //const contractABI = [
      // Replace this array with your contract ABI
      //];

      // Create a new contract instance
      // const nftContract = new ethers.Contract(
      // contractAddress,
      //contractABI,
      //signer
      //);

      // Call the mint function (replace 'mint' with your contract's minting function)
      //const tx = await nftContract.mint();
      //await tx.wait();

      alert("NFT minted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while minting the NFT");
    }
  };

  return (
    <div className="flex justify-center space-x-4">
      <a
        href={etherscanUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit bg-yellow-300 text-black py-1 px-6 rounded-md"
      >
        View on Etherscan
      </a>
      <button
        onClick={mintNFT}
        className="w-fit bg-yellow-300 text-black py-1 px-6 rounded-md"
      >
        Mint NFT
      </button>
    </div>
  );
};

export default TwoButtons;
