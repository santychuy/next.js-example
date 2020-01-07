import fetch from 'isomorphic-fetch';

const Channel = ({ channel }) => (
    <div>
        <header>Podcasts</header>
        <h1>{ channel.title }</h1>

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
            a {
                text-decoration: none;
                color: #000;
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
            h1 {
                font-weight: 600;
                padding: 15px;
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
)

Channel.getInitialProps = async ({ query }) => {
    const idChannel = query.id;
    const res = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
    const { body: { channel } } = await res.json(); 
    /* Si hay duda de la deconstruccion de arriba, usar el console.log para ver el json */
    /* console.log(res.json()) */

    const resAudios = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`);
    const { body: { audio_clips } } = await resAudios.json();

    return { channel, audio_clips };
};

export default Channel;