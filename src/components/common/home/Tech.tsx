import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
import { experienceLogoList } from "@/constants/experienceLogo.constant";

export function Tech() {
  const logos: LogoItem[] = experienceLogoList.map((exp) => ({
    node: <exp.icon />,
    title: exp.name,
    ariaLabel: exp.name,
  }));
  return (
    <div className="sm:h-screen mb-20">
      <div className="px-5 md:p-14 w-full h-full flex flex-col gap-10 md:gap-20 items-center">
        <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
        <div className="relative overflow-hidden w-full">
          <LogoLoop
            logos={logos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </div>
  );
}
