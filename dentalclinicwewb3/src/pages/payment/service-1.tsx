import ConnectContractBtn from "@/components/connectContract";
import Footerpage from "@/components/footer";
import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Service1() {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100%",
    color: "white",
  };

  return (
    <main className={`h-auto w-screen relative`}>
      <div className="w-screen h-fit pb-20" style={backgroundImageStyle}>
        {/* nav  */}
        <Navigation />

        {/* center text */}
        <div className="text-4xl md:text-6xl font-bold italic text-center text-yellow-300 bg-white shadow-lg w-fit mx-auto drop-shadow-lg mt-20 p-4 mb-4">
          Dental Clinic- dApp
        </div>
        <div className="text-2xl md:text-2xl font-bold text-black bg-white shadow-lg text-center w-fit mx-auto text-red px-4 py-1">
          Everyone deserves to be healthy!
        </div>
      </div>
      <div className="bg-white w-full h-fit py-20 px-4 text-black">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className={`mb-3 text-2xl font-semibold text-yellow-600`}>
            Whitening
          </h2>
          <p>
            The toothbrush doesn't remove six months of tartar 30 min before
            your dental appointment!
          </p>
          <p className={`w-full text-sm`}>
            Your teeth and smile are some of the most applealing parts of your
            body. Nothing is more welcoming than a bright and clean smile. For
            over 37% of the people the first thing they notice about a person is
            their smile, which is why to keep teeth looking healthy is very
            important. Whitening one of the most popular cosmetic dentistry
            procedure and safest teeth whitening is with the dentist or
            hygienist in the clinic. Opalescence is a brand from the USA that is
            primarily focused on achieving whiter teeth. The Opalescence Boost
            Whitening is quick, simple and affordable to accommodate your
            individualized budget and lifestyle. Teeth whitening appears to be a
            beauty trend sticking around for 2024, as we all aim to attain the
            perfect smile. With this in mind, we’ve been putting the best teeth
            whitening kits to the test, be that gels, powders or strips. Teeth
            discolouration is never fun and can affect people’s confidence.
            We’ve all been there, right? It’s a problem caused by years of
            drinking tea, coffee, juice and wine, and can even be caused by some
            medicines. Many people go to their dentist for a spot of teeth
            whitening but if you’re someone who finds this a slightly more
            extreme way of getting pearly whites, you’ll be glad to hear there
            are some quick and easy DIY teeth whitening kits available to use at
            home.
          </p>
          <div className="mt-4 w-full flex gap-4 justify-between items-center">
            <p className="font-semibold text-lg">
              Price: <span className="text-blue-600">1 ETH</span>
            </p>
            <button
              type="button"
              className="bg-yellow-300 px-4 py-2 rounded-full shadow-md hover:opacity-80"
            >
              Proceed to Pay
            </button>
            <ConnectContractBtn />
          </div>
        </div>
      </div>

      <Footerpage />
    </main>
  );
}
