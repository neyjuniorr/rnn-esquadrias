import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Imagem1 from '../image/img.jpeg';
import Imagem2 from "../image/img2.jpeg";
import Imagem3 from "../image/img3.jpeg";


const Projetos = () => {
  const slides = [
    {
      url: Imagem1,
    },
    {
      url: Imagem2,
    },
    {
      url: Imagem3,
    },

  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  

  return (
    <div name="Projetos"
    className='w-full h-screen'> 

    <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full">
     
    <div className="pb-8">
    <p className='text-4xl font-bold inline border-b-4 text-blue-900  w-2'>Projetos
    </p>
    <h1 className='text-2xl mt-5'> Abaixo segue um pouco do nosso trabalho.</h1>
    </div>
    <div className=' max-w-[1000px] h-[400px] w-screen m-0  px-13 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`,
                 backgroundSize: 'cover', }}
        className='w-full h-full rounded-xl bg-center duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={24} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={24} />
      </div>
      
      </div>
    </div>
    
    </div>
    
   
  )
}

export default Projetos; 