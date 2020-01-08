import fetch from 'isomorphic-fetch';
import Error from 'next/error';

const Channel = ({ channel, audio_clips, statusCode }) => {
    if (statusCode !== 200) return <Error statusCode={statusCode} />

    return (
        <div>
            <header>Podcasts</header>
            <h1>{ channel.title }</h1>

            <h2>Últimos Podcasts</h2>
            {audio_clips.map((audio, i) => (
                <div key={i}>{audio.title}</div>
            ))}

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
};

Channel.getInitialProps = async ({ query }) => {
    const idChannel = query.id;
    try {
        const [res, resAudios] = await Promise.all([ /* A sido lo más hermoso que he visto */
            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
        ])
    
        //const res = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
        const { body: { channel } } = await res.json(); 
        /* Si hay duda de la deconstruccion de arriba, usar el console.log para ver el json */
        /* console.log(res.json()) */
    
        //const resAudios = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`);
        const { body: { audio_clips } } = await resAudios.json();
    
        return { channel, audio_clips, statusCode: 200 };
    } catch (e) {
        return { channel: null, audio_clips: null, statusCode: 503 };
    }
    
};

export default Channel;