import Image from "next/image";
import { Phone, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-neutral-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl">
            <Image
              src="https://www.drhittich.com/out/dd_apex_drhittich/img/gratis_beratung.jpg"
              alt="Persönliche Beratung bei Dr. Hittich"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">Gratis Beratung</div>
                <div className="text-white/80 text-sm">Persönlich und kompetent</div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div className="badge mb-4">Kontakt</div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Haben Sie Fragen?{" "}
              <span className="text-primary">Wir sind für Sie da.</span>
            </h2>
            <p className="text-neutral-500 mb-8">
              Unser Team steht Ihnen 7 Tage in der Woche persönlich zur Verfügung — gebührenfrei aus Deutschland und Österreich.
            </p>

            <div className="flex flex-col gap-4">
              {/* Phone DE/AT */}
              <a
                href="tel:080031032300"
                className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-neutral-100 hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900 text-lg">0800 3 103 230</div>
                  <div className="text-sm text-neutral-500">Deutschland & Österreich — gebührenfrei</div>
                </div>
              </a>

              {/* Phone international */}
              <a
                href="tel:004921199330210"
                className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-neutral-100 hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-neutral-500" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">0049 - 211 99 33 021</div>
                  <div className="text-sm text-neutral-500">Aus anderen Ländern (kostenpflichtig)</div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">7 Tage für Sie persönlich da</div>
                  <div className="text-sm text-neutral-600">Mo – Sa: 8 bis 20 Uhr</div>
                  <div className="text-sm text-neutral-600">Sonn- & Feiertage: 9 bis 18 Uhr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
