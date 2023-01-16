import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-0 p-5 sm:top-[4rem] uppercase sm:tracking-[20px] tracking-[10px]  text-gray-500 text-2xl">Skills</h3>


            <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    );
};

export default Skills;
