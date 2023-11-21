
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-scroll";

const Header = (props) => {

  
  return (
    <header
      className=" z-10 w-full fixed top-0 left-0  flex flex-row justify-between items-center  px-4 h-[8vh]
        bg-black bg-opacity-30 shadow-lg  border-opacity-1 border-black backdrop-filter backdrop-blur-[5px] ">
      <div className="text-white text-4xl">
        <p>
          <span>G</span>V
        </p>
      </div>
      <ul className=" sm:flex flex-row hidden justify-center  w-fit text-white  text-[17px]">
       
      <Link
          to="about"
          smooth="true"
          className=" cursor-pointer"
        >        <li className="mx-2 hover:bg-orange-500 rounded px-2  hover:no-underline underline decoration-orange-500 ">
          About
        </li>
        </Link>
        <Link
          to="projects"
          smooth="true"
          className=" cursor-pointer"
        >
        <li className="mx-2 hover:bg-orange-500 rounded px-2  hover:no-underline underline decoration-orange-500">
           Projects
        </li>
        </Link>
          
        <li className="mx-2 hover:bg-orange-500 rounded px-2  hover:no-underline underline decoration-orange-500">
          <a href="https://drive.google.com/file/d/1rrm2t8UzzL8ppjVFu0Fm6kyiV6H6b-EK/view" target="_blank">Resume</a>
        </li>
        
        <Link
          to="contact"
          smooth="true"
          className=" cursor-pointer"
        >   
        <li className="mx-2 hover:bg-orange-500 rounded px-2  hover:no-underline underline decoration-orange-500 ">
          Contact
        </li>
        </Link>
      </ul>
      <div className="sm:hidden flex flex-row text-sm">
        <CiMenuKebab className=" rotate-90 text-4xl text-white"
          // onClick={()=>{props.stat === "hidebar" ? props.set("viewbar") : props.set("hidebar")}}
            onClick={()=>{props.set(!props.stat)}}
        />
      </div>
    </header>
  );
};

export default Header;
