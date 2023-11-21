import picA from "../images/picA.png";

const Intro = () => {
  return (
    <div
      className="bg-black w-[100%] gap-5 min-h-screen max-h-full 
      items-center justify-center text-white px-[10vw] py-[5vh] md:px-[10vw] md:py-[10vh]
      flex flex-col md:flex-row md:gap-[5vw] 
      "
    >
      {/* content */}

      <div className=" flex items-center h-[30vh] w-[80vw] md:w-[42.5vw] md:h-[80vh] ">
        <div className=" w-full  flex flex-col items-start justify-center ">
          <h2
            class=" font-thin 
         lg:text-3xl
          md:text-2xl
           sm:text-3xl
            text-3xl"
          >
            Hello, my self
          </h2>
          <h2
            class=" font-light my-2
          lg:text-6xl
           md:text-4xl
            
              text-4xl"
          >
            Venkata Madhusudhan&nbsp;G
          </h2>

          <h2
            class=" font-normal text-orange-600 underline decoration-white decoration-1
         lg:text-3xl
          sm:text-3xl
           text-3xl"
          >
            Frontend Developer
          </h2>
        </div>
      </div>
      <div className=" flex justify-center items-center h-[50vh] w-[80vw] md:w-[42.5vw] md:h-[80vh] ">
      <div className="flex h-full justify-center item-center ">
        <img className=" object-contain" src={picA} />
      </div> 
      </div>
    </div>
  );
};
export default Intro;
