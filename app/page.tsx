import Intro from "./components/Intro"
import UrlBar from "./components/UrlBar"

export default function Home() {
  return (
   
    <div className="">
     
     <Intro />
     
      <UrlBar />
        <div className=" bg-[#EFF1F7] pt-40 flex flex-col items-center text-center ">
         <p className=" font-bold text-2xl text-[#34313D] mb-4">Advanced Statistics</p>
         <p className=" text-gray-400">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
           
    </div>
  )
}
