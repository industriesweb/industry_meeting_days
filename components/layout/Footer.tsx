import Link from "next/link";
import Logo from "../shared/Logo";
import SocialsList from "@/data/socialsList.json";
import event from "@/data/event.json";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-text to-accent-dark text-text-inverted">
      <div className="container mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & À propos */}
        <div>
          <div className="flex items-center mb-4 *:!w-36 relative">
            <Logo />
          </div>
          <p className="text-sm text-text-inverted/70">
            {event.hero.eventPresentation}
          </p>
        </div>

        {/* Liens rapides */}
        <div className="md:justify-self-center">
          <h3 className="font-semibold text-base mb-3">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-accent">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/participate" className="hover:text-accent">
                Participer
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSf51JDvBwxuovFgMUFNarIfOSajU5odSV-5XpZXtgcmys5eXg/viewform?usp=sharing&ouid=105444835763677501987"
                className="hover:text-accent"
              >
                Presse
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/awards" className="hover:text-accent">
                Awards
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-accent">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="justify-self-end">
          <h3 className="font-semibold text-base mb-3 text-right">
            Suivez-nous
          </h3>
          <div className="flex gap-4">
            {SocialsList.map((social) => (
              <Link
                href={social.path}
                key={social.title}
                title={social.title}
                className="w-9 h-9 flex relative duration-100 items-center justify-center rounded-full  text-text-inverted hover:text-text hover:bg-surface hover:text-shadow-2xs text-shadow-sm text-shadow-text shadow-md shadow-text transition"
                target="_blank"
              >
                <span className="sr-only">{social.title}</span>
                <i className={`font-medium ${social.icon}`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="w-5/6 md:w-1/3 mx-auto border-t border-border/50 mt-6 py-4 text-center text-sm text-text-inverted/80">
        © {new Date().getFullYear()} IndustriCom group | Tous droits réservés.
      </div>
    </footer>
  );
}
