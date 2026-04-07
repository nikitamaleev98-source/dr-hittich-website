import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Dank Ihrer Mittel, die ich nun schon einige Zeit nehme, bin ich leistungsfähig. Kann am Leben teilnehmen und bin auch geistig gut drauf. Ich bin froh, dass ich an Ihre Adresse geraten bin.",
    name: "Wieland Gerngroß",
    location: "06386 Quellendorf",
  },
  {
    quote:
      "Ich bin sehr zufrieden mit den Dr. Hittich-Mitteln. Ich habe etliche Beschwerden gut im Griff, wie z. B. mit dem Herz und meiner Luft.",
    name: "Annelore Miethke",
    location: "15517 Fürstenwalde",
  },
  {
    quote:
      "Ich nehme täglich mehrere Dr. Hittich-Mittel. Ich habe immer ein gutes Gefühl, habe Kraft und Energie. Bin sehr zufrieden!",
    name: "Gertrud Moritz",
    location: "06526 Sangerhausen",
  },
  {
    quote:
      "Die Empfehlung Ihrer Mittel mit der Intelligenz der Natur kam für mich genau zu dem richtigen Zeitpunkt. Nach 14 Tagen war es wirklich wie ein Wunder.",
    name: "Ute Stephan",
    location: "01723 Mohorn",
  },
  {
    quote:
      "Ich war positiv überrascht. Eigentlich hatte ich erwartet, dass es übliche leere Versprechungen sind — nicht so bei Dr. Hittich Gesundheits-Mittel!",
    name: "Franz Xaver Stadler",
    location: "84085 Langquaid",
  },
  {
    quote:
      "Seit fast zehn Jahren nehme ich regelmäßig Ihre Nahrungsergänzungsmittel. Es geht mir bestens. Ich bin Ihnen für Ihre Naturmittel sehr dankbar.",
    name: "Eva Schwarz",
    location: "01896 Pulsnitz",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-neutral-50">
      <div className="section-container">
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <div className="badge mb-4">Kundenstimmen</div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Begeisterte Kunden{" "}
            <span className="text-primary">berichten</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Tausende zufriedene Kunden vertrauen seit Jahrzehnten auf die Qualität der Dr. Hittich-Mittel.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} animation="fade-up" delay={i * 80}>
              <div className="card flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="font-semibold text-neutral-900 text-sm">{t.name}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{t.location}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
