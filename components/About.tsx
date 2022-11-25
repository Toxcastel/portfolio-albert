import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "../assets/tepi-tato.jpg";

type Props = {};

function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{ once: true }}
            >
                <Image
                    alt="stf-tato"
                    src={aboutImage}
                    className="-mb-20 md:mb-0 flex-shrink-0 max-h-[400px] w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                    priority
                    height={400}
                />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-2xl">
                <h4 className="text-4xl font-semibold">
                    You can call me <span className="text-[#F7AB0A]">Albert</span>,
                </h4>
                <p>
                    {`A developer since 2022, with a background in civil engineering and archaeological back-office experience where most of my work
                    always had something to do with technology. I've found a new pasion for programming and I'm eager to dive in deep.`}
                    <br />
                    <br />
                    {`If you get to now me you'll notice that I'm pretty easy to talk to, fun to hang out with but also very diligent and with lots of
                    patience and endurance.`}
                </p>
            </div>
        </motion.div>
    );
}

export default About;
