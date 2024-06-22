import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <div className="text-6xl font-bold text-center w-full text-yellow my-40 ">
        Dental Clinic Dapp
      </div>
      <div className="text-4xl font-bold text-center w-full text-red my-40">
        Smile, it let's your teeth breath!
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
            Whitening one of the most popular cosmetic dentistry procedure and
            safest teeth whitening is with the dentist or hygienist in the
            clinic. Opalescence is a brand from the USA that is primarily
            focused on achieving whiter teeth. The Opalescence Boost Whitening
            is quick, simple and affordable to accommodate your individualized
            budget and lifestyle.
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
            The advantages of dental implants are many. First, they help to
            preserve the natural structure of your mouth and prevent bone loss,
            which can occur when teeth are missing. Dental implants also provide
            a stable and secure foundation for replacement teeth, which can be
            especially important for people who have difficulty speaking or
            eating with traditional dentures.
          </p>
        </Link>

        <Link
          href="/payment/service-3"
          className="bg-black/50 backdrop-blur-md w-full max-w-xs group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Cosmetic Dentistry{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Aesthetic filling and cosmetic dentistry should give the grace and
            comfort of natural teeth – healthy, functional, beautiful and long
            lasting. The treatment – include tooth lightening, composite
            restorations, white composite filling – look natural, clean and will
            keep your smile looking beautiful.
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
