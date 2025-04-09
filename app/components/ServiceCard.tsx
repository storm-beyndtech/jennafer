import Image from "next/image";

interface ComponentProps {
  imgURL: any;
  label: string;
  subtext: string;
}

export default function ServiceCard({imgURL, label, subtext}: ComponentProps) {
  return (
    <div className="max-w-[360px]
      w-full rounded-[20px] shadow-3xl px-10 py-10 max-sm:px-5">
      <div className="w-11 h-11 flex justify-center items-center bg-[#5d6b48] rounded-xl">
        <Image src={imgURL} alt={label} width={25} height={25}/>
      </div>

      <h3 className="mt-4 font-bagero text-3xl leading-normal text-[#5d6b48]">{label}</h3>
      <p className="mt-4 font-sans text-base leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}
