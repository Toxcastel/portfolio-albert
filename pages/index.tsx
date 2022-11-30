import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import profile from "../assets/albert-profile.jpg";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

export default function Home({pageInfo, experiences, skills, projects, socials}:Props) {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>{`Albert's Portfolio`}</title>
                <meta name="description" content="my portfolio with next, typescript, tailwind and frame motion" />
            </Head>

            <Header socials={socials}/>

            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo}/>
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="projects" className="snap-start">
                <Projects />
            </section>

            <section id="contact" className="snap-start">
                <Contact />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <Image
                            className="rounded-full h-10 w-10  filter grayscale hover:grayscale-0 cursor-pointer"
                            src={profile}
                            alt="go top"
                            priority={true}
                        />
                    </div>
                </footer>
            </Link>
        </div>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperience();
    const projects: Project[] = await fetchProjects();
    const skills: Skill[] = await fetchSkills();
    const socials: Social[] = await fetchSocials();

    return {
        props:{
            pageInfo,
            experiences,
            projects,
            skills,
            socials
        },

        // Nextjs regenerará la página:
        // - Cuando se haga un request
        // - Cada 10 segundos
        // - De momento esta info se almacena en el 'cache' 
        revalidate: 10,
    }

};
