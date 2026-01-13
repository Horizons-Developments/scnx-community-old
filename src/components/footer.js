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
                            <p class="text">Not in conjunction with <a class="link" href="https://scootkit.com" target="_blank" rel="noreferrer">ScootKit</a>.</p>
                        </div>
                        <div class="footer-block">
                                <p class="text">Made by Timon from <a class="link" href="https://github.com/Horizons-Developments" target="_blank" rel="noreferrer">Horizons Developments</a></p>
                        </div>

                    </div>

                </footer>
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
            `;
        }
    
    }
}

customElements.define("website-footer", WebsiteFooter);