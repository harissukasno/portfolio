'use client';

import { Project } from '../types/project';
import CurtainReveal from './CurtainReveal';
import Image from 'next/image';
import React, { useState } from 'react';

interface TimelineProps {
  projects: Project[];
}

const Timeline: React.FC<TimelineProps> = ({ projects }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Modal component for zoomed image
  const ImageModal = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0, 0, 0, 0.7) 100%" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-full max-h-full p-4"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-80 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg max-h-[80vh] max-w-[90vw] object-contain"
        />
      </div>
    </div>
  );

  return (
    <div className="relative container mx-auto px-4 py-8">
      <div className="absolute sm:left-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
      
      {projects.map((project) => (
      <div key={project.id} className="relative mb-8">
        <div className="absolute top-1/2 sm:left-0 md:left-1/2 -ml-2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="flex flex-col md:flex-row items-center ml-4 md:ml-0 border-b-2 md:border-b-0 pb-5 md:pb-0">
          <div className="relative p-6 rounded-lg shadow-lg bg-white w-full md:w-1/2 md:mr-8 md:ml-0 mb-4 md:mb-0">
            <CurtainReveal direction="right">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-md font-bold text-gray-800 mb-2">Stack: </span>
              {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tech}
              </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            </CurtainReveal>
          </div>

          <div className="w-full md:w-1/2">
            <CurtainReveal direction="left">
            <div className="flex flex-row flex-wrap gap-2">
              {Array.isArray(project.image)
              ? project.image.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${project.title} image ${idx + 1}`}
                  width={150}
                  height={150}
                  className="mb-2 cursor-zoom-in hover:scale-105 transition-transform duration-200"
                  onClick={() => setZoomedImage(img)}
                />
                ))
              : project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="cursor-zoom-in hover:scale-105 transition-transform duration-200"
                  onClick={() => setZoomedImage(typeof project.image === "string" ? project.image : null)}
                />
                )
              }
            </div>
            </CurtainReveal>
          </div>
        </div>
      </div>
      ))}      

      {zoomedImage && (
        <ImageModal
          src={zoomedImage}
          alt="Zoomed project image"
          onClose={() => setZoomedImage(null)}
        />
      )}
    </div>
  );
};

export default Timeline; 