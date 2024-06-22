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
            Clinic we believe in a more personal approach to dentistry, an
            approach that is focussed on service and expertise and puts the
            patient first. We are proud to be a centre of clinical excellence,
            providing the best dental care to suit you, not only as a patient,
            but also a person. We provide care for all age groups and are
            committed to providing quality dentistry in a safe environment.
            Whatever your needs – we can find a solution. A visit to Fresh
            Dental & Implant Clinic will be a pleasant surprise, we look forward
            to welcoming you.
          </p>
        </Link>
      </div>

      {/* footer */}
      <div
        className="w-full bg-blue
       p-4 flex gap-8 mt-40"
      >
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
