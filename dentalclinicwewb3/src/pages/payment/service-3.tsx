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
          If you have more cavities than you have teeth, you’ve led a ‘sweet’
          life.
        </div>
      </div>
      <div className="bg-white w-full h-fit py-20 px-4 text-black">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className={`mb-3 text-2xl font-semibold text-yellow-600`}>
            Cosmetic Dentistry
          </h2>
          <p>Life is short. Smile while you still have teeth.</p>
          <p className={`w-full text-sm`}>
            There are several myths and misconceptions about cosmetic dentistry.
            Many people believe that cosmetic dentistry is only for people who
            are obsessed with their appearance. Others believe that it is both
            painful and really unnecessary. It is often thought to be only for
            the wealthy as it can be very expensive. Cosmetic dentistry is not
            just about appearance: While the primary focus of cosmetic dentistry
            is to enhance the appearance of your teeth and improve your smile,
            many procedures also improve the functionality of teeth. This can
            include fixing bite issues or improving chewing ability.
            Straightening or realigning your teeth, repairing chipped and
            cracked teeth and closing gaps can all help to improve the
            functionality of your teeth. It can be combined with other dental
            procedures: Cosmetic dentistry procedures can be combined with other
            dental treatments, such as orthodontics or periodontal therapy, to
            achieve optimal results. Digital Smile Design is a relatively new
            approach to oral care. It combines both restorative and cosmetic
            dental treatments to eliminate problems and provide you with your
            ideal new smile. If you are considering cosmetic dental solutions
            your best option is to arrange a consultation with a general and
            cosmetic dentist to find out more.
          </p>
        </div>
      </div>

      <Footerpage />
    </main>
  );
}
