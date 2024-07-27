import Footerpage from "@/components/footer";
import Gallery from "@/components/gallery"; // Import the Gallery component
import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100%",
    color: "white",
  };

  // Example images for the gallery
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2019/04/13/22/38/xray-4125802_1280.jpg",
      alt: "Placeholder Image 1",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/28/12/23/x-ray-961977_1280.jpg",
      alt: "Placeholder Image 2",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/02/09/07/06/xray-4832140_1280.jpg",
      alt: "Placeholder Image 3",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/04/13/22/38/xray-4125793_1280.jpg",
      alt: "Placeholder Image 3",
    },
  ];

  return (
    <main className={`h-auto w-screen relative`}>
      <div className="w-screen h-fit pb-20" style={backgroundImageStyle}>
        {/* nav */}
        <Navigation />

        {/* center text */}
        <div className="text-4xl md:text-6xl font-bold italic text-center text-yellow-300 bg-white shadow-lg w-fit mx-auto drop-shadow-lg mt-20 p-4 mb-4">
          About Us
        </div>
        <div className="text-2xl md:text-2xl font-bold text-black bg-white shadow-lg text-center w-fit mx-auto text-red px-4 py-1">
          "Web3 technology is the future of the internet, where data is owned by
          users not by corporations"
        </div>
      </div>

      <div className="bg-white w-full h-fit py-20 px-4 text-black">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className={`mb-3 text-2xl font-semibold text-yellow-600`}>
            Why WEB3
          </h2>
          <p>
            WEB3 is the World Wide Web of the crypto-sphere, and a web3
            application is build using Blockchain Technology. You can connect to
            a web3 app with a crypto wallet. It provides users with more control
            over their data and content. It can create the operational
            efficiency, patient experience, data security, and transparency of
            dental practices. The data that is submitted is safe, also the
            patient is not required to submit any personal information. All you
            need is a WEB3 Wallet. Web3 apps have a few benefits over
            traditional apps.
          </p>
          <br />
          <h2 className={`mb-3 text-2xl font-semibold text-yellow-600`}>
            What are the benefits?
          </h2>
          <p>
            Web3 apps allows you to control your personal data. When using a
            web3 app, all it needs is a connection to a crypto-wallet, so that
            the personal data isn't collected or stored by the web3 app because
            it never has access to it. Web3 apps are deployed on decentralized
            blockchains. A traditional app, for instance, operates on a single,
            central server. If that server goes down, then you won't be able to
            access that app. The application can improve the patient experience,
            optimize operations and to provide innovations to this healthcare
            domain. Blockchain technology protects patients’ data minimizing the
            risk of breaches / losses. Patient can be confident that their
            information is handled with transparency. Blockchain facilitates
            secure and efficient data sharing between different healthcare
            providers, labs, and insurance companies, improving coordination and
            continuity of care. Innovative Payment Systems - Cryptocurrency
            Payments, and Loyalty Programs - Dental Clinics reward their
            patients for maintaining regular check-ups.
          </p>
        </div>
      </div>

      <div className="bg-white py-10 px-4 text-center">
        <Gallery images={images} /> {/* Add the Gallery component here */}
      </div>

      <Footerpage />
    </main>
  );
}
