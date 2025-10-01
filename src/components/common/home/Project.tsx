import { ProjectCard } from "./ProjectCard";
import { projectList } from "@/constants/project.constant";

export function Project() {
  return (
    <div className="sm:h-screen mb-20 sm:mb-0">
      <div className="px-5 md:p-14 w-full h-full flex flex-col gap-10 md:gap-20 items-center">
        <h2 className="text-5xl md:text-6xl font-bold">Project</h2>
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              desc={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
