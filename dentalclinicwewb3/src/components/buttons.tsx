import React, { useEffect, useState } from "react";

const TwoButtons: React.FC = () => {
  const etherscanUrl = "https://etherscan.io/address/YOUR_NFT_CONTRACT_ADDRESS";
  useEffect(() => {
    console.log("bearer:" + process.env.NEXT_PUBLIC_PINATA_JWT);
  }, []);

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

  const [file, setFile]: any = useState();
  const [pinataFile, setPinataFile]: any = useState();

  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setPinataFile(e.target.files[0]);
  }

  function mint(formData: FormData) {
    {
      /**deployed: 0xf6988E2A100ea3ab6Ab7beD0a87E8F2c7f07025b
      -link abi and contract communication.
      -cid hash from uploading to pinata, construct uri for minting
      -call mint function in the contract
      
      */
    }
  }

  const handleSubmission = async () => {
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

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      {
        /*get hash from resData*/
      }
      console.log(resData);
      {
        /*Start mint function call here*/
      }
    } catch (error) {
      console.log(error);
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
      <img src={file} />
      <input type="file" onChange={handleChange} />
      <button
        type="submit"
        onClick={handleSubmission}
        className="w-fit bg-yellow-300 text-black py-1 px-6 rounded-md"
      >
        Mint NFT
      </button>
    </div>
  );
};

export default TwoButtons;
