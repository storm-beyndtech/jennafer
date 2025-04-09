import Image from "next/image";
import processImg from "../assets/Processing.svg"
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Mission() {
  return (
    <section className="w-full bg-[#f0efed]/40">
      <div className="max-ctn min-h-screen flex justify-between items-center flex-wrap-reverse max-md:gap-14 py-14">
        <div className="w-full max-w-lg relative">
          <Image className="w-full" src={processImg} alt="JENNAFER BEAVER TURNER" width={500}/>
        </div>

        <div className="w-full max-w-lg text-black">
          <h1 className="font-bagero text-7xl max-sm:text-[50px] text-[#5d6b48]">
            Mission
          </h1>
          <p className='desc mb-7'>
          Empowering individuals with personalized financial guidance, our mission is to make finance accessible for all. Through tailored strategies and support, we aim to cultivate confidence in managing money effectively. We believe in demystifying finance, ensuring that everyone can achieve a secure financial future.
          </p>
          <Button 
            label={"Start today!"} 
            href="/contact"
            imgURL={IoIosArrowRoundForward} 
            borderColor="coral-red" textColor="black" bgColor="#eaefe1"/>
        </div>
      </div>
    </section>
  )
}
