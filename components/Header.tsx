import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
            {/* Watch framer-motion documentation */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                {/* Social Icons: npm i react-social-icons */}
                <SocialIcon url="https://www.linkedin.com/in/albertocastel/" fgColor="gray" bgColor="transparent" target="_blank" />
                <SocialIcon url="https://github.com/Toxcastel" fgColor="gray" bgColor="transparent" target="_blank" />
                <SocialIcon url="https://www.instagram.com/toxcastel/" fgColor="gray" bgColor="transparent" target="_blank" />
            </motion.div>
            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 1.3 }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer"
                >
                    <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact me</p>
                </motion.div>
            </Link>
        </header>
    );
}
