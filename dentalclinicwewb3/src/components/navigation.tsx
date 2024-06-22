import ConnectMetamask from "@/components/connectMetamask ";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="px-4 z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/about"
          rel="noopener noreferrer"
        >
          <Image
            src="/dentalcliniclogo.jpg"
            alt="DCDA Logo"
            className="rounded-full p-4"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <div className="flex gap-4 items-center p-2">
        <Link
          href="/"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 hover:opacity-80"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 hover:opacity-80"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 hover:opacity-80"
        >
          Contact
        </Link>
        <ConnectMetamask />
      </div>
    </nav>
  );
}
