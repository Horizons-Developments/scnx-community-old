class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        
        const lang = this.getAttribute("lang") || "en";

        if (lang === "en") {
            this.innerHTML = `
                <header class="header">
                    <div class="branding-container">
                        <a href="/">
                            <img class="branding-logo" src="/assets/images/Logo.png" alt="SCNX Community Logo">
                            <span class="branding-sitetitle">SCNX Community</span>
                        </a>
                    </div>
                    
                    <input type="checkbox" id="navigation-toggle" class="navigation-toggle">
                    <label for="navigation-toggle" class="navigation-toggle-label" aria-label="Open/close menu">
                        <span></span>
                    </label>
                </header>

                <nav class="navigation">

                    <input class="navigation-arrow-reset" type="radio" name="submenu" id="navigation-submenu-reset" checked>

                    <ul class="navigation-menu">
                        <li class="navigation-element">
                            <div class="navigation-wrapper">    
                                <a class="navigation-link" href="/">Home</a>
                            </div>
                        </li>
                        <li class="navigation-element">
                            <div class="navigation-wrapper">
                                <a class="navigation-link" href="/products/">Products</a>

                                <input class="navigation-arrow" type="radio" name="submenu" id="navigation-submenu-products"  aria-hidden="true">
                                <label class="navigation-arrow-label navigation-arrow-open" for="navigation-submenu-products">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                                <label class="navigation-arrow-label navigation-arrow-close" for="navigation-submenu-reset">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>

                            </div>

                            <ul class="navigation-submenu">
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/products/custom-commands/">Custom Commands</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/products/message-templates/">Message Templates</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/products/custom-solutions/">Custom Solutions</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/products/guides/">Guides</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="navigation-element">
                            <div class="navigation-wrapper">
                                <a class="navigation-link" href="/about-us/">About Us</a>

                                <input class="navigation-arrow" type="radio" name="submenu" id="navigation-submenu-about-us" aria-hidden="true">
                                <label class="navigation-arrow-label navigation-arrow-open" for="navigation-submenu-about-us">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                                <label class="navigation-arrow-label navigation-arrow-close" for="navigation-submenu-reset">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                            </div>
                            <ul class="navigation-submenu">
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/about-us/about-scnx-community/">About SCNX Community</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/about-us/partner/">Partner</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/about-us/other-projects/">Other Projects</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/about-us/our-team/">Our Team</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/about-us/apply/">Apply</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/about-us/news/">News</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="navigation-element">
                            <div class="navigation-wrapper">
                                <a class="navigation-link" href="/help/">Help</a>

                                <input class="navigation-arrow" type="radio" name="submenu" id="navigation-submenu-help" aria-hidden="true">
                                <label class="navigation-arrow-label navigation-arrow-open" for="navigation-submenu-help">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                                <label class="navigation-arrow-label navigation-arrow-close" for="navigation-submenu-reset">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                            </div>
                            <ul class="navigation-submenu">
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/help/faq/">FAQ</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="https://dashboard.scnx-community.com" target="_blank" rel="noreferrer">Support</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="https://dcserver.link/scnx-community">Discord</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/help/feedback/">Feedback</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="navigation-element">
                            <div class="navigation-wrapper">
                                <a class="navigation-link" href="/contact/">Contact</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="items-menu">
                        <li class="items-element">
                            <div class="items-wrapper-left">
                                <input class="language-switcher" type="radio" name="submenu" id="language-switcher" aria-hidden="true">
                                <label class="language-switcher-label language-switcher-open" for="language-switcher">
                                    <a class="language-link" href="/">
                                        <img class="language-image" src="/assets/images/country-flags/us.png">EN
                                    </a>
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                                <label class="language-switcher-label language-switcher-close" for="navigation-submenu-reset">
                                    <a class="language-link" href="/">
                                        <img class="language-image" src="/assets/images/country-flags/us.png">EN
                                    </a>
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                            </div>
                            <ul class="language-submenu">
                                <li class="items-element">
                                    <div class="items-wrapper-left">
                                        <a class="language-link-submenu" href="/de/">
                                            <img class="language-image-submenu" src="/assets/images/country-flags/de.png">DE
                                        </a>
                                    </div>
                                </li>
                                <li class="items-element">
                                    <div class="items-wrapper-left">
                                        <a class="language-link-submenu" href="/">
                                            <img class="language-image-submenu" src="/assets/images/country-flags/us.png">EN
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="items-element">
                            <div class="items-wrapper-right">
                                <a class="button" href="https://dashboard.scnx-community.com/de/" target="_blank" rel="noreferrer">
                                    Dashboard <arrow-icon direction="right"></arrow-icon>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            `;
        }

        if (lang === "de") {
            this.innerHTML = `
                <header class="header">
                    <div class="branding-container">
                        <a href="/de/">
                            <img class="branding-logo" src="/assets/images/Logo.png" alt="SCNX Community Logo">
                            <span class="branding-sitetitle">SCNX Community</span>
                        </a>
                    </div>
                    
                    <input type="checkbox" id="navigation-toggle" class="navigation-toggle">
                    <label for="navigation-toggle" class="navigation-toggle-label" aria-label="Menü öffnen/schließen">
                        <span></span>
                    </label>
                </header>

                <nav class="navigation">

                    <input class="navigation-arrow-reset" type="radio" name="submenu" id="navigation-submenu-reset" checked>

                    <ul class="navigation-menu">
                        <li class="navigation-element">
                            <div class="navigation-wrapper">    
                                <a class="navigation-link" href="/de/">Startseite</a>
                            </div>
                        </li>
                        <li class="navigation-element">
                            <div class="navigation-wrapper">
                                <a class="navigation-link" href="/de/products/">Produkte</a>

                                <input class="navigation-arrow" type="radio" name="submenu" id="navigation-submenu-products"  aria-hidden="true">
                                <label class="navigation-arrow-label navigation-arrow-open" for="navigation-submenu-products">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                                <label class="navigation-arrow-label navigation-arrow-close" for="navigation-submenu-reset">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>

                            </div>

                            <ul class="navigation-submenu">
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/products/custom-commands/">Eigene Befehle</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/products/message-templates/">Nachrichten-Vorlagen</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/products/custom-solutions/">Individuelle Lösungen</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/products/guides/">Guides</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="navigation-element">
                            <div class="navigation-wrapper">
                                <a class="navigation-link" href="/de/about-us/">Über Uns</a>

                                <input class="navigation-arrow" type="radio" name="submenu" id="navigation-submenu-about-us" aria-hidden="true">
                                <label class="navigation-arrow-label navigation-arrow-open" for="navigation-submenu-about-us">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                                <label class="navigation-arrow-label navigation-arrow-close" for="navigation-submenu-reset">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                            </div>
                            <ul class="navigation-submenu">
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/about-us/about-scnx-community/">Über SCNX Community</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/about-us/partner/">Partner</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/about-us/other-projects/">Andere Projekte</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/about-us/our-team/">Unser Team</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/about-us/apply/">Bewerben</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/about-us/news/">Neuigkeiten</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="navigation-element">
                            <div class="navigation-wrapper">
                                <a class="navigation-link" href="/de/help/">Hilfe</a>

                                <input class="navigation-arrow" type="radio" name="submenu" id="navigation-submenu-help" aria-hidden="true">
                                <label class="navigation-arrow-label navigation-arrow-open" for="navigation-submenu-help">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                                <label class="navigation-arrow-label navigation-arrow-close" for="navigation-submenu-reset">
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                            </div>
                            <ul class="navigation-submenu">
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/help/faq/">FAQ</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="https://dashboard.scnx-community.com/de/" target="_blank" rel="noreferrer">Support</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="https://dcserver.link/scnx-community">Discord</a>
                                    </div>
                                </li>
                                <li class="navigation-element">
                                    <div class="navigation-wrapper">
                                        <a class="navigation-link" href="/de/help/feedback/">Feedback</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="navigation-element">
                            <div class="navigation-wrapper">
                                <a class="navigation-link" href="/de/contact/">Kontakt</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="items-menu">
                        <li class="items-element">
                            <div class="items-wrapper-left">
                                <input class="language-switcher" type="radio" name="submenu" id="language-switcher" aria-hidden="true">
                                <label class="language-switcher-label language-switcher-open" for="language-switcher">
                                    <a class="language-link" href="/de/">
                                        <img class="language-image" src="/assets/images/country-flags/de.png">DE
                                    </a>
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                                <label class="language-switcher-label language-switcher-close" for="navigation-submenu-reset">
                                    <a class="language-link" href="/de/">
                                        <img class="language-image" src="/assets/images/country-flags/de.png">DE
                                    </a>
                                    <submenu-arrow-icon></submenu-arrow-icon>
                                </label>
                            </div>
                            <ul class="language-submenu">
                                <li class="items-element">
                                    <div class="items-wrapper-left">
                                        <a class="language-link-submenu" href="/de/">
                                            <img class="language-image-submenu" src="/assets/images/country-flags/de.png">DE
                                        </a>
                                    </div>
                                </li>
                                <li class="items-element">
                                    <div class="items-wrapper-left">
                                        <a class="language-link-submenu" href="/">
                                            <img class="language-image-submenu" src="/assets/images/country-flags/us.png">EN
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="items-element">
                            <div class="items-wrapper-right">
                                <a class="button" href="https://dashboard.scnx-community.com/de/" target="_blank" rel="noreferrer">
                                    Dashboard <arrow-icon direction="right"></arrow-icon>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            `;
        }

        const normalize = url => url.replace(/\/$/, "") || "/";
        const active = normalize(this.getAttribute("active") || "");
        const links = this.querySelectorAll("a");

        links.forEach(link => {
            const href = normalize(link.getAttribute("href"));

            if (href === active) {
                link.classList.add("navigation-link-active");
            }

            if (active.startsWith(href) && href.split("/").length > 2) {
                link.classList.add("navigation-link-active");
            }
        });

        const toggle = document.getElementById("navigation-toggle");

        toggle.addEventListener("change", () => {
            document.body.classList.toggle("no-scroll", toggle.checked);
        });

    }
}

customElements.define("website-header", WebsiteHeader);