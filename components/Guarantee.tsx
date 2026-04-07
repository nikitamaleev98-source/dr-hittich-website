import { ShieldCheck, Clock, Truck, Heart } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "12-Monats-Garantie",
    description:
      "Dr. Hittich nimmt bis zu 12 Monaten nach Erhalt noch Ihr (komplett oder teilweise verbrauchtes) Mittel zurück und erstattet Ihnen den VOLLEN Kaufpreis. Ohne Wenn und Aber.",
    highlight: true,
  },
  {
    icon: Clock,
    title: "Heute bestellt – morgen geliefert",
    description:
      "Unsere Kunden loben uns für unsere Schnelligkeit. Die Lieferzeit beträgt in der Regel nur 3 bis 5 Tage.",
    highlight: false,
  },
  {
    icon: Truck,
    title: "Direkt vom Hersteller",
    description:
      "Kein Zwischenhandel. Das garantiert Ihnen immer beste Qualität und enorm günstige Bestpreise durch Direktkauf.",
    highlight: false,
  },
  {
    icon: Heart,
    title: "Sie stehen im Mittelpunkt",
    description:
      "Bei Dr. Hittich stehen Sie, der Mensch, 100 % im Mittelpunkt. Wir sind erst zufrieden, wenn Sie zufrieden sind!",
    highlight: false,
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Ihre Sicherheit</div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ihre Vorteile bei{" "}
            <span className="text-primary">Dr. Hittich</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Sie haben die absolute Sicherheit, dass Sie bei jedem Mittel sinnvoll in Ihre Gesundheit investieren.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {guarantees.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border ${
                highlight
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-neutral-50 text-neutral-900 border-neutral-100"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  highlight ? "bg-white/20" : "bg-primary/10"
                }`}
              >
                <Icon size={24} className={highlight ? "text-white" : "text-primary"} />
              </div>
              <h3 className={`font-bold text-lg mb-2 ${highlight ? "text-white" : "text-neutral-900"}`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed ${highlight ? "text-white/85" : "text-neutral-500"}`}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
