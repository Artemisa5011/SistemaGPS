// src/services/supabase.js
import { createClient } from '@supabase/supabase-js'

// ESTAS LLAVES VIENEN DE TU ARCHIVO .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Creamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)