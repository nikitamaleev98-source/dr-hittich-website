"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight, Loader2 } from "lucide-react";
import { supabase, type CartItem } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Warenkorb() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkingOut, setCheckingOut] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { setLoading(false); return; }
      setUserId(user.id);
      fetch(`/api/cart?user_id=${user.id}`)
        .then((r) => r.json())
        .then(({ items }) => { setItems(items ?? []); setLoading(false); });
    });
  }, []);

  const remove = async (product_id: string) => {
    await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, product_id }),
    });
    setItems((prev) => prev.filter((i) => i.product_id !== product_id));
  };

  const checkout = async () => {
    setCheckingOut(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, cart_items: items }),
    });
    const { url } = await res.json();
    if (url) window.location.href = url;
    else setCheckingOut(false);
  };

  const total = items.reduce((sum, i) => sum + (i.products.price ?? 0) * i.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container max-w-3xl">
          <h1 className="text-3xl font-bold text-neutral-900 mb-8">Warenkorb</h1>

          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 size={32} className="text-primary animate-spin" />
            </div>
          ) : !userId ? (
            <div className="text-center py-16">
              <ShoppingBag size={48} className="text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-500 mb-6">Bitte melden Sie sich an, um Ihren Warenkorb zu sehen.</p>
              <Link href="/konto" className="btn-primary">Jetzt anmelden</Link>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={48} className="text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-500 mb-6">Ihr Warenkorb ist leer.</p>
              <Link href="/produkte" className="btn-primary">Produkte entdecken</Link>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="card flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                      {item.products.main_image && (
                        <Image src={item.products.main_image} alt={item.products.name} fill className="object-cover" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-neutral-900 truncate">{item.products.name}</div>
                      <div className="text-sm text-neutral-500">{item.products.category}</div>
                      <div className="text-sm font-medium text-primary mt-1">
                        {item.quantity} × {item.products.price?.toFixed(2)} €
                      </div>
                    </div>
                    <button onClick={() => remove(item.product_id)} className="p-2 text-neutral-400 hover:text-accent transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-100 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-neutral-900">Gesamt</span>
                  <span className="text-2xl font-bold text-primary">{total.toFixed(2)} €</span>
                </div>
                <button onClick={checkout} disabled={checkingOut} className="btn-primary w-full justify-center text-base py-4">
                  {checkingOut ? <Loader2 size={20} className="animate-spin" /> : <><ArrowRight size={20} /> Zur Kasse</>}
                </button>
                <p className="text-xs text-neutral-400 text-center mt-3">Sichere Zahlung via Stripe · SSL-verschlüsselt</p>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
