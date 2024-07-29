/**deployed: 0xf6988E2A100ea3ab6Ab7beD0a87E8F2c7f07025b
-link abi and contract communication.
-cid hash from uploading to pinata, construct uri for minting
-call mint function in the contract

*/

import { Dispatch, SetStateAction } from "react";
import Web3 from "web3";
import ABI from "../abis/xray.json";

export const handlePinataSubmission = async (
  pinataFile: any,
  setNftUrl: Dispatch<SetStateAction<any>>
) => {
  const nftAddress = "0xdD2221E39625052e9b924Fdfe5342eF8354E972b";

  try {
    const formData = new FormData();
    formData.append("file", pinataFile);
    const metadata = JSON.stringify({
      name: "DentalClinicXray",
    });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
      },
      body: formData,
    });
    const resData = await res.json();
    {
      /*get hash from resData*/
    }
    console.log("resData", resData);
    setNftUrl(resData.IpfsHash);
    {
      /*Start mint function call here*/
    }

    //mint nft
    window.web3 = new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI.abi, nftAddress);
    const contractInWindow = window.contract;
    console.log("contract: " + contractInWindow);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const userAccount = accounts[0];

    if (contractInWindow) {
      //instance.methods.test("hello_a","hello_b","hello_c").send({from:account});
      console.log("user account: " + userAccount);

      await contractInWindow.methods
        .safeMint(userAccount, resData.IpfsHash)
        .send({ from: userAccount });
    }
  } catch (error) {
    console.log(error);
  }
};

export const mintNFT = async () => {
  if (!window.ethereum) {
    alert("MetaMask is required to mint an NFT");
    return;
  }

  try {
    // Request account access if needed
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // We create a provider to interact with Ethereum
    // const provider = new ethers.providers.Web3Provider(window.ethereum);

    // We create a signer to sign transactions
    //const signer = provider.getSigner();

    /**  Replace with your contract address and ABI
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
      */

    alert("NFT minted successfully!");
  } catch (error) {
    console.error(error);
    alert("An error occurred while minting the NFT");
  }
};
