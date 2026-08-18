import {useEfect, useState, createContext, useContext} from 'react';
import { supabase } from '../services/supabase';

// Creamos un contexto para compartir el estado de autenticación
const AuthContext = createContext();

// Este es el proveedor que envuelve toda la aplicación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si ya hay una sesión activa
    supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {setUser(session.user);}
        setLoading(false);
    });

    // Escuchar cambios en la sesión
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
    })
    return () => subscription.unsubscribe()
    }, []);

    const signIn = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({ 
            email,
            password }) 
        if (error) throw error;
        return data;
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}

// Este es el hook que usamos en los componentes
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
};