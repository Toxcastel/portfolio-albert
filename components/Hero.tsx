import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import profileImage from "../assets/albert-profile.jpg";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
    {
        /* Install react-simple-typewriter */
    }
    const [text, count] = useTypewriter({
        words: ["coding", "a good coffee", "playing guitar", "outrigger canoes", "dogs", "nature"],
        loop: true,
        delaySpeed: 1200,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <Image className="relative rounded-full h-40 w-40 mx-auto object-cover" src={profileImage} alt="albert-profile-picture" />
            <div className="z-20">
                <h2 className="text-md uppercase text-gray-500 font-bold pb-2 tracking-[10px]">alberto castel rapu</h2>
                <h1 className="text-md font-semibold px-10">
                    Engineer | Developer
                    <p>
                        I enjoy{" "}
                        <span>
                            {text}
                            <Cursor cursorColor="grey" />
                        </span>
                    </p>
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
