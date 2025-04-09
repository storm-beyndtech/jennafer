import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImg from "../assets/jennafer1.jpg";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center min-h-screen gap-10 px-3 sm:pl-16 xl:flex-row max-md:gap-5"
    >
      <div className="relative w-full flex flex-col justify-center items-start xl:w-2/4 pt-20 max-md:pt-36">
        <h1 className="font-panchang text-[78px] max-md:text-[10.5vw] leading-10 font-extralight max-sm:mb-7">
          JENNAFER <br />
          <span className="inline-block pt-10 max-sm:pt-2 text-[48px] font-extralight whitespace-nowrap max-md:text-[6.5vw]">
            BEAVER TURNER
          </span>
        </h1>
        <p className="w-[500px] max-xl:w-full text-slate-gray/60 text-lg max-sm:text-base font-montserrat my-6">
          Achieve financial success with expert coaching.
        </p>

        <Button
          bgColor="#eaefe1"
          label={"Start today!"}
          href="/contact"
          imgURL={IoIosArrowRoundForward}
          textColor="black"
        />
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-md:py-20">
        <Image
          src={heroImg}
          alt="JENNAFER BEAVER TURNER"
          width={400}
          className="w-full object-contain relative z-10 rounded-l-[65%] rounded-br-[50%] max-sm:rounded-[10px]"
        />
      </div>
    </section>
  );
}
