import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Image from "next/image";
import Description from "../../components/Description";
import StarBtn from "../../components/StarBtn";
import MiniCard from "@/app/components/MiniTitleCard";

const DetailView = () => {
  return (
    <>
      <div className="grid p-4">
        <div className="relative grid w-fit">
          <Image
            src="/dummydog.jpg"
            alt="Creepy doog"
            width={500}
            height={500}
            className="col-start-1 row-start-1 rounded-3xl aspect-square object-cover"
          />
          <Link
            href="/"
            className="bg-gray-100 transition-colors duration-400 ease-in-out 
            hover:bg-(--coral-accent) rounded-full m-4 p-2 
            text-gray-900 hover:text-gray-100 col-start-1 row-start-1 justify-self-start self-start h-fit"
          >
            <MdKeyboardArrowLeft className="size-8" />
          </Link>
          <StarBtn />
          <MiniCard />
        </div>

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
