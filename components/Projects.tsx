import Image from "next/image";
import React from "react";
import xavia from "../assets/xaviaiot.png";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-0 p-5 sm:top-[4rem] uppercase sm:tracking-[20px] tracking-[10px] text-gray-500 text-2xl">Projects</h3>

            <div className="relative  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.div
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            key={i+1}
                            className="relative h-[200px] w-[200px]"
                        >
                            <Image src={xavia} alt="img"  className="object-contain"/>
                        </motion.div>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-3xl font-semibold text-center ">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}
                                </span>
                                : IoT Platform
                            </h4>
                            <p className="text-sm text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam maxime eligendi recusandae numquam enim
                                temporibus necessitatibus. Quisquam maxime architecto excepturi qui maiores, error necessitatibus voluptatum eveniet
                                illum hic pariatur fuga fugiat vel natus autem debitis quo veritatis eos doloribus? Id aperiam impedit tenetur aliquid
                                unde quos nobis accusantium inventore.S
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
};

export default Projects;
