import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faSun,
  faChevronCircleDown,
  faCalendar,
  faMoon,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGoogle,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import FontAwesomeIcon from '@/lib/FontAwesomeIcon.vue';

library.add(
  faCog,
  faSun,
  faTwitter,
  faGoogle,
  faFacebookF,
  faChevronCircleDown,
  faCalendar,
  faMoon,
  faGithub,
  faLinkedin,
  faSpinner
);

export { FontAwesomeIcon };
