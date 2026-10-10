"use client"; /*nødvendigt, fordi knappen bruger klik og react states*/

import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Image from "next/image";
import {useState} from "react";
import {FaRegStar, FaStar} from "react-icons/fa";
import Description from "../../components/Description";

const DetailView = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <div className="grid p-4">
        <Image
          src="/dummydog.jpg"
          alt="Creepy doog"
          width={500}
          height={500}
          className="col-start-1 row-start-1 rounded-3xl aspect-square object-cover"
        />

        <button
          type="button"
          onClick={() => setIsFavorite((favorite) => !favorite)}
          aria-label={
            isFavorite ? "Fjern fra favoritter" : "Føj til favoritter"
          }
          aria-pressed={isFavorite}
          className="col-start-1 row-start-1 m-1 justify-self-end self-start bg-[#ffffff67] rounded-full p-2 text-white"
        >
          {isFavorite ? (
            <FaStar className="size-6" />
          ) : (
            <FaRegStar className="size-6" />
          )}
        </button>

        <Link
          href="/"
          className="bg-gray-100 rounded-full m-1 p-2 text-gray-900 col-start-1 row-start-1 justify-self-start self-start h-fit"
        >
          <MdKeyboardArrowLeft className="size-8" />
        </Link>

        <h1 className="text-3xl font-bold text-gray-800 leading-1.5 py-6">
          Affenpinscher
        </h1>
        <Description
          desc1="Confident"
          desc2="Alert"
          desc3="Playful"
          desc4="Loyal"
        />
        <br></br>
        <h3 className="text-gray-700 font-bold">Breed description</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut minima
          magnam autem debitis molestias. Saepe labore sequi repellendus
          recusandae quod aut eos, vel magni provident assumenda dicta.
          Quisquam, animi eum.
        </p>
        <br></br>
        <h3 className="text-gray-700 font-bold">Breed history</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut minima
          magnam autem debitis molestias. Saepe labore sequi repellendus
          recusandae quod aut eos, vel magni provident assumenda dicta.
          Quisquam, animi eum.
        </p>
      </div>
    </>
  );
};

export default DetailView;
