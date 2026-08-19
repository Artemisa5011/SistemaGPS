// src/services/supabase.js
import { createClient } from '@supabase/supabase-js'

// ESTAS LLAVES VIENEN DE TU ARCHIVO .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const isValidSupabaseUrl = (() => {
	try {
		const url = new URL(supabaseUrl || '')
		return url.protocol === 'http:' || url.protocol === 'https:'
	} catch {
		return false
	}
})()

// Creamos la conexión solo cuando las variables están configuradas.
export const supabase = isValidSupabaseUrl && supabaseKey
	? createClient(supabaseUrl, supabaseKey)
	: null