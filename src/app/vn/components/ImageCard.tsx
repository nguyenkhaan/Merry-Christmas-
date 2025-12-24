"use client";
import { useEffect , useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
type ImageCardProps = {
   width: number;
   src: string;
   open?: {
      desc: string;
      img: string;
   };
   style?: string, 
   presentNumber?: number 
};
const ImageCard = ({ width = 20, open, src , style , presentNumber }: ImageCardProps) => {
   //SU dung bien isGift de kiem tra xem co duoc mo Modal khong
   const [modal , setModal] = useState(false)   //Neu khoong co bat cu loi chuc nao thi khong hien 
   const [data , setData] = useState([''  , ''])  
   const seachParams = useSearchParams() 
   const router = useRouter() 
   useEffect(() => {
      if (typeof window !== "undefined")
         if (window.innerWidth < 768) width -= 2;
   }, []);
   const handleClick = () => {
      if (open === undefined) return 
      if (Object.keys(open).length == 0) return 
      const {desc , img} = open 
      //neu mo that thi tien hanh Them du lieu tren thanh url 
      const params = new URLSearchParams(seachParams.toString())  
      if (presentNumber) params.set('gift' , presentNumber.toString()) //presentNumber   
      
      router.push(`?${params.toString()}`);
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
