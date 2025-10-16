
import { CartProvider } from "@/context/CartContext"
import MainSidebar from '../_components/MainSidebar'
import MainCart from './_components/MainCart'
import MainGiftItems from './_components/MainGiftItems'

export default function GiftItems() {
  return (
    <div className='bg-[#FFFFFF] gap-8 flex justify-between h-screen'>
      <CartProvider>
        <MainSidebar/>
        <MainGiftItems/>
        <MainCart/>
      </CartProvider>
    </div>
  )
}

