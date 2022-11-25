import Image from "next/image";
import React from "react";
import stp from "../assets/logo-cmn.png";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
    return (
        <article>
            <motion.div initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Image className="xl:w-[200px] xl:h-[200px] object-contain rounded" src={stp} alt="stp rapa nui" height={300} />
            </motion.div>
        </article>
    );
};

export default ExperienceCard;
