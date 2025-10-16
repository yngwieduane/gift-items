'use client';
import { useState } from "react";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

const Card = ({id,title,image}:{id:any;title:any;image:any}) => {
  const { addToCart, state } = useCart();

  const [isActive, setIsActive] = useState(0);
  const handleClick = () => {
    console.log(id);
    //setIsActive(1);
    addToCart({id,title,image})
  };

  const index = state.items.findIndex(item => item.id === id);
  if (index !== -1) {
    console.log('Item exists at index', index);
    //setIsActive(1);
  }
  
  return (
    <div onClick={handleClick}  className={`relative flex flex-col space-y-5 items-center w-full max-w-[200px] p-3 text-center border-2 cursor-pointer rounded-xl shadow-md ${
        isActive ? "border-[#E0592A]" : "border-[#F1F1F4]"
      }`}>
      <div className="custom-shadow bg-[#FCFCFC] border border-[#E1DFDF] rounded-xl w-fit relative">
        <Image src={image} alt={title} className="w-full object-fit rounded-xl" width={300} height={300} />
        {isActive ? (
        <div className="absolute right-0 z-10 top-0 bg-[#E0592A] rounded-full p-1 m-1 border-2 border-[#F3BDAA] ">
          <FiMinus className="text-xs text-white"/>
        </div>
        ):(
        <div className="absolute right-0 z-10 top-0 bg-white rounded-full p-1 m-1 border-2 border-[#F3BDAA] ">
          <FiPlus className="text-xs text-[#E0592A]"/>
        </div>
        )}
      </div>
      <div className="space-y-2.5">
        <h3 className="font-semibold text-[#E0592A]">{title}</h3>
        <p className="text-gray-600 text-sm my-2">{id}</p>
      </div>
    </div>
  )
}

export default Card
