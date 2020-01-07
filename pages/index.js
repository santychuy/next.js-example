import fetch from 'isomorphic-fetch';

const App = ({ channels }) => (
    <div>
        <header>Podcasts</header>
        <div className="channels">
            {channels.map((channel, i) => (
                <div className="channel" key={i}>
                    <img src={channel.urls.logo_image.original} alt={channel.title} />
                    <h2>{channel.title}</h2>
                </div>
            ))}
        </div>

        <style jsx>{`
            header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }
            p {
                text-align: center;
            }
            .channels {
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            .channel {
                display: block;
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
                margin-bottom: 0.5em;
            }
            .channel img {
                width: 100%;
            }
            h2 {
                padding: 5px;
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-align: center;
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

App.getInitialProps = async () => {
    const res = await fetch('https://api.audioboom.com/channels/recommended');
    const { body: channels } = await res.json();
    console.log(channels);
    return { channels };
}



export default App;