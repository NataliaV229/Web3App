import Footerpage from "@/components/footer";
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
    width: "100vw",
    height: "100%",
    color: "white",
  };

  return (
    <>
      <main className={`h-auto w-screen relative`}>
        <div
          className="w-screen h-screen absolute inset-0"
          style={backgroundImageStyle}
        ></div>
        {/* nav  */}
        <Navigation />
        {/* center text */}
        <div className="text-4xl md:text-6xl font-bold italic text-center w-full text-yellow-200 drop-shadow-lg mt-20 p-4">
          Dental Clinic Dapp
        </div>
        <div className="text-2xl md:text-4xl font-bold text-center w-full text-red p-4">
          Smile, it let's your teeth breath!
        </div>

        {/* services */}
        <div className="my-32 text-center w-full flex flex-col md:flex-row item-center justify-center gap-8 lg:text-left">
          <Link
            href="/payment/service-1"
            className="bg-black/50 backdrop-blur-md w-full max-w-xs mx-auto md:mx-0 group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-yellow-200`}>
              Teeth Whitening
            </h2>
            <p className={`m-0 w-full text-sm opacity-50`}>
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
            className="bg-black/50 backdrop-blur-md w-full max-w-xs mx-auto md:mx-0 group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-yellow-200`}>
              Implants
            </h2>
            <p className={`m-0 text-sm opacity-50`}>
              The advantages of dental implants are many. First, they help to
              preserve the natural structure of your mouth and prevent bone
              loss, which can occur when teeth are missing. Dental implants also
              provide a stable and secure foundation for replacement teeth,
              which can be especially important for people who have difficulty
              speaking or eating with traditional dentures.
            </p>
          </Link>

          <Link
            href="/payment/service-3"
            className="bg-black/50 backdrop-blur-md w-full max-w-xs mx-auto md:mx-0 group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-yellow-200`}>
              Cosmetic Dentistry
            </h2>
            <p className={`m-0  text-sm opacity-50`}>
              Aesthetic filling and cosmetic dentistry should give the grace and
              comfort of natural teeth – healthy, functional, beautiful and long
              lasting. The treatment – include tooth lightening, composite
              restorations, white composite filling – look natural, clean and
              will keep your smile looking beautiful.
            </p>
          </Link>
        </div>
        <Footerpage />
      </main>
    </>
  );
}
