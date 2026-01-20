import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  data: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-primary/30 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <div>
            <h3 className="font-bold text-slate-200 text-sm">{data.role}</h3>
            <p className="text-xs text-primary font-semibold">{data.company}</p>
        </div>
        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
            {data.period}
        </span>
      </div>
      
      <p className="text-xs text-slate-400 leading-relaxed mb-3">
        {data.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {data.skills.map((skill, idx) => (
           <span key={idx} className="text-[10px] text-slate-500">
             • {skill}
           </span>
        ))}
      </div>
    </div>
  );
};