'use client';

const Heading = ({title, description}:{title:any, description:any}) => {
  return (
      <div className="space-y-2.5">
        <h3 className="font-semibold text-[#E0592A]">{title}</h3>
        <p className="text-gray-600 text-sm my-2">{description}</p>
      </div>
  )
}

export default Heading
