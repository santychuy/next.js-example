import fetch from 'isomorphic-fetch';
import { Error } from './_error';

import { Layout } from '../components/Layout';
import { ChannelGrid } from '../components/ChannelGrid';

const App = ({ channels, statusCode }) => {
    if (statusCode !== 200) return <Error statusCode={ statusCode } />

    return (
        <Layout title='Podcasts'> 
            <ChannelGrid channels={channels} />
        </Layout>
    );
};

App.getInitialProps = async ({ res }) => {
    try {
        const res = await fetch('https://api.audioboom.com/channels/recommended');
        const { body: channels } = await res.json();
        return { channels, statusCode: 200 };
    } catch (e) {
        res.statusCode = 503;
        return { channels: null, statusCode: 503 }
    }
}

export default App;