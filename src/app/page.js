import Link from "next/link";
import Logo from "./components/Logo";
import "./globals.css";
import BreedCard from "./components/BreedCard";
import {LiaSearchSolid} from "react-icons/lia";

export default function ListView() {
  return (
    <>
      <div className="flex gap-4 m-4 items-center">
        <div className="bg-pink-300 rounded-full p-3 text-white">
          <LiaSearchSolid className="size-10" />
        </div>
        <input
          type="text"
          className="p-4 border-gray-300 border-2 rounded-full w-full"
          placeholder="search breeds"
        ></input>
      </div>
      <section className="grid grid-cols-2 p-4 gap-4">
        <BreedCard className="shadow-xl rounded-3xl" />
        <BreedCard className="shadow-xl rounded-3xl" />
        <BreedCard className="shadow-xl rounded-3xl" />
        <BreedCard className="shadow-xl rounded-3xl" />
        <BreedCard className="shadow-xl rounded-3xl" />
        <BreedCard className="shadow-xl rounded-3xl" />
      </section>
    </>
  );
}
