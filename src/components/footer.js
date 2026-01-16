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
                                <p class="text">Made by Timon from <a class="link" href="https://github.com/Horizons-Developments" target="_blank" rel="noreferrer">Horizons Developments</a> ✨</p>
                        </div>

                    </div>

                </footer>

                <div class="overlay" id="overlay">
                    <div class="note" id="note">
                        <div class="content-block">
                            <h4 class="heading4">We have some cookies 🍪 and a note for you 💡</h4>
                        </div>
                        <div class="content-block">
                            <div class="text-block">
                                <p class="text">
                                    By confirming this note, you agree to the following:
                                </p>
                                <p class="text">
                                    We only collect the most necessary data from you, which includes technical cookies in particular - you can find more information in our <a class="link" href="/privacy-policy/">privacy policy</a>.
                                </p>
                                <p class="text">
                                    We are an official community project, but we are not directly affiliated with <a class="link" href="https://scootkit.com" target="_blank" rel="noreferrer">ScootKit</a>.
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
                            <h4 class="heading4">Wir haben ein paar Kekse 🍪 und einen Hinweis für dich 💡</h4>
                        </div>
                        <div class="content-block">
                            <div class="text-block">
                                <p class="text">
                                    Wenn du diesen Hinweis bestätigst, nimmst du Folgendes zur Kenntnis:
                                </p>
                                <p class="text">
                                    Wir sammeln nur notwendigste Daten von dir, was insbesondere technische Cookies umfasst - weitere Infos findest du in unserer <a class="link" href="/de/privacy-policy/">Datenschutzerklärung</a>.
                                </p>
                                <p class="text">
                                    Wir sind ein offizielles Community-Projekt, stehen jedoch in keiner direkten Verbindung zu <a class="link" href="https://scootkit.com" target="_blank" rel="noreferrer">ScootKit</a>.
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