import Link from 'next/link';
import Head from 'next/head';

export const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <Link href="/"><a>Podcasts</a></Link>
        </header>

        { children }

        <style jsx>{`
            header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }
            header a {
                text-decoration: none;
                color: #fff;
            }
        `}</style>
        <style jsx global>{`
            body {
                margin: 0;
                font-family: system-ui;
                background: white;
            }
        `}</style>
    </div>
);