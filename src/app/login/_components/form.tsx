'use client';

import React from 'react';
import { useLoginForm } from '@/hooks/useLoginForm';
import LoginInputs from './loginInputs';
import SubmitButton from '@/app/_components/submitButton';
import { loginFormTexts } from '@/constants/loginFields';

const Form: React.FC = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit
  } = useLoginForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="p-16 gap-10 flex flex-col items-center justify-center text-center rounded-[20px] border border-[#F1F1F4] shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] bg-no-repeat"
      style={{
        backgroundImage: `
          url('/Login/formPattern.png'),
          radial-gradient(92% 78.09% at 49.87% -37.58%, #EBF2FF 0%, rgba(235, 242, 255, 0.00) 100%)
        `,
        backgroundPosition: 'top center, center',
        backgroundColor: '#FCFCFC',
      }}
    >
      <img src="/Login/PsiLogoblue.svg" alt={loginFormTexts.logoAlt} className="w-20" />
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">{loginFormTexts.heading}</h1>
        <p className="text-[#6B757E]">{loginFormTexts.subheading}</p>
      </div>

      <LoginInputs
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      <SubmitButton onClick={handleSubmit} type="button">
        {loginFormTexts.button}
      </SubmitButton>
    </form>
  );
};

export default Form;