"use client";
import { useEffect } from "react";
import ImageCard from "./ImageCard";
import { useState } from "react";
import loichuc from "@/src/service/loichuc";
const CongratulationCard = () => {
   const [toggleMusic, setToggleMusic] = useState(false); 
   useEffect(() => {
      const audio = document.querySelector(
         ".background-music"
      ) as HTMLAudioElement;
      if (audio && toggleMusic) {
         audio.volume = 0.5; 
         audio.play();
      }
      else audio.pause() 
   }, [toggleMusic]);
   return (
      <div className="w-165 h-140 lg:h-167.5 bg-(--color-card) rounded-xl flex flex-col gap-3 md:gap-4 items-center justify-between opacity-95 px-7 xl:px-6 py-8 relative">
         <ul className="lightrope">
            {Array.from({ length: 16 }).map((_, i) => {
               return <li key={i}></li>;
            })}
         </ul>
         <h2 className="lg:text-4xl text-3xl text-black text-center mt-8 font-semibold">
            Merry Christmas!!
         </h2>
         <p className="text-center w-full text-xl xl:text-2xl font-semibold">
            Giáng sinh is coming!!
         </p>
         <p className="text-lg text-blue-700 tackle-light">
            Chúc <span className="font-bold ">bé yêu</span> một mùa giáng sinh
            an lành và ấm áp nhé
         </p>
         <div
            className="w-full md:h-100 relative lg:h-112 h-80 bg-cover py-10 bg-center bg-no-repeat rounded-xl bg-blue-200 flex items-end justify-between"
            style={{
               backgroundImage: `url(../../../card-image.webp)`,
            }}
         >
            <ImageCard
               width={24}
               src="../../../deer.png"
               style="left-2 absolute top-12"
            />
            <ImageCard
               width={28}
               src="../../../santa-claus.png"
               style="left-4 absolute bottom-0"
            />
            <ImageCard
               width={40}
               src="../../../tree.webp"
               style="lg:top-[10%] absolute md:top-[12%] top-[20%] left-1/2 -translate-x-1/2"
            />
            <div className="flex items-center top-[70%] left-1/2 px-8 justify-center z-99999">
               <ImageCard
                  width={18}
                  src="../../../gift-1.webp"
                  style="lg:mx-[-10px] md:mx-[-8px] mx-[-6px] cursor-pointer"
                  open={loichuc[0]}
               />
               <ImageCard
                  width={18}
                  src="../../../gift-2.webp"
                  style="lg:mx-[-10px] md:mx-[-8px] mx-[-6px] cursor-pointer"
                  open={loichuc[1]}
               />
               <ImageCard
                  width={18}
                  src="../../../gift-3.webp"
                  style="lg:mx-[-10px] md:mx-[-8px] mx-[-6px] cursor-pointer"
                  open={loichuc[2]}
               />
               <ImageCard
                  width={18}
                  src="../../../gift-4.webp"
                  style="lg:mx-[-10px] md:mx-[-8px] mx-[-6px] cursor-pointer"
                  open={loichuc[3]}
               />
            </div>
            <ImageCard
               width={36}
               src="../../../snowman.gif"
               style="right-2 absolute bottom-4"
            />
         </div>
         <div className="flex w-full items-center justify-between">
            <p className="md:text-lg text-base">Chọn hộp quà nhé ^^</p>
            <button 
                className="rounded-xl cursor-pointer animate-pulse duration-1200 px-5 py-3 shadow-lg text-white font-semibold text-base bg-yellow-700"
                onClick={() => setToggleMusic(!toggleMusic)}
            >
               {toggleMusic ? "Off Music" : "On Music"}
               
            </button>
            
         </div>
    
      </div>
   );
};
export default CongratulationCard;
