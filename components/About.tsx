import Image from "next/image";
import { Leaf, Award, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  {
    icon: Leaf,
    title: "Intelligenz der Natur",
    description:
      "Nur Dr. Hittich-Mittel bieten die einzigartige Natur-Kraft, die unsere Körperzellen auch wirklich erreicht.",
  },
  {
    icon: Award,
    title: "Klasse statt Masse",
    description:
      "Die natürlichen Aktivstoffe stammen aus den besten natürlichen Quellen der Welt und sind oft nur in begrenzter Menge verfügbar.",
  },
  {
    icon: Users,
    title: "Familienunternehmen",
    description:
      "Dr. Hittich und sein Familienunternehmen garantieren immer beste Qualität und günstige Bestpreise durch Direktkauf.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal animation="slide-left" className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
              <Image
                src="https://www.drhittich.com/out/dd_apex_drhittich/img/intelligenz-der-natur-side.jpg"
                alt="Dr. Reinhard Hittich"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-white rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-bold">30+</div>
              <div className="text-sm opacity-90">Jahre Erfahrung</div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal animation="slide-right" className="order-1 md:order-2">
            <div className="badge mb-4">Über Dr. Hittich</div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              Gesundheit aus der{" "}
              <span className="text-primary">Intelligenz der Natur</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Seit über 30 Jahren gehört Dr. Hittich zu den führenden Entwicklern und Anbietern
              natürlicher Mittel von herausragender Qualität. Grundlage seiner Forschungs- und
              Entwicklungsarbeit ist die Überzeugung, dass die Natur die beste Apotheke ist.
            </p>

            <div className="flex flex-col gap-6">
              {pillars.map(({ icon: Icon, title, description }, i) => (
                <ScrollReveal key={title} animation="fade-up" delay={i * 120}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
