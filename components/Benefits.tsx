import { FlaskConical, BadgeCheck, Truck, HandHeart, Globe, Leaf, Package, PhoneCall } from "lucide-react";

const benefits = [
  { icon: FlaskConical, label: "Über 30 Jahre Erfahrung" },
  { icon: Leaf, label: "Ohne Chemie. Gentechnik-Frei und fair produziert." },
  { icon: BadgeCheck, label: "Dr. Hittich 12-Monats-Garantie" },
  { icon: HandHeart, label: "100 % zufrieden oder Geld zurück!" },
  { icon: Truck, label: "Direkt vom Entwickler und Hersteller." },
  { icon: Globe, label: "Nicht im Handel erhältlich." },
  { icon: Package, label: "Frische-Tresor aus Glas." },
  { icon: PhoneCall, label: "Gebührenfrei erreichbar!" },
];

export default function Benefits() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Ihre Vorteile</div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Warum Dr. <span className="text-primary">Hittich</span>?
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-neutral-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Icon size={26} className="text-primary" />
              </div>
              <p className="text-sm font-medium text-neutral-700 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
