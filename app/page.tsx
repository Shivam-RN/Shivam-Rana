
"use client";

import Approach from "@/components/Approach";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Education from "@/components/PersonalInfo";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { socialMedia } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip" id="home">
      
     
      <div className="absolute top-4 left-0 right-0 z-50 px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        
       
        <div className="flex flex-col sm:flex-row items-center gap-4">
  <img
    src="/shivam.jpg"
    alt="Shivam Rana"
    className="w-40 h-40 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-white shadow-2xl"
  />
  <div className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-purple rounded-full shadow-xl text-lg sm:text-xl font-semibold tracking-wide text-center sm:text-left">
    Shivam Rana <br className="sm:hidden" />
    <span className="hidden sm:inline"> - </span> Full Stack Developer
  </div>
</div>


        {/* Right: Social Media Icons */}
        <div className="flex gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="max-w-7xl w-full mt-32">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Certificates />  
        <Approach />
        <Education/>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
