import React from "react";
import Logo from "../image/logo.jpg";
import { Link } from "react-scroll";

const Inicio = () => {
  return (
    <div
      name="Inicio"
      className="h-screen w-full bg-blue-900 "
    >
         <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Logo})` }}>
      <div className="max-w-screen-lg flex flex-col h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center h-screen">
        <h1 className="text-5xl font-bold text-white mt-58 ">
            Há quase 30 anos <br />
            combinando conforto, < br/>
           inovação e segurança.
          </h1>

          <span  className="group-hover:rotate-90 duration-300">
          <Link
              to="Nossa História"
              smooth
              duration={500}
              className="group text-white w-fit px-5 py-2 my-3 flex items-end rounded-md bg-blue-400 cursor-pointer"
            >
              Saiba Mais
            </Link>
            </span>
          </div>
          
          <div>
          
          
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default Inicio;