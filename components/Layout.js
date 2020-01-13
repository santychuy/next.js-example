import Link from 'next/link';
import Head from 'next/head';
import '../styles/layout.scss';

export const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <header className="header">
            <Link href="/"><a className="headerTitle">Podcasts</a></Link>
        </header>

        { children }

        <style jsx global>{`
            body {
                margin: 0;
                font-family: system-ui;
                background: white;
            }
        `}</style>
    </div>
);