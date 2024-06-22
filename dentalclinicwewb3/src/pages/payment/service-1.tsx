import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Service1() {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage:
      "url(https://media.istockphoto.com/id/640128314/photo/teenage-girl-looking-at-her-teeth-in-the-mirror.jpg?s=612x612&w=0&k=20&c=DK0iN0bE_daYmXSvKtNXIilSYg5TWJnszIaeVsmExwk=)",
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
      <div className="text-4xl font-bold italic text-center w-full text-white my-40">
        Teeth Whitening
      </div>

      {/* services */}
      <div className="my-32 text-center :w-full lg:mb-0 flex justify-center gap-8 lg:text-left">
        <Link
          href="/payment/service-1"
          className="bg-black/50 backdrop-blur-md w-full max-w-xs group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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

        <Link
          href="/payment/service-2"
          className="bg-black/50 backdrop-blur-md w-full max-w-xs group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
        </Link>

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
