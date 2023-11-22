import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
const App = () => {
  const [view,setView]=useState(false);
  return (
   
    <div  className=" bg-red-500 flex flex-col  w-[100%] h-full  relative" >
      <Header stat={view} set={setView} />
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
      <Sidebar  status={view} set={setView}  />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
