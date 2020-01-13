import Link from 'next/link';
import Head from 'next/head';
import '../styles/styles.scss';

export const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <Link href="/"><a className="example">Podcasts</a></Link>
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