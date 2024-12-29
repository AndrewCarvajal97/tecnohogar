// src/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesites
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp,faInstagram,faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



library.add(faCoffee,faWhatsapp,faClock,faInstagram,faFacebook,faYoutube); // Añade los íconos a la librería

export { FontAwesomeIcon };
