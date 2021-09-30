import Head from "next/head";
import { Fragment } from "react";

const Home = ({ articles }) => {
    console.log(articles);
    return (
        <Fragment>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {articles.map(({ body }, index) => (
                <h3 key={index}>{body}</h3>
            ))}
        </Fragment>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
};

export default Home;
