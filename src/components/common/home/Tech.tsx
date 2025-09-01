import { experienceLogoList } from "@/constants/experienceLogo.constant";

export function Tech() {
  return (
    <div className="sm:h-screen mb-20 sm:mb-0">
      <div className="px-5 md:p-14 w-full h-full flex flex-col gap-10 md:gap-20 items-center">
        <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
          {experienceLogoList.map((exp, index) => (
            <exp.icon
              key={index}
              className="text-4xl md:text-5xl lg:text-[77px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
