import React from 'react';

const SubmitButton = ({ children, onClick, type}:{children:any,onClick:any,type:any}) => {
  return (
    <div
      onClick={onClick}
      role={type}
      tabIndex={0}
      className="p-[1.5px] bg-[#E0592A] text-sm w-full items-center rounded-4xl flex cursor-pointer"
    >
      <div className="text-[#E0592A] w-full bg-[#FDF7F4] p-2 rounded-4xl text-center">
        {children}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default SubmitButton;
