import {createClient} from "@supabase/supabse-js"
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKay = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKay)

