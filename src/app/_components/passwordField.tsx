'use client';
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const PasswordField = ({
  label,
  placeholder,
  showLabel,
  hideLabel,
  value,
  onChange,
}:{
  label:any,
  placeholder:any,
  showLabel:any,
  hideLabel:any,
  value:any,
  onChange:any,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
        <label>{label}</label>
        <span
          className="flex text-xs items-center gap-1 cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeSlashIcon className="w-3" /> : <EyeIcon className="w-3" />}
          {showPassword ? hideLabel : showLabel}
        </span>
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:border-blue-300 pr-10"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PasswordField;