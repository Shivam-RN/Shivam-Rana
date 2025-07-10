import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import {
  FaDownload, FaFileAlt 
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 mb-[-100px]" id="home">
     <div>
         <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
     </div>


    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
  <div
    className={cn(
      "absolute inset-0",
      "[background-size:90px_90px]",
      // ✅ Lighter color and thinner lines using rgba for transparency
      "[background-image:linear-gradient(to_right,rgba(228,228,231,0.2)_1px,transparent_4px),linear-gradient(to_bottom,rgba(228,228,231,0.2)_1px,transparent_4px)]",
      "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.2)_1px,transparent_4px),linear-gradient(to_bottom,rgba(38,38,38,0.2)_1px,transparent_4px)]",
    )}
  />
  {/* Radial fade effect */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
</div>

     <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80">
            I’m a full-stack developer with 2+ years of project experience using the MERN stack. I build scalable web apps with a focus on clean UI, performance, and end-to-end functionality.
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

         <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4">
          <a
            href="https://drive.google.com/file/d/1YqXVHo0bQH6bYqGJ4lNNdKcPEDwhxoyd/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <MagicButton
              title="View CV"
              icon={<FaFileAlt />}
              position="left"
            />
          </a>

          <a
            href="https://drive.google.com/file/d/1YqXVHo0bQH6bYqGJ4lNNdKcPEDwhxoyd/view?usp=drive_link"
            className="w-full sm:w-auto"
          >
            <MagicButton
              title="Download CV"
              icon={<FaDownload />}
              position="left"
            />
          </a>
        </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;


 