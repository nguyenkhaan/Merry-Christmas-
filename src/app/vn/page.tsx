"use client"
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const CongratulationCard = dynamic(
  () => import("./components/CongratulationCard"),
  { ssr: false }
);

const Congratulation = () => {
   const [showFirework, setShowFirework] = useState(false);
   return (
      <>
         <div className="w-full h-full items-center justify-center flex ">
            <CongratulationCard
               fireWork={showFirework}
               setFirework={setShowFirework}
            />
         </div>
      </>
   );
};
export default Congratulation;
