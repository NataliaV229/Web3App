import Image from "next/image";
import Link from "next/link";

export default function Footerpage() {
  return (
    <div className="w-full bg-black p-4 flex flex-col md:flex-row md:justify-around items-center gap-8 relative">
      <div id="logo" className="w-full md:w-fit">
        <div className="w-fit mx-auto">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            <Image
              src="/dentalcliniclogo.jpg"
              alt="DCDA Logo"
              className="rounded-full p-4"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>
      <div id="contacts" className="w-full md:w-fit text-center md:text-left">
        <p>Working Hours:</p>
        <p>Monday - Friday</p>
        <p> 9:00 am - 5:00 pm</p>
      </div>
      <div id="about" className="w-full md:w-fit text-center md:text-left">
        <p>Address: Dublin Road, Ireland</p>
        <a href="mailto:example@gmail.com">example@gmail.com</a>
        <br />
        <a href="tel:+35316723433216">tel: 016723433216</a>
      </div>
    </div>
  );
}
