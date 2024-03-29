import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
    experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto sm:items-center items-end"
        >
            <h3 className="absolute top-0 p-5 sm:top-[4rem] uppercase sm:tracking-[20px] tracking-[10px] text-gray-500 text-2xl ">Experience</h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-[80%] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {experiences?.map((experience) => (
                    <ExperienceCard key={experience?._id} experience={experience} />
                ))}
            </div>
        </motion.div>
    );
};

export default WorkExperience;
