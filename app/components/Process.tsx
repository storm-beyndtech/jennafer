import Image from "next/image";
import agreementImg from "../assets/Agreement.svg"
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Process() {
  return (
    <section className="w-full bg-[#f0efed]/40">
      <div className="max-ctn min-h-screen flex justify-between items-center flex-wrap py-14 max-md:gap-14">
        <div className="w-full max-w-lg text-black">
          <h1 className="font-bagero text-7xl max-sm:text-[50px] text-[#5d6b48]">
            Process
          </h1>
          <p className='desc mb-7'>
            Over a decade of experience, I&apos;ve effectively managed portfolios exceeding $9.17 billion, catering to 600 clients. My focus on investment security and maximizing profits ensures that you can trust in my expertise to deliver outstanding results, safeguarding your investments with utmost care.
          </p>
          <Button 
            label={"Start today!"} 
            href="/contact"
            imgURL={IoIosArrowRoundForward} 
            borderColor="coral-red" textColor="black" bgColor="bg-none"/>
        </div>

        <div className="w-full max-w-xl relative">
          <Image className="w-full" src={agreementImg} alt="JENNAFER BEAVER TURNER" width={500}/>
        </div>
      </div>
    </section>
  )
}
