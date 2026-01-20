import React from 'react';
import { HERO_TITLE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-10 text-center mb-8 shadow-xl relative overflow-hidden group">
      {/* Subtle hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Hi, I'm <span className="text-primary">{HERO_TITLE}</span>
        </h1>
      </div>
    </div>
  );
};