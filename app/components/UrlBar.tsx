
function UrlBar() {
    
    return ( 
    <div className="relative top-[6.5rem] lg:ml-[22rem] md:ml-[2rem] mb-6">
      <div className="mx-6 rounded-xl">
       <div className="bg-input-mob lg:bg-imput-desk lg:w-[1075px] lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:py-8 lg:px-2 w-full px-6 rounded-lg  py-5 flex flex-col bg-cover  bg-no-repeat bg-center  ">
         <input className="rounded-lg p-3 mt-2 lg:w-[75%] lg:p-4 " placeholder="Shorten a link here..." type="text" />
         <button className="bg-[#2ACECC] font-bold rounded-md text-white mt-4 p-3 lg:w-[15%] lg:p-4 lg:mb-2 ">Shorten it!</button>
       </div>
       </div>
    </div> 
    );
}

export default UrlBar;