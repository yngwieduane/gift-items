import React from "react";


import PasswordField from "@/app/_components/passwordField";
import InputField from "@/app/_components/inputField";

const LoginInputs = ({ email, password, setEmail, setPassword }:{email:any,password:any,setEmail:any,setPassword:any}) => {
  console.log(password, email);
  return (
    <div className="space-y-6 w-full text-start">
      <InputField
        label="Email address"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e:any) => setEmail(e.target.value)}
      />

      <div>
        <PasswordField
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e:any) => setPassword(e.target.value)}
          showLabel="Show"
          hideLabel="Hide"
        />

        <div className="text-right my-2">
          <a
            href="/forgot-password"
            className="text-sm text-orange-500 hover:underline"
          >
            Forget your password
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginInputs;
