"use client";
import { useEffect , useState } from "react";
import Modal from "./Modal";
type ImageCardProps = {
   width: number;
   src: string;
   open?: {
      desc: string;
      img: string;
   };
   style?: string 
};
const ImageCard = ({ width = 20, open, src , style }: ImageCardProps) => {
   //SU dung bien isGift de kiem tra xem co duoc mo Modal khong
   const [modal , setModal] = useState(false)   //Neu khoong co bat cu loi chuc nao thi khong hien 
   const [data , setData] = useState([''  , '']) 
   useEffect(() => {
      if (typeof window !== "undefined")
         if (window.innerWidth < 768) width -= 2;
   }, []);
   const handleClick = () => {
      if (open === undefined) return 
      if (Object.keys(open).length == 0) return 
      const {desc , img} = open 
      setData([desc , img]) // Dat lai gia tri 
      setModal(true) //Bat Modal len 
   }
   return (
      <>
         <img
            className={`${style}`}
            src={src}
            style={{
               width: width + "%",
            }}
            onClick={handleClick}
         />
         <Modal showModal={modal} setShowModal={setModal} desc={data[0]} img={data[1]} /> 
      
      </>
   );
};
export default ImageCard;
