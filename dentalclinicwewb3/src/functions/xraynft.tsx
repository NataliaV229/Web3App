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
  const nftAddress = "0x5D1aaFE2CDBF35832B8051995ffa64151aAc9952";

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

    alert("NFT minted successfully!");
  } catch (error) {
    console.error(error);
    alert("An error occurred while minting the NFT");
  }
};
