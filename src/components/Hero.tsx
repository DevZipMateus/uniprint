import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-subtle pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* H1 - Nome da empresa */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Uniprint Maceió
          </h1>
          
          {/* H2 - Descrição da empresa */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Soluções gráficas de alta qualidade com eficiência, agilidade e compromisso com prazos
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Etiquetas · Rótulos · Bobinas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="https://wa.me/5582996710930" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => {
                const element = document.getElementById("servicos");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              Nossos serviços
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <p className="text-muted-foreground">Anos no mercado</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Compromisso com prazos</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-primary mb-2">AL</div>
              <p className="text-muted-foreground">Atuação em Alagoas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
