import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">BIRCHLER</h3>
            <p className="text-sm text-primary-foreground/70">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-primary-foreground/60 mt-4">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              {t.footer.navigation}
            </h4>
            <nav className="space-y-2 text-sm">
              <a
                href="#about-us"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t.about.label}
              </a>
              <a
                href="#services"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
              >
                {t.services.label}
              </a>
              <a
                href="#gallery"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
              >
                {t.gallery.label}
              </a>
              <a
                href="#hours"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
              >
                {t.hours.label}
              </a>
              <a
                href="#contact"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
              >
                {t.contact.label}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              {t.contact.label}
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+41796291854"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
              >
                +41 79 629 18 54
              </a>
              <a
                href="mailto:rahmenjo@gmail.com"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
              >
                rahmenjo@gmail.com
              </a>
              <p className="text-primary-foreground/70">
                Märzenberg 11
                <br />
                8840 Einsiedeln
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              {t.hours.label}
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div>
                <p className="font-semibold text-primary-foreground">
                  Mo - Fr
                </p>
                <p>07:00 - 19:00</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Sa</p>
                <p>09:00 - 12:00</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Su</p>
                <p>{t.hours.closed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {new Date().getFullYear()} BIRCHLER rahmen & Kunst.{" "}
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
