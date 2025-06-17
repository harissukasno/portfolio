import { Project } from '../types/project';
import CurtainReveal from './CurtainReveal';

interface TimelineProps {
  projects: Project[];
}

const Timeline: React.FC<TimelineProps> = ({ projects }) => {
  return (
    <div className="relative container mx-auto px-4 py-8">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
      
      {projects.map((project, index) => (
        <div key={project.id} className={`relative mb-8 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-1/2`}>
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 ${
              index % 2 === 0
                ? 'left-0 -ml-2'
                : 'right-0 -mr-2'
            }`}
          ></div>
            <div className={`p-6 rounded-lg shadow-lg bg-white ${index % 2 === 0 ? 'ml-4' : 'mr-4'} `}>
              <CurtainReveal direction={index % 2 === 0 ? 'left' : 'right'}>                  
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
        </div>
      ))}
    </div>
  );
};

export default Timeline; 