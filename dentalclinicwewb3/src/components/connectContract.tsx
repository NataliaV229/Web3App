// components/ConnectMetamask.tsx
import { useState } from "react";
import Web3 from "web3";

const ConnectContractBtn = () => {
  const [contractAccount, setContractAccount] = useState<string | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  const connectMetamask = async () => {
    console.log(window);
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAccount = accounts[0];
        setAccount(userAccount);
        connectContract(userAccount);
        console.log(userAccount);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      console.error("Ethereum object doesn't exist!");
    }
  };

  const connectContract = async (userAccount: string | null) => {
    const ABI = [
      {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "test",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "recipient",
        outputs: [
          {
            internalType: "address payable",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];

    const Address = "0x7bF8B3F9D132e8CcF7bE3C4c74d1D1da4F44c1B9"; // Taking Address from Remix
    window.web3 = new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    const contractConst = window.contract;
    console.log("Contract connected");
    //getContractAccount(userAccount, contractConst);
    console.log("userAccount from CC", userAccount);
    //
    if (contractConst) {
      try {
        await contractConst.methods.deposit().send({
          from: userAccount,
          value: Web3.utils.toWei("0.1".toString(), "ether"),
        });
        alert("ETH sent successful thanks for donating!");
      } catch (error) {
        console.error("Error in withdrawing:", error);
        alert("Error in withdrawing.");
      }
    } else if (account === null) {
      alert(`Please enter the amount to donate`);
    } else {
      alert(`Please connect your wallet`);
    }
  };

  const getContractAccount = async (
    userAccount: string | null,
    contractConst: any
  ) => {
    //const data = await window.contract.methods.getAddress().call();
    //setContractAccount(data);
    // depositContract(userAccount, contractConst);
    console.log("userAccount from CA", userAccount);
  };

  const depositContract = async () => {
    const amount = 0.004;

    if (typeof window === "undefined") {
      console.log(
        "Window object is not available, function can only run in the browser."
      );
      return;
    }

    if (!account) {
      console.log("Account not connected");
      return;
    }

    try {
      if (window.contract && window.contract.methods) {
        await window.contract.methods
          .deposit()
          .send({ from: account, value: amount });
      } else {
        console.log("Contract methods are not available on the window object.");
      }
    } catch (error: any) {
      if (typeof error === "string") {
        console.error("Error while depositing:", error);
      } else if (error.message) {
        console.error("Error message:", error.message);
        if (error.message.startsWith("e.startsWith")) {
          console.error(
            "The error seems to be related to an invalid call to 'startsWith'."
          );
        }
      } else if (error instanceof Error) {
        console.error("An error occurred:", error);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }

    console.log("userAccount from DC", account);
  };

  return (
    <div className="w-fit overflow-x-auto mx-auto md:mx-0">
      <button
        onClick={connectMetamask}
        className="justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 hover:opacity-80 "
      >
        Pay
      </button>
      <button
        onClick={depositContract}
        className="justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 hover:opacity-80 "
      >
        ok
      </button>
      {account && `User Account: ${account}`}
      <p>Contract: {contractAccount}</p>
    </div>
  );
};

export default ConnectContractBtn;
