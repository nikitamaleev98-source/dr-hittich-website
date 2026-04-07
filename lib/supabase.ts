import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Browser-Client (mit Anon-Key, RLS aktiv)
export const supabase = createClient(url, anon);

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number | null;
  main_image: string | null;
  images: string[];
  description: string;
  short_description: string;
  ingredients: string;
  url: string;
  in_stock: boolean;
};

export type CartItem = {
  id: string;
  product_id: string;
  quantity: number;
  products: Product;
};
