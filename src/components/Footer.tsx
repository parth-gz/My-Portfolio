import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Parth Gaikwad</h3>
            <p className="text-muted-foreground">
              Data Scientist | AI Enthusiast | Problem Solver
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4 className="font-semibold mb-4">Philosophy</h4>
            <p className="text-muted-foreground italic">
              "Code is like humor. When you have to explain it, it's bad."
              <br />
              <span className="text-sm">- Cory House</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Parth Gaikwad. Made with{" "}
            <Heart className="h-4 w-4 text-primary fill-primary" /> and lots of
            coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
