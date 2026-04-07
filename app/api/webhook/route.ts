import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Webhook-Konfiguration fehlt" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Webhook-Signatur ungültig" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    await supabaseAdmin
      .from("orders")
      .update({
        status: "paid",
        shipping_name: session.shipping_details?.name ?? null,
        shipping_address: session.shipping_details?.address ?? null,
      })
      .eq("stripe_session_id", session.id);

    // Warenkorb leeren
    const user_id = session.metadata?.user_id;
    if (user_id) {
      await supabaseAdmin.from("cart_items").delete().eq("user_id", user_id);
    }
  }

  return NextResponse.json({ received: true });
}
