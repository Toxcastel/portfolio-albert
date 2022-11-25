import Head from "next/head";
import About from "../components/About";

import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            <Head>
                <title>{`Albert's Portfolio`}</title>
                <meta name="description" content="my portfolio with next, typescript, tailwind and frame motion" />
            </Head>

            <Header />

            <section id="hero" className="snap-start">
                <Hero />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
              <WorkExperience/>
            </section>

            {/* Skills */}

            {/* Projects */}

            {/* Contact Me */}
        </div>
    );
}
