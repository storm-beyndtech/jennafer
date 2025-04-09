
interface ComponentProps {
  label: string;
  imgURL ?: any;
  bgColor ?: string;
  borderColor ?: string;
  textColor ?: string;
  fullWidth?: string;
  href?: string;
}

export default function Button({href, label, imgURL:ImageURL, bgColor, borderColor, textColor, fullWidth }:ComponentProps){
  return (
    <a href={`${href}`} className={`
      flex justify-right items-center gap-6 py-4 px-4 pl-9 leading-none ${fullWidth ? `${fullWidth}` : "w-fit"} ${bgColor ? `bg-[${bgColor}]` : "bg-[#eaefe1]"}
      rounded-full border-[1.5px] text-[15px] hover:bg-[#5d6b48] hover:text-white border-${borderColor} text-${textColor} font-semibold font-montserrat`}>
      { label }

      {ImageURL && 
      <span className="w-8 h-8 rounded-full bg-[#5d6b48] border border-[#EAEFE1] flex items-center justify-center">
        <ImageURL color="#EAEFE1" size="20px"/>
      </span>
      }
    </a>
  )
}
