import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContactClick = () => {
    if (isMobile) {
      window.location.href = "mailto:shivamrana1809@gmail.com";
    } else {
      window.open("https://www.linkedin.com/in/shivamrana1809/", "_blank");
    }
  };

  return (
    <footer className="w-full pt-0 mt-[-100px] pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center select-text">
        <h1 className="heading lg:max-w-[45vw]">
          Excited to begin <span className="text-purple">your</span> digital journey with clean code and creative solutions?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>

      
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={handleContactClick}
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center select-text">
        <p className="md:text-base text-sm md:font-normal font-light pb-2">
          Copyright © 2024 Shivam Rana
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
