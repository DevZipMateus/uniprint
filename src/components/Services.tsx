import { Tag, FileText, Package, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Tag,
      title: "Etiquetas",
      description: "Etiquetas personalizadas de alta qualidade para identificação de produtos, inventário e muito mais. Diversos materiais e acabamentos disponíveis.",
      features: ["Adesivas", "Personalizadas", "Alta durabilidade", "Diversos formatos"]
    },
    {
      icon: FileText,
      title: "Rótulos",
      description: "Rótulos profissionais para embalagens, produtos e identificação. Impressão de alta resolução com cores vibrantes e acabamento premium.",
      features: ["Design atrativo", "Cores vibrantes", "Acabamento premium", "Resistentes"]
    },
    {
      icon: Package,
      title: "Bobinas",
      description: "Bobinas de etiquetas e rótulos para aplicação automatizada. Produção em larga escala com qualidade consistente e prazos garantidos.",
      features: ["Alta produtividade", "Diversos tamanhos", "Controle de qualidade", "Entrega garantida"]
    },
    {
      icon: Printer,
      title: "Ribbon",
      description: "Ribbons de alta qualidade para impressoras térmicas. Compatíveis com diversos modelos, garantindo impressões nítidas e duradouras.",
      features: ["Alta qualidade", "Compatibilidade ampla", "Impressão nítida", "Durabilidade"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Soluções completas em impressão gráfica para atender todas as suas necessidades
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Precisa de um orçamento personalizado?
            </p>
            <Button
              variant="default"
              size="lg"
              className="text-lg px-8 py-6 h-auto shadow-glow"
              asChild
            >
              <a href="https://wa.me/5582996710930" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
