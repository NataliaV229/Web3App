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
            Implants
          </h2>
          <p>Life is short. Smile while you still have teeth.</p>
          <p className={`w-full text-sm`}>
            Dental implant surgery is not complicated or dangerous Some people
            may think that because dental implant surgery involves implanting a
            prosthesis into the bone of the jaw, it is a complicated procedure.
            However, dental implant surgery is a routine procedure performed by
            thousands of dentists. Dental implant surgery has a success rate of
            over 98%. Anyone who is in reasonably good health and has enough
            jawbone to support a dental implant is a good candidate for the
            procedure. Dental implants are not just a cosmetic procedure. By
            restoring a person's natural ability to bite and chew, dental
            implants restore the ability to maintain a healthy diet. A study
            recently found that people who had lost five or more teeth by the
            time they turned 65 ran a higher risk of diabetes, osteoporosis and
            heart disease. Dental implants can do more than just boost a
            person's confidence or give them a bright, beautiful smile. Dental
            implants can actually help preserve and maintain health and a
            youthful appearance. Contact our office today to schedule a
            consultation.
          </p>
        </div>
      </div>

      <Footerpage />
    </main>
  );
}
