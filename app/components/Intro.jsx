import Image from "next/image"
import {ilustration} from "../assets"

function Intro() {
    return ( 
    <div className=" flex flex-col  md:flex-row-reverse ">
      <div className="w-[540px] md:w-full  md:pl-20 md:items-end">
       <Image
       src={ilustration} 
       width={1000}
       height={1000}
       alt="Ilustration"
       className=" mt-4 "
       />
      </div>

      <div className="flex flex-col gap-4 md:gap-0 text-center justify-center items-center md:ml-40 md:text-left md:items-start  ">
        <h1 className="font-bold text-4xl mt-4 md:text-xll text-[#34313D] md:pb-4 md:ml-2" >More than just shorter links</h1>
            <p className=" text-gray-400 px-4 md:text-xl text md:pb-4 ">
            Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>
           <button className="bg-[#2ACECC] font-bold w-2/4 md:w-1/3 md:ml-2  p-3 rounded-3xl text-white mt-4">Get Started </button>
      </div>

    </div> );
}

export default Intro;