import React from "react";
import Logo from "../image/logo.jpg";
import { Link } from "react-scroll";

const Inicio = () => {
  return (
    <div
      name="Inicio"
      className="h-screen w-full bg-blue-900"
    >
         <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Logo})` }}>
      <div className="max-w-screen-lg mx-10 flex flex-col  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-screen">
        <h1 className="text-4xl p-25 sm:text-4xl font-bold text-white ">
            Há quase 30 anos combinando conforto, inovação e segurança.
          </h1>
          <Link
              to="Sobre"
              smooth
              duration={500}
              className="group text-white w-fit px-5 py-2 my-3 flex items-end rounded-md bg-black cursor-pointer"
            >
              Saiba Mais
              <span className="group-hover:rotate-90 duration-300">
                
              </span>
            </Link>
          </div>
          
          <div>
          
          
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default Inicio;