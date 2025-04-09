import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function AboutSec() {
  return (
    <section className="w-full bg-[#f0efed]/40">
      <div className="max-ctn min-h-screen flex justify-between items-center flex-wrap-reverse max-md:gap-14 py-14">
        <div className="w-full max-w-lg text-black">
          <h1 className="font-bagero text-5xl max-sm:text-[40px]">
            About Me
          </h1>
          <p className='desc mb-5'>
          With a decade-long career, I&apos;ve adeptly managed portfolios surpassing $9.17 billion, serving 600 clients. Prioritizing investment security and profit maximization, trust in my expertise to deliver exceptional results, safeguarding your investments with meticulous care.
          </p>

          <p className='desc mb-5'>
          With a proven track record, I merge strategic insight with personalized approaches to effectively meet your financial goals. Rest assured, your investments are in capable hands, dedicated to maximizing returns while minimizing risks with precision.
          </p>
        </div>
        
        <div className="w-full max-w-lg text-black">
          <h1 className="font-bagero text-5xl max-sm:text-[40px]">
            Experience
          </h1>
          <p className='desc mb-5'>
          Having collaborated with over 600 clients across 23 counties spanning 4 continents, I&apos;ve learned that success knows no bounds, and its foundations lie within each individual, regardless of origin.
          </p>

          <p className='desc mb-5'>
          My commitment goes beyond mere satisfaction; I relentlessly pursue my clients&rsquo; financial objectives until they are achieved. This unwavering dedication has become my signature in the industry, ensuring no one is left behind in reaching their goals.
          </p>
        </div>

      </div>
    </section>
  )
}
