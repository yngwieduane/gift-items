
import Banner from "./GiftItems/Banner"
import GiftItems from "./GiftItems/GiftItems"
import Header from "./GiftItems/Header"
import SearchBox from "./GiftItems/SearchBox"


const MainGiftItems = () => {
  return (
    <div className='pt-5 w-full max-w-[900px]'>
      <SearchBox />
      <Banner />
      <Header />
      <GiftItems />
    </div>
  )
}

export default MainGiftItems
