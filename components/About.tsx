import React from "react";

type Props = {};

function About({}: Props) {
    return (
        <div className="flex relative flex-col text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        </div>
    );
}

export default About;