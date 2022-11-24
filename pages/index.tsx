import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{`Albert's Portfolio`}</title>
                <meta name="description" content="my portfolio with next, typescript, tailwind and frame motion" />
            </Head>
            <h1>My portfolio</h1>
        </div>
    );
}
