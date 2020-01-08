import Link from 'next/link';

export const ChannelGrid = ({ channels }) => (
    <div className="channels">
        {/* href irá al nombre del archivo, y prefetch hace para tener listo desdeun principio SOLO EN PRODUCCION */}
        {channels.map((channel, i) => (
            <Link href={`/channel?id=${channel.id}`} prefetch >
                <a className="channel" key={i}>
                    <img src={channel.urls.logo_image.original} alt={`${channel.title} Image`} />
                    <h2>{channel.title}</h2>
                </a>
            </Link>
        ))}

        <style jsx>{`
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
            h2 {
                padding: 5px;
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-align: center;
            }
        `}</style>
    </div>
);