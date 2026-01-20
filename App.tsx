import React from 'react';
import { PROJECTS, EXPERIENCES } from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceItem } from './components/ExperienceItem';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* 1. Banner / Intro */}
          <Hero />

          {/* 2. Experience (Moved up) */}
          <section id="experience">
             <div className="mb-4 border-l-4 border-secondary pl-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-wide">Experience</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EXPERIENCES.map(exp => (
                    <ExperienceItem key={exp.id} data={exp} />
                ))}
             </div>
          </section>

          {/* 3. Featured Projects */}
          <section id="featured">
             <div className="mb-4 border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-wide">Featured Works</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
             </div>
          </section>

          {/* 4. Smaller Projects */}
          <section id="experiments">
             <div className="mb-4 border-l-4 border-slate-600 pl-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-wide">More Projects</h2>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {otherProjects.map(project => (
                  <ProjectCard key={project.id} project={project} compact={true} />
                ))}
             </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;