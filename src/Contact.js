const Contact = () => {
  return (
    <div id="contact"
     className=" bg-black  text-white flex flex-col flex-grow h-[100vh] w-full items-center justify-between px-[5vw] py-[9vh] md:px-[5vw] md:py-[10vh] ">
      <div className="  flex flex-row flex-wrap h-5/6 w-full items-center justify-around ">
        {/* contact */}
        <div className="contact  flex flex-col flex-grow h-1/2  min-w-[320px] w-[50%] items-center justify-between ">
          <h2 className="text-5xl font-light underline decoration-orange-600">
            Contact
          </h2>
          <div className=" flex flex-row flex-wrap  justify-center items-center w-full my-auto  py-4">
            <div className="flex justify-center items-center flex-grow min-w-[240px] w-[39%] py-4 ">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-1xl underline decoration-orange-600">Mobile</h2>
                <h2 className="text-1xl m:text-2xl ">6239535842</h2>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow min-w-[240px]  w-[59%] ">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-1xl underline decoration-orange-600">Mail</h2>
                <h2 className="text-1xl sm:text-2xl ">venkatamadhusudhang@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
        
        {/* resume */}

        <div className=" resume flex flex-col flex-grow h-1/2 min-w-[320px] w-[50%] items-center justify-between">
          <h2 className=" text-5xl font-light underline decoration-orange-600">
            Resume
          </h2>
          <div className=" flex  justify-center items-center w-full my-auto py-4">
            <div className="text-3xl flex justify-center items-center h-12 rounded-3xl border-2 border-orange-500 px-[15px] py-[5px]">
              <a href="https://drive.google.com/file/d/1rrm2t8UzzL8ppjVFu0Fm6kyiV6H6b-EK/view" target="_blank">Get-Resume</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  h-1/6 w-full items-center justify-around ">
        <h1 className=" text-1xl font-light underline decoration-orange-600">
          Developed by
        </h1>
        <h1 className=" text-2xl font-light ">Venkata Madhusudhan G</h1>
      </div>
    </div>
  );
};
export default Contact;
