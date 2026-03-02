import { config, library } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false

// Add icons to the library
library.add(faSun, faMoon, faGithub, faLinkedin)