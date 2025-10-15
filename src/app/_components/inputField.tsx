'use client';

import { InputHTMLAttributes } from 'react';

type InputFieldProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  error,
  className = '',
  ...props
}: InputFieldProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm text-gray-600 mb-1"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
}