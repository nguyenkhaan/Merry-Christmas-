'use client'
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
const buttonFont = localFont({
   src: "../../public/fonts/ChristmasWishes.ttf",
});
const App = () => {
  const router = useRouter() 
  const handleClick = () => {
    router.push('/vn')
  }
   return (
      <div className=" w-full h-full items-center flex justify-center">
         <button
            className={`w-64 h-17.5 ${buttonFont.className} relative start-button hover:transition-all duration-700 ease-in-out font-bold text-3xl px-5 py-4 tracking-wider rounded-2xl hover:bg-[#6E1513] cursor-pointer border  bg-[#5E0D0C] text-white shadow-[0_8px_20px_rgba(0,0,0,0.6)] border-[#452829]`}
            onClick={handleClick}
         >
            <span className="transition-all duration-700 ease-in-out">Christmas Click</span>
            <div className="absolute w-full flex items-start justify-between top-0 -translate-y-1/2 left-0 h-10">
              <img src={"../../snow-cap-1.png"} className="w-[32%] -ml-2" /> 
              <img src={"../../snow-cap-2.png"} className="w-[32%] -mt-1" /> 
              <img src={"../../snow-cap-3.png"} className="w-[28%] -mt-2 -mr-2" />   
            </div>
         </button>
      </div>
   );
};
export default App;
//thu muc public duoc phuc vu nen chi can ghi duong dan den ngoai cung thu muc public la duoc 