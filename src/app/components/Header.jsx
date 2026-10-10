import Logo from "../components/Logo";
import {IoMdNotificationsOutline} from "react-icons/io";
import {GoSun} from "react-icons/go";

const Header = () => {
  return (
    <header className="flex h-16 shadow-xl bg-yellow-200 text-yellow-600 hover:text-yellow-700 active:text-yellow-900 sticky top-0 z-999 font-extrabold text-2xl items-center p-4 border-black justify-between">
      <Logo />
      <div className="flex gap-8">
        {/* <GoSun className="size-8" /> */}
        <IoMdNotificationsOutline className="size-8" />
      </div>
    </header>
  );
};

export default Header;
