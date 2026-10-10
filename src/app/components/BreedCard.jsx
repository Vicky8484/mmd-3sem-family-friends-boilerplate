import Image from "next/image";
import Link from "next/link";
import StarBtn from "./StarBtn";

const BreedCard = ({className = "", breedname, from}) => {
  return (
    <article className={`relative ${className}`}>
      <Link href="/detailview" className="grid">
        <Image
          src="/dummydog.jpg"
          alt="Creepy doog"
          width={500}
          height={500}
          className="col-start-1 row-start-1 rounded-3xl aspect-4/3 object-cover"
        />

        <StarBtn />

        <div className="p-4 gap-4">
          <h2 className="font-semibold text-xl leading-10">{breedname}</h2>
          <p className="text-sx">{from}</p>
        </div>
      </Link>
    </article>
  );
};

export default BreedCard;
