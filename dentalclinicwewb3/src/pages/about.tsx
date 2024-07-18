import TwoButtons from "@/components/buttons";
import Footerpage from "@/components/footer";
import Gallery from "@/components/gallery"; // Import the Gallery component
import Navigation from "@/components/navigation";
import { Inter } from "next/font/google";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100%",
    color: "white",
  };

  // Example images for the gallery
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2019/04/13/22/38/xray-4125802_1280.jpg",
      alt: "Placeholder Image 1",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/28/12/23/x-ray-961977_1280.jpg",
      alt: "Placeholder Image 2",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/02/09/07/06/xray-4832140_1280.jpg",
      alt: "Placeholder Image 3",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/04/13/22/38/xray-4125793_1280.jpg",
      alt: "Placeholder Image 3",
    },
  ];

  return (
    <main className={`h-auto w-screen relative`}>
      <div className="w-screen h-fit pb-20" style={backgroundImageStyle}>
        {/* nav */}
        <Navigation />

        {/* center text */}
        <div className="text-4xl md:text-6xl font-bold italic text-center text-yellow-300 bg-white shadow-lg w-fit mx-auto drop-shadow-lg mt-20 p-4 mb-4">
          About Us
        </div>
        <div className="text-2xl md:text-2xl font-bold text-black bg-white shadow-lg text-center w-fit mx-auto text-red px-4 py-1">
          Small investments in prevention lead to big smiles down the road.
        </div>
      </div>

      <div className="bg-white w-full h-fit py-20 px-4 text-black">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className={`mb-3 text-2xl font-semibold text-yellow-600`}>
            Why WEB3
          </h2>
          <p className={`w-full text-sm`}>
            Dental Clinic Dapp is built on the Ethereum blockchain. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maiores minus et velit
            assumenda, unde quidem recusandae dolore tempora mollitia vel
            impedit, fugit quo? Neque nam saepe ipsam, quibusdam expedita rerum.
            <br></br> We've listened and taken a patient-centred approach in
            every aspect of your visit to calm the senses and make your
            experience more pleasant. We dedicate ourselves to providing
            comprehensive dental services in our state-of-the-art dental suites
            using the most advanced technology. Everything is designed with your
            comfort and care in mind. Our dentists are extensively educated and
            knowledgeable. All our specialists are registered by the Dental
            Council of Ireland. Our staff is devoted to continuous learning to
            stay updated with new practices and techniques. With over 50,000
            patients cared for to-date, our patients trust us to care for them
            and their families. We've earned that trust through our steadfast
            commitment to our core values of integrity and care. Integrity is
            the cornerstone of our values, and we always act with honesty and
            transparency with the intent to do what's right.
          </p>
          <h2 className={`mb-3 text-2xl font-semibold text-yellow-600`}>
            What are the benefits?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe
            eos autem nobis ducimus aut, excepturi quidem et ullam nostrum quos
            neque? Dolore facilis unde dicta animi recusandae quaerat ex.
          </p>
        </div>
      </div>

      <div className="bg-white py-10 px-4 text-center">
        <TwoButtons />
      </div>

      <div className="bg-white py-10 px-4 text-center">
        <Gallery images={images} /> {/* Add the Gallery component here */}
      </div>

      <Footerpage />
    </main>
  );
}
