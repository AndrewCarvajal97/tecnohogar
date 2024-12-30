// src/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faCheckCircle,faCalendarAlt,faSearch,faBriefcase    } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesites
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faWhatsapp, faClock, faInstagram, faFacebook, faYoutube, faCheckCircle,faCalendarAlt,faSearch,faBriefcase    ); // Añade los íconos a la librería

export { FontAwesomeIcon };
