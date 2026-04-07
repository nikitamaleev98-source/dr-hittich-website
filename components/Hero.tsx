import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary/5">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-slide-up">
            <div className="badge mb-6">Über 30 Jahre Erfahrung</div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Dr. Hittich{" "}
              <span className="text-primary">Gesundheits-</span>
              Mittel
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-4">
              Gesund mit der Intelligenz der Natur
            </p>

            <p className="text-base text-neutral-500 leading-relaxed mb-8 max-w-lg">
              Seit über 30 Jahren entwickelt und produziert Dr. Reinhard Hittich natürliche
              Nahrungsergänzungsmittel aus den besten Quellen der Welt — direkt vom Hersteller, ohne Zwischenhandel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <MagneticButton
                href="https://www.drhittich.com/index.php?cl=register"
                className="btn-primary"
              >
                Jetzt entdecken
                <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton href="#about" className="btn-outline">
                Mehr erfahren
              </MagneticButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                "100 % Naturstoffe",
                "12-Monats-Garantie",
                "Gentechnik-frei",
                "Direkt vom Hersteller",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <ShieldCheck size={16} className="text-primary flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://www.drhittich.com/out/dd_apex_drhittich/img/top-30-jahre.jpg"
                alt="Dr. Hittich Produkte – 30 Jahre Qualität"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShieldCheck size={24} className="text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">12-Monats-Garantie</div>
                <div className="text-xs text-neutral-500">100 % zufrieden oder Geld zurück</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
