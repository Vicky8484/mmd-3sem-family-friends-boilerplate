const Description = ({desc1, desc2, desc3, desc4}) => {
  return (
    <p className="flex gap-4 flex-wrap">
      <span className="bg-blue-300 text-blue-800 py-0.5 px-3 rounded-xl">
        {desc1}
      </span>
      <span className="bg-red-300 text-red-800 py-0.5 px-2 rounded-xl">
        {desc2}
      </span>
      <span className="bg-green-300 text-green-800 py-0.5 px-2 rounded-xl">
        {desc3}
      </span>
      <span className="bg-yellow-200 text-yellow-800 py-0.5 px-2 rounded-xl">
        {desc4}
      </span>
    </p>
  );
};

export default Description;
