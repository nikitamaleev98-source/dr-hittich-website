import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-Client (mit Service-Role, RLS umgangen — nur in API-Routes verwenden)
export const supabaseAdmin = createClient(url, service);
