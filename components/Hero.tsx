import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import profileImage from "../assets/albert-profile.jpg";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from '../sanity';
type Props = {
    pageInfo: PageInfo
};

export default function Hero({pageInfo}: Props) {
    {
        /* Install react-simple-typewriter */
    }
    const [text, count] = useTypewriter({
        words: pageInfo?.enjoy,
        loop: true,
        delaySpeed: 1200,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <Image className="relative rounded-full h-40 w-40 mx-auto object-cover" src={urlFor(pageInfo?.heroImage).url()} width={1000} height={1000} alt="albert-profile-picture" priority={true} />
            <div className="z-10">
                <h2 className="text-md uppercase text-gray-500 font-bold pb-2 tracking-[10px]">{pageInfo?.name}</h2>
                <h1 className="text-md font-semibold px-10">
                    {pageInfo?.role}
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
