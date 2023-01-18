import { motion } from "framer-motion";
import { Skill } from "../typings";
import UniqueSkill from "./UniqueSkill";

type Props = {
    skills: Skill[];
};

const Skills = ({ skills }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-0 p-5 sm:top-[4rem] uppercase sm:tracking-[20px] tracking-[10px]  text-gray-500 text-2xl">Skills</h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                {skills?.map((skill, i) => (
                    <div key={i}>
                        <UniqueSkill skill={skill}/>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
