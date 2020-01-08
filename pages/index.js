import fetch from 'isomorphic-fetch';

import { Layout } from '../components/Layout';
import { ChannelGrid } from '../components/ChannelGrid';

const App = ({ channels }) => (
    <Layout title='Podcasts'> 
        <ChannelGrid channels={channels} />
    </Layout>
);

App.getInitialProps = async () => {
    const res = await fetch('https://api.audioboom.com/channels/recommended');
    const { body: channels } = await res.json();
    return { channels };
}

export default App;