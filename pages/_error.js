import Link from 'next/link';

import { Layout } from '../components/Layout';

export const Error = ({ statusCode }) => (
    <Layout title={`Error ${statusCode}`} >
        { statusCode === 404 ?
            <div className="message">
                <h1>Esta pagina no existe</h1>
                <Link href="/"><a>Volver al inicio</a></Link>
            </div>
            :
            <div className="message">
                <h1>Hubo un problema</h1>
                <p>Intenta nuevamente</p>
            </div>
        }
    </Layout>
)

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
};