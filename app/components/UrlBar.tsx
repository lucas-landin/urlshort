
function UrlBar() {
    
    return ( 
    <div className="relative top-[6.5rem] mb-6">
      <div className="mx-6 rounded-xl">
       <div className="bg-input-mob w-full px-6 rounded-lg  py-5 flex flex-col bg-cover  bg-no-repeat bg-center  ">
         <input className="rounded-lg p-3 mt-2" placeholder="Shorten a link here..." type="text" />
         <button className="bg-[#2ACECC] font-bold rounded-md text-white mt-4 p-3 ">Shorten it!</button>
       </div>
       </div>
    </div> 
    );
}

export default UrlBar;