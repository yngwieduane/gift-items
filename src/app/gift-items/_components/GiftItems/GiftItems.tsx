
'use client';
import { giftItems } from '@/constants/giftItems';
import Card from './Card';

const GiftItems = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center pt-5 px-0 overflow-auto h-full max-h-[600]">
      {giftItems.map((item:any) => (
        <Card
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

export default GiftItems
