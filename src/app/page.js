import Link from "next/link";
import Logo from "./components/Logo";
import "./globals.css";
import BreedCard from "./components/BreedCard";
import {LiaSearchSolid} from "react-icons/lia";

export default function ListView() {
  return (
    <>
      <div className="flex gap-4 m-4 items-center">
        <div className="bg-pink-300 hover:bg-pink-400 active:bg-pink-500 rounded-full p-3 h-full text-white">
          <LiaSearchSolid className="size-8" />
        </div>
        <input
          type="text"
          className="p-4 border-gray-300 border-2 rounded-full w-full"
          placeholder="search breeds"
        ></input>
      </div>
      <section className="grid grid-cols-2 p-4 gap-4">
        <BreedCard
          className="shadow-xl rounded-3xl grid"
          breedname="Affenpinscher"
          from="Northern, Germany"
        />
        <BreedCard
          className="shadow-xl rounded-3xl grid"
          breedname="Afghan Hound"
          from="Afghanistan"
        />
        <BreedCard
          className="shadow-xl rounded-3xl grid"
          breedname="Airedale Terrier"
          from="Yorkshire, England"
        />
        <BreedCard
          className="shadow-xl rounded-3xl grid"
          breedname="Akbash"
          from="Western Turkey"
        />
        <BreedCard
          className="shadow-xl rounded-3xl grid"
          breedname="Creepy dawg"
          from="Brazil"
        />
        <BreedCard
          className="shadow-xl rounded-3xl grid"
          breedname="Akita"
          from="Brazil"
        />
      </section>
    </>
  );
}
