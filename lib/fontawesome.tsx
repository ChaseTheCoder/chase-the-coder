import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// Tell Font Awesome to skip adding the CSS automatically
config.autoAddCss = false;

// Add icons to the library
library.add(faBars, faXmark);