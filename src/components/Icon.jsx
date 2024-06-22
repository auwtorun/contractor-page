import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Icon = {
    Instagram: (props) => <FontAwesomeIcon icon={faInstagram} size={props.size} />,
    Whatsapp: (props) => <FontAwesomeIcon icon={faWhatsapp} size={props.size} />,
    Linkedin: (props) => <FontAwesomeIcon icon={faLinkedin} size={props.size} />,
    XTwitter: (props) => <FontAwesomeIcon icon={faXTwitter} size={props.size} />,
};

export default Icon;
