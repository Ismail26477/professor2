import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Navbar";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-12">
          <div>
            <Logo />
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Cinematic film, sound design, podcast and original music — built
              under one roof.
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
              {[
                { l: "Home", h: "/" },
                { l: "About", h: "/about" },
                { l: "Services", h: "/services" },
                { l: "Portfolio", h: "/work" },
                { l: "Podcast", h: "/podcast" },
                { l: "Contact", h: "/contact" },
              ].map(({ l, h }) => (
                <li key={l}>
                  <Link
                    to={h}
                    className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex md:justify-end gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mediaworksstudio9/" },
              { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCJOLCg6CSMi6fCndoj6aMqw" },
              { Icon: MessageCircle, label: "Facebook", href: "https://www.facebook.com/mediaworksstudio/" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <p>© 2017–2025 MediaWorks Studio · All Rights Reserved</p>
          <p>
            <span>Film</span> <span className="text-primary mx-2">|</span>{" "}
            <span>Sound</span> <span className="text-primary mx-2">|</span>{" "}
            <span>Music</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
