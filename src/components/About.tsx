import { Target, Zap, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Eficiência",
      description: "Processos otimizados para garantir a melhor qualidade no menor tempo possível."
    },
    {
      icon: Target,
      title: "Agilidade",
      description: "Resposta rápida às suas necessidades, mantendo sempre os mais altos padrões."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Compromisso com a excelência em cada produto que entregamos."
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Parceria sólida com nossos clientes, focada em resultados e satisfação."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre a Uniprint Maceió
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Referência em soluções gráficas em Alagoas
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 animate-fade-in">
            <Card className="border-2 border-primary/20 shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa missão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Com apenas três anos de trajetória, estamos firmando nossa presença no mercado 
                  alagoano, sendo uma referência em qualidade e entrega dentro dos prazos estabelecidos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa missão é fornecer soluções gráficas de alta qualidade com eficiência, agilidade 
                  e rapidez, atendendo às necessidades de nossos clientes em todo o estado de Alagoas. 
                  Buscamos transformar ideias em impressões impactantes, contribuindo para o sucesso dos 
                  nossos parceiros e agregando valor aos seus projetos, com foco em inovação e excelência 
                  no atendimento.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Nossos valores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
