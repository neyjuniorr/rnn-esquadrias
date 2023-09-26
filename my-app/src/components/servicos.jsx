import React from 'react';
import Orcamento from '../image/orcamento.jpg';
import { FiPhone, FiMail, FiInstagram } from 'react-icons/fi';
import { FaMapMarker } from 'react-icons/fa';
import Image from '../image/3.png'


const Servicos = () => {
  return (
    <div name="Serviços" className="w-full min-h-screen bg-blue-900">
      <div className="max-w-screen p-7 flex flex-col lg:flex-row justify-center w-full h-full">
        <div className="lg:w-3/4 p-8">
          <h1 className="text-4xl p-4 font-bold text-white">Esquadrias de Alumínio sob medida</h1>
          <div>
            <img
              src={Orcamento}
              alt="Solicite orçamento"
              width={500}
              className="mb-5 w-full lg:w-4/5 mx-4"
            />
          </div>
        </div>
        <div name="Entre em contato" className="lg:w-3/6 p-5  mt-24">
          <h2 className="text-3xl font-bold text-white">Solicite um Orçamento</h2>
          
        
          <ul className="text-white mt-5">
            <a href="https://wa.me/5561999971128" className='flex items-center' target='blanck'>
            <li>
              <FiPhone className="inline text-2xl mr-2" color='#60A5FA' />
              61 99997-1128
            </li>
            </a>
            <a href="mailto:rnnesquadrias@gmail.com" className="flex items-center" target='blanck'>
            <li>
              <FiMail className="inline text-2xl mr-2" color='#60A5FA' />
              rnnesquadrias@gmail.com
            </li>
            </a>
            <a href="https://www.google.com/maps/dir/-15.8072832,-47.9526912/11+-+QR+501+-+Samambaia+Sul,+Bras%C3%ADlia+-+DF,+72311-600/@-15.8495956,-48.1032517,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x935bd2c864c904cd:0xe60393452d665986!2m2!1d-48.0896362!2d-15.887153?entry=ttu" target='blanck'>
            <li>
              <FaMapMarker className="inline text-2xl mr-2" color='#60A5FA' />
              QR 501 Conjunto 10 Lote 11  Samambaia/DF
            </li>
            </a>
            <a href="https://www.instagram.com/rnn.esquadrias/" target='blanck'>
            <li>
              <FiInstagram className="inline text-2xl mr-2" color='#60A5FA'/>
              @rnn.esquadrias
            </li>
            </a>
            <li>
                <h2 className='mt-6 text-xl'>Horário de funcionamento: <br></br>
                    Segunda a sexta 
                    07h00 as 17h00 
                </h2>
            </li>
            <img src={Image} alt="logo final" width={160} className='ml-32' />
          </ul>
          </div>
        </div>
      </div>
    
  );
};

export default Servicos;
