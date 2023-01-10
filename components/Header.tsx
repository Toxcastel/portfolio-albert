import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import SideBar from "./SideBar";
type Props = {
    socials: Social[];
};

export default function Header({ socials }: Props) {
    return (
        <header className="sticky top-0 p-5 flex  items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
                className="sm:hidden flex-row items-center space-x-0 "
            >
                
                <SideBar />
            </motion.div>
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
                className="sm:flex flex-row items-center space-x-0 hidden"
            >
                {/* Social Icons: npm i react-social-icons */}
                {socials.map((social) => (
                    <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent" target="_blank" />
                ))}
            </motion.div>

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
                className="sm:flex flex-row items-center text-gray-300 cursor-pointer hidden"
            >
                <SocialIcon url="#contact" className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
            </motion.div>
        </header>
    );
}
