"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FireworksBackground } from "@/src/components/animate-ui/components/backgrounds/fireworks";
import SoundServices from "@/src/service/SoundService";
import useSound from "use-sound";
const Modal = ({
  showModal,
  setShowModal,
  desc,
  img,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  desc?: string;
  img?: string;
}) => {
  const searchParams = useSearchParams();

  const [showFirework, setShowFirework] = useState(false);
   const [play , {stop}] = useSound('/sounds/endSound.mp3' , {
      volume: 0.8 , 
      preload: true 
   })
  if (!showModal && !showFirework) return null;

  const handleClick = () => {
    if (searchParams.get("gift") === "4") {
      setShowModal(false);   // đóng modal
      
      //Tien hanh tat het tat ca cac nhac khac 
      
      SoundServices.registerBackground('bg-2' , {play , stop}) //Tien hanh tat nhac nen 
      SoundServices.stopAllBackground() //Dung tat ca nhacn nen 
      SoundServices.playBackground('bg-2') 
      setShowFirework(true); // bật firework

      // // (optional) tự tắt firework sau 5s
      // setTimeout(() => {
      //   setShowFirework(false);
      // }, 5000);
    }
    else 
    {
      setShowModal(false) 
      SoundServices.stopAllBackground() 
    }
  };

  return (
    <>
      {showFirework && <div className="fixed inset-0 z-[-9999]"><FireworksBackground /></div>}

      {showModal && (
        <div 
         className="fixed inset-0 z-[999999] cursor-pointer bg-[rgba(0,0,0,0.6)] flex flex-col items-center justify-center gap-5"
         onClick={handleClick}
        
        >
          <div 
            className="xl:w-240 md:w-180 cursor-text text-center text-base md:text-lg lg:text-2xl bg-[#d4d3d4] p-4 rounded-lg rounded-lg"
            onClick={(e) => e.stopPropagation()}
          
          >
            {desc}
          </div>

          <div
            onClick={handleClick}
            className="cursor-pointer bg-cover bg-center bg-no-repeat xl:w-150 xl:h-130 md:w-110 md:h-110 w-full h-90 rounded-lg"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      )}
    </>
  );
};

export default Modal;
