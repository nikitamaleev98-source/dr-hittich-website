import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

// GET /api/cart?user_id=xxx — Warenkorb laden
export async function GET(req: NextRequest) {
  const user_id = req.nextUrl.searchParams.get("user_id");
  if (!user_id) return NextResponse.json({ items: [] });

  const { data, error } = await supabaseAdmin
    .from("cart_items")
    .select("*, products(*)")
    .eq("user_id", user_id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ items: data });
}

// POST /api/cart — Produkt hinzufügen / Menge erhöhen
export async function POST(req: NextRequest) {
  const { user_id, product_id, quantity = 1 } = await req.json();
  if (!user_id || !product_id) {
    return NextResponse.json({ error: "user_id und product_id erforderlich" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("cart_items")
    .upsert({ user_id, product_id, quantity }, { onConflict: "user_id,product_id" })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ item: data });
}

// DELETE /api/cart — Produkt entfernen
export async function DELETE(req: NextRequest) {
  const { user_id, product_id } = await req.json();
  if (!user_id || !product_id) {
    return NextResponse.json({ error: "user_id und product_id erforderlich" }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from("cart_items")
    .delete()
    .eq("user_id", user_id)
    .eq("product_id", product_id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
