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
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.div
                className="h-20 w-20 object-cover object-center"
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Image src={urlFor(experience?.companyImage).url()} alt="stp rapa nui" height={300} width={300} className="h-20 w-20" />
            </motion.div>

            <div className="px-0 md:px-10">
                <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
                <p className="font-bold text-1xl mt-1">{experience.company}</p>
                <div className="flex space-x-2 my-2">
                    {experience.technologies.map((tech) => (
                        <Image
                            key={tech._id}
                            src={urlFor(tech.image).url()}
                            width={200}
                            height={200}
                            className="h-10 w-10 rounded-full"
                            alt="arcgis logo"
                        />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">{new Date(experience.dateStarted).toDateString()}{" "}-{" "}{experience.isCurrentlyWorkingHere?"Present":new Date(experience.dateEnded).toDateString()}</p>
                <ul className="list-disc space-y-4 ml-5 text-md h-80 overflow-y-scroll">
                    <li>{experience.points}</li>
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
