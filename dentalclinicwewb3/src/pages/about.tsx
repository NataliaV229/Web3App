import Footerpage from "@/components/footer";
import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    color: "white",
  };

  return (
    <main className={`min-h-screen w-full`} style={backgroundImageStyle}>
      {/* nav  */}
      <Navigation />

      {/* center text */}
      <div className="text-6xl font-bold text-center w-full text-black my-40">
        Dental Clinic Dapp
      </div>

      {/* services */}
      <div className="my-32 text-center :w-full lg:mb-0 flex justify-center gap-8 lg:text-left">
        <Link
          href="/payment/service-3"
          className="bg-black/50 backdrop-blur-md w-full max-w-xs group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About Dental Clinic DApp{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
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
        </Link>
      </div>

      <Footerpage />
    </main>
  );
}
