import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "../assets/tepi-tato.jpg";

type Props = {};

function About({}: Props) {
    return (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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
                    priority height={400}
                />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-2xl">
                <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ut enim architecto dolorum corrupti culpa tenetur quod fugit assumenda, non voluptatum natus. Tempora sapiente minima atque porro qui natus deleniti consequatur. Facilis pariatur perspiciatis sunt distinctio molestiae maiores sit delectus, ipsam ratione voluptatibus reiciendis itaque officiis minus cum tenetur cumque non eaque exercitationem laborum numquam nam repellendus. Quisquam ad provident vero necessitatibus perferendis iure, nihil vitae iusto quaerat amet possimus temporibus laudantium facere doloribus unde eius ducimus libero ratione laborum animi ea nisi! Est eum non vel tempore earum sapiente, repellat id beatae quae facilis rem consequuntur deserunt cum numquam?</p>
            </div>
        </motion.div>
    );
}

export default About;
