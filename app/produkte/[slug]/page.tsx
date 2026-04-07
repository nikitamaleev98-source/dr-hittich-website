"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ShieldCheck, ArrowLeft, CheckCircle } from "lucide-react";
import { supabase, type Product } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProduktDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single()
      .then(({ data }) => {
        setProduct(data);
        setLoading(false);
      });
  }, [slug]);

  const addToCart = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      window.location.href = "/konto";
      return;
    }
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.id, product_id: product?.id, quantity: 1 }),
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-neutral-500">Produkt nicht gefunden.</p>
          <Link href="/produkte" className="btn-primary">Zurück zur Übersicht</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <Link href="/produkte" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} /> Zurück zur Übersicht
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bild */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-neutral-100 shadow-lg">
              {product.main_image ? (
                <Image src={product.main_image} alt={product.name} fill className="object-cover" priority />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl">🌿</div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="badge mb-3">{product.category}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{product.name}</h1>

              {product.price && (
                <div className="text-3xl font-bold text-primary mb-6">
                  {product.price.toFixed(2)} €
                </div>
              )}

              <p className="text-neutral-600 leading-relaxed mb-8">{product.description || product.short_description}</p>

              {product.ingredients && (
                <div className="mb-8 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                  <div className="text-sm font-semibold text-neutral-700 mb-2">Inhaltsstoffe</div>
                  <p className="text-sm text-neutral-500 leading-relaxed">{product.ingredients}</p>
                </div>
              )}

              {/* Trust */}
              <div className="flex flex-col gap-2 mb-8">
                {["100 % Naturstoffe", "12-Monats-Garantie", "Direkt vom Hersteller"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-neutral-600">
                    <ShieldCheck size={16} className="text-primary" /> {t}
                  </div>
                ))}
              </div>

              <button
                onClick={addToCart}
                className={`btn-primary w-full justify-center text-base py-4 ${added ? "bg-green-600 hover:bg-green-700" : ""}`}
              >
                {added ? (
                  <><CheckCircle size={20} /> In den Warenkorb hinzugefügt</>
                ) : (
                  <><ShoppingCart size={20} /> In den Warenkorb</>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
