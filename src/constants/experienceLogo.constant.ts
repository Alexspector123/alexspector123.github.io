import { ExpLogo } from "@/interfaces/expLogo.interface";

import {
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiSwagger,
  SiPostman,
  SiDocker,
  SiFigma,
  SiGit,
  SiTailwindcss,
  SiGithub,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiGraphql,
  SiApollographql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";

export const experienceLogoList: ExpLogo[] = [
  {
    name: "HTML5",
    icon: SiHtml5,
    type: "language",
  },
  {
    name: "CSS",
    icon: SiCss3,
    type: "language",
  },
  {
    name: "TailwindCss",
    icon: SiTailwindcss,
    type: "framework",
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    type: "language",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    type: "language",
  },
  {
    name: "Python",
    icon: SiPython,
    type: "language",
  },
  {
    name: "Java",
    icon: FaJava,
    type: "language",
  },
  {
    name: "C/C++",
    icon: SiC,
    type: "language",
  },
  {
    name: "React.js",
    icon: SiReact,
    type: "framework",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    type: "framework",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    type: "framework",
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
    type: "framework",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    type: "framework",
  },
  {
    name: "SQL/NoSQL",
    icon: PiFileSql,
    type: "language",
  },
  {
    name: "Swagger",
    icon: SiSwagger,
    type: "framework",
  },
  {
    name: "Postman",
    icon: SiPostman,
    type: "tool",
  },
  // {
  //   name: "Docker",
  //   icon: SiDocker,
  // },
  {
    name: "Figma",
    icon: SiFigma,
    type: "tool",
  },
  {
    name: "Git",
    icon: SiGit,
    type: "tool",
  },
  {
    name: "Github",
    icon: SiGithub,
    type: "tool",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    type: "tool",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    type: "tool",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    type: "tool",
  },

  {
    name: "GraphQl",
    icon: SiGraphql,
    type: "tool",
  },
  // {
  //   name: "GraphQl",
  //   icon: SiApollographql,
  // },
];
