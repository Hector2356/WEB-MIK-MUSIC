import React from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className={`relative flex flex-col bg-gray-900 rounded-2xl shadow-2xl ${service.colorClass.shadow} transform transition-transform duration-300 overflow-hidden ${service.popular ? 'md:scale-105' : 'hover:scale-105'}`}>
    
    <div className={`p-8 text-center rounded-t-2xl ${service.colorClass.bgColor} text-gray-900`}>
      <div className="flex justify-center items-center gap-3 mb-2">
        <h3 className="text-3xl font-anton">{service.title}</h3>
        {service.popular && (
          <span className="bg-black text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            Popular
          </span>
        )}
      </div>
      <p className="font-semibold min-h-[48px] flex items-center justify-center opacity-80">{service.tagline}</p>
    </div>

    <div className="p-8 flex-grow flex flex-col">
      <div className="text-center">
        <p className={`text-5xl font-anton mb-6 ${service.colorClass.checkColor}`}>{service.price}</p>
      </div>
      <div className="border-t border-gray-700 my-2"></div>
      <ul className="space-y-4 text-left my-6 flex-grow">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className={`w-6 h-6 mr-3 ${service.colorClass.checkColor} flex-shrink-0 mt-1`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300 font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contacto" className={`mt-auto block text-center w-full font-bold uppercase tracking-widest py-3 px-8 rounded-md transition-all duration-300 ${service.colorClass.button} ${service.colorClass.buttonText}`}>
        Consíguelo ahora
      </a>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-32" style={{backgroundColor: '#292626'}}>
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 md:mb-24 text-white">
                <h2 className="text-4xl md:text-5xl font-anton">Producción Musical A Otro Nivel</h2>
                <p className="text-lg text-gray-300 mt-2">Elige el plan perfecto para lanzar tu carrera.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-7xl mx-auto items-stretch">
                {SERVICES_DATA.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default ServicesSection;