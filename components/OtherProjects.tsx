import { otherprojects } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const OtherProjects = () => {
  return (
    <section
      className="pt-10 pb-5 sm:pt-20 sm:mt-[-80px] sm:pb-20 mb-[-50px] lg:mt-[-150px]"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h1 id="projects-heading" className="heading mb-10 lg:pb-10 sm:mb-10">
        Other <span className="text-purple">Projects</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-5 grid-cols-1 gap-y-5 gap-x-10  lg:ml-40">
        {otherprojects.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-pointer hover:shadow-2xl hover:shadow-purple/20 transition-all duration-300"
            onClick={() => window.open(card.link, '_blank')}
          >
           
           <div className="flex flex-row items-center justify-start p-3 py-4 md:p-6 lg:p-10 gap-3 md:gap-5 lg:gap-6 hover:scale-[1.03] transition-all duration-300 ease-out">
            <img
              src={card.img}
              alt={card.title}
              className="lg:w-32 md:w-24 w-20 h-20 md:h-24 lg:h-32 rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-start text-base md:text-xl lg:text-2xl font-bold line-clamp-2 mb-1 md:mb-2">
                {card.name}
              </h1>
              <p className="text-start text-white-100 font-medium text-xs md:text-sm lg:text-base line-clamp-2 opacity-90">
                {card.title}
              </p>
            </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;