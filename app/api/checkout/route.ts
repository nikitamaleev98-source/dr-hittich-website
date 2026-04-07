import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { user_id, cart_items } = await req.json();

  if (!cart_items || cart_items.length === 0) {
    return NextResponse.json({ error: "Warenkorb ist leer" }, { status: 400 });
  }

  // Stripe Line Items aus Warenkorb
  const line_items = cart_items.map((item: { products: { name: string; main_image: string | null; price: number }; quantity: number }) => ({
    price_data: {
      currency: "eur",
      product_data: {
        name: item.products.name,
        images: item.products.main_image ? [item.products.main_image] : [],
      },
      unit_amount: Math.round((item.products.price ?? 0) * 100), // Cent
    },
    quantity: item.quantity,
  }));

  const origin = req.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: `${origin}/konto?bestellung=erfolg`,
    cancel_url: `${origin}/warenkorb`,
    metadata: { user_id: user_id ?? "" },
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["DE", "AT", "CH"],
    },
  });

  // Bestellung vormerken
  if (user_id) {
    const total = cart_items.reduce(
      (sum: number, item: { products: { price: number }; quantity: number }) =>
        sum + (item.products.price ?? 0) * item.quantity,
      0
    );
    await supabaseAdmin.from("orders").insert({
      user_id,
      stripe_session_id: session.id,
      status: "pending",
      total_amount: total,
    });
  }

  return NextResponse.json({ url: session.url });
}
