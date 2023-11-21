import { FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const About = () => {
  return (
    <div id="about"
      className=" bg-black w-full  gap-[1vw] min-h-screen max-h-full  
      text-white px-[5vw] py-[8vh] md:px-[3vw] md:py-[10vh]
      flex flex-col justify-between items-center">
      <h1 className="underline text-5xl font-light decoration-orange-600">About</h1>
      <div className=" h-full w-full col-span-2 row-span-1 flex flex-col items-center justify-between">
        <h2 className="underline decoration-orange-600">I am</h2>
        <h1 className=" w-3/4 font-light text-center ">
          <span className="text-orange-600">"</span>
          Experienced Front-End Developer with 2.4 years in crafting
          cutting-edge web solutions. Proficient in building responsive,
          performant, and interactive user interfaces using industry-leading
          technologies. Committed to delivering exceptional user experiences and
          staying updated with the latest trends and best practices.
          <span className="text-orange-600">"</span>
        </h1>
        {/* <hr className="w-full border-1"></hr> */}
      </div>
      <div className=" flex flex-col  w-full items-center ">
        <h2 className=" underline decoration-orange-600">Skills</h2>
        <div className="flex justify-center gap-3 items-center flex-wrap py-4">
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <FaReact className=" text-4xl sm:text-7xl" />
            <h1 className=" text-orange-400">React</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <SiJavascript className="text-4xl sm:text-7xl" />
            <h1 className=" text-orange-400">Javascript</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <SiTailwindcss className="text-4xl sm:text-7xl" />
            <h1 className=" text-orange-400">Tailwindcss</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <FaHtml5 className="text-4xl sm:text-7xl" />
            <h1 className=" text-orange-400">HTML</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <FaCss3Alt className="text-4xl sm:text-7xl" />
            <h1 className=" text-orange-400">CSS</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <FaBootstrap className="text-4xl sm:text-7xl" />
            <h1 className=" text-orange-400">Bootstrap</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <FaJava className="text-4xl sm:text-7xl" />
            <h1 className=" text-orange-400">Java</h1>
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-2xl border-white w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <FaGithub className="text-4xl sm:text-7xl" />
            <h1 className=" text-orange-400">Git</h1>
          </div>
        </div>
      </div>
      <div
        className=" col-span-2 row-span-1
      flex flex-col text-center w-full h-full "
      >
        <h1 className=" underline decoration-orange-600">Work Experience</h1>
        <div className=" flex flex-col  sm:flex-row">
          <div className="flex flex-col py-3 w-full h-full items-center justify-center">
            <h2>Cognizant</h2>
            <h3>Frontend&nbsp;Developer&nbsp;- Programmer&nbsp;Analyst</h3>
            <h3 className=" font-extralight">03/2021-07/2022</h3>
          </div>
          <div className=" w-full h-full py-3 flex flex-col items-center justify-center">
            <h2>Fuelbuddy</h2>
            <h3>Frontend Developer</h3>
            <h3 className=" font-extralight">03/2021-Present</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
