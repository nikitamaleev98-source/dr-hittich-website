"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { LogIn, UserPlus, LogOut, Package, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Order = {
  id: string;
  created_at: string;
  status: string;
  total_amount: number;
};

function KontoInhalt() {
  const searchParams = useSearchParams();
  const bestellungErfolg = searchParams.get("bestellung") === "erfolg";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
        loadOrders(user.id);
      }
    });
  }, []);

  const loadOrders = async (uid: string) => {
    const { data } = await supabase.from("orders").select("*").eq("user_id", uid).order("created_at", { ascending: false });
    setOrders(data ?? []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (mode === "login") {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else { setUser(data.user); loadOrders(data.user.id); }
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else if (data.user) { setUser(data.user); }
    }
    setLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setOrders([]);
  };

  const statusLabel: Record<string, string> = {
    pending: "Ausstehend",
    paid: "Bezahlt",
    shipped: "Versandt",
    cancelled: "Storniert",
  };

  if (user) {
    return (
      <div className="max-w-xl mx-auto">
        {bestellungErfolg && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <div className="font-semibold text-green-800">Bestellung erfolgreich!</div>
              <div className="text-sm text-green-600">Vielen Dank. Ihre Bestellung wird bearbeitet.</div>
            </div>
          </div>
        )}

        <div className="card mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-neutral-900">Mein Konto</div>
              <div className="text-sm text-neutral-500">{user.email}</div>
            </div>
            <button onClick={logout} className="flex items-center gap-2 text-sm text-neutral-500 hover:text-accent transition-colors">
              <LogOut size={16} /> Abmelden
            </button>
          </div>
        </div>

        <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
          <Package size={20} className="text-primary" /> Meine Bestellungen
        </h2>

        {orders.length === 0 ? (
          <div className="card text-center text-neutral-400 py-8">Noch keine Bestellungen.</div>
        ) : (
          <div className="flex flex-col gap-3">
            {orders.map((o) => (
              <div key={o.id} className="card flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    {new Date(o.created_at).toLocaleDateString("de-DE")}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">#{o.id.slice(0, 8).toUpperCase()}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-neutral-900">{o.total_amount?.toFixed(2)} €</div>
                  <div className={`text-xs mt-0.5 font-medium ${o.status === "paid" ? "text-green-600" : "text-neutral-400"}`}>
                    {statusLabel[o.status] ?? o.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${mode === "login" ? "bg-primary text-white" : "bg-neutral-100 text-neutral-600"}`}
          >
            <LogIn size={16} className="inline mr-1" /> Anmelden
          </button>
          <button
            onClick={() => setMode("register")}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${mode === "register" ? "bg-primary text-white" : "bg-neutral-100 text-neutral-600"}`}
          >
            <UserPlus size={16} className="inline mr-1" /> Registrieren
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-neutral-700 block mb-1">E-Mail</label>
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="ihre@email.de"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700 block mb-1">Passwort</label>
            <input
              type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-accent">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary justify-center py-3">
            {loading ? "Bitte warten…" : mode === "login" ? "Anmelden" : "Konto erstellen"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function KontoSeite() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <h1 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Mein Konto</h1>
          <Suspense>
            <KontoInhalt />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
