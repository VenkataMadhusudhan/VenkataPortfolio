import { Link } from "react-scroll";
const Sidebar = (props) => {
  return (
    // {props.status}
    <div
      className={`${
        props.status ? `viewbar` : `hidebar`}  sm:hidden fixed right-0 top-[8vh] min-w-[200px] w-[30%] rounded-s-3xl
     bg-white bg-opacity-50 shadow-lg  border-opacity-1 backdrop-filter backdrop-blur-[5px] `}
    >
      <ul className="flex flex-col  justify-between py-3 gap-[10px] w-fit text-black  text-[25px]">
        <Link to="about" smooth="true" className=" cursor-pointer">
          <li onClick={()=>{props.set(!props.status)}} className="mx-2  rounded px-2   ">
            <p>
              <span className=" text-orange-500 px-2">|</span>About
            </p>
          </li>
        </Link>
        <Link to="projects" smooth="true" className=" cursor-pointer">
          <li onClick={()=>{props.set(!props.status)}} className="mx-2  rounded px-2 ">
            <p>
              <span className=" text-orange-500 px-2">|</span>Projects
            </p>
          </li>
        </Link>

        <li onClick={()=>{props.set(!props.status)}} className="mx-2 rounded px-2  ">
          <a
            href="https://drive.google.com/file/d/1rrm2t8UzzL8ppjVFu0Fm6kyiV6H6b-EK/view"
            target="_blank"
          >
            <span className=" text-orange-500 px-2">|</span>Resume
          </a>
        </li>
        <Link to="contact" smooth="true" className=" cursor-pointer">
          <li onClick={()=>{props.set(!props.status)}} className="mx-2  rounded px-2  ">
            <p>
              <span className=" text-orange-500 px-2">|</span>Contact
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Sidebar;
