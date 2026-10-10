import {LuMessageCircle} from "react-icons/lu";
import {LuUser} from "react-icons/lu";
import Link from "next/link";
import {LuHouse} from "react-icons/lu";
import {FaRegStar} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex h-16 shadow-[0_-4px_12px_0_rgba(0,0,0,0.15)] bg-white/10 backdrop-blur-sm text-gray-600 sticky bottom-0 z-999 font-extrabold text-2xl items-center p-4 border-black justify-between">
      <Link href="/">
        <LuHouse className="size-7 transition-colors duration-400 ease-in-out hover:text-(--coral-accent) active:text-(--coral-accent)" />
      </Link>
      <Link href="">
        <FaRegStar className="size-7 transition-colors duration-400 ease-in-out  hover:text-(--coral-accent) active:text-(--coral-accent)" />
      </Link>
      <Link href="">
        <LuMessageCircle className="size-7 transition-colors duration-400 ease-in-out hover:text-(--coral-accent) active:text-(--coral-accent)" />
      </Link>
      <Link href="">
        <LuUser className="size-7 transition-colors duration-400 ease-in-out hover:text-(--coral-accent) active:text-(--coral-accent)" />
      </Link>
    </footer>
  );
};

export default Footer;
