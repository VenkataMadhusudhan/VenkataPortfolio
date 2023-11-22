import projone from "../images/projone.png";
import projtwo from "../images/projtwo.png"
const Projects = () => {
  return (
    <div id="projects"
      className="bg-black text-white flex flex-col  items-center  min-h-screen
      px-[5vw] py-[8vh] md:px-[7vw] md:py-[10vh]"
    >
      <h1 className=" pb-3 underline text-5xl font-light decoration-orange-600">
        Projects
      </h1>
      <div className="  flex flex-row flex-wrap justify-between min-h-[70vh] max-h-full w-full">
        <div className="p-2  h-[70vh]  flex-grow min-w-[300px] ">
          <div className=" rounded-2xl  bg-orange-400 h-[100%] w-full relative ">
            <div className=" p-2 cont  bottom-[5%]  w-[100%] h-1/4 absolute bg-black bg-opacity-60 backdrop-filter backdrop-blur-[10px] flex flex-col justify-around items-center">
              <h1 className=" text-xl">Expence Tracker</h1>
              <a href="https://github.com/VenkataMadhusudhan/Expense-tracker" target="_blank" className=" border-2 p-2 rounded-lg border-orange-500">
                View Project
              </a>
            </div>
            <img
              className=" object-cover rounded-2xl  w-full h-full"
              src={projone}
            />
          </div>
        </div>
        <div className="p-2 h-[70vh]  flex-grow min-w-[300px] ">
          <div className=" rounded-2xl bg-orange-400 h-[100%] w-full relative ">
            <div className=" p-2 cont  bottom-[5%]  w-[100%] h-1/4 absolute bg-black bg-opacity-60 backdrop-filter backdrop-blur-[10px] flex flex-col justify-around items-center">
              <h1 className=" text-xl">To-Do App</h1>
              <a href="https://github.com/VenkataMadhusudhan/Jarvis-To-Do" target="_blank" className=" border-2 p-2 rounded-lg border-orange-500">
                View Project
              </a>
            </div>
            <img
              className=" object-cover rounded-2xl  w-full h-full"
              src={projtwo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
