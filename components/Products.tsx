import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "BrokkoCUR®",
    image: "https://www.drhittich.com/out/pictures/generated/product/4/800_600_90/brokkocur-neu.jpg",
    description: "Brokkoli-Extrakt mit Curcumin – natürliche Zellkraft aus der Intelligenz der Natur.",
  },
  {
    name: "ButiMAX®",
    image: "https://www.drhittich.com/out/pictures/generated/product/4/800_600_90/butimax-neu.jpg",
    description: "Buttersäure-Komplex für eine gesunde Darmflora und optimale Verdauung.",
  },
  {
    name: "SomniMAX®",
    image: "https://www.drhittich.com/out/pictures/generated/product/4/800_600_90/somnimax-neu(1).jpg",
    description: "Natürliche Einschlafhilfe mit pflanzlichen Wirkstoffen für erholsamen Schlaf.",
  },
  {
    name: "LebensGold®",
    image: "https://www.drhittich.com/out/pictures/generated/product/4/800_600_90/lebensgold-neu(2).jpg",
    description: "Premium-Vitalkomplex für Energie, Vitalität und Wohlbefinden.",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-neutral-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Neue Mittel</div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Neue Dr. Hittich-Mittel{" "}
            <span className="text-primary">mit der Intelligenz der Natur</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Alle Produkte aus 100 % Naturstoffen — direkt vom Entwickler und Hersteller, nicht im Massenhandel erhältlich.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="card group hover:border-primary/20 flex flex-col"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">{product.name}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed flex-1">{product.description}</p>
              <a
                href="https://www.drhittich.com"
                className="mt-4 flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Mehr erfahren <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.drhittich.com"
            className="btn-primary"
          >
            Alle Dr. Hittich-Mittel von A bis Z
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
