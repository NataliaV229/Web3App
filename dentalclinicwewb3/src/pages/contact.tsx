import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";
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
      constant: false,
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
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const Address = "0x71076cde1de7d88a7dfb1dab237e222437d2d5a0"; // Taking ss contract Address from Remix

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

    await window.contract.methods
      .setInfo(name, email, message)
      .send({ from: account, gas: 3000000 });
    alert("Your form has been submitted");
  };

  return (
    <main className={`min-h-screen w-full`} style={backgroundImageStyle}>
      {/* nav  */}
      <Navigation />

      {/* center text */}
      <div className="text-6xl font-bold text-center w-full text-black my-40 ">
        Contact
      </div>

      <form className="text-black" id="loginformid">
        <div className="">
          <input
            className="form-control"
            type="text"
            id="nameid"
            name="name"
            value={name}
            onChange={handleInputNameChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="">
          <input
            className="form-control"
            type="email"
            id="emailid"
            name="email"
            value={email}
            onChange={handleInputEmailChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="">
          <textarea
            className="form-control"
            id="messageid"
            name="messageid"
            rows={6}
            value={message}
            onChange={handleInputMessageChange}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div>
          <button className="" type="submit" onClick={SubmitForm}>
            Submit
          </button>
        </div>
      </form>

      {/* services */}
      <div className="my-32 text-center :w-full lg:mb-0 flex justify-center gap-8 lg:text-left">
        <Link
          href="/payment/service-1"
          className="bg-black/50 backdrop-blur-md w-full max-w-xs group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Teeth Whitening{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            description teeth Whitening
          </p>
        </Link>

        <a
          href="/payment/service-2"
          className="bg-black/50 backdrop-blur-md w-full max-w-xs group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Implants{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            description implants
          </p>
        </a>

        <Link
          href="/payment/service-3"
          className="bg-black/50 backdrop-blur-md w-full max-w-xs group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Cosmetic Dentistry{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            description cosmetic dentistry
          </p>
        </Link>
      </div>

      {/* footer */}
      <div className="w-full bg-black p-4 flex gap-8 mt-40">
        <div id="logo">
          Logo
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
        <div id="contacts">
          cnt
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
        <div id="about">
          about
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
      </div>
    </main>
  );
}
