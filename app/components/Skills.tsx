import React from "react";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiNestjs,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiLinux,
    SiGithub,    
    SiPostman,
    SiC,
    SiPython,    
} from "react-icons/si";
import { FaTools, FaDatabase, FaServer, FaCode, FaMicrochip } from "react-icons/fa";
import { MdBuild } from "react-icons/md";

// Map stack names to icons
const stackIcons: Record<string, React.ReactNode> = {
    "React": <SiReact className="text-sky-500" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    "Tailwind": <SiTailwindcss className="text-cyan-400" />,
    "TypeScript": <SiTypescript className="text-blue-600" />,
    "Node.js": <SiNodedotjs className="text-green-600" />,
    "NestJS": <SiNestjs className="text-red-600" />,
    "Express": <SiExpress className="text-gray-700 dark:text-gray-200" />,
    "MySQL": <SiMysql className="text-blue-700" />,
    "PostgreSQL": <SiPostgresql className="text-blue-800" />,
    "MongoDB": <SiMongodb className="text-green-700" />,
    "Docker": <SiDocker className="text-blue-500" />,
    "Git": <SiGit className="text-orange-500" />,    
    "Linux": <SiLinux className="text-yellow-600" />,
    "GitHub": <SiGithub className="text-black dark:text-white" />,    
    "Postman": <SiPostman className="text-orange-500" />,
    "C": <SiC className="text-blue-700" />,
    "Python": <SiPython className="text-yellow-500" />,
};

const areaIcons: Record<string, React.ReactNode> = {
    "Frontend": <FaCode className="text-pink-500" />,
    "Backend": <FaServer className="text-green-700" />,
    "Database": <FaDatabase className="text-blue-900" />,
    "DevOps": <MdBuild className="text-orange-700" />,
    "Tools": <FaTools className="text-gray-700" />,
    "Embedded": <FaMicrochip className="text-indigo-700" />,
};

const skills = [
    {
        area: "Frontend",
        stacks: ["React", "Next.js", "Tailwind", "TypeScript"],
    },
    {
        area: "Backend",
        stacks: ["Node.js", "NestJS", "Express"],
    },
    {
        area: "Database",
        stacks: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        area: "DevOps",
        stacks: ["Docker", "Git", "CI/CD", "Linux"],
    },
    {
        area: "Tools",
        stacks: ["GitHub", "VSCode", "Postman"],
    },
    {
        area: "Embedded",
        stacks: ["C", "Python"],
    },
];

export default function Skills() {
    return (
        <section className="max-w-3xl mx-auto my-12 px-6">
            <h2 className="text-3xl font-bold mb-8 text-center tracking-tight text-black dark:text-black">
                Skills &amp; Stacks
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-lg" style={{ background: "rgba(129, 154, 145,0.3)" }}>
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-4 text-left text-lg font-semibold text-neutral-700 dark:text-neutral-700">
                                Area
                            </th>
                            <th className="px-6 py-4 text-left text-lg font-semibold text-neutral-700 dark:text-neutral-700">
                                Stack
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map((skill) => (
                            <tr key={skill.area} className="">
                                <td className="px-6 py-4 font-medium text-neutral-800 dark:text-neutral-800 whitespace-nowrap flex items-center gap-2">
                                    {areaIcons[skill.area] && (
                                        <span className="text-xl">{areaIcons[skill.area]}</span>
                                    )}
                                    {skill.area}
                                </td>
                                <td className="px-6 py-4 text-neutral-600 dark:text-neutral-300">
                                    <div className="flex flex-wrap gap-2">
                                        {skill.stacks.map((stack) => (
                                            <span
                                                key={stack}
                                                className="inline-flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                                            >
                                                {stackIcons[stack] && (
                                                    <span className="text-base">{stackIcons[stack]}</span>
                                                )}
                                                {stack}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}