import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUniprint from "@/assets/logo-uniprint.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: "Início",
    id: "hero"
  }, {
    label: "Sobre",
    id: "sobre"
  }, {
    label: "Serviços",
    id: "servicos"
  }, {
    label: "Contato",
    id: "contato"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2 hover:opacity-80 transition-opacity" aria-label="Voltar ao início">
            <img src={logoUniprint} alt="Uniprint Maceió" className="h-24 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary transition-colors font-medium">
                {item.label}
              </button>)}
            <Button variant="default" size="lg" asChild>
              <a href="https://wa.me/5582996710930" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                  {item.label}
                </button>)}
              <Button variant="default" size="lg" className="w-full" asChild>
                <a href="https://wa.me/5582996710930" target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                </a>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;