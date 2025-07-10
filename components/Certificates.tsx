"use client";
import Image from "next/image";
import { useState } from "react";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: "JavaScript Full Course",
      image: "/javascriptt.jpg",
      issuer: "Mapcom Academy",
    },
    {
      title: "Backend Development",
      image: "/backend.jpg",
      issuer: "OMS Infotech",
    },
  ];

  return (
<section className="mt-10 pt-6 pb-10 sm:mt-20 sm:pt-14 sm:pb-20 px-4" id="certificates">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 lg:mt-[-100px]  ">
         My <span className="text-purple">Certificates</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-black-100 rounded-xl border shadow-md p-4 sm:p-5 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedImage(cert.image)}
          >
            <div className="w-full h-[250px] sm:h-[300px] overflow-hidden rounded-md">
  <Image
    src={cert.image}
    alt={cert.title}
    width={700}
    height={500}
    className="w-full h-full object-cover"
  />
</div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-500">{cert.issuer}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-balck-100 p-4 sm:p-6 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto">
            <Image
              src={selectedImage}
              alt="Certificate Preview"
              width={1600}
              height={1000}
              className="rounded-md w-full h-auto object-contain"
            />
            <p className="text-center text-sm mt-4 text-gray-600">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
