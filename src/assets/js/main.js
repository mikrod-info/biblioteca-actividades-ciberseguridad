import { domReady } from './utils/dom-ready.js';
import { initNavMenu } from './components/nav-menu.js';

domReady(()=> {
    initNavMenu();
});
