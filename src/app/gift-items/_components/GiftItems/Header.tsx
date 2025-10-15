
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1>Gift Items (20)</h1>
      <div className="flex items-center gap-2">
        <div className="border cursor-pointer border-[#E67A55] text-[#E0592A] hover:text-white hover:bg-[#E0592A] rounded-full w-fit p-1.5">
          <MdKeyboardArrowLeft  />
        </div>
        <div className="border  cursor-pointer border-[#E67A55] text-[#E0592A] hover:text-white hover:bg-[#E0592A] rounded-full w-fit p-1.5">
          <MdOutlineKeyboardArrowRight  />
        </div>
      </div>
    </div>
  );
};

export default Header;
