import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="transition-colors duration-400 ease-in-out hover:text-[#E38982] active:text-[#E38982]"
    >
      <h2>FamilyFriends</h2>
    </Link>
  );
};

export default Logo;
