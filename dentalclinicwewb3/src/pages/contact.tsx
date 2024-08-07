import Footerpage from "@/components/footer";
import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import { CSSProperties, useState } from "react";
import Web3 from "web3";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    color: "white",
  };

  // address metamask
  const ABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "email",
          type: "string",
        },
        {
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "setInfo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const Address = "0x7390366b8574b2EB39181a8D70E28dD200b70791"; // Taking ss contract Address from Remix

  const EncryptFuntion = async () => {
    if (window.web3 !== "undefined") {
      try {
        window.web3 = new Web3(window.ethereum);
        window.contract = new window.web3.eth.Contract(ABI, Address);
        console.log("logs");
      } catch (error) {
        console.error("Error web3:", error);
      }
    } else {
      console.error("error");
    }
  };

  EncryptFuntion();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleInputEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleInputMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const SubmitForm = async (e: any) => {
    e.preventDefault();
    console.log("inside func");
    var account = localStorage.getItem("account_full");
    console.log(account);

    console.log(window);
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAccount = accounts[0];
        console.log(userAccount);

        //set the contract
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const contractConst = window.contract;

        await contractConst.methods.setInfo(name, email, message).send({
          from: userAccount,
          gas: 3000000,
        });
      } catch (error) {
        console.error("Error in submitting:", error);
        alert("Error in submitting.");
      }
    } else {
      console.error("Ethereum object doesn't exist!");
    }

    /*await window.contract.methods
      .setInfo(name, email, message)
      .send({ from: account, gas: 3000000 });*/
  };

  return (
    <main className={`min-h-screen w-full`} style={backgroundImageStyle}>
      {/* nav  */}
      <Navigation />

      {/* center text */}
      <div className="text-4xl md:text-6xl font-bold text-center w-full text-yellow-200 drop-shadow-lg mt-20 p-4">
        Contact us
      </div>

      <div className="bg-white w-full h-fit py-20 px-4 text-black">
        <div className="w-full max-w-3xl mx-auto">
          <div className="w-full p-4 mb-20">
            <form className="text-black w-full max-w-md mx-auto bg-white rounded-xl p-2 md:p-4">
              <input
                className="w-full mb-2 p-2 bg-slate-200 rounded-md outline-none"
                type="text"
                id="nameid"
                name="name"
                value={name}
                onChange={handleInputNameChange}
                placeholder="Name"
                required
              />
              <input
                className="w-full mb-2 p-2 bg-slate-200 rounded-md outline-none"
                type="email"
                id="emailid"
                name="email"
                value={email}
                onChange={handleInputEmailChange}
                placeholder="Email"
                required
              />
              <textarea
                className="w-full mb-2 p-2 bg-slate-200 rounded-md outline-none"
                id="messageid"
                name="messageid"
                rows={6}
                value={message}
                onChange={handleInputMessageChange}
                placeholder="Message"
                required
              />
              <div className="w-full flex justify-end">
                <button
                  className="w-fit bg-yellow-400 py-1 px-6 rounded-md"
                  type="submit"
                  onClick={SubmitForm}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footerpage />
    </main>
  );
}
