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
   if (!showModal) return <> </>;
   const handleClick = () => {
      setShowModal(false);
   };
   return (
      <div className="inset-0 fixed top-0 bottom-0 z-999999 right-0 left-0 bg-[rgba(0,0,0,0.6)] gap-5 flex items-center justify-center flex-col ">
         <div className="xl:w-240 md:w-180 text-base md:text-lg lg:text-2xl text-center lg:w-200 w-full bg-[#d4d3d4] min-h-10 p-3 md:p-4 rounded-lg">
            {desc}
         </div>
         <div
            onClick={handleClick}
            className="xl:w-150 cursor-pointer bg-cover bg-center bg-no-repeat xl:h-130 md:w-110 md:h-110 w-full h-90 bg-black"
            style={{
                backgroundImage: `url(${img})`
            }}
         ></div>
      </div>
   );
};
export default Modal;
