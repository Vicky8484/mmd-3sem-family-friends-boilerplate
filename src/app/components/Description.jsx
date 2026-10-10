const Description = ({desc1, desc2, desc3, desc4}) => {
  return (
    <p className="flex gap-4 flex-wrap">
      <span className="bg-(--desc1-bg-color) text-(--desc1-text-color) py-0.5 px-3 rounded-xl">
        {desc1}
      </span>
      <span className="bg-(--desc2-bg-color) text-(--desc2-text-color) py-0.5 px-2 rounded-xl">
        {desc2}
      </span>
      <span className="bg-(--desc3-bg-color) text-(--desc3-text-color) py-0.5 px-2 rounded-xl">
        {desc3}
      </span>
      <span className="bg-(--desc4-bg-color) text-(--desc4-text-color) py-0.5 px-2 rounded-xl">
        {desc4}
      </span>
    </p>
  );
};

export default Description;
