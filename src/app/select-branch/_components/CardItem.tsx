'use client';
import LockBadge from "./CardDetails/LockBadge";
import ImageCircle from "./CardDetails/Logo";
import Heading from "./CardDetails/Heading";
import SelectButton from "./CardDetails/SelectButton";

const CardItem = ({
  title,
  description,
  image,
  locked,
  background,
  id,
  onSelect,
}:{
  title:any,
  description:any,
  image:any,
  locked:any,
  background:any,
  id:any,
  onSelect:any,
}) => {
  const isLocked = Boolean(locked);
  const cardStyle = {
    backgroundImage: `url(${background.pattern})`,
    backgroundPosition: "top center, center",
    backgroundRepeat: "no-repeat",
    backgroundColor: isLocked ? "#FAFAFA" : "transparent",
  };

  console.log("CardItem rendered with branch:", id);


    const handleClick = () => {
    if (!isLocked && onSelect) {
      onSelect(id); // <-- Send selected branch
    }
  };
  return (
    <div
      className={`relative flex flex-col space-y-5 items-center w-full max-w-[260px] p-6 text-center border border-[#F1F1F4] rounded-xl shadow-md ${
        isLocked ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      }`}
      style={cardStyle}
            onClick={handleClick}
    >
      {isLocked && <LockBadge />}
      <ImageCircle src={image} alt={title} />

      <Heading title={title} description={description} />

      <SelectButton isLocked={isLocked} />
    </div>
  );
};

export default CardItem;
