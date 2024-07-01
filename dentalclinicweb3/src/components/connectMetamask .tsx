// components/ConnectMetamask.tsx
import { useState } from "react";

const ConnectMetamask = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAccount = accounts[0];
        setAccount(userAccount);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      console.error("Ethereum object doesn't exist!");
    }
  };

  return (
    <div className="w-fit overflow-x-auto mx-auto md:mx-0">
      <button
        onClick={connectMetamask}
        className="justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 hover:opacity-80 "
      >
        {!account && "Sign In to Metamask"}
        {account && `User Account: ${account}`}
      </button>
    </div>
  );
};

export default ConnectMetamask;
