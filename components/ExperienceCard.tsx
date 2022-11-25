import Image from "next/image";
import React from "react";
import stp from "../assets/logo-cmn.png";
import arcgis from "../assets/ESRI_logo_logotype.png";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.div className="h-32 w-32  " initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Image  src={stp} alt="stp rapa nui" height={300} />
            </motion.div>

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Data Manager - IT Specialist</h4>
                <p className="font-bold text-2xl mt-1">STP - Rapa Nui</p>
                <div className="flex space-x-2 my-2">
                    {/* Tech */}
                    <Image src={arcgis} className="h-10 w-auto rounded-full" alt="arcgis logo"/>
                    {/* Tech */}
                    {/* Tech */}
                </div>
                <p className="uppercase py-5 text-gray-300">Start - End</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Thingy</li>
                    <li>Thingy</li>
                    <li>Thingy</li>
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
