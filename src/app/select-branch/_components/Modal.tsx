'use client';
import Header from './Header'
import Cards from './Cards'

const Modal = () => {
  return (
    <div
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
      <Header />
      <Cards />
    </div>
  )
}

export default Modal