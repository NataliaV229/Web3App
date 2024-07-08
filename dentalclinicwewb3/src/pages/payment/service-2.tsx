import BookingForm from "@/components/bookingForm";
import ConnectContractBtn from "@/components/connectContract";
import Footerpage from "@/components/footer";
import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import { CSSProperties, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Service2() {
  const [showForm, setShowForm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [showLoyalty, setShowLoyalty] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
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
          <div className="mt-4 w-full flex gap-4 justify-between items-center">
            <p className="font-semibold text-lg">
              Price: <span className="text-blue-600">1 ETH</span>
            </p>
            {!showForm && (
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="bg-yellow-300 px-4 py-2 rounded-full shadow-md hover:opacity-80"
              >
                Book Now
              </button>
            )}
          </div>
          {showForm && (
            <div className="w-full max-w-md mx-auto border rounded-lg shadow-md p-4 mt-4">
              {confirmed ? (
                <div className="w-full mb-4">
                  <h2>Booking details:</h2>
                  <p>Service: Whitening</p>
                  <p>Customer: {name}</p>
                  <p>Customer email: {email}</p>
                  <p>Booking date: {date}</p>
                </div>
              ) : (
                <BookingForm
                  setName={setName}
                  setEmail={setEmail}
                  setDate={setDate}
                  name={name}
                  email={email}
                  date={date}
                />
              )}
              <ConnectContractBtn
                confirmed={confirmed}
                setConfirmed={setConfirmed}
                name={name}
                email={email}
                date={date}
                showLoyalty={showLoyalty}
                setShowLoyalty={setShowLoyalty}
                setShowForm={setShowForm}
              />
            </div>
          )}
          {showLoyalty && (
            <div className="w-full border rounded-lg shadow-md p-4 mt-4 text-center max-w-md mx-auto bg-yellow-50">
              <h2 className="font-bold text-2xl">
                Thank You for the booking with us!
              </h2>
              <p className="text-lg">
                Get 0.0002 ETH with our Loyalty Program!
              </p>
              <div className="w-full flex justify-center gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowLoyalty(false), setShowForm(false);
                  }}
                  className="bg-yellow-300/10 px-4 py-2 rounded-full shadow-md hover:opacity-80"
                >
                  No thank you!
                </button>
                <button
                  type="button"
                  onClick={() => console.log("Claimed")}
                  className="bg-yellow-300 px-4 py-2 rounded-full shadow-md hover:opacity-80"
                >
                  Claim Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footerpage />
    </main>
  );
}
