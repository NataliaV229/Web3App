// components/ConnectMetamask.tsx
import { Dispatch, SetStateAction, useState } from "react";
import Web3 from "web3";
import ABI from "../abis/xray.json";
import { handlePinataSubmission } from "../functions/xraynft";

interface ServiceProps {
  setConfirmed: Dispatch<SetStateAction<any>>;
  setShowLoyalty: Dispatch<SetStateAction<any>>;
  setShowForm: Dispatch<SetStateAction<any>>;
  showLoyalty: any;
  confirmed: any;
  name: any;
  email: any;
  date: any;
  nftUrl: any;
  pinataFile: any;
  setNftUrl: any;
}

const ConnectContractBtn: React.FC<ServiceProps> = ({
  setConfirmed,
  confirmed,
  name,
  email,
  date,
  nftUrl,
  showLoyalty,
  setShowLoyalty,
  setShowForm,
  pinataFile,
  setNftUrl,
}) => {
  const [account, setAccount] = useState<string | null>(null);
  const [paid, setPaid] = useState<boolean>(false);
  const [paymentLoading, setPaymentLoading] = useState<boolean>(false);
  const [nftCid, setNftCid] = useState<string>("");

  console.log({ name: name, email: email, date: date, nftUrl: nftUrl });

  const connectMetamask = async (setNftUrl: Dispatch<SetStateAction<any>>) => {
    handlePinataSubmission(pinataFile, setNftUrl); //start function Mint NFT
    console.log(window);
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAccount = accounts[0];
        setAccount(userAccount);
        console.log("userAccount", userAccount);
        setConfirmed(true);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      console.error("Ethereum object doesn't exist!");
    }
  };

  const getCidFromContract = async () => {
    window.web3 = new Web3(window.ethereum);
    const nftAddress = "0x5D1aaFE2CDBF35832B8051995ffa64151aAc9952";
    window.contract = await new window.web3.eth.Contract(ABI.abi, nftAddress);
    const contractInWindow = window.contract;
    console.log("getcid nft contract: " + contractInWindow.address);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const userAccount = accounts[0];

    if (contractInWindow) {
      //instance.methods.test("hello_a","hello_b","hello_c").send({from:account});
      console.log("user account: " + userAccount);

      const cidFromChain = await contractInWindow.methods
        .getCid()
        .call({ from: userAccount });
      console.log("got cid from chain: " + cidFromChain);

      setNftCid(cidFromChain);
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
        await contractConst.methods
          .deposit()
          // .setInfo(name, email, date, nftUrl)
          .send({
            from: userAccount,
            value: Web3.utils.toWei("0.1".toString(), "ether"),
          });
        setPaid(true);
        setPaymentLoading(true);
        getCidFromContract();

        setShowLoyalty(true);
        // alert("Thank you!");
      } catch (error) {
        console.error("Error in withdrawing:", error);
        alert("Error in withdrawing.");
      }
    } else if (account === null) {
      alert(`Error`);
    } else {
      alert(`Please connect your wallet`);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <a
          href={"https://gold-defeated-ferret-37.mypinata.cloud/ipfs/" + nftCid}
          target="_blank"
          className="bg-yellow-300 px-4 py-2 rounded-full shadow-md hover:opacity-80"
        >
          View Minted Xray
        </a>

        {confirmed ? (
          !paid && (
            <button
              onClick={() => {
                connectContract(account), setPaymentLoading(true);
              }}
              type="button"
              disabled={paymentLoading}
              className="bg-yellow-300 px-4 py-2 rounded-full shadow-md hover:opacity-80"
            >
              {paymentLoading ? "Loading..." : "Proceed to Pay"}
            </button>
          )
        ) : (
          <>
            <button
              onClick={() => setShowForm(false)}
              type="button"
              className="px-4 py-2 rounded-full hover:opacity-80"
            >
              Cancel
            </button>
            <button
              onClick={() => connectMetamask(setNftUrl)}
              type="button"
              className="bg-yellow-300 px-4 py-2 rounded-full shadow-md hover:opacity-80"
            >
              Confirm
            </button>
          </>
        )}
      </div>
      {account && (
        <div className="w-full pt-4 mt-4 border-t">
          <p>Connected with account: {account}</p>
        </div>
      )}
    </div>
  );
};

export default ConnectContractBtn;
