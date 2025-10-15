const ImageCircle = ({ src, alt }:{ src:any, alt:any }) => (
  <div className="p-4 custom-shadow bg-[#FCFCFC] border border-[#E1DFDF] rounded-full w-fit">
    <img src={src} alt={alt} className="w-12" />
  </div>
);

export default ImageCircle;