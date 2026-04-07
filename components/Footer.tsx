import Image from "next/image";
import { Phone, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <Image
              src="https://www.drhittich.com/out/dd_apex_drhittich/img/logo.png"
              alt="Dr. Hittich"
              width={140}
              height={42}
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Über 30 Jahre Erfahrung in der Entwicklung natürlicher Gesundheits-Mittel mit der Intelligenz der Natur.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Shield size={14} className="text-primary-light" />
              12-Monats-Garantie auf alle Mittel
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Schnellzugriff</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Alle Produkte A–Z", href: "https://www.drhittich.com" },
                { label: "Neu bei Dr. Hittich", href: "https://www.drhittich.com/index.php?cl=register" },
                { label: "Anmelden", href: "https://www.drhittich.com" },
                { label: "Garantie & Rückgabe", href: "#guarantee" },
                { label: "Kontakt", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:080031032300"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-primary-light flex-shrink-0" />
                <span>0800 3 103 230 (gebührenfrei)</span>
              </a>
              <a
                href="tel:004921199330210"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-white/30 flex-shrink-0" />
                <span>0049 – 211 99 33 021</span>
              </a>
              <div className="mt-2 text-xs text-white/40 leading-relaxed">
                Mo – Sa: 8–20 Uhr<br />
                Sonn- & Feiertage: 9–18 Uhr
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Dr. Hittich Gesundheits-Mittel. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {["Impressum", "Datenschutz", "AGB"].map((item) => (
              <a
                key={item}
                href="https://www.drhittich.com"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
