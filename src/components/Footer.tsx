import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const Footer = () => {
  const { t, otherLang, otherLangPath } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-bold mb-2">Bici Officina</div>
            <p className="text-sm text-primary-foreground/70 mb-4">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#chi-siamo" className="hover:text-primary-foreground transition-colors">
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-primary-foreground transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#orari" className="hover:text-primary-foreground transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.about}</h4>
            <p className="text-sm text-primary-foreground/70">
              Via Cantonale 101<br />
              6537 Grono, CH
            </p>
          </div>

          {/* Language */}
          <div>
            <h4 className="font-serif text-lg mb-4">Lingua</h4>
            <Link
              to={otherLangPath}
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center text-primary-foreground/60">
            © {new Date().getFullYear()} Bici Officina Grono. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
