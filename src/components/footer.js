class WebsiteFooter extends HTMLElement {
    connectedCallback() {
        
        const lang = this.getAttribute("lang") || "en";

        if (lang === "en") {
            this.innerHTML = `
                <footer class="footer">

                    <div class="footer-section">

                        <div class="footer-block">
                            <h3 class="heading3">Products</h3>
                        </div>
                        <div class="footer-block">
                            <ul class="footer-text-block">
                                <li><a class="link" href="/products/custom-commands/">Custom Commands</a></li>
                                <li><a class="link" href="/products/message-templates/">Message Templates</a></li>
                                <li><a class="link" href="/products/custom-solutions/">Custom Solutions</a></li>
                                <li><a class="link" href="/products/guides/">Guides</a></li>
                                <li><a class="link" href="https://dashboard.scnx-community.com">Dashboard</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <h3 class="heading3">About Us</h3>
                        </div>
                        <div class="footer-block">
                            <ul class="footer-text-block">
                                <li><a class="link" href="/about-us/about-scnx-community/">About SCNX Community</a></li>
                                <li><a class="link" href="/about-us/our-team/">Our Team</a></li>
                                <li><a class="link" href="/about-us/apply/">Apply</a></li>
                                <li><a class="link" href="/about-us/news/">News</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <h3 class="heading3">Help & Contact</h3>
                        </div>
                        <div class="footer-block">
                            <ul class="footer-text-block">
                                <li><a class="link" href="/faq/">FAQ</a></li>
                                <li><a class="link" href="https://dashboard.scnx-community.com" target="_blank" rel="noreferrer">Support</a></li>
                                <li><a class="link" href="/help/feedback/">Feedback</a></li>
                                <li><a class="link" href="/contact/">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <h3 class="heading3">Legal</h3>
                        </div>
                        <div class="footer-block">
                            <ul class="footer-text-block">
                                <li><a class="link" href="/imprint/">Imprint</a></li>
                                <li><a class="link" href="/privacy-policy/">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <ul class="items-menu">
                                <li class="items-element">
                                    <div class="items-wrapper-left">
                                        <input class="language-switcher" type="checkbox" id="language-switcher-footer" aria-hidden="true">
                                        <label class="language-switcher-label language-switcher-open" for="language-switcher-footer">
                                            <img class="language-image" src="/assets/images/country-flags/us.png">
                                            <span>EN</span>
                                            <submenu-arrow-icon></submenu-arrow-icon>
                                        </label>
                                        <label class="language-switcher-label language-switcher-close" for="language-switcher-footer">
                                            <img class="language-image" src="/assets/images/country-flags/us.png">
                                            <span>EN</span>
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
                            </ul>  
                        </div>
                        <div class="footer-block">
                            <a class="button" href="https://dcserver.link/scnx-community" target="_blank" rel="noreferrer">
                                Discord <arrow-icon direction="right"></arrow-icon>
                            </a>
                            <a class="button" href="https://dashboard.scnx-community.com" target="_blank" rel="noreferrer">
                                Dashboard <arrow-icon direction="right"></arrow-icon>
                            </a>
                            <a class="button" href="/apply/" target="_blank" rel="noreferrer">
                                Bewerben <arrow-icon direction="right"></arrow-icon>
                            </a>
                        </div>
                        <div class="footer-block">
                            <p class="text">Not affiliated with <a class="link" href="https://scootkit.com" target="_blank" rel="noreferrer">ScootKit</a>.</p>
                        </div>
                        <div class="footer-block">
                                <p class="text">Made by Timon from <a class="link" href="https://github.com/Horizons-Developments" target="_blank" rel="noreferrer">Horizons Developments</a> ✨</p>
                        </div>

                    </div>

                </footer>

                <div class="overlay" id="overlay">
                    <div class="note" id="note">
                        <div class="content-block">
                            <h4 class="heading4">
                                Hey 👋<br>
                                Just a quick note before you continue 💡
                            </h4>
                        </div>
                        <div class="content-block">
                            <div class="text-block">
                                <p class="text">
                                    We are an official community project, but we are not directly affiliated with <a class="link" href="https://scootkit.com" target="_blank" rel="noreferrer">ScootKit.</a>
                                </p>
                                <p class="text">
                                    About privacy: We collect technical cookies that are necessary for this website to function properly.<br>
                                    We never share your data with third parties to provide you with the best possible privacy.<br>
                                    You can find more information in our <a class="link" href="/privacy-policy/">privacy policy.</a>
                                </p>
                            </div>
                        </div>
                        <div class="content-block">
                            <a class="button" id="note-close-button">
                                Confirm <arrow-icon direction="right"></arrow-icon>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }

        if (lang === "de") {
            this.innerHTML = `
                <footer class="footer">

                    <div class="footer-section">

                        <div class="footer-block">
                            <h3 class="heading3">Produkte</h3>
                        </div>
                        <div class="footer-block">
                            <ul class="footer-text-block">
                                <li><a class="link" href="/de/products/custom-commands/">Eigene Befehle</a></li>
                                <li><a class="link" href="/de/products/message-templates/">Nachrichten-Vorlagen</a></li>
                                <li><a class="link" href="/de/products/custom-solutions/">Individuelle Lösungen</a></li>
                                <li><a class="link" href="/de/products/guides/">Guides</a></li>
                                <li><a class="link" href="https://dashboard.scnx-community.com/de/" target="_blank" rel="noreferrer">Dashboard</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <h3 class="heading3">Über Uns</h3>
                        </div>
                        <div class="footer-block">
                            <ul class="footer-text-block">
                                <li><a class="link" href="/de/about-us/about-scnx-community/">Über SCNX Community</a></li>
                                <li><a class="link" href="/de/about-us/our-team/">Unser Team</a></li>
                                <li><a class="link" href="/de/about-us/apply/">Bewerben</a></li>
                                <li><a class="link" href="/de/about-us/news/">Neuigkeiten</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <h3 class="heading3">Hilfe & Kontakt</h3>
                        </div>
                        <div class="footer-block">
                            <ul class="footer-text-block">
                                <li><a class="link" href="/de/help/faq/">FAQ</a></li>
                                <li><a class="link" href="https://dashboard.scnx-community.com/de/" target="_blank" rel="noreferrer">Support</a></li>
                                <li><a class="link" href="/de/help/feedback/">Feedback</a></li>
                                <li><a class="link" href="/de/contact/">Kontakt</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <h3 class="heading3">Rechtliches</h3>
                        </div>
                        <div class="footer-block">
                            <ul class="footer-text-block">
                                <li><a class="link" href="/de/imprint/">Impressum</a></li>
                                <li><a class="link" href="/de/privacy-policy/">Datenschutz-Erklärung</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <a class="button" href="https://dcserver.link/scnx-community" target="_blank" rel="noreferrer">
                                Discord <arrow-icon direction="right"></arrow-icon>
                            </a>
                            <a class="button" href="https://dashboard.scnx-community.com" target="_blank" rel="noreferrer">
                                Dashboard <arrow-icon direction="right"></arrow-icon>
                            </a>
                            <a class="button" href="/de/apply/" target="_blank" rel="noreferrer">
                                Bewerben <arrow-icon direction="right"></arrow-icon>
                            </a>
                        </div>
                        <div class="footer-block">
                            <p class="text">Nicht in Verbindung mit <a class="link" href="https://scootkit.com" target="_blank" rel="noreferrer">ScootKit</a>.</p>
                        </div>
                        <div class="footer-block">
                                <p class="text">Made by Timon from <a class="link" href="https://github.com/Horizons-Developments" target="_blank" rel="noreferrer">Horizons Developments</a> ✨</p>
                        </div>

                    </div>

                </footer>

                <div class="overlay" id="overlay">
                    <div class="note" id="note">
                        <div class="content-block">
                            <h4 class="heading4">
                                Hey 👋<br>
                                Nur ein kleiner Hinweis, bevor es weitergeht 💡</h4>
                        </div>
                        <div class="content-block">
                            <div class="text-block">
                                <p class="text">
                                    Wir sind ein offizielles Community-Projekt, stehen jedoch in keiner direkten Verbindung zu <a class="link" href="https://scootkit.com" target="_blank" rel="noreferrer">ScootKit.</a>
                                </p>
                                <p class="text">
                                    Zum Thema Datenschutz: Wir sammeln insbesondere technische Cookies, die zum Funktionieren dieser Website notwendig sind.<br>
                                    Wir geben deine Daten niemals an Dritte weiter, um dir einen bestmöglichen Datenschutz zu bieten.<br>
                                    Weitere Infos findest du in unserer <a class="link" href="/de/privacy-policy/">Datenschutzerklärung.</a>
                                </p>
                            </div>
                        </div>
                        <div class="content-block">
                            <a class="button" id="note-close-button">
                                Bestätigen <arrow-icon direction="right"></arrow-icon>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }

        document.addEventListener("DOMContentLoaded", () => {
            const overlay = document.getElementById("overlay");
            const note = document.getElementById("note");
            const noteCloseButton = document.getElementById("note-close-button");

            const hasVisited = localStorage.getItem("hasVisited");

            if (!hasVisited) {
                note.style.display = "flex";
                overlay.style.display = "flex";
                document.body.classList.add("no-scroll");
            }

            noteCloseButton.addEventListener("click", () => {
                note.style.display = "none";
                overlay.style.display = "none";
                document.body.classList.remove("no-scroll");
                localStorage.setItem("hasVisited", "true");
            });
        });
    
    }
}

customElements.define("website-footer", WebsiteFooter);