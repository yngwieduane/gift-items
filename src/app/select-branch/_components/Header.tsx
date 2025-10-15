import React from 'react'
const Header = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center gap-4'>
            <img src="/Login/PsiLogoblue.svg" alt="Logo" className="w-20" />
            <div className='space-y-2 text-center'>
              <h1 className="text-2xl font-semibold">Welcome back Olivia! 👋🏻</h1>
              <p className="text-[#6B757E]">Please select a your branch to continue.</p>
            </div>
    </div>
  )
}

export default Header
