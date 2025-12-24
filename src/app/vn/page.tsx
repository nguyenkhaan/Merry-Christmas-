"use client";
import CongratulationCard from "./components/CongratulationCard";
import { useState, useEffect } from "react";
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
