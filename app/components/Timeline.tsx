import { Project } from '../types/project';
import CurtainReveal from './CurtainReveal';
import Image from 'next/image';

interface TimelineProps {
  projects: Project[];
}

const Timeline: React.FC<TimelineProps> = ({ projects }) => {
  return (
    <div className="relative container mx-auto px-4 py-8">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
      
      {projects.map((project) => (
        <div key={project.id} className={`relative mb-8`}>
          <div className={`absolute top-1/2 left-1/2 left-0 -ml-2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500`}></div>
          <div className="flex flex-row items-center">
            <div className="relative p-6 rounded-lg shadow-lg bg-white w-1/2 mr-8 ml-0">
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

            <div className="w-1/2">
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
                          className="mb-2"
                        />
                      ))
                    : project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={150}
                          height={150}
                        />
                      )
                  }
                </div>
              </CurtainReveal>
            </div>
          </div>
        </div>
      ))}      
    </div>
  );
};

export default Timeline; 