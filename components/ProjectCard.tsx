import React from 'react';
import { Project } from '../types';
import { Icon } from './Icon';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
  return (
    <div className="flex flex-col bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full group">
      
      {/* Image */}
      <div className={`relative w-full ${compact ? 'h-32' : 'h-48'} overflow-hidden`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-black/60 backdrop-blur text-[10px] font-bold text-white uppercase rounded shadow-sm border border-white/10">
                {project.category}
            </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
            <h3 className="font-bold text-slate-100 text-lg leading-tight group-hover:text-primary transition-colors">
            {project.title}
            </h3>
        </div>
        
        <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
          {project.fullDescription || project.description}
        </p>

        {/* Action Buttons */}
        {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-5">
                {project.links.map((link, idx) => (
                    <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0
                            ${link.type === 'play' 
                                ? 'bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20' 
                                : link.type === 'video'
                                ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/20'
                                : 'bg-slate-700 text-slate-200 hover:bg-slate-600 hover:text-white'}
                        `}
                    >
                        <Icon name={link.type} size={16} />
                        {link.label}
                    </a>
                ))}
            </div>
        )}

        {/* Tags */}
        <div className="mt-auto pt-3 border-t border-slate-700/50 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-[10px] font-semibold text-slate-400 bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};