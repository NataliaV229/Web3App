import Footerpage from "@/components/footer";
import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Service3() {
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
      <div className="text-4xl md:text-6xl font-bold italic text-center w-full text-yellow-200 drop-shadow-lg mt-20 p-4">
        Dental Clinic - dApp
      </div>
      <div className="text-2xl md:text-2xl font-bold text-yellow-200 text-center w-full text-red p-4">
        Everyone deserves to be healthy!
      </div>
      <div className="bg-black/50 backdrop-blur-md w-full  rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold text-yellow-200 p-4`}>
          Cosmetic Dentistry
          <p>
            If you have more cavities than you have teeth, you’ve led a ‘sweet’
            life
          </p>
        </h2>
        <p className={`m-0 w-full text-sm opacity-50`}>
          There are several myths and misconceptions about cosmetic dentistry.
          Many people believe that cosmetic dentistry is only for people who are
          obsessed with their appearance. Others believe that it is both painful
          and really unnecessary. It is often thought to be only for the wealthy
          as it can be very expensive. Cosmetic dentistry is not just about
          appearance: While the primary focus of cosmetic dentistry is to
          enhance the appearance of your teeth and improve your smile, many
          procedures also improve the functionality of teeth. This can include
          fixing bite issues or improving chewing ability. Straightening or
          realigning your teeth, repairing chipped and cracked teeth and closing
          gaps can all help to improve the functionality of your teeth. It can
          be combined with other dental procedures: Cosmetic dentistry
          procedures can be combined with other dental treatments, such as
          orthodontics or periodontal therapy, to achieve optimal results.
          Digital Smile Design is a relatively new approach to oral care. It
          combines both restorative and cosmetic dental treatments to eliminate
          problems and provide you with your ideal new smile. If you are
          considering cosmetic dental solutions your best option is to arrange a
          consultation with a general and cosmetic dentist to find out more.
        </p>
      </div>
      <br />
      <Footerpage />
    </main>
  );
}
