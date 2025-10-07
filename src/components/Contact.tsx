import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiTiktok } from "react-icons/si";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(82) 99671-0930",
      link: "https://wa.me/5582996710930"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "uniprintmaceio@uniprintmaceio.com.br",
      link: "mailto:uniprintmaceio@uniprintmaceio.com.br"
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Belo Horizonte, 2002, Benedito Bentes, Maceió - AL",
      link: "https://maps.app.goo.gl/uhZ87yQifVJRvYke7"
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Segunda a Sexta: 08h às 18h",
      link: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você e transformar suas ideias em realidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">{info.label}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Redes sociais</h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/uniprintmaceio"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12"
                      asChild
                    >
                      <a
                        href="https://www.tiktok.com/@uniprint.maceio"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                      >
                        <SiTiktok className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="animate-fade-in">
              <Card className="border-2 border-primary/10 h-full overflow-hidden">
                <CardContent className="p-0 h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.4579724159746!2d-35.68748192506378!3d-9.658398990455086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145b5e0d0b7f7%3A0x8e4c8e3b9e0b7f7!2sR.%20Belo%20Horizonte%2C%202002%20-%20Benedito%20Bentes%2C%20Macei%C3%B3%20-%20AL!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Uniprint Maceió"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in">
            <Button
              variant="default"
              size="lg"
              className="text-lg px-8 py-6 h-auto shadow-glow"
              asChild
            >
              <a href="https://wa.me/5582996710930" target="_blank" rel="noopener noreferrer">
                Fale conosco pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
