import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SelectButton = ({isLocked}:{isLocked:any}) => {
      const buttonClasses = `text-sm mt-4 flex items-center justify-center gap-1 ${
    isLocked
      ? "text-gray-400 cursor-not-allowed"
      : "text-[#E0592A] hover:underline"
  }`;
  return (
      <button disabled={isLocked} className={buttonClasses}>
        Select branch <MdOutlineKeyboardArrowRight className="w-4 h-4" />
      </button>
  )
}

export default SelectButton
