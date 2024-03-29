import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    projects: Project[];
};

const Projects = ({projects}: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center sm:px-10 z-0"
        >
            <h3 className="absolute top-0 p-5 sm:top-[4rem] uppercase sm:tracking-[20px] tracking-[10px] text-gray-500 text-2xl">Projects</h3>

            <div className="relative sm:mb-40 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <div key={i + 1} className="relative ">
                            <Image src={urlFor(project?.image).url()} width={300} height={300} alt="img" className="object-contain" />
                        </div>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-3xl font-semibold text-center ">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}
                                </span>
                                : {project.title}
                            </h4>
                            <div className="text-sm text-center md:text-left">
                                {project.sumary}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* this is the background graphic */}
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 blur "></div>
        </motion.div>
    );
};

export default Projects;
