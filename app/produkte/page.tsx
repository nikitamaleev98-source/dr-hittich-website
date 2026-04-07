import { supabase, type Product } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CATEGORIES = [
  "Herz & Kreislauf",
  "Gelenke, Muskeln & Knochen",
  "Energie & Wohlbefinden",
  "Kopf & Geist",
  "Abnehmen",
  "Magen & Darmgesundheit",
  "Multitalente",
  "Abwehrkraft",
  "Frauengesundheit",
  "Männergesundheit",
];

export default async function ProdukteSeite({
  searchParams,
}: {
  searchParams: Promise<{ kategorie?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.kategorie ?? "";

  let query = supabase.from("products").select("*").order("name");
  if (activeCategory) query = query.eq("category", activeCategory);

  const { data: products } = await query;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
              Alle Dr. Hittich-Mittel
            </h1>
            <p className="text-neutral-500">
              {products?.length ?? 0} Produkte aus 100 % Naturstoffen
            </p>
          </div>

          {/* Kategorie-Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/produkte"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeCategory
                  ? "bg-primary text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              Alle
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/produkte?kategorie=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Produkt-Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map((product: Product) => (
              <Link
                key={product.id}
                href={`/produkte/${product.slug}`}
                className="card group hover:border-primary/20 flex flex-col"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-neutral-100">
                  {product.main_image ? (
                    <Image
                      src={product.main_image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-300 text-4xl">
                      🌿
                    </div>
                  )}
                </div>
                <div className="text-xs text-primary font-medium mb-1">{product.category}</div>
                <h3 className="font-bold text-neutral-900 mb-1 leading-snug">{product.name}</h3>
                <p className="text-sm text-neutral-500 flex-1 line-clamp-2">
                  {product.short_description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-neutral-900">
                    {product.price ? `${product.price.toFixed(2)} €` : "Preis auf Anfrage"}
                  </span>
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
