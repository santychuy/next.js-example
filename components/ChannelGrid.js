import { Link } from '../routes';
import { slug } from '../helpers/slug';

import '../styles/channelGrid.scss';

export const ChannelGrid = ({ channels }) => (
    <div className="channels">
        {/* href irá al nombre del archivo, y prefetch hace para tener listo desdeun principio SOLO EN PRODUCCION */}
        {channels.map((channel, i) => (
            <Link route="channel" params={{ 
                slug: slug(channel.title), 
                id: channel.id 
            }} prefetch >
                <a className="channel" key={i}>
                    <img src={channel.urls.logo_image.original} alt={`${channel.title} Image`} />
                    <h2>{channel.title}</h2>
                </a>
            </Link>
        ))}
    </div>
);