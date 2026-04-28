import React from 'react';
import { LogIn, ShieldAlert, Users, Info, ChevronRight } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { motion } from 'motion/react';

export const Login: React.FC = () => {
  const { signIn, devLogin } = useAppStore();

  return (
    <div className="min-h-screen bg-[#F3F6FA] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 space-y-8 border border-gray-100"
      >
        <div className="text-center space-y-2">
          <div className="bg-[#1F3864] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
            <LogIn size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#1F3864] tracking-tight">Smurfit Westrock</h1>
          <p className="text-slate-500 font-medium text-sm">Protocolos de Instrumentación & Control</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 space-y-4">
          <h3 className="text-[#1F3864] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
            <Info size={14} /> Acceso de Prueba (Demo)
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={() => devLogin('ADMIN')}
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all text-left w-full group"
            >
              <div className="bg-red-50 p-2 rounded-lg group-hover:bg-red-100 transition-colors">
                <ShieldAlert size={20} className="text-red-500" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-700 leading-tight">Acceso Administrador</p>
                <p className="text-[10px] text-slate-500">Gestión total y configuración</p>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
            </button>

            <button 
              onClick={() => devLogin('TECNICO')}
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all text-left w-full group"
            >
              <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Users size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-700 leading-tight">Acceso Técnico</p>
                <p className="text-[10px] text-slate-500">Fotos y protocolos de campo</p>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
            </button>

            <button 
              onClick={() => devLogin('INVITADO')}
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all text-left w-full group"
            >
              <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-slate-100 transition-colors">
                <Users size={20} className="text-slate-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-700 leading-tight">Acceso Invitado</p>
                <p className="text-[10px] text-slate-500">Solo visualización y reportes</p>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">O usar real</span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          
          <button
            onClick={signIn}
            className="w-full bg-white border border-slate-200 text-slate-600 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center gap-3 group"
          >
            <div className="bg-white p-1 rounded-full border border-slate-100">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            </div>
            Entrar con Google
          </button>
        </div>

        <p className="text-center text-[10px] text-slate-400 font-medium">
          Sistema de Gestión de Activos Industriales v2.0
        </p>
      </motion.div>
    </div>
  );
};
