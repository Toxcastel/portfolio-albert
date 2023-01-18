import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className="flex flex-col md:flex-row rounded-lg items-center space-y-5 md:space-x-2  flex-shrink-0 w-screen md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10  sm:hover:opacity-100 sm:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <div id="job-title" className="md:min-w-[40%] flex flex-col items-center md:space-y-7">
                <motion.div
                    className="md:h-[120px] md:w-[120px] object-cover object-center hidden md:block"
                    initial={{ y: -100, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Image src={urlFor(experience?.companyImage).url()} alt={experience.company} height={300} width={300} className="grayscale-[50%]" />
                </motion.div>

                <div className="px-0 md:px-10 ">
                    <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
                    <p className="font-bold text-1xl mt-1">{experience.company}</p>
                    <div className="flex flex-wrap space-x-2 my-2 ">
                        {experience.technologies?.map((tech) => (
                            <div key={tech._id} className="relative">
                                <Image src={urlFor(tech.image).url()} width={200} height={200} className="h-7 w-7 rounded-full" alt="arcgis logo" />
                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center  text-gray-300 ">
                                    <br />
                                    <br />
                                    {tech.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="job-description" className="overflow-auto  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80   md:scrollbar-thin">
                <p className="uppercase  text-gray-300">
                    <>
                        {experience.dateStarted}- {experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}
                    </>
                </p>
                <ul className="list-disc space-y-4 ml-5 text-md h-80 ">
                    {experience.points?.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
