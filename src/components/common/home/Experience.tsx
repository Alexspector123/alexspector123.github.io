import { experienceLogoList } from "@/constants/experienceLogo.constant";

export function Experience() {
  return (
    <div className="h-screen">
      <div className="p-14 w-full h-full flex flex-col gap-10 items-center">
        <h2 className="text-5xl font-bold">Experience</h2>
        <div className="flex-1 flex flex-row flex-wrap gap-10 items-center justify-center">
          {experienceLogoList.map((exp, index) => (
            <exp.icon key={index} className="text-7xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
