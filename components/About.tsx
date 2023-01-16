import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
    pageInfo: PageInfo
};

function About({pageInfo}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
        >
            <h3 className="absolute top-0 p-5 sm:top-[4rem] uppercase sm:tracking-[20px] tracking-[10px] text-gray-500 text-2xl">About</h3>

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
                    src={urlFor(pageInfo?.profilePic).url()}
                    width={1000}
                    className="-mb-20 md:mb-0 flex-shrink-0 sm:max-h-[400px] sm:flex hidden rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                    priority
                    height={1000}
                />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-2xl">
                <h4 className="text-4xl font-semibold">
                    You can call me <span className="text-[#0a5df7c2]">Albert</span>,
                </h4>
                <p>
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    );
}

export default About;
