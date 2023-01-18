import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
    socials: Social[];
};
const SideBar = ({ socials }: Props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={`${open && "hidden"} z-30`}>
                <button className="ml-4 " onClick={() => setOpen(!open)}>
                    <Bars3Icon className="text-[gray] h-7 w-7 " />
                </button>
            </div>
            <div
                className={`${!open && "hidden"} min-h-screen w-full fixed top-0 left-0 right-0  backdrop-blur-sm z-20`}
                onClick={() => setOpen(!open)}
            ></div>

            <div id="slide" className={`${!open && "hidden"} bg-[rgb(36,36,36)] min-h-screen w-[50%] fixed top-0 left-0 z-40 pt-5`}>
                <div className="flex flex-col">
                    <Link href="#hero">
                        <button className="sideBarMenu" onClick={() => setOpen(!open)}>
                            Top
                        </button>
                    </Link>
                    <Link href="#about">
                        <button className="sideBarMenu" onClick={() => setOpen(!open)}>
                            About
                        </button>
                    </Link>
                    <Link href="#skills">
                        <button className="sideBarMenu" onClick={() => setOpen(!open)}>
                            Skills
                        </button>
                    </Link>
                    <Link href="#experience">
                        <button className="sideBarMenu" onClick={() => setOpen(!open)}>
                            Experience
                        </button>
                    </Link>
                    <Link href="#projects">
                        <button className="sideBarMenu" onClick={() => setOpen(!open)}>
                            Projects
                        </button>
                    </Link>
                    <Link href="#contact">
                        <button className="sideBarMenu" onClick={() => setOpen(!open)}>
                            Contact
                        </button>
                    </Link>

                    <div className="sideBarMenu">Socials:</div>
                    <div className="flex flex-row sideBarMenu">
                        {socials.map((social) => (
                            <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent" target="_blank" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
