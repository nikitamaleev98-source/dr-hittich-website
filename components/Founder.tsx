import Image from "next/image";
import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Quote */}
          <div className="text-white">
            <Quote size={48} className="text-white/30 mb-6" />
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-white/95">
              Vertrauen Sie der Kraft der Natur. Alle meine Produkte sind aus{" "}
              <strong className="font-bold">100 % Naturstoffen</strong>. Das garantiere ich Ihnen!
            </blockquote>
            <div>
              <div className="font-bold text-white text-lg">Dr. Reinhard Hittich</div>
              <div className="text-white/70 text-sm mt-1">
                Biochemiker, Gründer und Leiter Dr. Hittich Gesundheits-Mittel
              </div>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "30+", label: "Jahre Erfahrung" },
                { value: "100%", label: "Naturstoffe" },
                { value: "12 Mon.", label: "Garantie" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
                  <div className="text-xs text-white/70 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl max-w-sm mx-auto">
              <Image
                src="https://www.drhittich.com/out/dd_apex_drhittich/img/intelligenz-der-natur-side.jpg"
                alt="Dr. Reinhard Hittich – Biochemiker und Gründer"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
