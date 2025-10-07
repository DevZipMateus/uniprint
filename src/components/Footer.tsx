import { Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoUniprint from "@/assets/logo-uniprint.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo e descrição */}
            <div>
              <img src={logoUniprint} alt="Uniprint Maceió" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-accent-foreground/80 text-sm">
                Soluções gráficas de alta qualidade em Maceió, Alagoas.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h3 className="font-bold mb-4">Links rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("sobre");
                      if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("servicos");
                      if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("contato");
                      if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contato e redes sociais */}
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-accent-foreground/80 mb-4">
                <li>(82) 99671-0930</li>
                <li>uniprintmaceio@uniprintmaceio.com.br</li>
                <li>Segunda a Sexta: 08h às 18h</li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/uniprintmaceio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@uniprint.maceio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="TikTok"
                >
                  <SiTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-accent-foreground/10 text-center">
            <p className="text-sm text-accent-foreground/60">
              © {currentYear} Uniprint Maceió. Todos os direitos reservados.
            </p>
            <p className="text-xs text-accent-foreground/40 mt-2">
              CNPJ: 47.372.211/0001-19
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
