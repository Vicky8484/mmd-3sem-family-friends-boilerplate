import Image from "next/image";
import {FaRegStar} from "react-icons/fa";

const BreedCard = ({className = ""}) => {
  return (
    <div className={className}>
      <Image
        src="/dummydog.jpg"
        alt="Creepy doog"
        width={500}
        height={500}
        className="rounded-3xl aspect-4/3 object-cover"
      />
      <FaRegStar />
      <div className="p-4 gap-4 text-gray-700">
        <h2 className="font-bold text-xl leading-10">Creepy dawg</h2>
        <p className="text-sx">En mørk sidegade</p>
      </div>
    </div>
  );
};

export default BreedCard;
